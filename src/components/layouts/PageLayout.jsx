import React, {Fragment} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Container} from "semantic-ui-react";

const PageLayout = ({component}) => {
  return (
    <Fragment>
      <Header/>
      <Container>
        {component}
      </Container>
      <Footer/>
    </Fragment>
  );
}

export default PageLayout;
