import {Button, Dropdown, Form, Grid, GridColumn, GridRow, Icon, Label, Modal, Popup, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {removeLinkFromActiveCollection} from "../../store/actions/api";
import React, {useState} from "react";
import {
  setLinkText,
  setLinkRedirectUrl,
  setLinkShouldOpenInNewTab,
  setLinkIcon,
  setLinkIconSize, setLinkIconLocation
} from "../../store/actions/links";
import {useFormModal} from "../../hooks/useFormModal";

const iconOptions = [
  {key: 'none', value: '', text: 'No Icon'},
  {key: 'blind', icon: 'blind', value: 'blind'},
  {key: 'braille', icon: 'braille', value: 'braille'},
]

const iconSizeOptions = [
  {key: 'small', value: 'small', text: 'Small'},
  {key: 'medium', value: 'large', text: 'Medium'},
  {key: 'large', value: 'big', text: 'Large'},
]

const iconLocationOptions = [
  {key: 'after', value: 'right', text: 'After link'},
  {key: 'before', value: 'left', text: 'Before link'},
]

const EditLink = ({link, removeLinkFromActiveCollection, setLinkText, setLinkRedirectUrl, setLinkShouldOpenInNewTab, setLinkIcon, setLinkIconSize, setLinkIconLocation}) => {
  const {index, clickCount} = link;
  const [text, setText] = useState(link.text);
  const [redirectUrl, setRedirectUrl] = useState(link.redirectUrl);
  const [shouldOpenInNewTab, setShouldOpenInNewTab] = useState(link.shouldOpenInNewTab);
  const [icon, setIcon] = useState(link.icon);
  const [iconSize, setIconSize] = useState(link.iconSize);
  const [iconLocation, setIconLocation] = useState(link.iconLocation);
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

  const handleIconSizeChange = (e, {value}) => {
    setIconSize(value);
    setLinkIconSize(index, value);
  };

  const handleIconLocationChange = (e, {value}) => {
    setIconLocation(value);
    setLinkIconLocation(index, value);
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
            <GridRow columns={6}>
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
                <Dropdown placeholder='Size' fluid search selection options={iconSizeOptions} value={iconSize} onChange={handleIconSizeChange}/>
                <Dropdown placeholder='After link' fluid search selection options={iconLocationOptions} value={iconLocation || "right"} onChange={handleIconLocationChange}/>
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
              <GridColumn width={2} verticalAlign="bottom">
                {clickCount && <Label>Clicks: {clickCount}</Label>}
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
  setLinkIcon,
  setLinkIconSize,
  setLinkIconLocation
}

export default connect(null, actionCreators)(EditLink);
