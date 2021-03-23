'use strict'

var express=require('express');

var ProjectController=require('../controllers/cProject');


var router=express.Router();

var mulipart=require('connect-multiparty');
var multMiddlware=mulipart({uploadDir:'./uploads'});

router.get('/home',ProjectController.home);
router.get('/test',ProjectController.test);
router.post('/addProject',ProjectController.addProject);
router.get('/getProject/:id?',ProjectController.getProject);
router.get('/listProjects', ProjectController.listProject);

router.put('/upadateProject/:id?', ProjectController.updateProject);

router.delete('/deleteProject/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multMiddlware, ProjectController.uploadImage);
router.get('/get-image/:file', ProjectController.getImagenFile);

module.exports=router;