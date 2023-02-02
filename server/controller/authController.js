import AuthService from '../services/AuthService.js';
import ErrorConstants from './ErrorConstants.js';
import { StatusCode } from 'status-code-enum';

async function Login(req, res, next) {
    try {
        const { user_name, password } = req.body;
        const user = await AuthService.Login(user_name, password);        
        if(user) 
            return CreateAccessToken(res, user);
        const registered_user = await AuthService.Register(user_name, password);
        if(registered_user) 
            return CreateAccessToken(res, user);
        throw Error();
    } catch (err) {
        return res.status(StatusCode.ClientErrorBadRequest).json({
            error: ErrorConstants.USER_LOGIN_ERROR
        });
    }
}

const Logout = async (req, res, next) => {
    try {
        res.cookie('jwt', 'none', {
            expires: new Date(Date.now() + 5 * 1000),
            httpOnly: true,
        })
        res.status(StatusCode.SuccessOK).json();
    } catch (err) {
        return res.status(StatusCode.ClientErrorBadRequest).json();
    }
}

function CheckToken(req, res, next) {
    return res.sendStatus(StatusCode.SuccessOK);
}

function CreateAccessToken(res, user) {
    const access_token = AuthService.GenerateToken(user);
    return res.cookie('jwt', access_token, {
        httpOnly: true,
        secure: true
    }).sendStatus(StatusCode.SuccessOK);
}

const authController = {
    Login,
    CheckToken,
    Logout
};

export default authController;