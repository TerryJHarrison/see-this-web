import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {closeAccount, logout} from '../store/actions/auth';
import {getOwnedLinks, getUserData} from '../store/actions/api';
import {Redirect} from 'react-router-dom';
import {Button, Dropdown, Grid, GridColumn, GridRow, Image, Segment} from "semantic-ui-react";
import OwnedLinks from "../components/OwnedLinks";
import MediaCollection from "../components/images/MediaCollection";
import {setProfileImageShape, setProfileImageSize} from "../store/actions/user";

const profileIconShapeOptions = [
  {key: 'circle', value: 'circle', text: 'Circle'},
  {key: 'square', value: 'square', text: 'Square'}
];

const profileIconSizeOptions = [
  {key: 'small', value: 'mini', text: 'Small'},
  {key: 'normal', value: 'tiny', text: 'Normal'},
  {key: 'large', value: 'small', text: 'Large'}
];

const ProfileImageIcon = ({
  userImages,
  profileImage,
  profileImageSize,
  profileImageShape
}) => {
  if(!profileImage){
    return null;
  }

  const profileImageUrl = userImages.filter(i => i.index === profileImage)[0]['url'];
  return <Image avatar={profileImageShape === "circle"}
                size={profileImageSize}
                src={profileImageUrl}/>;
};

export const Profile = ({
  email,
  username,
  logout,
  ownedLinks,
  closeAccount,
  userImages,
  getUserData,
  profileImage,
  profileImageShape,
  profileImageSize,
  userData,
  setProfileImageShape,
  setProfileImageSize
}) => {
  const [logoutRedirect, setLogoutRedirect] = useState(false);
  const [closeRedirect, setCloseRedirect] = useState(false);
  const [imageShape, setImageShape] = useState(profileImageShape);
  const [imageSize, setImageSize] = useState(profileImageSize);

  useEffect(() => {
    getUserData();
  });

  const logoutCall = () => {
    logout();
    setLogoutRedirect(true);
  };

  const closeAccountCall = () => {
    closeAccount();
    setCloseRedirect(true);
  };

  const handleProfileImageShapeChange = (e, {value}) => {
    setImageShape(value);
    setProfileImageShape(value);
  };

  const handleProfileImageSizeChange = (e, {value}) => {
    setImageSize(value);
    setProfileImageSize(value);
  };

  const downloadFile = async () => {
    const downloadData = Object.assign({}, {"links": ownedLinks, "images": userImages, "user": userData});
    const blob = new Blob([JSON.stringify(downloadData)], {type:'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.target = "_blank";
    link.href = href;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return logoutRedirect ?
    <Redirect to="/logout"/> :
    closeRedirect ? <Redirect to="/profile/close"/> : (
      <Segment>
        <h1 className="center">
          <ProfileImageIcon userImages={userImages}
                            profileImage={profileImage}
                            profileImageShape={imageShape}
                            profileImageSize={imageSize}/>@{username}
        </h1>
        <h5>{email}</h5>
        <Grid>
          <GridRow>
            <GridColumn>
              <OwnedLinks/>
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn>
              <MediaCollection/>
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn>
              <Dropdown placeholder='Alignment' fluid search selection
                        options={profileIconShapeOptions}
                        value={imageShape}
                        onChange={handleProfileImageShapeChange}/>
              <Dropdown placeholder='Alignment' fluid search selection
                        options={profileIconSizeOptions}
                        value={imageSize}
                        onChange={handleProfileImageSizeChange}/>
            </GridColumn>
          </GridRow>
          <GridRow columns={3}>
            <GridColumn>
              <Button className="olive"
                      onClick={logoutCall}>Logout</Button>
            </GridColumn>
            <GridColumn>
              <Button className="black"
                      onClick={downloadFile}>Download My Data</Button>
              <Button className="black"
                      onClick={closeAccountCall}>Close Account</Button>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
    );
};

const mapStateToProps = state => ({
  email: state.session.user.email,
  username: state.session.user.username,
  ownedLinks: state.links.owned,
  userImages: state.user.images,
  userData: state.user,
  profileImage: state.user.profileImage,
  profileImageShape: state.user.profileImageShape,
  profileImageSize: state.user.profileImageSize,
});

const actionCreators = {
  logout,
  closeAccount,
  getOwnedLinks,
  getUserData,
  setProfileImageShape,
  setProfileImageSize
};

export default connect(mapStateToProps, actionCreators)(Profile);
