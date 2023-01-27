import {Fragment, lazy} from "react";
import {connect} from "react-redux";
const Toast = lazy(() => import('./Toast'));

const ToastDisplay = ({toasts}) => {
  return <Fragment>
    {toasts.map(t => <Toast key={t.id}
      header={t.header}
      content={t.content}
      duration={t.duration}
      displayType={t.displayType}
    />)}
  </Fragment>;
}

const mapStateToProps = state => ({
  toasts: state.toasts.toasts
})

export default connect(mapStateToProps)(ToastDisplay);
