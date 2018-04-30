import { Injectable } from '@angular/core';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';
import { Command } from '../Command';
@Injectable()
export class CommandService {
  private baseUrl="http://localhost:8080/api";
  private headers= new Headers({"content-type":'application/json'});
  private options= new RequestOptions({headers:this.headers});
  private command:Command;
  constructor(private http:Http) { }
  createCommand(command:Command)
   {
    return this.http.post(this.baseUrl+"/command",JSON.stringify(command),this.options).map((response:Response)=>response.json());

   }
   getcommands(id:number)
   {
    return this.http.get(this.baseUrl+"/commands"+id,this.options).map((response:Response)=>response.json());

   }
   deleteCommand(id:number)
   {
    return this.http.delete(this.baseUrl+"/commandDel/"+id,this.options).map((response:Response)=>response.json());
   }
   setter(command:Command)
   {
     this.command=command;
   }
   getter()
   {
     return this.command;
   }
}
