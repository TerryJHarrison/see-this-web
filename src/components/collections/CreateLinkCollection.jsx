import {Button, Form, Header, Label, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {createShortLinkCollection} from "../../store/actions/api";
import {useFormState} from "../../hooks/useFormState";

export const CreatedLinkCollection = ({createShortLinkCollection}) => {
  const [name, handleNameChange] = useFormState('');

  const submit = () => {createShortLinkCollection(name)};

  return (
    <Segment>
      <Header as="h2">Create a new link collection</Header>
      <Header as="h4">Only portfolio collections are currently supported, more coming soon!</Header>
      <Form onSubmit={submit}>
        <Form.Field>
          <Label>Collection's URL Slug</Label> Choose wisely, this can't be changed later!
          <Form.Input placeholder='my-portfolio' name='name' value={name} onChange={handleNameChange}/>
        </Form.Field>
        <Button type='submit' color="green">Create</Button>
        <Label>{name === "" ? "Enter slug to see URL" : `https://seeth.is/portfolio/${name.toLowerCase().split(" ").join("-")}`}</Label>
      </Form>
    </Segment>
  );
};

const actionCreators = {
  createShortLinkCollection
};

export default connect(null, actionCreators)(CreatedLinkCollection);
