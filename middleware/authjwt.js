const jwt = require('jsonwebtoken');
const {User} = require('../models')
async function verifyToken(req,res,next){
    console.log("in verifytoken")
	const token = req.headers['x-access-token'];
	if(token){
		try{
			const result = await jwt.verify(token, "helloIamsecretkey")
            console.log("verifying",result)
			if(result){
                console.log("verified")
                req.userId = result.id;
				next()
			}else{ 
				res.status(400).send({msg : 'auth token has expired. Please relogin'})
				return;
			}
		}catch(err){
			res.status(400).send({msg : 'auth token has expired. Please relogin'})
			return;	
		}
	}else{
		res.status(401).send({msg : 'auth token is missing'})
		return;
	}
}
async function isAdmin(req,res,next){
    console.log("isadmin")
	const userId = req.userId;

	try{
		const user = await User.findByPk(userId);
        console.log(user,userId)
		const userRoles =  await user.getRoles();
        console.log(userRoles)
		for(let i = 0; i< userRoles.length; i++){
			if(userRoles[i].dataValues.name === 'Admin'){
				next()
				return;
			}
		}
		res.status(400).send({msg : 'User does not have admin access'})
		return;
	}catch(err){
        console.log(err)
		res.status(500).send({msg:'Internal Server error', err});
		return;
	}
}

module.exports={verifyToken,isAdmin}