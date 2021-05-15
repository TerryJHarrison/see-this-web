import React, {Fragment} from "react";
import {connect} from "react-redux";
import {
  Card,
  CardGroup,
  Divider, Icon,
} from "semantic-ui-react";

const CreatedLinks = ({createdLinks}) => {
  if(createdLinks.length === 0){
      return null;
  }

  console.info(createdLinks);

  return (
    <Fragment>
      <Divider horizontal>Created Links</Divider>
      <CardGroup>
        {createdLinks.map(l =>
          <Card key={l.link}
            href={l.url}
            header={l.link}
            meta={l.url}
          />
        )}
      </CardGroup>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  createdLinks: state.links.created
})

export default connect(mapStateToProps)(CreatedLinks);
