import {Message} from "semantic-ui-react";
import {useState} from "react";

const Toast = ({header, content, duration = 4500, displayType = 'success'}) => {
  const [isVisible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
  }

  //Dismiss after set amount of time
  setTimeout(() => {
    setVisible(false)
  }, duration);

  //Only return anything if visible
  if(!isVisible){return null;}

  //Failure messages
  if(displayType === 'failure'){
    return <Message
      error
      onDismiss={handleDismiss}
      header={header}
      content={content}/>
  }

  //Default success messages
  return <Message
    success
    onDismiss={handleDismiss}
    header={header}
    content={content}/>
}

export default Toast;
