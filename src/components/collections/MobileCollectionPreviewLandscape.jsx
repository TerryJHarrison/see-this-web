import React from "react";
import LinkCollectionPreview from "../LinkCollectionPreview";
import SanityMobilePreview from 'sanity-mobile-preview'

const MobileCollectionPreviewLandscape = () => {
  return (
      <SanityMobilePreview allowedDevices={['iphone-x']}
                           preSelectedColor={'black'}
                           preSelectedDevice={'iphone-x'}
                           showMenu={false}
                           preSelectedLandscape={true}>
        <LinkCollectionPreview/>
      </SanityMobilePreview>
  );
};

export default MobileCollectionPreviewLandscape;
