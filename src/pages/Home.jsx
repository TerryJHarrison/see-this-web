import {Button, Container, Divider, Form, Segment} from "semantic-ui-react";
import {useState, lazy, Suspense} from "react";
import {connect} from "react-redux";
import {createShortLink} from "../store/actions/api";
import {Link} from "react-router-dom";
import {usePageLoad} from "../hooks/usePageLoad";

const CreatedLinks = lazy(() => import('../components/CreatedLinks'));
export const Home = ({createShortLink}) => {
  usePageLoad();

  const [link, setLink] = useState('');
  const [url, setUrl] = useState('');

  const handleLinkChange = (e, {value}) => {
    setLink(value);
  }

  const handleUrlChange = (e, {value}) => {
    setUrl(value);
  }

  const handleSubmit = () => {
    createShortLink(link, url);
  }

  return (
    <Segment>
      <Container textAlign='center'>
        <h1>SeeTh.is</h1>
        <p>Short links generator - helping to make the web an easier place to read and navigate!</p>
      </Container>
      <Container>
        <h2>Create a link</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Redirect URL</label>
            <Form.Input
              placeholder='https://seeth.is'
              name='url'
              value={url}
              onChange={handleUrlChange}/>
          </Form.Field>
          <Form.Field>
            <label>Link Path ("example" would create <a href="https://seeth.is/l/example">seeth.is/l/example</a>)</label>
            <Form.Input
              placeholder='example'
              name='link'
              value={link}
              onChange={handleLinkChange}/>
            <p>Leave blank for an easy to remember auto-generated path! If the path you choose is already in use a new one will be created instead.</p>
          </Form.Field>
          <Button type='submit' color="green">Create</Button>
        </Form>
        <Suspense fallback={null}><CreatedLinks/></Suspense>
        <Divider horizontal>How To Use</Divider>
        <p>Enter in your desired short link path (or leave blank for an auto-generated one) and the URL you wish to link to. Submit and your link will be active within seconds! All generated links follow the form of <a href='https://seeth.is/l/easy-to-read'>seeth.is/l/easy-to-read</a>. Links will stay active for 14 days or <Link to="/login">register now</Link> and they will last forever.</p>
      </Container>
    </Segment>
  );
}

const actionCreators = {
  createShortLink
};

export default connect(null, actionCreators)(Home);
