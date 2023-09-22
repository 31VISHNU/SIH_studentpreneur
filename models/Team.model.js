const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Team = new Schema(
{

teamid:{type: String,required:true,unique:true},
teamname:{type: String,required:true},
membersId:{type: Array,required:true},
projectId:{type: String,required:true}

},{collection:'Team'}
)
const Teams=mongoose.model('Team',Team)
module.exports=Teams