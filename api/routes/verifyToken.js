const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if(!authHeader)
        return res.status(401).json("You are not AUTHENTICATED.")

    const token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT_KEY,(err, user)=>{
        if(err)
            return res.status(403).json("INVALID TOKEN.") 
        req.user = user
        next();
    })
}

const verifyTokenAndAuth = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id===req.params.id || req.user.isAdmin)
            next();
        else
            return res.status(401).json("You are not AUTHENTICATED.") 
    })
} 

const verifyTokenAndAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin)
            next();
        else
            return res.status(401).json("You are not AUTHENTICATED.")   
    }) 
}

module.exports = {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuth}