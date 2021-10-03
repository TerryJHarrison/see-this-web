import {Dropdown, Form, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {setTextHoverColor} from "../../store/actions/links";
import {useControlledFormInput} from "../../hooks/useControlledFormState";
import colorOptions from "./colorOptions.json"

const EditButtonTextHoverColor = ({activeCollection, setTextHoverColor}) => {
  const currentTextHoverColor = activeCollection.page && activeCollection.page.textHoverColor ? activeCollection.page.textHoverColor : '';
  const [textHoverColor, handleTextHoverColor] = useControlledFormInput(currentTextHoverColor, setTextHoverColor);

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={1}>
              <GridColumn>
                <Dropdown
                  text='Button Text Hover Color'
                  floating
                  labeled
                  button
                  className='icon'
                  defaultValue={textHoverColor}
                  options={colorOptions['colors']}
                  onChange={handleTextHoverColor}/>
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
  setTextHoverColor
};

export default connect(mapStateToProps, actionCreators)(EditButtonTextHoverColor);
