const {serverPort}=require('./config/server.config')
const express=require("express")
const app=express()
const { category, sequelize,Products,Role} = require('./models')
const {categoryroutes,productroutes,authroutes}=require("./routes")
const jwt=require("jsonwebtoken")
const { cartRoutes } = require('./routes/cart')
app.use(express.json())
app.use(categoryroutes)
app.use(productroutes)
app.use(authroutes)
app.use(cartRoutes)
app.listen(serverPort,async () => {
    console.log("server running",serverPort)
    await init()
})
async function init(){
    try{
        await sequelize.sync({force:true})
   /*  const defaultcategory=[{
            name:'fashion',
            description:'all type of brands'
        },
    {
        name:'electronics',
        description:'all accessories'
    },
    {
        name:"grocery",
        description:"wholesale stock"
    }]
const defaultProducts = [
{
    "description":"For men",
    "name" :"summer shirts",
    "cost": 870,
    "quantity": 20,
    "categoryId":1
},
{
    "description":"For women",
    "name" :"female shirts",
    "cost": 1200,
    "quantity": 20,
    "categoryId":1
},
{

    "name": "chilli sauce",
    "cost": 120,
    "description": "spicy sauce for all needs",
    "quantity": 10,
    "categoryId":3
   
},
{
  
    "name": "iphone case",
    "cost": 900,
    "description": "case for iphones",
    "quantity": 5,
    "categoryId":2

},
{
  
    "name": "eclairs",
    "cost": 90,
    "description": "chocolates",
    "quantity": 100,
    "categoryId":3
   
}]
const defaultrole=[{
    name:"User"
},{
    name:"Admin"
}]*/
  await category.bulkCreate(defaultcategory)
  await Products.bulkCreate(defaultProducts)
  await Role.bulkCreate(defaultrole)
}
    catch(err){
        console.log(err)
    }
}