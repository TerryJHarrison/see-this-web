import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Button} from "semantic-ui-react";
import {useHistory} from "react-router-dom";

const OwnedLinksActions = ({collection}) => {
  const history = useHistory();
  const updateLinkCollectionClick = () => {
    history.push(`/profile/collections/${collection}`);
  };

  const viewLinkCollectionClick = () => {
    history.push(`/portfolio/${collection}`);
  };

  return (
    <Fragment>
      <Button color="blue" onClick={viewLinkCollectionClick} icon="eye" compact circular/>
      <Button positive onClick={updateLinkCollectionClick} icon="edit" compact circular/>
    </Fragment>
  )
}

const actionCreators = {};

export default connect(null, actionCreators)(OwnedLinksActions);
