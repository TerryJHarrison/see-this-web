import {Button, Card, CardDescription, CardGroup, CardHeader, CardMeta, Container, Segment} from "semantic-ui-react";

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
                Expects a JSON body with two fields: link and url. Link field can be left blank or omitted for an auto-generated path.
              </Segment>
              <Segment inverted textAlign='left'>
                <b>POST</b> <i>https://api.seeth.is/links</i><br/><br/>
                Choose your link:
                <blockquote><pre>{'{'}<br/>&nbsp;&nbsp;"link": "example",<br/>&nbsp;&nbsp;"url": "test.com"<br/>{'}'}</pre></blockquote>
                Generate link:
                <blockquote><pre>{'{'}<br/>&nbsp;&nbsp;"url": "test.com"<br/>{'}'}</pre></blockquote>
              </Segment>
            </CardDescription>
          </Card>
          <Card>
            <CardHeader>Get most used short link</CardHeader>
            <CardMeta>Coming soon...</CardMeta>
          </Card>
          <Card>
            <CardHeader>Get last created link</CardHeader>
            <CardMeta>Coming soon...</CardMeta>
          </Card>
        </CardGroup>
      </Container>
    </Segment>
  );
}

export default API;
