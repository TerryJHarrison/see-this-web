import React from "react";
import {connect} from "react-redux";
import {
  Button,
  Container, Icon,
  Image,
  Popup,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow
} from "semantic-ui-react";
import AddImageButton from "./AddImageButton";
import {removeImage, setProfileImage, setQRCodeImage} from "../../store/actions/user";

const ImagePreview = ({imageUrl}) => {
  return (
    <Popup trigger={
      <span>{imageUrl}</span>
    }>
      <Popup.Content>
        <Image src={imageUrl}/>
      </Popup.Content>
    </Popup>
  )
}

const RemoveImage = ({index, removeImage}) => {
  const removeImageOnClick = () => {
    removeImage(index);
  };

  return (
    <Button icon className="red" circular onClick={removeImageOnClick}>
      <Icon name='trash alternate outline'/>
    </Button>
  );
}

const SetProfilePicture = ({imageId, setProfileImage}) => {
  const setImageOnClick = () => {
    setProfileImage(imageId);
  };

  return (
    <Button icon className="blue" circular onClick={setImageOnClick}>
      <Icon name='user'/>
    </Button>
  );
}

const SetQRCodePicture = ({imageId, setQRCodeImage}) => {
  const setImageOnClick = () => {
    setQRCodeImage(imageId);
  };

  return (
    <Button icon className="blue" circular onClick={setImageOnClick}>
      <Icon name='qrcode'/>
    </Button>
  );
}

const MediaCollection = ({images, removeImage, setProfileImage, setQRCodeImage}) => {
  if(images.length === 0){
      return (
        <Container textAlign="center">
          <h3>Looks like you don't have any images yet</h3>
          <AddImageButton/>
        </Container>
      );
  }

  return (
    <Container textAlign="center">
      <h2>Media Collection</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Text</TableHeaderCell>
            <TableHeaderCell>URL</TableHeaderCell>
            <TableHeaderCell/>
          </TableRow>
        </TableHeader>
        <TableBody>
          {images.map(i =>
            <TableRow key={i.index}>
              <TableCell>{i.text}</TableCell>
              <TableCell><ImagePreview imageUrl={i.url}/></TableCell>
              <TableCell>
                <RemoveImage index={i.index} removeImage={removeImage}/>
                <SetProfilePicture imageId={i.index} setProfileImage={setProfileImage}/>
                <SetQRCodePicture imageId={i.index} setQRCodeImage={setQRCodeImage}/>
              </TableCell>
            </TableRow>
          )}
          <TableRow key="add">
            <TableCell><AddImageButton/></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}

const actionCreators = {
  removeImage,
  setProfileImage,
  setQRCodeImage
};

const mapStateToProps = state => ({
  images: state.user.images
});

export default connect(mapStateToProps, actionCreators)(MediaCollection);
