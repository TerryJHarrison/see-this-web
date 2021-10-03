import {Dropdown, Form, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {setButtonTextColor} from "../../store/actions/links";
import {useControlledFormInput} from "../../hooks/useControlledFormState";
import colorOptions from "./colorOptions.json"

const EditButtonTextColor = ({activeCollection, setButtonTextColor}) => {
  const currentButtonTextColor = activeCollection.page && activeCollection.page.buttonTextColor ? activeCollection.page.buttonTextColor : '';
  const [buttonTextColor, handleButtonTextColor] = useControlledFormInput(currentButtonTextColor, setButtonTextColor);

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={1}>
              <GridColumn>
                <Dropdown
                  text='Button Text Color'
                  floating
                  labeled
                  button
                  className='icon'
                  defaultValue={buttonTextColor}
                  options={colorOptions['colors']}
                  onChange={handleButtonTextColor}/>
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
  setButtonTextColor
};

export default connect(mapStateToProps, actionCreators)(EditButtonTextColor);
