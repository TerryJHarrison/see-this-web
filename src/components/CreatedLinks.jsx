import React, {Fragment} from "react";
import {connect} from "react-redux";
import {
  Card,
  CardGroup,
  Divider
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
            href={`https://seeth.is/l/${l.link}`}
            header={`https://seeth.is/l/${l.link}`}
            meta={l.redirectUrl}
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
