import {Form, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {setHeading} from "../../store/actions/links";
import {useControlledFormInput} from "../../hooks/useControlledFormState";

const EditHeading = ({currentHeading, setHeading}) => {
  const [heading, handleHeadingChange] = useControlledFormInput(currentHeading, setHeading);

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={1}>
              <GridColumn>
                <label>Heading</label>
                <Form.Input placeholder='Title of your Collection' name='text' value={heading} onChange={handleHeadingChange}/>
              </GridColumn>
            </GridRow>
          </Grid>
        </Form.Field>
      </Form>
    </Segment>
  );
}

const mapStateToProps = state => ({
  collection: state.links.activeCollection
});

const actionCreators = {
  setHeading
};

export default connect(mapStateToProps, actionCreators)(EditHeading);
