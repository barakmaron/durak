import UsersDB from './storage/Users.js';
import jwt from 'jsonwebtoken';
import ServiceConstants from './Constants.js';

async function Login(user_name, password) {
    try {
        const user = await UsersDB.FindUser(user_name);
        if(user) {
            const matching_passwords = password === user.Password;
            return (matching_passwords && user);
        }
        return false;
    } catch (err) {
        throw err;
    }
}

async function Register(user_name, password) {
    try {
        const user = await UsersDB.AddUser(user_name, password);
        return user;
    } catch (err) {
        throw err;
    }
}

function GenerateToken(user_id, user_name) {
    const base_token = process.env.ACCESS_TOKEN;
    return jwt.sign({
        id: user_id,
        user_name
    }, base_token, { 
        expiresIn: ServiceConstants.TOKEN_MAX_AGE
    });
}

const AuthService = {
    Login,
    Register,
    GenerateToken
};

export default AuthService;