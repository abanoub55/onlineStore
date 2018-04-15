import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import {Store} from '../Store'
@Injectable()
export class StoreService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private store:Store;
  constructor(private http:Http)
   {

   }
   getstores()
   {
     return this.http.get(this.baseUrl+"/stores",this.options).map((response:Response)=>response.json());
   }
   getastores()
   {
     return this.http.get(this.baseUrl+"/astores",this.options).map((response:Response)=>response.json());
   }
   getustores()
   {
     return this.http.get(this.baseUrl+"/ustores",this.options).map((response:Response)=>response.json());
   }
   getstore(id:number)
   {
    return this.http.get(this.baseUrl+"/store/"+id,this.options).map((response:Response)=>response.json());
   }
  
   createStore(store:Store)
   {
    return this.http.post(this.baseUrl+"/store",JSON.stringify(store),this.options).map((response:Response)=>response.json());

   }
   update(store:Store)
   {
    return this.http.put(this.baseUrl+"/storeUpdate",JSON.stringify(store),this.options).map((response:Response)=>response.json());

   }
   visit(store:Store)
   {
    return this.http.put(this.baseUrl+"/store",JSON.stringify(store),this.options).map((response:Response)=>response.json());

   }
   accept(store:Store)
   {
   
     return this.http.put(this.baseUrl+"/storeaccept",JSON.stringify(store),this.options).map((response:Response)=>response.json());
 
   }
   deleteStore(id:number)
   {
    return this.http.delete(this.baseUrl+"/storeDel/"+id,this.options).map((response:Response)=>response.json());

   }
   setter(store:Store)
   {
     this.store=store;
   }
   getter()
   {
     return this.store;
   }
}
