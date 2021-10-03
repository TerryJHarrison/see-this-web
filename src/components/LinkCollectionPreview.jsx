import React, {Fragment, useEffect, useState} from "react";
import {Header, Segment, SegmentGroup, Icon, Button, Loader, ButtonContent} from "semantic-ui-react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const IconOnLeft = ({text, icon, iconColor, iconSize}) => {
  if(!icon){return text}
  return <Fragment><Icon color={iconColor} name={icon} size={iconSize}/>&nbsp;&nbsp;{text}</Fragment>
}

const IconOnRight = ({text, icon, iconColor, iconSize}) => {
  if(!icon){return text}
  return <Fragment>{text}&nbsp;&nbsp;<Icon color={iconColor} name={icon} size={iconSize}/></Fragment>
}

const LinkContents = ({id, handleLinkClick, buttonColor, buttonHoverColor, iconLocation, textColor, textHoverColor, text, icon, iconColor, iconSize}) => {

  const [activeButtonColor, setActiveButtonColor] = useState(buttonColor);
  const [activeTextColor, setActiveTextColor] = useState(textColor);

  const handleEnter = (event) => {
    console.info(event);
    setActiveTextColor(textHoverColor);
    setActiveButtonColor(buttonHoverColor);
  };

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    addEventListener('mouseenter', handleEnter)
  });

  return (
    <Fragment>
      <Button onClick={handleLinkClick} color={activeButtonColor} className={`link-${id}`}>
        <ButtonContent style={{color: activeTextColor}} visible>
          {iconLocation === "left" && <IconOnLeft text={text} icon={icon} iconSize={iconSize} iconColor={iconColor}/>}
          {iconLocation !== "left" && <IconOnRight text={text} icon={icon} iconSize={iconSize} iconColor={iconColor}/>}
        </ButtonContent>
      </Button>
    </Fragment>
  );
}

const LinkCollectionPreview = ({collection}) => {

  const {id, heading, links, subheading, page} = collection;
  let {headerAlign, subheaderAlign, headerTextColor, subheaderTextColor, headerTextSize, subheaderTextSize} = collection;
  const {buttonColor, buttonHoverColor, blockColor, iconColor, textColor, textHoverColor, backgroundColor} = page || {};

  if(!headerAlign){headerAlign = "center"}
  if(!subheaderAlign){subheaderAlign = "center"}
  if(!headerTextSize){headerTextSize = "h1"}
  if(!subheaderTextSize){subheaderTextSize = "h3"}

  if(!id){return <Redirect to="/collections"/>}
  if(!links){return <Loader/>}

  return (
      <Fragment>
        <Segment basic/>
        <Segment textAlign="center" color={backgroundColor} inverted={backgroundColor}>
          <Header as={headerTextSize} textAlign={headerAlign} color={headerTextColor}>{heading}</Header>
          <Header as={subheaderTextSize} textAlign={subheaderAlign} color={subheaderTextColor}>{subheading}</Header>
          <SegmentGroup raised>
            {links.map(l => {
              const handleSameTabLinkClick = async () => {
                window.location = l.redirectUrl;
              };
              const handleNewTabLinkClick = async () => {
                window.open(l.redirectUrl, "_blank", "noopener noreferrer");
              };
              const handleLinkClick = l.shouldOpenInNewTab ? handleNewTabLinkClick : handleSameTabLinkClick;

              return (
                <Segment key={l.index} color={blockColor} inverted={blockColor}>
                  <LinkContents id={l.index}
                                handleLinkClick={handleLinkClick}
                                buttonColor={buttonColor}
                                buttonHoverColor={buttonHoverColor}
                                iconLocation={l.iconLocation}
                                textColor={textColor}
                                textHoverColor={textHoverColor}
                                text={l.text}
                                icon={l.icon}
                                iconSize={l.iconSize}
                                iconColor={iconColor}/>
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
