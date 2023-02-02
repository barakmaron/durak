import Sequelize from 'sequelize';
import UsersModel from './User.js';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql'
  }
);

export const UsersDB = UsersModel(sequelize, Sequelize.DataTypes);