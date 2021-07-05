import {Form, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {setSubheading} from "../../store/actions/links";
import {useControlledFormInput} from "../../hooks/useControlledFormState";

const EditSubheading = ({currentSubheading, setSubheading}) => {
  const [subheading, handleSubheadingChange] = useControlledFormInput(currentSubheading, setSubheading);

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={1}>
              <GridColumn>
                <label>Subheading</label>
                <Form.Input placeholder='Short Description' name='text' value={subheading} onChange={handleSubheadingChange}/>
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
  setSubheading
};

export default connect(mapStateToProps, actionCreators)(EditSubheading);
