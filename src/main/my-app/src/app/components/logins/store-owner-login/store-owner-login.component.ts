import { Component, OnInit } from '@angular/core';
import { Router,Routes } from '@angular/router';
import { StoreOwner } from '../../../StoreOwner';
import { StoreownerService } from '../../../shared-services/user-services/storeowner.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-store-owner-login',
  templateUrl: './store-owner-login.component.html',
  styleUrls: ['./store-owner-login.component.css']
})
export class StoreOwnerLoginComponent implements OnInit {

  users:StoreOwner[];
  user:StoreOwner;
  constructor(private userservice:StoreownerService,private router:Router,
  private sstorage:SessionStorageService) { }

  ngOnInit() {
    if(this.user==null)this.user= new StoreOwner();

    this.userservice.setter(this.user);
  }
  processForm() 
  {
    
    this.userservice.userlogin(this.user).subscribe((user)=>{
     this.user=user;
     if(this.user.userID!=0)
     {
       console.log(this.user);
       this.userservice.setter(user);
       this.sstorage.store('storeowner',this.user);
       this.router.navigate(['/storeOwnerUser']);
     }
   },(error)=>{
     console.log(error);
   }
  )
}
}
