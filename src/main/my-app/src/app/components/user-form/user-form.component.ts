import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import { UserService } from '../../shared-services/user.service';
import {Router,Routes} from '@angular/router'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user:User;
  private isAdmin:boolean=false;
  private isStoreOwner:boolean=false;
  constructor(private userservice:UserService,private router:Router) 
  {

  }
  
  ngOnInit() {
    this.user=this.userservice.getter();
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
    if(this.user.masterPassword==null && this.user.storeID==null)
    {
      if(this.user.permissionID==null)this.user.permissionID=111;
    }
    else if(this.user.masterPassword!=null && this.user.storeID==null)
    {
       if(this.user.permissionID==null)this.user.permissionID=777;
    }
    else if(this.user.masterPassword==null && this.user.storeID!=null)
    {
      if(this.user.permissionID==null)this.user.permissionID=555;
    }
    if(this.user.userID==undefined)
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
