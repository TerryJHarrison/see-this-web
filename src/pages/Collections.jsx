import {Segment} from "semantic-ui-react";
import OwnedLinkCollections from "../components/OwnedLinkCollections";
import React from "react";
import CreateLinkCollection from "../components/collections/CreateLinkCollection";

function Collections() {
  return (
    <Segment>
      <CreateLinkCollection/>
      <OwnedLinkCollections/>
    </Segment>
  );
}

export default Collections;
