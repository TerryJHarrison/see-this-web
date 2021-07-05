import {Button, Form, Header, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {createShortLinkCollection} from "../../store/actions/api";
import {useFormInput} from "../../hooks/useFormState";

export const CreatedLinkCollection = ({createShortLinkCollection}) => {
  const [name, handleNameChange] = useFormInput('');

  const submit = () => {createShortLinkCollection(name)};

  return (
    <Segment>
      <Header as="h2">Create a new link collection</Header>
      <Header as="h4">Only portfolio collections are supported currently, more coming soon!</Header>
      <Form onSubmit={submit}>
        <Form.Field>
          <label>Collection's URL Slug</label>
          <Form.Input placeholder='tjharrison' name='name' value={name} onChange={handleNameChange}/>
          <label>Choose wisely, this can't be changed later! Full URL will https://seeth.is/portfolio/{name.toLowerCase().split(" ").join("-")}</label>
        </Form.Field>
        <Button type='submit' color="green">Create</Button>
      </Form>
    </Segment>
  );
}

const actionCreators = {
  createShortLinkCollection
};

export default connect(null, actionCreators)(CreatedLinkCollection);
