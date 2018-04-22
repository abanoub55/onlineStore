import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import {Statistics} from '../Statistics';
@Injectable()
export class StatService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private stat:Statistics;
  constructor(private http:Http) { }

  createStat(stat:Statistics)
   {
    return this.http.post(this.baseUrl+"/stat",JSON.stringify(stat),this.options).map((response:Response)=>response.json());

   }
   getstats()
   {
     return this.http.get(this.baseUrl+"/stats",this.options).map((response:Response)=>response.json());
   }
}
