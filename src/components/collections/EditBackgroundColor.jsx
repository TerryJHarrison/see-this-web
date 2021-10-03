import {Dropdown, Form, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {setBackgroundColor} from "../../store/actions/links";
import {useControlledFormInput} from "../../hooks/useControlledFormState";
import colorOptions from "./colorOptions.json"

const EditBackgroundColor = ({activeCollection, setBackgroundColor}) => {
  const currentBackgroundColor = activeCollection.page && activeCollection.page.backgroundColor ? activeCollection.page.backgroundColor : '';
  const [backgroundColor, handleBackgroundColor] = useControlledFormInput(currentBackgroundColor, setBackgroundColor);

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={1}>
              <GridColumn>
                <Dropdown
                  text='Background Color'
                  floating
                  labeled
                  button
                  className='icon'
                  defaultValue={backgroundColor}
                  options={colorOptions['colors']}
                  onChange={handleBackgroundColor}/>
              </GridColumn>
            </GridRow>
          </Grid>
        </Form.Field>
      </Form>
    </Segment>
  );
}

const mapStateToProps = state => ({
  activeCollection: state.links.activeCollection
});

const actionCreators = {
  setBackgroundColor
};

export default connect(mapStateToProps, actionCreators)(EditBackgroundColor);
