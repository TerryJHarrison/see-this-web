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
import {removeImage} from "../../store/actions/user";

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

const MediaCollection = ({images, removeImage}) => {
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
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {images.map(i =>
            <TableRow key={i.index}>
              <TableCell>{i.text}</TableCell>
              <TableCell><ImagePreview imageUrl={i.url}/></TableCell>
              <TableCell>
                <RemoveImage index={i.index} removeImage={removeImage}/>
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
  removeImage
};

const mapStateToProps = state => ({
  images: state.user.images
});

export default connect(mapStateToProps, actionCreators)(MediaCollection);
