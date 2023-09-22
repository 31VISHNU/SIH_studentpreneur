const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Employee = new Schema(
{
id:{type: String,required:true,unique:true},
name:{type: String,required:true},
role:{type: String,required:true},
phoneNum:{type: Number,required:true},
mailId:{type:String,required:true},
password:{type:String,required:true}
},{collection:'Employee'}
)
const Employees=mongoose.model('Employee',Employee)
module.exports=Employees