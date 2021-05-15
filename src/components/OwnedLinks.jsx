import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {
  Button,
  Container,
  Dimmer,
  Loader,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow
} from "semantic-ui-react";
import {getOwnedLinks} from "../store/actions/api";

const OwnedLinks = ({ownedLinks, getOwnedLinks}) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getOwnedLinks().then(() => {
      setLoaded(true);
    });
  });

  if(ownedLinks.length === 0){
    if(isLoaded) {
      return (
        <Container textAlign="center">
          <h3>Looks like you don't have any short links active</h3>
          <Button as="a" href="/">Create some now</Button>
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
      <h2>Your Links</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Link</TableHeaderCell>
            <TableHeaderCell>URL</TableHeaderCell>
            <TableHeaderCell>Expires</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ownedLinks.map(l =>
            <TableRow key={l.link}>
              <TableCell>seeth.is/l/{l.link}</TableCell>
              <TableCell>{l.url}</TableCell>
              <TableCell>{l.expiresAt ? `${new Date(l.expiresAt * 1000).toLocaleString()}` : 'Never!'}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
}

const actionCreators = {
  getOwnedLinks
};

const mapStateToProps = state => ({
  ownedLinks: state.links.owned
})

export default connect(mapStateToProps, actionCreators)(OwnedLinks);
