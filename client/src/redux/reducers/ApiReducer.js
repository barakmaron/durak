import ACTIONS from "../actions/ActionsConstants/ApiActionsConstants";

const initState = {
    message: '',
    successful: false,
    failed: false,
    pending: false,
    pending_with_loader: false
};

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch(type) { 
        case ACTIONS.REQUEST_PENDING_WITH_LOADER: {
            return { 
                ...initState, 
                pending_with_loader: true
            };
        }
        case ACTIONS.REQUEST_SUCCESSFUL: {
            const { message } = payload;
            return { 
                ...initState, 
                successful: true,
                message: message
            };
        }
        case ACTIONS.REQUEST_FAILED: {
            const { message } = payload;
            return { 
                ...initState, 
                failed: true,
                message: message
            };
        }
        case ACTIONS.INIT_REDUCER: {
            return initState;
        }
        default: {
            return state;
        }
    }
};

export default reducer;