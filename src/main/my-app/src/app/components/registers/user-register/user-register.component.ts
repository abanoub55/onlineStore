import { Component, OnInit } from '@angular/core';
import {Router,Routes} from '@angular/router'
import { NormalUser } from '../../../NormalUser';
import { Admin } from '../../../Admin';
import { StoreOwner } from '../../../StoreOwner';
import {NormaluserService} from '../../../shared-services/user-services/normaluser.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  private user:NormalUser;
  private isAdmin:boolean=false;
  private isStoreOwner:boolean=false;
  constructor(private userservice:NormaluserService,private router:Router) { }

  ngOnInit() {
    this.user= new NormalUser();
  }
  toggleAdmin()
  {
      // this.isAdmin=!this.isAdmin;
      // if(this.isAdmin && this.isStoreOwner){this.toggleStoreOwner();}
      this.router.navigate(['/adminform']);
  }
  toggleStoreOwner()
  {
    // this.isStoreOwner=!this.isStoreOwner;
    // if(this.isAdmin && this.isStoreOwner){this.toggleAdmin();}
    this.router.navigate(['/soform']);
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
