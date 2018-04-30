import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { StoreOwner } from '../../StoreOwner';
@Injectable()
export class StoreownerService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private user:StoreOwner;
  constructor(public http:Http) { }
  getusers()
   {
     return this.http.get(this.baseUrl+"/susers",this.options).map((response:Response)=>response.json());
   }
   userlogin(user:StoreOwner)
   {
     return this.http.post(this.baseUrl+"/suserlogin",JSON.stringify(user),this.options).map((response:Response)=>response.json());
   }
   getuser(id:number)
   {
    return this.http.get(this.baseUrl+"/suser/"+id,this.options).map((response:Response)=>response.json());
   }
   deleteUser(id:number)
   {
    return this.http.delete(this.baseUrl+"/suser/"+id,this.options).map((response:Response)=>response.json());

   }
   createUser(user:StoreOwner)
   {
    return this.http.post(this.baseUrl+"/suser",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   updateUser(user:StoreOwner)
   {
    return this.http.put(this.baseUrl+"/suser",JSON.stringify(user),this.options).map((response:Response)=>response.json());

   }
   setter(user:StoreOwner)
   {
     this.user=user;
   }
   getter()
   {
     return this.user;
   }
}

