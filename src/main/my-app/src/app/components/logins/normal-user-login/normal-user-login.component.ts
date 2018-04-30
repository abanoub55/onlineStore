import { Component, OnInit } from '@angular/core';
import { NormalUser } from '../../../NormalUser';
import { Router,Routes } from '@angular/router';
import { NormaluserService } from '../../../shared-services/user-services/normaluser.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-normal-user-login',
  templateUrl: './normal-user-login.component.html',
  styleUrls: ['./normal-user-login.component.css']
})
export class NormalUserLoginComponent implements OnInit {
  users:NormalUser[];
  user:NormalUser;
  constructor(private userservice:NormaluserService,private router:Router,
  private sstorage:SessionStorageService) { }

  ngOnInit() {
    if(this.user==null)this.user= new NormalUser();

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
       this.sstorage.store('normalUser',this.user);
       this.router.navigate(['/userHome']);
     }
   },(error)=>{
     console.log(error);
   }
  )
}


}
