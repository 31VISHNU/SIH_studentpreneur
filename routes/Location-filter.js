const router= require('express').Router();
const LocalStorage = require('node-localstorage').LocalStorage;
let bootcamp=require('../models/Bootcamp.model');
router.post('/gf',async (req,res)=>{
    console.log(bootcamp.find());
    await bootcamp.find({})
    .then(bootcamps=>res.json(bootcamps))
    .catch(err=>res.status(400).json('error'+err));

})
module.exports = router