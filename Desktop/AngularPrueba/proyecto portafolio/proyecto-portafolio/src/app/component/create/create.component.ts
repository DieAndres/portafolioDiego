import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service'
import {Project} from '../../models/projects';
import {UploadService} from '../../services/upload.service';
import { Global} from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[
    ProjectService,
    UploadService
  ]
})
export class CreateComponent implements OnInit {


  public status:string;
  public project:Project;
  public filesToUpload:Array<File>;
  public title:string;
 



  constructor(private _Service:ProjectService , private _uploadService:UploadService) { 
    this.project= new Project('','',null,'','','','');
    this.title="Crear Proyecto"
  }

  ngOnInit(): void {
    console.log(this.status);
  }

  onSubmit(form){
  

        this._Service.saveProject(this.project).subscribe(
          response=>
                {
                  console.log(response);
                  if(response)
                  {   
                    //Subir imagen
                   this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id,[],this.filesToUpload, 'image')
                   .then((result:any)=>{
                    this.status='success';
                    form.reset();
                    console.log(result);
                   })
                   
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
