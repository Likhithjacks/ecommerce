const express = require('express')
const {usersignup,usersignin}=require("../controller/auth")
const {checkduplicatenameoremail,checkroles}=require("../middleware")
const routes = express.Router()


routes.post('/ecomm/api/v1/auth/signup',[checkduplicatenameoremail,checkroles],usersignup)

routes.post('/ecomm/api/v1/auth/signin',usersignin)

module.exports = {authroutes:routes}