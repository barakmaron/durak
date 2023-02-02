'use strict';

import { Model, Sequelize } from "sequelize";

const Users = (sequelize, DataTypes) => {
    class Users extends Model {
        static associations(models) {

        }
    }

    Users.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        UserName: {
            type: DataTypes.STRING,
            unique: true
        },
        Password: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        timestamps: false,
        modelName: "Users"
    });
    return Users;
};

export default Users;