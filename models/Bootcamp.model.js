const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Bootcamp = new Schema(
{

BOOTCAMP_ID:{type: String,required:true,unique:true},
BOOTCAMP_NAME:{type: String,required:true},
BOOTCAMP_LOCATION:{type: String,required:true},
BOOTCAMP_TOKEN_CODE:{type: String,required:true}

},{collection:'Bootcamp'}
)
const Bootcamps=mongoose.model('Bootcamp',Bootcamp)
module.exports=Bootcamps