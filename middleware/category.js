async function checknameofcat(req,res,next){
    const data=req.body
  if(!data.name){
    res.status(400).send({msg:"name is mandatory"})
return  
}
  next()
}
module.exports={checknameofcat}
