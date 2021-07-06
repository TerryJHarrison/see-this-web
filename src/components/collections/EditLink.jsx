import {Button, Form, Grid, GridColumn, GridRow, Icon, Label, Modal, Popup, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {removeLinkFromActiveCollection} from "../../store/actions/api";
import React, {useState} from "react";
import {setLinkText, setLinkRedirectUrl, setLinkShouldOpenInNewTab} from "../../store/actions/links";
import {useFormModal} from "../../hooks/useFormModal";

const EditLink = ({link, removeLinkFromActiveCollection, setLinkText, setLinkRedirectUrl, setLinkShouldOpenInNewTab}) => {
  const {
    index,
    text: currentHeading,
    redirectUrl: currentRedirectUrl,
    shouldOpenInNewTab: currentShouldOpenInNewTab
  } = link;
  const [text, setText] = useState(currentHeading);
  const [redirectUrl, setRedirectUrl] = useState(currentRedirectUrl);
  const [shouldOpenInNewTab, setShouldOpenInNewTab] = useState(currentShouldOpenInNewTab);
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

  const toggleShouldOpenInNewTab = () => {
    setShouldOpenInNewTab(!shouldOpenInNewTab);
    setLinkShouldOpenInNewTab(index, !shouldOpenInNewTab);
  }

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={4}>
              <GridColumn>
                <Label attached="top left" ribbon size="small">Link Text</Label>
                <Form.Input placeholder='SeeTh.is - Link Collections and Shortening' name='text' size="small" value={text} onChange={handleTextChange}/>
              </GridColumn>
              <GridColumn width={1} textAlign="bottom" verticalAlign="middle">
                {!shouldOpenInNewTab && <Popup content='Will redirect - click to change' trigger={<Icon name="chevron circle right" color="blue" size="big" onClick={toggleShouldOpenInNewTab} link/>}/>}
                {shouldOpenInNewTab && <Popup content='Will open in new tab - click to change' trigger={<Icon name="external" color="blue" size="big" onClick={toggleShouldOpenInNewTab} link/>}/>}
              </GridColumn>
              <GridColumn>
                <Label attached="top left" ribbon size="small">URL</Label>
                <Form.Input placeholder='https://seeth.is' name='redirectUrl' size="small" value={redirectUrl} onChange={handleRedirectUrlChange}/>
              </GridColumn>
              <GridColumn width={1} textAlign="bottom" verticalAlign="middle">
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
  setLinkRedirectUrl,
  setLinkShouldOpenInNewTab
}

export default connect(null, actionCreators)(EditLink);
