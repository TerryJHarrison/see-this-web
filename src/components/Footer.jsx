import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <Segment>
      <Grid columns={3}>
        <GridRow>
          <GridColumn align="left">
            Keep us funded and free: <a href="https://etherscan.io/address">ETH</a> - <a href="https://adascan?.io/address">ADA</a>
          </GridColumn>
          <GridColumn/>
          <GridColumn align="right">
            Copyright 2021, TJ Harrison
          </GridColumn>
        </GridRow>
      </Grid>
      </Segment>
    </footer>
  );
}

export default Footer;
