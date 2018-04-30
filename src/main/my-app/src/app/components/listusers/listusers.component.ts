import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../shared-services/store.service';
import {BrandService} from '../../shared-services/brand.service';
import {Store} from '../../Store';
import{User}  from '../../user';
import {Brand} from '../../Brand';
import {Router,Routes} from '@angular/router'
import { ProductService } from '../../shared-services/product.service';
import { Product } from '../../Product';
import { NormaluserService } from '../../shared-services/user-services/normaluser.service';
import { NormalUser } from '../../NormalUser';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  private users:NormalUser[];
  private stores:Store[];
  private brands:Brand[];
  constructor(private userservice:NormaluserService,private router:Router,private storeservice:StoreService
  ,private brandservice:BrandService,private productService:ProductService)
   {
      
   }

  ngOnInit() {
    
  }
  updateUser(user)
  {
    this.userservice.setter(user);
    this.router.navigate(['/userform']);

  }
  newUser()
  {
     let user=new NormalUser();
    this.userservice.setter(user);
    this.router.navigate(['/userform']);
  }
  login()
  {
    let user = new NormalUser();
    this.userservice.setter(user);
    this.router.navigate(['/userlogin']);
  }
  
  
  deleteUser(user)
  {
      
    this.userservice.deleteUser(user.userID).subscribe((user)=>
    {
      console.log(user);
      this.users.splice(this.users.indexOf(user),1);
      this.router.navigate(['/']);
    },(error)=>
  {
    console.log(error);
  })
  }
}
