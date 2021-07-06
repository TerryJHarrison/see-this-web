import React, {useEffect, useState, Fragment} from "react";
import {Button, Dimmer, Header, Icon, Loader, Segment, SegmentGroup} from "semantic-ui-react";
import {getLinkCollection, recordLinkClick} from "../store/actions/api";
import {connect} from "react-redux";

const LinkCollection = ({getLinkCollection, collection, recordLinkClick}) => {
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

  const {id, heading, links, subheading} = collection;
  return (
      <Fragment>
        <Segment basic/>
        <Segment textAlign="center">
          <Header as="h1">{heading}</Header>
          <Header as="h3">{subheading}</Header>
          <SegmentGroup raised>
            {links.map(l => {
              const handleSameTabLinkClick = async () => {
                await recordLinkClick(id, l.index);
                window.location = l.redirectUrl;
              };
              const handleNewTabLinkClick = async () => {
                await recordLinkClick(id, l.index);
                window.open(l.redirectUrl, "_blank", "noopener noreferrer");
              };
              return (
                <Segment key={l.index} color={l.color} inverted={l.inverted}>
                  {l.shouldOpenInNewTab && <Button onClick={handleNewTabLinkClick}>{l.text}</Button>}
                  {!l.shouldOpenInNewTab && <Button onClick={handleSameTabLinkClick}>{l.text}</Button>}&nbsp;
                  {l.icon && <Icon name={l.icon}/>}
                </Segment>
              );
            })}
          </SegmentGroup>
        </Segment>
      </Fragment>
  );
}

const actionCreators = {
  getLinkCollection,
  recordLinkClick
};

const mapStateToProps = state => ({
  collection: state.links.activeCollection
})

export default connect(mapStateToProps, actionCreators)(LinkCollection);
