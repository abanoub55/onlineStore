import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import {Product} from '../Product'
@Injectable()
export class ProductService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private product:Product;
  constructor(private http:Http) { }
  getproducts()
   {
     return this.http.get(this.baseUrl+"/products",this.options).map((response:Response)=>response.json());
   }
   getavailproducts()
   {
     return this.http.get(this.baseUrl+"/availproducts",this.options).map((response:Response)=>response.json());
   }
   getproduct(id:number)
   {
    return this.http.get(this.baseUrl+"/product/"+id,this.options).map((response:Response)=>response.json());
   }
  
   getstoreproducts(id:number)
   {
    return this.http.get(this.baseUrl+"/products/"+id,this.options).map((response:Response)=>response.json());

   }
   getNewProduct()
   {
      return this.http.get(this.baseUrl+"/newproduct/",this.options).map((response:Response)=>response.json());
   }
   createProduct(product:Product)
   {
    return this.http.post(this.baseUrl+"/product",JSON.stringify(product),this.options).map((response:Response)=>response.json());

   }
   visit(product:Product)
   {
    return this.http.put(this.baseUrl+"/product",JSON.stringify(product),this.options).map((response:Response)=>response.json());

   }
   deleteStoreProduct(product:Product)
   {
    return this.http.put(this.baseUrl+"/deleteStoreProduct",JSON.stringify(product),this.options).map((response:Response)=>response.json());

   }
   updateProduct(product:Product)
   {
    return this.http.put(this.baseUrl+"/updateProduct",JSON.stringify(product),this.options).map((response:Response)=>response.json());
   }
   deleteProduct(id:number)
   {
    return this.http.delete(this.baseUrl+"/productDel/"+id,this.options).map((response:Response)=>response.json());
   }
   addProduct(storeid:number)
   {
    return this.http.put(this.baseUrl+"/addProduct",JSON.stringify(storeid),this.options).map((response:Response)=>response.json());
   }

   setter(product:Product)
   {
     this.product=product;
   }
   getter()
   {
     return this.product;
   }
}
