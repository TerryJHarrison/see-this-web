import {Grid, GridColumn, GridRow, Image, Segment} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({checked, authenticated, username}) => {
  return (
    <Segment raised>
      <Grid columns={3}>
        <GridRow>
          <GridColumn width={6} floated="left" verticalAlign="middle">
            <NavLink to="/"><Image src="/logo192.png" size="mini" alt="SeeTh.is Logo" avatar/> <span>SeeTh.is</span></NavLink>
          </GridColumn>
          <GridColumn width={4} floated="right" verticalAlign="middle">
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
