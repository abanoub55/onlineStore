import { Component, OnInit } from '@angular/core';
import { StoreOwner } from '../../../StoreOwner';
import { StoreownerService } from '../../../shared-services/user-services/storeowner.service';
import {Router,Routes} from '@angular/router'

@Component({
  selector: 'app-store-owner-register',
  templateUrl: './store-owner-register.component.html',
  styleUrls: ['./store-owner-register.component.css']
})
export class StoreOwnerRegisterComponent implements OnInit {
  private user:StoreOwner;
  private isAdmin:boolean=false;
  private isStoreOwner:boolean=false;
  constructor(private userservice:StoreownerService,private router:Router) { }

  ngOnInit() {
    this.user= new StoreOwner();
  }
  toggleAdmin()
  {
      this.isAdmin=!this.isAdmin;
      if(this.isAdmin && this.isStoreOwner){this.toggleStoreOwner();}
  }
  toggleStoreOwner()
  {
    this.isStoreOwner=!this.isStoreOwner;
    if(this.isAdmin && this.isStoreOwner){this.toggleAdmin();}
  }
  processForm()
  {
    
    if(this.user.userID==0)
    {
      this.userservice.createUser(this.user).subscribe((user)=>
    {
      console.log(user);
      this.router.navigate(['/']);
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
        this.router.navigate(['/']);
      },(error)=>
    {
      console.log(error);
    })
    }
  
  
  }

}
