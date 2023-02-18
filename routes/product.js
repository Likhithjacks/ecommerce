const express = require('express')
const {createProduct, getAllProduct, deleteProduct, updateProduct} = require('../controller/prods')
const {validateProductData,verifyToken,isAdmin}=require("../middleware")
const routes = express.Router()
routes.post('/ecomm/api/v1/products', [validateProductData,verifyToken, isAdmin],createProduct)
routes.get('/ecomm/api/v1/products',[verifyToken,isAdmin], getAllProduct)
routes.put('/ecomm/api/v1/products/:id',[verifyToken, isAdmin], updateProduct)
routes.delete('/ecomm/api/v1/products/:id',[verifyToken, isAdmin], deleteProduct)
module.exports = {productroutes:routes}