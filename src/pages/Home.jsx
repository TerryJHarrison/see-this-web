import {Button, Container, Form, Segment} from "semantic-ui-react";
import {useState} from "react";
import {connect} from "react-redux";
import {createShortLink} from "../store/actions/api";

export const Home = ({createShortLink}) => {
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
        <h1>SeeThi.is</h1>
        <p>Short links generator - helping to make the web an easier place to read and navigate!</p>
      </Container>
      <Container>
        <h2>How to Use</h2>
        <p>Enter in your desired short link path (or leave blank for an auto-generated one) and the URL you wish to link to. Submit and your link will be active within seconds! All generated links follow the form of <a href='https://seeth.is/l/easy-to-read'>seeth.is/l/easy-to-read</a>. Links will stay active for 7 days.</p>
        <h2>Create a link</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Link Path ("example" would create <a href="https://seeth.is/l/example">seeth.is/l/example</a>)</label>
            <Form.Input
              placeholder='example'
              name='link'
              value={link}
              onChange={handleLinkChange}/>
            <p>Leave blank for an easy to remember auto-generated path!</p>
          </Form.Field>
          <Form.Field>
            <label>Redirect URL</label>
            <Form.Input
              placeholder='https://seeth.is'
              name='url'
              value={url}
              onChange={handleUrlChange}/>
          </Form.Field>
          <Button type='submit'>Create</Button>
        </Form>
      </Container>
    </Segment>
  );
}

const actionCreators = {
  createShortLink
};

export default connect(null, actionCreators)(Home);
