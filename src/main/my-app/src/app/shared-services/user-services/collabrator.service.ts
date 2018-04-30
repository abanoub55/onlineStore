import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { Collabrator } from '../../Collabrator';
@Injectable()
export class CollabratorService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private user:Collabrator;
  constructor(public http:Http) { }
  getusers()
   {
     return this.http.get(this.baseUrl+"/cusers",this.options).map((response:Response)=>response.json());
   }
   userlogin(user:Collabrator)
   {
     return this.http.post(this.baseUrl+"/cuserlogin",JSON.stringify(user),this.options).map((response:Response)=>response.json());
   }
   getuser(id:number)
   {
    return this.http.get(this.baseUrl+"/cuser/"+id,this.options).map((response:Response)=>response.json());
   }
   deleteUser(id:number)
   {
    return this.http.delete(this.baseUrl+"/cuser/"+id,this.options).map((response:Response)=>response.json());

   }
   createUser(user:Collabrator)
   {
    return this.http.post(this.baseUrl+"/cuser",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   updateUser(user:Collabrator)
   {
    return this.http.put(this.baseUrl+"/cuser",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   setter(user:Collabrator)
   {
     this.user=user;
   }
   getter()
   {
     return this.user;
   }
}
