import {Dropdown, Form, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {setButtonColor} from "../../store/actions/links";
import {useControlledFormInput} from "../../hooks/useControlledFormState";
import colorOptions from "./colorOptions.json"

const EditButtonColor = ({activeCollection, setButtonColor}) => {
  const currentButtonColor = activeCollection.page && activeCollection.page.buttonColor ? activeCollection.page.buttonColor : '';
  const [buttonColor, handleButtonColor] = useControlledFormInput(currentButtonColor, setButtonColor);

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={1}>
              <GridColumn>
                <Dropdown
                  text='Button Color'
                  floating
                  labeled
                  button
                  className='icon'
                  defaultValue={buttonColor}
                  options={colorOptions['colors']}
                  onChange={handleButtonColor}/>
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
  setButtonColor
};

export default connect(mapStateToProps, actionCreators)(EditButtonColor);
