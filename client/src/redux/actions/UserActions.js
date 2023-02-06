import API_MESSAGES from "../../services/clients/User/Messages";
import { LoginRegisterClient, AuthClient } from "../../services/clients/User/UserClient";
import ACTIONS from "./ActionsConstants/UserActionConstants";
import { ApiSenderAction } from "./ApiActions";

const LoginSuccessful = (user_name) => ({
    type: ACTIONS.LOGIN_REGISTER_SUCCESSFUL,
    payload: {
        user_name
    }
});

const LoginFailed = () => ({
    type: ACTIONS.LOGIN_REGISTER_FAILED
});

const TokenFailed = () => ({
    type: ACTIONS.TOKEN_NOT_VALID
});

export const LoginRegisterAction = (user_name, password) => {
    return (dispatch) =>
    ApiSenderAction(
        dispatch,
        LoginRegisterClient(user_name, password),
        [
            API_MESSAGES.LOGIN_REGISTER_SUCCESSFUL,
            () => LoginSuccessful(user_name)
        ], [
            API_MESSAGES.LOGIN_REGISTER_FAILED,
            LoginFailed
        ], true);
};

export const AuthUserAction = () => {
    return (dispatch) =>
    ApiSenderAction(
        dispatch,
        AuthClient(), [
            '',
            LoginSuccessful
        ], [
            API_MESSAGES.TOKEN_NOT_VALID,
            TokenFailed
        ]);
};