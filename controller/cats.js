const { category } = require('../models')

async function createCategory(req, res){
	const name = data.name;
	const description = data.description;
	try{
		const result = await category.create({name, description})
		console.log('result', result);
		res.send({msg : 'Category has been created'})
	}catch(err){
		console.log('err in creation of category', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}

async function getAllCategory(req, res){
	try{
		const result = await category.findAll()
		res.send(result)
	}catch(err){
		console.log('err in getting category', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}

async function getCategoryOnId(req,res){
	const categoryId = req.params.id;
	try{
		const result = await category.findOne({
			where : {
				id : categoryId
			}
		})

		res.send(result)
	}catch(err){
		console.log('err in getting category based on ID', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}

async function updateCategory(req,res){
	const categoryId = req.params.id;
	try{
		const result = await category.findOne({
			where : {
				id : categoryId
			}
		})
		 if(result){
			result.name = req.body.name;
			result.description = req.body.description;

			result.save()

			res.send({msg : 'category got update', 
			updatedCategory: result})
		 }else {
			console.log('err in getting category', err)
			res.status(400).send({msg : 'category id does not exist'})
		 }
	}catch(err){
		console.log('err in getting category', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}

function deleteCategory(req,res){
	const categoryId = req.params.id;
	try{
		const result = category.destroy({
			where :{
				id: categoryId
			}
		})

		res.send({msg: 'category deleted', result})
	}catch(err){
		console.log('err in deleting category', err)
		res.status(500).send({msg : 'Internal server error'})
	}
}

module.exports = {
	createCategory,
	getAllCategory,
	getCategoryOnId,
	updateCategory,
	deleteCategory
}