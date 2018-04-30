import { Component, OnInit } from '@angular/core';
import {Router,Routes} from '@angular/router'
import { Collabrator } from '../../../Collabrator';
import { CollabratorService } from '../../../shared-services/user-services/collabrator.service';
import { StoreownerService } from '../../../shared-services/user-services/storeowner.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-collabrator-register',
  templateUrl: './collabrator-register.component.html',
  styleUrls: ['./collabrator-register.component.css']
})
export class CollabratorRegisterComponent implements OnInit {
  private user:Collabrator;

  constructor(private userservice:CollabratorService,private router:Router,
  private storeownerservice:StoreownerService,private sstorage:SessionStorageService) { }

  ngOnInit() {
    this.user= new Collabrator();
  }
 
  processForm()
  {
    this.user.storeID=this.sstorage.retrieve('storeowner').storeID;
    if(this.user.userID==0)
    {
      
      this.userservice.createUser(this.user).subscribe((user)=>
    {
      console.log(user);
      this.router.navigate(['/storeOwnerHome']);
    },(error)=>
  {
    console.log(error);
  })
    }
    else
    {
      this.userservice.updateUser(this.user).subscribe((user)=>
      {
        console.log(user);
        this.router.navigate(['/storeOwnerHome']);
      },(error)=>
    {
      console.log(error);
    })
    }
  
  this.router.navigate(['/storeOwnerHome']);
  }
}
