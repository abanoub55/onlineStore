import { Component, OnInit } from '@angular/core';
import {Router,Routes} from '@angular/router'
import { Admin } from '../../../Admin';
import { AdminService } from '../../../shared-services/user-services/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  private user:Admin;
  private isAdmin:boolean=false;
  private isStoreOwner:boolean=false;
  constructor(private userservice:AdminService,private router:Router) { }

  ngOnInit() {
    this.user= new Admin();
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
