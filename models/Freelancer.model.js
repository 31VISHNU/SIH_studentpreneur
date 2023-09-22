const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Freelancer = new Schema(
{

freelancer_email:{type: String,required:true,unique:true},
freelancer_username:{type: String,required:true},
freelancer_Token_code:{type: String,required:true},
freelancer_clg_id:{type: String,required:true}

},{collection:'Freelancer'}
)
const Freelancers=mongoose.model('Freelancer',Freelancer)
module.exports=Freelancers