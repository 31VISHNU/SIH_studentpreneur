const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Organization = new Schema(
{

oid:{type: String,required:true,unique:true},
companyname:{type: String,required:true},
companylocation:{type: String,required:true},
companyemail:{type: String,required:true}

},{collection:'Organization'}
)
const Organisation=mongoose.model('Organization',Organization)
module.exports=Organisation