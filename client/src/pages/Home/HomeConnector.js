import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';
import { LoginRegisterAction } from '../../redux/actions/UserActions';

const mapStateToProps = (state, ownProps) => {
    return { ...ownProps };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        LoginRegisterAction
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Home);