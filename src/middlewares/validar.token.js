const jwt= require ('jsonwebtoken')
const tokenSecreto= require  ('../config.js')

module.exports.authRequerida= (req, res, next)=>{
    const {token}= req.cookies

    if(!token)
        return res.status(401).json({message: 'no autorizado, no hay token'})

    jwt.verify(token, tokenSecreto, (error, decoded)=>{
        if(error) return res.status(403).json({message: 'token invalido'})
        req.user= decoded
        console.log(decoded)
        next()
    })
}
