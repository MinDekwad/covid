const dotenv = require('dotenv');
const path = require('path')
dotenv.config({path : path.resolve(__dirname, '../.env') })

module.exports = {
    "username": process.env.USERNAME_DB,
    "password": process.env.PASSWORD_DB,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
}