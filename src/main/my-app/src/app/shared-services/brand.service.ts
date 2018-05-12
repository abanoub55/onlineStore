import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import {Brand} from '../Brand'
@Injectable()
export class BrandService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private brand:Brand;
  constructor(private http:Http) { }
  getbrands()
  {
    return this.http.get(this.baseUrl+"/brands",this.options).map((response:Response)=>response.json());
  }
  getbrand(name:string)
  {
   return this.http.get(this.baseUrl+"/brand/"+name,this.options).map((response:Response)=>response.json());
  }
 
  createBrand(brand:Brand)
  {
   return this.http.post(this.baseUrl+"/brand",JSON.stringify(brand),this.options).map((response:Response)=>response.json());

  }
 //  updateUser(user:User)
 //  {
 //   return this.http.put(this.baseUrl+"/user",JSON.stringify(user),this.options).map((response:Response)=>response.json());

 //  }
  setter(brand:Brand)
  {
    this.brand=brand;
  }
  getter()
  {
    return this.brand;
  }
}
