import React, {useEffect, useState, Fragment} from "react";
import {Dimmer, Header, Icon, Loader, Segment, SegmentGroup} from "semantic-ui-react";
import {getLinkCollection} from "../store/actions/api";
import {connect} from "react-redux";

const LinkCollection = ({getLinkCollection, collection}) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getLinkCollection().then(() => {
      setLoaded(true);
    });
  });

  if(!isLoaded) {
    return (
      <Segment textAlign="center">
        <Dimmer active inverted>
          <Loader size="small"/>
        </Dimmer>
      </Segment>
    );
  }

  const {heading, links, subheading} = collection;
  return (
      <Fragment>
        <Segment basic/>
        <Segment textAlign="center">
          <Header as="h1">{heading}</Header>
          <Header as="h3">{subheading}</Header>
          <SegmentGroup raised>
            {links.map(l => <Segment color={l.color} inverted={l.inverted}>
              {l.shouldOpenInNewTab && <a href={l.redirectUrl} target="_blank" rel="noopener noreferrer">{l.text}</a>}
              {!l.shouldOpenInNewTab && <a href={l.redirectUrl}>{l.text}</a>}&nbsp;
              {l.icon && <Icon name={l.icon}/>}
            </Segment>)}
          </SegmentGroup>
        </Segment>
      </Fragment>
  );
}

const actionCreators = {
  getLinkCollection
};

const mapStateToProps = state => ({
  collection: state.links.activeCollection
})

export default connect(mapStateToProps, actionCreators)(LinkCollection);
