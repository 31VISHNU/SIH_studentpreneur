const mongoose = require('mongoose')
const Schema = mongoose.Schema
const projects = new Schema(
{

pid:{type: String,required:true,unique:true},
organisation:{type: String,required:true},
description:{type: String,required:true},
type:{type: String,required:true},
status:{type: String,required:true},
amount:{type: Number,required:true},
duedate:{type: String,required:true},
numOfTeamsRegistered:{type: Number,required:true},
teamId:{type:Array,required:true},
module_1_date:{type:String,required:true},
module_2_date:{type:String,required:true},
module_3_date:{type:String,required:true}

},{collection:'Project'}
)
const Project=mongoose.model('Project',projects)
module.exports=Project