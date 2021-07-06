import React, {Fragment} from "react";
import {Header, Segment, SegmentGroup, Icon, Button} from "semantic-ui-react";
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
            {links.map(l => {
              const handleSameTabLinkClick = async () => {
                window.location = l.redirectUrl;
              };
              const handleNewTabLinkClick = async () => {
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

const mapStateToProps = state => ({
  collection: state.links.activeCollection
});

export default connect(mapStateToProps)(LinkCollectionPreview);
