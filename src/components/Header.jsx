import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({checked, authenticated, username}) => {
  return (
    <Segment raised>
      <Grid columns={3}>
        <GridRow>
          <GridColumn width={6} floated="left">
            <NavLink to="/">SeeTh.is</NavLink>
          </GridColumn>
          <GridColumn width={4} floated="right">
            <Grid divided columns={3}>
              <GridRow align="center">
                <GridColumn><NavLink to="/collections">Collections</NavLink></GridColumn>
                <GridColumn><NavLink to="/api">API</NavLink></GridColumn>
                <GridColumn>
                  { checked && authenticated ?
                    <NavLink to="/profile">@{username}</NavLink> :
                    <NavLink to="/login">Login</NavLink>
                  }
                </GridColumn>
              </GridRow>
            </Grid>
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

const mapStateToProps = state => ({
  authenticated: state.session.authenticated,
  checked: state.session.checked,
  username: state.session.user.username
});

export default connect(mapStateToProps)(Header);
