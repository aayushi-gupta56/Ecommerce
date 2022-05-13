const router = require("express").Router();
const cryptojs = require("crypto-js")
const User = require('../modals/User')
const jwt = require('jsonwebtoken')

//REGISTER
router.post("/register", async (req, res)=>{
    if(!req.body.username || !req.body.email || !req.body.password){
        res.status(400).json("Please enter complete details..")
        return;
    }

    const hashedPass = cryptojs.AES.encrypt(req.body.password, process.env.CRYPTO_KEY).toString()
        
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass
    })

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err);
    }
})

//LOGIN
router.post('/login', async (req,res)=>{
    try{

        const user = await User.findOne({ username: req.body.username })
        if(!user){
            res.status(401).json("NO SUCH USERNAME EXISTS.")
            return
        }
        
        const hashedPass = user.password
        const pass = cryptojs.AES.decrypt(hashedPass, process.env.CRYPTO_KEY).toString(cryptojs.enc.Utf8)
        if(req.body.password !== pass){
            res.status(401).json("WRONG PASSWORD.")
            return
        }

        token = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin
                }, process.env.JWT_KEY,{ expiresIn: '24h' })

        const {password, ...others} = user._doc
        res.status(200).json({...others,token});

    }catch(err){
        res.send(500).json(err)
    }
})


module.exports = router