'use strict'
var mongoose=require('mongoose');
var app=require('./app');
var port=3700;

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio',{ useNewUrlParser: true,useUnifiedTopology: true  })
  .then(()=>{
      console.log('Conexion a la base de datos establecida');

      //Crear servidor
      app.listen(port,()=>{
          console.log('El servidor fue creado');
      });
      
  });