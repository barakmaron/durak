import axios from 'axios';

const sender = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

export default async function SendApiRequest(url, method = "get", params = undefined) {
    try {
        sender.defaults.withCredentials = true;
        const res = await sender[method](`${url}`, params);
        if(res.headers["set-cookie"]){
            const [cookie] = res.headers["set-cookie"];
            sender.defaults.headers.Cookie = cookie;
        }
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const METHODS = {
    GET: "get",
    POST: "post",
    PATCH: "patch",
    PUT: "put",
    DELETE: "delete"
};