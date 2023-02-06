import ACTIONS from "./ActionsConstants/ApiActionsConstants";

export const RequestPendingWithLoader = () => ({
    type: ACTIONS.REQUEST_PENDING_WITH_LOADER
});

export const RequestSuccessful = (message) => ({
    type: ACTIONS.REQUEST_SUCCESSFUL,
    payload: {
        message
    }
});

export const RequestFailed = (message) => ({
    type: ACTIONS.REQUEST_FAILED,
    payload: {
        message
    }
});

const InitApiHandler = () => ({
    type: ACTIONS.INIT_REDUCER
});

export const InitApiHandlerAction = () => {
    return (dispatch) => {
        dispatch(InitApiHandler);
    };
};

export const ApiSenderAction = async (dispatch, client, successful = [], failed = [], loader = false, validator = null) => {
    const [ successfulMessage, successfulAction ] = successful;
    const [ failedMessage, failedAction ] = failed;
    try {
        loader && dispatch(RequestPendingWithLoader());
        const response = await client;
        validator && validator(response);
        successfulMessage.length && dispatch(RequestSuccessful(successfulMessage));
        successfulAction && dispatch(successfulAction(response));
    } catch (err) {
        failedMessage.length && dispatch(RequestFailed(failedMessage));
        failedAction.length && dispatch(failedAction(err));
    }
}