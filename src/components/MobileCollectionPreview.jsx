import React, {useState} from "react";
import 'sanity-mobile-preview/dist/index.css?raw'
import MobileCollectionPreviewPortrait from "./collections/MobileCollectionPreviewPortrait";
import MobileCollectionPreviewLandscape from "./collections/MobileCollectionPreviewLandscape";
import {Button, Segment} from "semantic-ui-react";

const MobileCollectionPreview = () => {
  const [isPortrait, setPortrait] = useState(false);

  const toggleRotation = () => {
    setPortrait(!isPortrait);
  };

  return (
    <Segment>
      <Button onClick={toggleRotation}>Rotate</Button>
      {isPortrait ? <MobileCollectionPreviewPortrait/> : <MobileCollectionPreviewLandscape/>}
    </Segment>
  );
};

export default MobileCollectionPreview;
