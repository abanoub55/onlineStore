import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { User } from '../user';
@Injectable()
export class UserService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private user:User;
  constructor(public http:Http)
   {

   }
   
   getusers()
   {
     return this.http.get(this.baseUrl+"/users",this.options).map((response:Response)=>response.json());
   }
   userlogin(user:User)
   {
     return this.http.post(this.baseUrl+"/userlogin",JSON.stringify(user),this.options).map((response:Response)=>response.json());
   }
   getuser(id:number)
   {
    return this.http.get(this.baseUrl+"/user/"+id,this.options).map((response:Response)=>response.json());
   }
   deleteUser(id:number)
   {
    return this.http.delete(this.baseUrl+"/user/"+id,this.options).map((response:Response)=>response.json());

   }
   createUser(user:User)
   {
    return this.http.post(this.baseUrl+"/user",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   updateUser(user:User)
   {
    return this.http.put(this.baseUrl+"/user",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   setter(user:User)
   {
     this.user=user;
   }
   getter()
   {
     return this.user;
   }

}
