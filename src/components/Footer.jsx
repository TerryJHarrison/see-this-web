import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <Segment>
      <Grid columns={3}>
        <GridRow>
          <GridColumn align="left">
            Keep us funded and free: <a href="https://etherscan.io/address/0x0408d2522d4A121f12bbf6967e8abF31112396EB">ETH</a> - <a href="https://cardanoscan.io/address/addr1q8djvhlpj5hjts6wt6hgaszw8877xrv70x6vdeg0ajgwu2z70jvxu8scju5mwd325y6azde6afndlfnk30yu756mkrsq3kqmr5">ADA</a>
          </GridColumn>
          <GridColumn/>
          <GridColumn align="right">
            © 2021 TJ Harrison
          </GridColumn>
        </GridRow>
      </Grid>
      </Segment>
    </footer>
  );
}

export default Footer;
