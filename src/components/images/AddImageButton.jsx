import React from "react";
import {Button, Form, Modal} from "semantic-ui-react";
import {connect} from "react-redux";
import {useFormModal} from "../../hooks/useFormModal";
import {useFormState} from "../../hooks/useFormState";
import {addImageByUrl} from "../../store/actions/user";

const AddImageButton = ({addImageByUrl}) => {
  const [isOpen, open, close] = useFormModal();
  const [text, handleTextChange] = useFormState("");
  const [url, handleUrlChange] = useFormState("");

  const submit = () => {
    close();
    addImageByUrl(text, url);
  };

  return (
    <Modal onClose={close} onOpen={open} open={isOpen} trigger={<Button>Add Image</Button>}>
      <Modal.Header>Add image by URL</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Image Text</label>
            <Form.Input placeholder='' name='text' value={text} onChange={handleTextChange}/>
            <label>Image URL</label>
            <Form.Input placeholder='' name='url' value={url} onChange={handleUrlChange}/>
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={close}>Cancel</Button>
        <Button onClick={submit} color="green">Add Image</Button>
      </Modal.Actions>
    </Modal>
  )
};

const actionCreators = {
  addImageByUrl
}

export default connect(null, actionCreators)(AddImageButton);
