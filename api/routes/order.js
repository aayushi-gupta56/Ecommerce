const router = require("express").Router();
const Order = require('../modals/Order')
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verifyToken')


//CREATE
router.post('/',verifyToken, async(req, res)=>{
    const newOrder = new Order(req.body)
    try{

        const addedOrder = await newOrder.save();
        res.status(200).json(addedOrder)

    }catch(err){
        res.status(500).json(err)
    }
})


//UPDATE 
router.put('/:id', verifyTokenAndAdmin, async (req, res)=>{
     try{

         const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
             $set: req.body
         }, { new:true })

         res.status(200).json(updatedOrder)

     }catch(err){
         res.send(500).json(err)
     }
})


//DELETE ORDER
router.delete('/:id', verifyTokenAndAdmin, async(req, res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("ORDER DELETED")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET USER ORDERS
router.get('/find/:id', verifyTokenAndAuth, async(req, res)=>{
    try{

        const orders = await Order.find({
            userId: req.params.id
        })
        res.status(200).json(orders);

    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL ORDERS
router.get('/', verifyTokenAndAdmin, async(req, res)=>{
    try{

        const orders = await Order.find();
        res.status(200).json(orders)

    }catch(err){
        res.status(500).json(err)
    }
})

//ORDERS STAT
router.get('/sales', verifyTokenAndAdmin, async(req, res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1))
    const backMonth = new Date(new Date().setMonth(previousMonth.getMonth()-1))
    const fourBackMonth = new Date(new Date().setMonth(backMonth.getMonth()-1))
    try{

        const data = await Order.aggregate([
            {$match : { createdAt: { $gte: fourBackMonth }}},
            {$project : {
                month : { $month: "$createdAt" },
                sales : "$amount"
            }},
            {$group:{
                _id : "$month",
                total : { $sum : "$sales" }
            }}
        ])

        res.status(200).json(data)

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;