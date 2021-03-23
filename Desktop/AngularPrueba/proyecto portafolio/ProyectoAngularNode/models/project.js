'use strict'

var mongoose=require('mongoose');

var Schema= mongoose.Schema;

var ProjectSchema= Schema({
    name:String,
    description:String,
    year:Number,
    langs:String,
    link:String,
    image:String,
});

module.exports=mongoose.model('Project', ProjectSchema);