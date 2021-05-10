import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

function Header() {
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
                <GridColumn><NavLink to="/register">Register</NavLink></GridColumn>
              </GridRow>
            </Grid>
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default Header;
