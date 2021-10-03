import {Dropdown, Form, Grid, GridColumn, GridRow, Label, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {setHeading} from "../../store/actions/links";
import {useControlledFormInput} from "../../hooks/useControlledFormState";
import React from "react";

const EditHeading = ({currentHeading, setHeading}) => {
  const [heading, handleHeadingChange] = useControlledFormInput(currentHeading, setHeading);

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={1}>
              <GridColumn>
                <Label attached="top left" ribbon>Heading</Label>
                <Form.Input placeholder='Title of your Collection' name='text' value={heading} onChange={handleHeadingChange}/>
              </GridColumn>
            </GridRow>
          </Grid>
        </Form.Field>
      </Form>
    </Segment>
  );
}

const actionCreators = {
  setHeading
};

export default connect(null, actionCreators)(EditHeading);
