'use strict'
var project=require('../models/project')
var fs=require('fs');
var path=require('path');




var cProject={
    home:function (req,res) {
        return res.status(200).send({
            message:'Soy home'
        });
      },
      test:function(req,res){
          return res.status(200).send({
              message:'Soy test'
          });
      },

      addProject:function(req,res)
        {
                var newProjec= new project();
                var params=req.body;
                newProjec.name=params.name;
                newProjec.year=params.year;
                newProjec.description=params.description;
                newProjec.langs=params.langs;
                newProjec.link=params.link;
                newProjec.image=null;
                
                    newProjec.save((error, projectStored)=>{
                        if(error){
                            return res.status(500).send({
                            message:'Ocurrio un error'
                            })
                        };
                        if(!projectStored){
                            return res.status(500).send({
                                message:'Ocurrio un error',
                            });
                        }

                        return res.status(200).send({
                        
                            project:projectStored
                        });
                    });
                
                
    },

    getProject:function(req,res){
        var idProject=req.params.id;
     
            if(idProject==null) return res.status(500).send({message:'El proyecto no existe'});

        project.findById(idProject,(error,project)=>{
            if(error){
                return res.status(500).send({
                message:'Ocurrio un error'
                })
            };
            if(!project){
                return res.status(500).send({
                    message:'El proyecto no existe',
                });
            }

            return res.status(200).send({
                
                params:project
            });
        })
    },


    listProject:function(req,res){
        project.find({}).exec((error,projects)=>{
            if(error) return res.status(500).send({message:'Error al devolver datos'});

            if(!projects)return res.status(500).send({message:'No existe ningun proyecto'});
        
            return res.status(200).send({projects});
        })
    },


    updateProject:function(req,res){
        var idProject=req.params.id;
        var update=req.body;

        project.findByIdAndUpdate(idProject, update,(error,projectUpdate)=>{
            if(error) return res.status(500).send({message:'Error al actualizar datos'});

            if(!projectUpdate)return res.status(500).send({message:'No existe ningun proyecto'});
        
            return res.status(200).send({projectUpdate});
        })
    },


    deleteProject:function(req,res){
        var idProject=req.params.id;

        project.findByIdAndRemove(idProject,(error,deleteProject)=>{
            if(error) return res.status(500).send({message:'Error al eliminar datos'});

            if(!deleteProject)return res.status(500).send({message:'No existe ningun proyecto'});
        
            return res.status(200).send({deleteProject});   
        })
    },
    uploadImage:function (req,res) {
        var idProject=req.params.id;
        var filenName='Imagen no subida...';

        if(req.files){
            var filePath=req.files.image.path;
            var fileSplit= filePath.split('\\');
            var fileName=fileSplit[1];
            var extSplit=fileName.split('\.');
            var ext=extSplit[1];

            if(ext=='jpg' || ext=='png' || ext=='jpeg' || ext=='gif'){
                project.findByIdAndUpdate(idProject,{image:fileName},(error,imgUpdate)=>{
                    if(error) return res.status(500).send({message:'Error al cargar imagen'});
    
                    if(!imgUpdate)return res.status(500).send({message:'No existe ningun proyecto'});
                
                    return res.status(200).send({files:req.files}); 
                })
            }else{
               fs.unlink(filePath, (error)=>{
                   return res.status(200).send({message:'La extencion no es valida'})
               })
            }


            
        }
        else{
            return res.status(200).send({
               files:req.files
            })
        }
      },

    //RETURN IMAGE
    getImagenFile:function (req,res) {
        var file=req.params.file;
        var path_file='./uploads/'+file;
        
        fs.exists(path_file, (exists)=>{
            if (exists){
                return res.sendFile(path.resolve(path_file));
            }
            else{
               return res.status(400).send({
                   message:'No existe la imagen...'
               });
            }
        })
      },


  
};
module.exports=cProject;