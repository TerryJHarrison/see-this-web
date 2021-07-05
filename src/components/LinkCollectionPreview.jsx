import React, {Fragment} from "react";
import {Segment, SegmentGroup} from "semantic-ui-react";
import {connect} from "react-redux";

const LinkCollectionPreview = ({collection}) => {

  const {heading, links, subheading} = collection;
  return (
      <Fragment>
        <Segment basic/>
      <Segment textAlign="center">
        <h1>{heading}</h1>
        <h3>{subheading}</h3>
        <SegmentGroup raised>
          {links.map(l => <Segment key={l.index} color={l.color} inverted={l.inverted}>
            <a href={l.redirectUrl}>{l.text}</a>
          </Segment>)}
        </SegmentGroup>
      </Segment>
      </Fragment>
  );
}

const mapStateToProps = state => ({
  collection: state.links.activeCollection
})

export default connect(mapStateToProps)(LinkCollectionPreview);
