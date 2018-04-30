import { Component, OnInit } from '@angular/core';
import { Router,Routes } from '@angular/router';
import { AdminService } from '../../../shared-services/user-services/admin.service';
import { Admin } from '../../../Admin';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  users:Admin[];
  user:Admin;
  constructor(private userservice:AdminService,private router:Router,
  private sstorage:SessionStorageService) { }

  ngOnInit() {
    if(this.user==null)this.user= new Admin();

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
       this.sstorage.store('admin',this.user);
       this.router.navigate(['/adminHome']);
     }
   },(error)=>{
     console.log(error);
   }
  )
}

}
