const {checknameofcat}=require("./category")
const {validateProductData}=require("./product")
const {checkduplicatenameoremail,checkroles}=require("./validate")
const {verifyToken, isAdmin} = require('./authjwt')
module.exports={
    checknameofcat,validateProductData,checkduplicatenameoremail,checkroles,verifyToken,isAdmin
}