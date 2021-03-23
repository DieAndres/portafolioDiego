import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service'
import {Project} from '../../models/projects';
import {UploadService} from '../../services/upload.service';
import { Global} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, UploadService]
  
})
export class EditComponent implements OnInit {

  public status:string;
  public project:Project;
  public filesToUpload:Array<File>;
  public title:string;
  public url:String;
   



  constructor(private _Service:ProjectService , private _uploadService:UploadService,private router:Router, private route:ActivatedRoute) { 
    
    this.title="Editar proyecto"
    this.url=Global.url;
  }
  ngOnInit(): void {this.route.params.subscribe(params=>{
    let id = params.id;
   
    this.getProject(id);
  })
   
    
  }

  getProject(id){
    this._Service.getProject(id).subscribe(
      response=>{
      
        this.project=response.params;
        
      },
      error=>{
        console.log(<any>error);
      }
    )}

     onSubmit(){
  

        this._Service.editProject(this.project).subscribe(
          response=>
                {
                  
                  if(response)
                  {  
                     if(this.filesToUpload){
                    //Subir imagen
                   this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id,[],this.filesToUpload, 'image')
                   .then((result:any)=>{
                    this.status='edit';
                    
                    console.log(result);
                  
                   })
                  }
                  }
              
                },
          error=>{
            this.status='error';
            console.log(<any>error);
          }
        )}
  

   changefile(fileInput:any){
      this.filesToUpload=<Array<File>>fileInput.target.files;
     
   }
}