import {
  Button,
  Dimmer, Dropdown, Grid, GridColumn, GridRow,
  Header, Icon, Label,
  Loader, Popup,
  Segment
} from "semantic-ui-react";
import {connect} from "react-redux";
import {
  getLinkCollection,
  updateShortLinkCollection,
  addEmptyLinkToActiveCollection,
  setCollectionHeaderLocation, setCollectionSubheaderLocation, setHeaderTextColor, setSubheaderTextColor
} from "../../store/actions/api";
import React, {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import EditLink from "./EditLink";
import EditHeading from "./EditHeading";
import EditSubheading from "./EditSubheading";
import 'sanity-mobile-preview/dist/index.css?raw'
import QRCode from 'qrcode.react';
import MobileCollectionPreview from "../MobileCollectionPreview";
import EditButtonColor from "./EditButtonColor";
import EditButtonTextColor from "./EditButtonTextColor";
import EditBackgroundColor from "./EditBackgroundColor";
import EditBlockColor from "./EditBlockColor";
import EditButtonTextHoverColor from "./EditButtonTextHoverColor";
import colorOptions from "./colorOptions.json"
import {useControlledFormInput} from "../../hooks/useControlledFormState";

const headerLocationOptions = [
  {key: 'left', value: 'left', text: 'Left'},
  {key: 'right', value: 'right', text: 'Right'},
  {key: 'center', value: 'center', text: 'Center'}
]

const EditCollection = ({collection,
                          getLinkCollection,
                          addEmptyLinkToActiveCollection,
                          updateShortLinkCollection,
                          setCollectionHeaderAlign,
                          setCollectionSubheaderAlign,
                          setHeaderTextColor,
                          setSubheaderTextColor
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const [headerAlign, setHeaderAlign] = useState(collection.headerAlign || "center");
  const [subheaderAlign, setSubheaderAlign] = useState(collection.subheaderAlign || "center");
  const [headerTextColor, handleHeaderTextColor] = useControlledFormInput(collection.headerTextColor, setHeaderTextColor);
  const [subheaderTextColor, handleSubheaderTextColor] = useControlledFormInput(collection.subheaderTextColor, setSubheaderTextColor);
  const {id} = useParams();

  useEffect(() => {
    getLinkCollection(id).then(() => {
      setLoaded(true);
    });
  }, []);

  const handleSave = () => {
    updateShortLinkCollection(id, collection);
  };

  const handleHeaderAlignChange = (e, {value}) => {
    setHeaderAlign(value);
    setCollectionHeaderAlign(value);
  };

  const handleSubheaderAlignChange = (e, {value}) => {
    setSubheaderAlign(value);
    setCollectionSubheaderAlign(value);
  };

  return (
    <Segment>
      <Header as="h2">Edit link collection</Header>
      {!isLoaded && <Dimmer><Loader/></Dimmer>}
      {isLoaded && <Segment basic>
        <EditHeading currentHeading={collection.heading}/>
        <Dropdown placeholder='Alignment' fluid search selection options={headerLocationOptions} value={headerAlign} onChange={handleHeaderAlignChange}/>
        <Dropdown
          text='Header Color' floating labeled button className='icon'
          defaultValue={headerTextColor}
          options={colorOptions['colors']}
          onChange={handleHeaderTextColor}/>
        <EditSubheading currentSubheading={collection.subheading}/>
        <Dropdown placeholder='Alignment' fluid search selection options={headerLocationOptions} value={subheaderAlign} onChange={handleSubheaderAlignChange}/>
        <Dropdown
          text='Header Color' floating labeled button className='icon'
          defaultValue={subheaderTextColor}
          options={colorOptions['colors']}
          onChange={handleSubheaderTextColor}/>
        <Header as='h3'>Links</Header>
        {collection.links.map(l =>
        <EditLink key={l.index} link={l}/>
        )}
        <Grid>
          <GridRow columns={6}>
            <GridColumn><Button type='submit' color="green" onClick={handleSave}>Save</Button></GridColumn>
            <GridColumn width={1}/>
            <GridColumn/>
            <GridColumn width={2}/>
            <GridColumn width={1}>
              <Popup content='Add new link' trigger={<Button onClick={addEmptyLinkToActiveCollection} icon="plus"/>}/>
            </GridColumn>
            <GridColumn width={2}/>
          </GridRow>
        </Grid>
        <Header as='h3'>Page</Header>
        <EditBackgroundColor/>
        <EditBlockColor/>
        <EditButtonColor/>
        <EditButtonTextColor/>
        <EditButtonTextHoverColor/>
        <Label>Edit link background hover color</Label>
        <Label>Edit blocks transparency</Label>
        <Label>Choose page style: Square, Round, FullWidth</Label>
        <Label>Choose Font</Label>
        <Segment basic/>
        <Header as='h2'>Collection QR Code</Header>
        <QRCode value={`https://seeth.is/profile/${collection.id}`} imageSettings={{src:"/logo192.png", width:25, height:25}}/>
        <Header as='h2'>Preview </Header>
        <NavLink to="/collections/preview"><Icon name="desktop"/>See on Desktop</NavLink>
        <MobileCollectionPreview/>
      </Segment>}
    </Segment>
  );
};

const mapStateToProps = state => ({
  collection: state.links.activeCollection
});

const actionCreators = {
  updateShortLinkCollection,
  getLinkCollection,
  addEmptyLinkToActiveCollection,
  setCollectionHeaderLocation,
  setCollectionSubheaderLocation,
  setHeaderTextColor,
  setSubheaderTextColor
};

export default connect(mapStateToProps, actionCreators)(EditCollection);
