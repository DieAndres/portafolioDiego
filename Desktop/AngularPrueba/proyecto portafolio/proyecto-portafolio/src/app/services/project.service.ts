import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import{ Project} from '../models/projects';
import {Global} from './global';
import {Observable, Observer} from 'rxjs';


@Injectable()
export class ProjectService{
    public url:string;

    constructor(private _http:HttpClient){
        this.url=Global.url;
    }
    saveProject(projects:Project) :Observable<any>{
        let project=JSON.stringify(projects);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'addProject', project, {headers:headers});
    }

    listProjects():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'listProjects',{headers:headers});
    }

    deleteProjectService(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'deleteProject/'+id,{headers:headers});
    }

    getProject(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'getProject/'+id, {headers:headers});
    }

    editProject(project):Observable<any>{
        let params=JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'upadateProject/'+project._id,params, {headers:headers});
    }
}