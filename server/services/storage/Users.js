import { UsersDB } from "../../db/models/index.js";

async function FindUser(user_name) {
    return await UsersDB.findOne({
        where: {
            UserName: user_name
        }
    });
}

async function AddUser(user_name, password) {
    return await UsersDB.create({
        UserName: user_name,
        Password: password
    });
}

const Users = {
    FindUser,
    AddUser
};

export default Users;