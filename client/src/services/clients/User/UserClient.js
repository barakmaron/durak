import SendApiRequest, { METHODS } from "../../AxiosHandler/AxiosHandler";

export async function LoginRegisterClient(user_name, password) {
    const request = await SendApiRequest(`/auth/login`, METHODS.POST, {
        user_name,
        password
    });
    return request;
}

export async function AuthClient(user_name, password) {
    const request = await SendApiRequest(`/auth/token`);
    return request;
}