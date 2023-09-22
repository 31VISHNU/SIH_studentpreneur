const mongoose = require('mongoose')
const Schema = mongoose.Schema
const pr = new mongoose.Schema({
    id: String,
    status: String,
    levelOfCompletion: Number,
});
const Student = new Schema(
{

sid:{type: String,required:true,unique:true},
address:{type: String,required:true},
name:{type: String,required:true},
registerNo:{type: Number,required:true},
clgName:{type: String,required:true},
clgCity:{type: String,required:true},
clgState:{type: String,required:true},
panNo:{type: String,required:true},
phoneNo:{type:Number,required:true},
accountNo:{type: Number,required:true,unique:true},
bankName:{type: String,required:true},
ifscCode:{type: Number,required:true},
mailId:{type: String,required:true},
password:{type: String,required:true},
githubId:{type: String,required:true},
creditPoints:{type: Number,required:true},
projects:{type: pr,required:true},

    

},{collection:'Student'}
)
const Students=mongoose.model('Student',Student)
module.exports=Students