import {
  Button,
  Card,
  CardDescription,
  CardGroup,
  CardHeader,
  CardMeta,
  Container,
  Divider,
  Segment
} from "semantic-ui-react";

function API() {
  return (
    <Segment textAlign='center'>
      <h1>SeeTh.is API</h1>
      <p>Feel free to create links using our API instead.</p>
      <Container>
        <Button><a href='https://www.getpostman.com/collections/ec45457ccb5280a2d01d'>Get Postman collection</a></Button>
        <p>All methods are defined and ready to use!</p>
        <CardGroup>
          <Card>
            <CardHeader>Create new short link</CardHeader>
            <CardMeta>POST https://api.seeth.is/links</CardMeta>
            <CardDescription>
              <Segment basic compact textAlign='center'>
                Expects a JSON body with two fields: link and redirectUrl. Link field can be left blank or omitted for an auto-generated path.
              </Segment>
              <Divider/>
              <Segment basic textAlign='left'>
                <b>POST</b> <i>https://api.seeth.is/links</i><br/><br/>
                Choose your link:
                <pre>{'{'}<br/>&nbsp;&nbsp;"link": "example",<br/>&nbsp;&nbsp;"redirectUrl": "test.com"<br/>{'}'}</pre>
                Generate link:
                <pre>{'{'}<br/>&nbsp;&nbsp;"redirectUrl": "test.com"<br/>{'}'}</pre>
              </Segment>
            </CardDescription>
          </Card>
          <Card>
            <CardHeader>Get short link stats</CardHeader>
            <CardMeta>GET https://api.seeth.is/links/stats</CardMeta>
            <CardDescription>
              <Segment basic compact textAlign='center'>
                Simple GET request. No message body or parameters, try it out in your browser. Returns most clicked active link and most recently created short link.
              </Segment>
              <Divider/>
              <Segment basic textAlign='left'>
                <b>GET</b> <i>https://api.seeth.is/links/stats</i>
              </Segment>
            </CardDescription>
          </Card>
        </CardGroup>
      </Container>
    </Segment>
  );
}

export default API;
