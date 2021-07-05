import {
  Button,
  Container,
  Dimmer, Divider, Form, Grid, GridColumn, GridRow,
  Header,
  Loader, Popup,
  Segment
} from "semantic-ui-react";
import {connect} from "react-redux";
import {getLinkCollection, updateShortLinkCollection, addEmptyLinkToActiveCollection} from "../../store/actions/api";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import EditLink from "./EditLink";
import LinkCollectionPreview from "../LinkCollectionPreview";
import EditHeading from "./EditHeading";
import EditSubheading from "./EditSubheading";

const EditCollection = ({collection, getLinkCollection, addEmptyLinkToActiveCollection, updateShortLinkCollection}) => {
  const [isLoaded, setLoaded] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    getLinkCollection(id).then(() => {
      setLoaded(true);
    });
  }, []);

  const handleSave = () => {
    updateShortLinkCollection(id, collection);
  };

  //TODO: save button should save activeCollection to database
  return (
    <Segment>
      <Header as="h2">Edit link collection</Header>
      {!isLoaded && <Dimmer><Loader/></Dimmer>}
      {isLoaded && <Segment basic>
        <EditHeading currentHeading={collection.heading}/>
        <EditSubheading currentSubheading={collection.subheading}/>
        <Header as='h3'>Links</Header>
        {collection.links.map(l =>
        <EditLink key={l.index} index={l.index} currentHeading={l.text} currentRedirectUrl={l.redirectUrl}/>
        )}
        <Grid>
          <GridRow columns={4}>
            <GridColumn><Button type='submit' color="green" onClick={handleSave}>Save</Button></GridColumn>
            <GridColumn width={1}/>
            <GridColumn/>
            <GridColumn width={1}>
              <Popup content='Add new link' trigger={<Button onClick={addEmptyLinkToActiveCollection} icon="plus"/>}/>
            </GridColumn>
          </GridRow>
        </Grid>
        <Segment basic/>
        <LinkCollectionPreview/>
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
};

export default connect(mapStateToProps, actionCreators)(EditCollection);
