import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <Segment>
      <Grid columns={3}>
        <GridRow>
          <GridColumn/>
          <GridColumn/>
          <GridColumn align="right">
            © 2023 TJ Harrison
          </GridColumn>
        </GridRow>
      </Grid>
      </Segment>
    </footer>
  );
}

export default Footer;
