import {Button, Form, Grid, GridColumn, GridRow, Icon, Modal, Popup, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {removeLinkFromActiveCollection} from "../../store/actions/api";
import React, {useState} from "react";
import {setLinkText, setLinkRedirectUrl} from "../../store/actions/links";
import {useFormModal} from "../../hooks/useFormModal";

const EditLink = ({index, currentHeading, currentRedirectUrl, removeLinkFromActiveCollection, setLinkText, setLinkRedirectUrl}) => {
  const [text, setText] = useState(currentHeading);
  const [redirectUrl, setRedirectUrl] = useState(currentRedirectUrl);
  const [isOpen, open, close] = useFormModal();

  const handleTextChange = (e, {value}) => {
    setText(value);
    setLinkText(index, value);
  };

  const handleRedirectUrlChange = (e, {value}) => {
    setRedirectUrl(value);
    setLinkRedirectUrl(index, value);
  };

  const handleDeleteClick = () => {
    removeLinkFromActiveCollection(index);
  };

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={4}>
              <GridColumn>
                <Form.Input placeholder='SeeTh.is - Link Collections and Shortening' name='text' value={text} onChange={handleTextChange}/>
              </GridColumn>
              <GridColumn width={1} textAlign="center" verticalAlign="middle">
                <Icon name="arrow circle right"/>
              </GridColumn>
              <GridColumn>
                <Form.Input placeholder='https://seeth.is' name='redirectUrl' value={redirectUrl} onChange={handleRedirectUrlChange}/>
              </GridColumn>
              <GridColumn width={1}>
                <Modal
                  onOpen={open}
                  onClose={close}
                  open={isOpen}
                  trigger={<Popup content='Remove link' trigger={<Button color='red' icon='delete' onClick={open}/>}/>}>
                  <Modal.Header>Delete Your Account</Modal.Header>
                  <Modal.Content>
                    Are you sure you wish to delete this link from your collection?
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='black' onClick={close}>
                      Cancel
                    </Button>
                    <Button color='red' icon='delete' onClick={handleDeleteClick}>
                      Delete
                    </Button>
                  </Modal.Actions>
                </Modal>
              </GridColumn>
            </GridRow>
          </Grid>
        </Form.Field>
      </Form>
    </Segment>
  );
}

const actionCreators = {
  removeLinkFromActiveCollection,
  setLinkText,
  setLinkRedirectUrl
}

export default connect(null, actionCreators)(EditLink);
