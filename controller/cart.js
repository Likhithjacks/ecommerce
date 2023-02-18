const {cart, Products,sequelize} = require('../models')

async function updateCart(req,res){
    console.log("in update")
	const cartId = req.params.id;
	try{
		const carts = await cart.findByPk(cartId);
        console.log("cart",carts,cartId,cart)
		if(carts){
			const productIds = req.body.productIds;

			const products = await Products.findAll({
				where: {
					id : productIds
				}
			})
            console.log("prods",products)
			if(products.length > 0){
                console.log("in if")
				await carts.setProducts(products)
                console.log("set")
				const cartProducts = await carts.getProducts()
                console.log("cart prods",cartProducts)
				let totalCost = 0;
				const addedProducts = []

				for(let i=0; i<cartProducts.length; i++){
                    
                      console.log("in for")
					totalCost = totalCost + cartProducts[i].dataValues.cost;

					addedProducts.push({ 
						id: cartProducts[i].dataValues.id,
						name: cartProducts[i].dataValues.name,
						cost: cartProducts[i].dataValues.cost,
						description: cartProducts[i].dataValues.description
					})
				}
				res.send({totalCost,addedProducts})
			}
            else{
                console.log("in else")
				res.status(400).send({msg : 'Products does not exist'})
			}

		}else{
			res.status(400).send({msg : 'Cart does not exist'})
		}

	}catch(err){
        console.log(err)
		res.status(500).send({msg : 'Internal server error', err})
	}
}

async function getCart(req,res){
		const cartId = req.params.id;
	try{
		const cart = await cart.findByPk(cartId);
		if(cart){
				const cartProducts = await cart.getProducts()

				let totalCost = 0;
				const addedProducts = []

				for(let i=0; i<cartProducts.length; i++){

					totalCost = totalCost + cartProducts[i].dataValues.cost;

					addedProducts.push({
						id: cartProducts[i].dataValues.id,
						name: cartProducts[i].dataValues.name,
						cost: cartProducts[i].dataValues.cost,
						description: cartProducts[i].dataValues.description
					})
				}
				res.send({totalCost,addedProducts})
		}else{
			res.status(400).send({msg : 'Cart does not exist'})
		}

	}catch(err){
		res.status(500).send({msg : 'Internal server error', err})
	}
}

module.exports = {updateCart, getCart}