import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service';
import{Project} from '../../models/projects'; 
import {Global} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects=[];
  public url=Global.url;
  public img:string;
  

  constructor(private _projectService:ProjectService,private router:Router, private route:ActivatedRoute) {

   }

  ngOnInit(): void {
   
    this.getProjects();
    
    
  }


  getProjects(){
    this._projectService.listProjects().subscribe(
      result=>{
       
        this.projects=result.projects;
        
        console.log(this.projects);
        
      },
      error=>{
        console.log(error);
      }
    )
  }

  deleteProjectCommponent(id){
    this._projectService.deleteProjectService(id).subscribe(
      
      result=>{
        console.log(result.deleteProject);
       if(result.deleteProject){
        location.reload();
         console.log(result.deleteProject);
      
        }
      },
      error=>{
          console.log(<any>error);
      }
    )
  }


}
