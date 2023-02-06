import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "./App";
import { getUserName } from "./redux/selectors/UserSelector";

const mapStateToProps = (state, ownProps) => {
    const user_name = getUserName(state);
    return {
        ...ownProps,
        user_name
    };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(App);