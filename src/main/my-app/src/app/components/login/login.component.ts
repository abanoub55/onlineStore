import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import { UserService } from '../../shared-services/user.service';
import {Router,Routes} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:User[];
  user:User;
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit() {
    this.user=this.userservice.getter();
  }
  processForm() 
  {
   this.userservice.userlogin(this.user).subscribe((user)=>{
     this.user=user;
     console.log(user);
   },(error)=>{
     console.log(error);
   }
  )
  if(this.user!=null)
  {
    if(this.user.permissionID==777)
    {
      console.log("admin user");
    }
    else if(this.user.permissionID==555)
    {
        console.log("storeOwner user");
    }
    else if(this.user.permissionID==111)
    {
      console.log("normal user");
    }
    this.router.navigate(['/']);
  }

  }


}
