import React, {useState, lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {closeAccount, logout} from '../store/actions/auth';
import {getOwnedLinks} from '../store/actions/api';
import {Redirect} from 'react-router-dom';
import {Button, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";

const OwnedLinks = lazy(() => import('../components/OwnedLinks'));

export const Profile = ({email, username, logout, ownedLinks, closeAccount}) => {
  const [logoutRedirect, setLogoutRedirect] = useState(false);
  const [closeRedirect, setCloseRedirect] = useState(false);

  const logoutCall = () => {
    logout();
    setLogoutRedirect(true);
  };

  const closeAccountCall = () => {
    closeAccount();
    setCloseRedirect(true);
  };

  const downloadFile = async () => {
    const downloadData = Object.assign({}, {"links": ownedLinks});
    const blob = new Blob([JSON.stringify(downloadData)], {type:'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return logoutRedirect ?
    <Redirect to="/logout"/> :
    closeRedirect ? <Redirect to="/profile/close"/> : (
      <Segment>
        <h1 className="center">@{username}'s Profile</h1>
        <Grid>
          <GridRow><GridColumn>
            <span>Email - {email}</span>
          </GridColumn></GridRow>
          <GridRow><GridColumn>
            <Suspense fallback={null}><OwnedLinks/></Suspense>
          </GridColumn></GridRow>
          <GridRow columns={3}>
            <GridColumn><Button className="olive" onClick={logoutCall}>Logout</Button></GridColumn>
            <GridColumn/>
            <GridColumn>
              <Button className="black" onClick={downloadFile}>Download My Data</Button>
              <Button className="black" onClick={closeAccountCall}>Close Account</Button>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
    );
};

const mapStateToProps = state => ({
  email: state.session.user.email,
  username: state.session.user.username,
  ownedLinks: state.links.owned
});

const actionCreators = {
  logout,
  closeAccount,
  getOwnedLinks
};

export default connect(mapStateToProps, actionCreators)(Profile);
