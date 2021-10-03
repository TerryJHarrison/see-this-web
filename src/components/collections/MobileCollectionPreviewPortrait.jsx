import React from "react";
import LinkCollectionPreview from "../LinkCollectionPreview";
import SanityMobilePreview from 'sanity-mobile-preview'

const MobileCollectionPreviewPortrait = () => {
  return (
      <SanityMobilePreview allowedDevices={['iphone-x']}
                           preSelectedColor={'black'}
                           preSelectedDevice={'iphone-x'}
                           showMenu={false}
                           preSelectedLandscape={false}>
        <LinkCollectionPreview/>
      </SanityMobilePreview>
  );
};

export default MobileCollectionPreviewPortrait;
