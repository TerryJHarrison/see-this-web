import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {
  Button, Form,
  Icon, Modal
} from "semantic-ui-react";
import {deleteShortLink, updateShortLink} from "../store/actions/api";
import {addSuccessToast} from "../store/actions/toasts";

const OwnedLinksActions = ({link, deleteShortLink, updateShortLink, addSuccessToast}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [url, setUrl] = useState('');

  const handleUrlChange = (e, {value}) => {
    setUrl(value);
  }

  const deleteShortLinkClick = () => {
    deleteShortLink(link);
  };

  const updateShortLinkClick = () => {
    addSuccessToast('Link updating...', 'Your link is being updated now.');
    updateShortLink(link, url);
    setEditModalOpen(false)
  };

  const editButton = (
    <Button icon className="blue" circular>
      <Icon name='edit outline'/>
    </Button>
  );

  return (
    <Fragment>
      <Modal
        onOpen={() => setEditModalOpen(true)}
        onClose={() => setEditModalOpen(false)}
        open={isEditModalOpen}
        trigger={editButton}>
        <Modal.Header>Delete Your Account</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>New Redirect URL</label>
              <Form.Input
                placeholder='https://seeth.is'
                name='url'
                value={url}
                onChange={handleUrlChange}/>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setEditModalOpen(false)}>
            Cancel
          </Button>
          <Button positive onClick={updateShortLinkClick}>
            Update
          </Button>
        </Modal.Actions>
      </Modal>
      <Button icon className="red" circular onClick={deleteShortLinkClick}>
        <Icon name='trash alternate outline'/>
      </Button>
    </Fragment>
  )
}

const actionCreators = {
  deleteShortLink,
  updateShortLink,
  addSuccessToast
};

export default connect(null, actionCreators)(OwnedLinksActions);
