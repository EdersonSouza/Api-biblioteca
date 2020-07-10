import jwt from'./jwt'


module.exports= (req,res,next) =>{
    console.log(req.headers.authorization)
    const [, token] = req.headers.authorization.split(' ')
    try {
        const payload = jwt.verify(token)

        if(!payload.id) return res.status(401).send({error:"token inválido"})
        return next();

    } catch (error) {
        
    }

    

 
}