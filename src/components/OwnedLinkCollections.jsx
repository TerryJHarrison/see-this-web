import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {
  Button,
  Container,
  Dimmer, Header,
  Loader,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow
} from "semantic-ui-react";
import {getOwnedLinkCollections} from "../store/actions/api";
import {addSuccessToast} from "../store/actions/toasts";
import OwnedLinkCollectionsActions from "./OwnedLinkCollectionsActions";

const OwnedLinkCollections = ({collections, getOwnedLinkCollections}) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getOwnedLinkCollections().then(() => {
      setLoaded(true);
    });
  });

  if(collections.length === 0){
    if(isLoaded) {
      return (
        <Container textAlign="center">
          <Header as="h3">Looks like you don't have any link collections</Header>
          <Button as="a" href="/">Create a Collection</Button>
        </Container>
      );
    } else {
      return (
        <Container textAlign="center">
          <Dimmer active inverted>
            <Loader size="small"/>
          </Dimmer>
        </Container>
      )
    }
  }

  return (
    <Container textAlign="center">
      <Header as="h2">Your Link Collections</Header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>URL Slug</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {collections.map(l =>
            <TableRow key={l.id}>
              <TableCell>{l.heading}</TableCell>
              <TableCell>seeth.is/{l.collectionType}/{l.id}</TableCell>
              <TableCell><OwnedLinkCollectionsActions collection={l.id}/></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
}

const actionCreators = {
  getOwnedLinkCollections,
  addSuccessToast
};

const mapStateToProps = state => ({
  collections: state.links.collections
})

export default connect(mapStateToProps, actionCreators)(OwnedLinkCollections);
