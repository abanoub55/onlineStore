import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { Admin } from '../../Admin';
@Injectable()
export class AdminService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private user:Admin;
  constructor(public http:Http) { }
  getusers()
   {
     return this.http.get(this.baseUrl+"/ausers",this.options).map((response:Response)=>response.json());
   }
   userlogin(user:Admin)
   {
     return this.http.post(this.baseUrl+"/auserlogin",JSON.stringify(user),this.options).map((response:Response)=>response.json());
   }
   getuser(id:number)
   {
    return this.http.get(this.baseUrl+"/auser/"+id,this.options).map((response:Response)=>response.json());
   }
   deleteUser(id:number)
   {
    return this.http.delete(this.baseUrl+"/auser/"+id,this.options).map((response:Response)=>response.json());

   }
   createUser(user:Admin)
   {
    return this.http.post(this.baseUrl+"/auser",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   updateUser(user:Admin)
   {
    return this.http.put(this.baseUrl+"/auser",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   setter(user:Admin)
   {
     this.user=user;
   }
   getter()
   {
     return this.user;
   }
}
