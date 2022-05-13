const router = require("express").Router();
const Product = require('../modals/Product')
const { verifyTokenAndAdmin } = require('./verifyToken')


//CREATE
router.post('/',verifyTokenAndAdmin, async(req, res)=>{
    const newProduct = new Product(req.body)
    try{

        const addedProduct = await newProduct.save();
        res.status(200).json(addedProduct)

    }catch(err){
        res.status(500).json(err)
    }
})


//UPDATE 
router.put('/:id', verifyTokenAndAdmin, async (req, res)=>{
     try{

         const updated = await Product.findByIdAndUpdate(req.params.id,{
             $set: req.body
         }, { new:true })

         res.status(200).json(updated)

     }catch(err){
         res.send(500).json(err)
     }
})


//DELETE PRODUCT
router.delete('/:id', verifyTokenAndAdmin, async(req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("PRODUCT DELETED")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET PRODUCT
router.get('/find/:id', async(req, res)=>{
    try{

        const product = await Product.findById(req.params.id)
        res.status(200).json(product);

    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL PRODUCTS
router.get('/', async(req, res)=>{
    const newQuery = req.query.new
    const catQuery = req.query.category
    const sizeQuery = req.query.size
    try{

        let products;
        if(newQuery){
            products = await Product.find().sort({ createdAt : -1 }).limit(5)
        }else if(catQuery && sizeQuery){
            products = await Product.find({
                categories: {
                    $in : catQuery
                },
                size:{
                    $in : sizeQuery 
                }
            })
        }else if(catQuery){
            products = await Product.find({
                categories: {
                    $in : catQuery
                }
            })
        }else if(sizeQuery){
            products = await Product.find({
                size:{
                    $in : sizeQuery 
                }
            })
        }else{
            products = await Product.find();
        }

        res.status(200).json(products)

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;