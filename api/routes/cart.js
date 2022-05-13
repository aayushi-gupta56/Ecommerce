const router = require("express").Router();
const Cart = require('../modals/Cart')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken')


//CREATE
router.post('/',verifyToken, async(req, res)=>{
    const newCart = new Cart(req.body)
    try{

        const addedCart = await newCart.save();
        res.status(200).json(addedCart)

    }catch(err){
        res.status(500).json(err)
    }
})


//UPDATE 
router.put('/:id', verifyTokenAndAuth, async (req, res)=>{
     try{

         const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
             $set: req.body
         }, { new:true })

         res.status(200).json(updatedCart)

     }catch(err){
         res.send(500).json(err)
     }
})


//DELETE CART
router.delete('/:id', verifyTokenAndAuth, async(req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("CART DELETED")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET USER CART
router.get('/find/:id', verifyTokenAndAuth, async(req, res)=>{
    try{

        const cart = await Cart.findOne({
            userId: req.params.id
        })
        res.status(200).json(cart);

    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL CARTS
router.get('/', verifyTokenAndAdmin, async(req, res)=>{
    try{

        const carts = await Cart.find();
        res.status(200).json(carts)

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;