import { Component, OnInit } from '@angular/core';
import { Router,Routes } from '@angular/router';
import { Collabrator } from '../../../Collabrator';
import { CollabratorService } from '../../../shared-services/user-services/collabrator.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-collabrator-login',
  templateUrl: './collabrator-login.component.html',
  styleUrls: ['./collabrator-login.component.css']
})
export class CollabratorLoginComponent implements OnInit {

  users:Collabrator[];
  user:Collabrator;
  constructor(private userservice:CollabratorService,private router:Router,
  private sstorage:SessionStorageService) { }

  ngOnInit() {
    if(this.user==null)this.user= new Collabrator();
    
  }
  processForm() 
  {
    
    this.userservice.userlogin(this.user).subscribe((user)=>{
     this.user=user;
     if(this.user.userID!=0)
     {
       console.log(this.user);
       this.userservice.setter(user);
       this.sstorage.store('collabrator',this.user);
       this.router.navigate(['/collabHome']);
     }
   },(error)=>{
     console.log(error);
   }
  )
}
}
