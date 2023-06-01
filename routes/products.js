import { Router } from "express";
const router = Router()


router.get('/',(req, res)=>{
    res.render('home', {
        title: "Boom shop"
    })
})

router.get('/products',(req, res)=>{
    res.render('products', {
        title: 'Products',
    })
})

router.get('/add',(req, res)=>{
    res.render('add', {
        title: 'Add'
    })
})




export default router