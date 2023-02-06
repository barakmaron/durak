import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFailed, getMessage, getPendingWithLoader, getSuccessful } from '../../redux/selectors/ApiSelector';
import ApiHandler from './ApiHandler';
import { InitApiHandlerAction } from '../../redux/actions/ApiActions';

const mapStateToProps = (state, ownProps) => {
    const pending_with_loader = getPendingWithLoader(state);
    const successful = getSuccessful(state);
    const failed = getFailed(state);
    const message = getMessage(state);
    return {
        ...ownProps,
        pending_with_loader,
        successful,
        failed,
        message
    };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        InitApiHandlerAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(ApiHandler);