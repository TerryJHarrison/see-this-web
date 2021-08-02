import React, {Fragment} from 'react';
import {Container} from "semantic-ui-react";
import PreviewCollectionHeader from "../PreviewCollectionHeader";
import {connect} from "react-redux";

const PreviewCollectionLayout = ({component}) => {
  return (
    <Fragment>
      <PreviewCollectionHeader/>
      <Container>
        {component}
      </Container>
    </Fragment>
  );
}

export default PreviewCollectionLayout;
