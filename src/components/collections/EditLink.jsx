import {Button, Dropdown, Form, Grid, GridColumn, GridRow, Icon, Label, Modal, Popup, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {removeLinkFromActiveCollection} from "../../store/actions/api";
import React, {useState} from "react";
import {setLinkText, setLinkRedirectUrl, setLinkShouldOpenInNewTab, setLinkIcon} from "../../store/actions/links";
import {useFormModal} from "../../hooks/useFormModal";

const iconOptions = [
  {key: 'none', value: '', text: 'No Icon'},
  {key: 'blind', icon: 'blind', value: 'blind'},
  {key: 'braille', icon: 'braille', value: 'braille'},
]

const EditLink = ({link, removeLinkFromActiveCollection, setLinkText, setLinkRedirectUrl, setLinkShouldOpenInNewTab, setLinkIcon}) => {
  const {index} = link;
  const [text, setText] = useState(link.text);
  const [redirectUrl, setRedirectUrl] = useState(link.redirectUrl);
  const [shouldOpenInNewTab, setShouldOpenInNewTab] = useState(link.shouldOpenInNewTab);
  const [icon, setIcon] = useState(link.icon);
  const [isOpen, open, close] = useFormModal();

  const handleTextChange = (e, {value}) => {
    setText(value);
    setLinkText(index, value);
  };

  const handleRedirectUrlChange = (e, {value}) => {
    setRedirectUrl(value);
    setLinkRedirectUrl(index, value);
  };

  const handleIconChange = (e, {value}) => {
    setIcon(value);
    setLinkIcon(index, value);
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
            <GridRow columns={5}>
              <GridColumn>
                <Label attached="top left" ribbon size="small">Link Text</Label>
                <Form.Input placeholder='SeeTh.is - Link Collections and Shortening' name='text' size="small" value={text} onChange={handleTextChange}/>
              </GridColumn>
              <GridColumn width={1} verticalAlign="bottom">
                {!shouldOpenInNewTab && <Popup content='Will redirect - click to change' trigger={<Icon name="chevron circle right" color="blue" size="big" onClick={toggleShouldOpenInNewTab} link/>}/>}
                {shouldOpenInNewTab && <Popup content='Will open in new tab - click to change' trigger={<Icon name="external" color="blue" size="big" onClick={toggleShouldOpenInNewTab} link/>}/>}
              </GridColumn>
              <GridColumn>
                <Label attached="top left" ribbon size="small">URL</Label>
                <Form.Input placeholder='https://seeth.is' name='redirectUrl' size="small" value={redirectUrl} onChange={handleRedirectUrlChange}/>
              </GridColumn>
              <GridColumn width={2} verticalAlign="bottom">
                <Dropdown placeholder='Icon' fluid search selection options={iconOptions} icon={icon} onChange={handleIconChange}/>
              </GridColumn>
              <GridColumn width={1} verticalAlign="bottom">
                <Modal onOpen={open} onClose={close} open={isOpen}
                  trigger={<Popup content='Remove link' trigger={<Button color='red' icon='delete' onClick={open}/>}/>}>
                  <Modal.Header>Delete Link</Modal.Header>
                  <Modal.Content>
                    Are you sure you wish to delete this link from your collection?
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='black' onClick={close}>Cancel</Button>
                    <Button color='red' onClick={handleDeleteClick}>Delete</Button>
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
  setLinkShouldOpenInNewTab,
  setLinkIcon
}

export default connect(null, actionCreators)(EditLink);
