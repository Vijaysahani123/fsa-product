const express=require('express')
const productCtrl=require('../controllers/productsCtrl')

const router=express.Router()

router.get('/api/products',productCtrl.get)

module.exports=router;

