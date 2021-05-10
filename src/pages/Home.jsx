import {Button, Form, Segment} from "semantic-ui-react";
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
        <Button type='submit'>Submit</Button>
      </Form>
    </Segment>
  );
}

const actionCreators = {
  createShortLink
};

export default connect(null, actionCreators)(Home);
