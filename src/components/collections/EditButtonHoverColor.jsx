import {Dropdown, Form, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {setButtonHoverColor} from "../../store/actions/links";
import {useControlledFormInput} from "../../hooks/useControlledFormState";
import colorOptions from "./colorOptions.json"

const EditButtonHoverColor = ({activeCollection, setButtonHoverColor}) => {
  const currentButtonHoverColor = activeCollection.page && activeCollection.page.buttonHoverColor ? activeCollection.page.buttonHoverColor : '';
  const [buttonHoverColor, handleButtonHoverColor] = useControlledFormInput(currentButtonHoverColor, setButtonHoverColor);

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
                  defaultValue={buttonHoverColor}
                  options={colorOptions['colors']}
                  onChange={handleButtonHoverColor}/>
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

export default connect(mapStateToProps, actionCreators)(EditButtonHoverColor);
