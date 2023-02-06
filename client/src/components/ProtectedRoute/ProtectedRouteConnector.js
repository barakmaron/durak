import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserName } from '../../redux/selectors/UserSelector';
import { AuthUserAction } from '../../redux/actions/UserActions';
import ProtectedRoute from './ProtectedRoute';

const mapStateToProps = (state, ownProps) => {
    const user_name = getUserName(state);
    return {
        user_name,
        ...ownProps
    };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        AuthUserAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(ProtectedRoute);