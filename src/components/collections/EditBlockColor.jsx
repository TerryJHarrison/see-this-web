import {Dropdown, Form, Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {setBlockColor} from "../../store/actions/links";
import {useControlledFormInput} from "../../hooks/useControlledFormState";
import colorOptions from "./colorOptions.json"

const EditBlockColor = ({activeCollection, setBlockColor}) => {
  const currentBlockColor = activeCollection.page && activeCollection.page.blockColor ? activeCollection.page.blockColor : '';
  const [blockColor, handleBlockColor] = useControlledFormInput(currentBlockColor, setBlockColor);

  return (
    <Segment basic>
      <Form>
        <Form.Field>
          <Grid>
            <GridRow columns={1}>
              <GridColumn>
                <Dropdown
                  text='Block Color'
                  floating
                  labeled
                  button
                  className='icon'
                  defaultValue={blockColor}
                  options={colorOptions['colors']}
                  onChange={handleBlockColor}/>
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
  setBlockColor
};

export default connect(mapStateToProps, actionCreators)(EditBlockColor);
