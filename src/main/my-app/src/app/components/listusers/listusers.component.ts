import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared-services/user.service';
import {StoreService} from '../../shared-services/store.service';
import {BrandService} from '../../shared-services/brand.service';
import {Store} from '../../Store';
import{User}  from '../../user';
import {Brand} from '../../Brand';
import {Router,Routes} from '@angular/router'
import { ProductService } from '../../shared-services/product.service';
import { Product } from '../../Product';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  private users:User[];
  private stores:Store[];
  private brands:Brand[];
  constructor(private userservice:UserService,private router:Router,private storeservice:StoreService
  ,private brandservice:BrandService,private productService:ProductService)
   {
      
   }

  ngOnInit() {
    // this.userservice.getusers().subscribe(users=>{
    //   console.log(users);
    //   this.users=users;
    // }
    // ,(error)=>{
    //   console.log(error);
    // })
  }
  updateUser(user)
  {
    this.userservice.setter(user);
    this.router.navigate(['/Register']);

  }
  newUser()
  {
     let user=new User();
    this.userservice.setter(user);
    this.router.navigate(['/Register']);
  }
  login()
  {
    let user = new User();
    this.userservice.setter(user);
    this.router.navigate(['Login']);
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
