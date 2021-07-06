import React, {Fragment} from "react";
import {Header, Segment, SegmentGroup} from "semantic-ui-react";
import {connect} from "react-redux";

const LinkCollectionPreview = ({collection}) => {

  const {heading, links, subheading} = collection;
  return (
      <Fragment>
        <Header as='h2'>Preview</Header>
        <Segment basic/>
        <Segment textAlign="center">
          <Header as="h1">{heading}</Header>
          <Header as="h3">{subheading}</Header>
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
