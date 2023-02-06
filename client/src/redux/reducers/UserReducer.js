import ACTIONS from "../actions/ActionsConstants/UserActionConstants";

const initState = {
    user_name: null
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch(type) {
        case ACTIONS.LOGIN_REGISTER_SUCCESSFUL: {
            return {
                user_name: payload.user_name
            };
        }
        case ACTIONS.LOGIN_REGISTER_FAILED: {
            return initState;
        }
        case ACTIONS.TOKEN_NOT_VALID: {
            return initState;
        }
        default: {
            return state;
        }
    }
};

export default reducer;