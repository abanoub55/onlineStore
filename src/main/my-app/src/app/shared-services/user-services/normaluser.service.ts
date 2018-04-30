import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { NormalUser } from '../../NormalUser';
@Injectable()
export class NormaluserService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private user:NormalUser;
  constructor(public http:Http) { }
  getusers()
   {
     return this.http.get(this.baseUrl+"/nusers",this.options).map((response:Response)=>response.json());
   }
   userlogin(user:NormalUser)
   {
     return this.http.post(this.baseUrl+"/nuserlogin",JSON.stringify(user),this.options).map((response:Response)=>response.json());
   }
   getuser(id:number)
   {
    return this.http.get(this.baseUrl+"/nuser/"+id,this.options).map((response:Response)=>response.json());
   }
   deleteUser(id:number)
   {
    return this.http.delete(this.baseUrl+"/nuser/"+id,this.options).map((response:Response)=>response.json());

   }
   createUser(user:NormalUser)
   {
    return this.http.post(this.baseUrl+"/nuser",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   updateUser(user:NormalUser)
   {
    return this.http.put(this.baseUrl+"/nuser",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   setter(user:NormalUser)
   {
     this.user=user;
   }
   getter()
   {
     return this.user;
   }
}
