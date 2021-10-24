import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {closeAccount, logout} from '../store/actions/auth';
import {getOwnedLinks, getUserData} from '../store/actions/api';
import {Redirect} from 'react-router-dom';
import {Button, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import OwnedLinks from "../components/OwnedLinks";
import MediaCollection from "../components/images/MediaCollection";

export const Profile = ({email, username, logout, ownedLinks, closeAccount, userImages, userImgurApiKey, getUserData}) => {
  const [logoutRedirect, setLogoutRedirect] = useState(false);
  const [closeRedirect, setCloseRedirect] = useState(false);

  useEffect(() => {
    getUserData();
  });

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
            <OwnedLinks/>
          </GridColumn></GridRow>
          <GridRow><GridColumn>
            <MediaCollection/>
          </GridColumn></GridRow>
          <GridRow columns={3}>
            <GridColumn><Button className="olive" onClick={logoutCall}>Logout</Button></GridColumn>
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
  ownedLinks: state.links.owned,
  userImages: state.user.images,
  userImgurApiKey: state.user.imgurApiKey
});

const actionCreators = {
  logout,
  closeAccount,
  getOwnedLinks,
  getUserData
};

export default connect(mapStateToProps, actionCreators)(Profile);
