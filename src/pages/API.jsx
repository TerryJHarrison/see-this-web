import {Button, Card, CardDescription, CardGroup, CardHeader, CardMeta, Container, Segment} from "semantic-ui-react";

function API() {
  return (
    <Segment textAlign='center'>
      <h1>SeeTh.is API</h1>
      <p>Feel free to create links using our API instead.</p>
      <CardGroup>
        <Card>
          <Button><a href='https://www.getpostman.com/collections/ec45457ccb5280a2d01d'>Get Postman collection</a></Button>
          <p>All methods are defined and ready to use!</p>
        </Card>
        <Card>
          <CardHeader>Create new short link</CardHeader>
          <CardMeta>POST https://api.seeth.is/links</CardMeta>
          <CardDescription>
            <Segment basic compact textAlign='center'>
              Expects a JSON body with two fields: link and url. Link can be left blank for an auto-generated short-link.
            </Segment>
            <Segment inverted textAlign='left'>
              <blockquote><pre>{'{'}<br/>&nbsp;&nbsp;"link": "example",<br/>&nbsp;&nbsp;"url": "test.com"<br/>{'}'}</pre></blockquote>
            </Segment>
          </CardDescription>
        </Card>
      </CardGroup>
    </Segment>
  );
}

export default API;
