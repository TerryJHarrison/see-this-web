import {Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

function Example() {
  return (
    <Segment>
      This is just an example - you can link to anywhere you want! <Link to='/'>Create some links</Link>
    </Segment>
  );
}

export default Example;
