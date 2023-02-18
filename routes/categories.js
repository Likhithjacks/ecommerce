const express = require('express')
const {createCategory, getAllCategory,
getCategoryOnId, updateCategory, deleteCategory} = require('../controller/cats')
const {checknameofcat}=require("../middleware")
const routes = express.Router()


routes.post('/ecomm/api/v1/categories',[checknameofcat],createCategory)

routes.get('/ecomm/api/v1/categories',getAllCategory)

routes.get('/ecomm/api/v1/categories/:id', getCategoryOnId)

routes.put('/ecomm/api/v1/categories/:id', updateCategory)

routes.delete('/ecomm/api/v1/categories/:id', deleteCategory)

module.exports = {categoryroutes:routes}