// const productModel = require('../models/productModel')
// const get = (req, res) => {
//     productModel.find()
//         .then(function (result) {
//             res.status(200)
//             res.json(result)
//         })
//         .catch(function (err) {
//             res.status(500)
//             res.send('internal server error')
//         })
// }

const productModel = require('../models/productModel');

const get= async(req,res)=>{
    try{
        const products=await productModel.find();
        res.status(200);
        res.json(products)
    }catch(err){
        res.status(500);
        res.send('internal server error');
    }
    
}


module.exports = {
    get
}