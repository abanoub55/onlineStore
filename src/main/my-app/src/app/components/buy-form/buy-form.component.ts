import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared-services/product.service';
import { Product } from '../../Product';
import {Router,Routes} from '@angular/router'
import { NormalUser } from '../../NormalUser';
import { StoreOwner } from '../../StoreOwner';
import { SessionStorageService } from 'ngx-webstorage';
import { NormaluserService } from '../../shared-services/user-services/normaluser.service';
import { StoreownerService } from '../../shared-services/user-services/storeowner.service';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {
  product:Product;
  user:NormalUser;
  user2:StoreOwner;
  amount:number;
  pay:number;
  constructor(private productservice:ProductService, private router:Router,private sstorage:SessionStorageService,
  private normUserS:NormaluserService,private storeownerS:StoreownerService) { }

  ngOnInit() {
    this.product=this.productservice.getter();
    this.user=this.sstorage.retrieve('normalUser');
    this.user2=this.sstorage.retrieve('storeowner');
    this.pay=this.product.price;
    console.log("this is the normal user"+this.user);
    console.log(this.user);
    console.log("this is the store owner"+this.user2);
  }
  processForm()
  {
    if(this.amount ==0 || this.product.shippingAddress=='')
    {
      alert('please fill the information needed!');
    }
    else{
    if(this.user2!=null)
    {
      this.pay-=(0.15*this.pay);
      if(this.user2.firstPurchase!=null && !this.user2.firstPurchase)
      {
      this.pay-=(0.05*this.pay);
      this.user2.firstPurchase=true;
      this.storeownerS.updateUser(this.user2).subscribe(user=>{
        console.log(user);
    },(error)=>{
      console.log(error);
    })
      }

    }
    else if(this.user!=null)
    {
      if(this.user.firstPurchase!=null && !this.user.firstPurchase)
    {
      this.pay-=(0.05*this.pay);
       console.log(this.user.firstPurchase);
      this.user.firstPurchase=true;
      this.normUserS.updateUser(this.user).subscribe(user=>{
          console.log(user);
      },(error)=>{
        console.log(error);
      })
    }
    }
    
    if(this.amount==2)
    {
      this.pay-=(0.10*this.pay);
    }
    this.product.amount=this.product.amount-this.amount;
    this.product.numOfBuyers=this.product.numOfBuyers+1;
    this.product.productsSold= + this.amount;
    this.productservice.updateProduct(this.product).subscribe((product)=>{
      this.product=product;
    },(error)=>{
      console.log(error);
    }
  );
    alert("the total price is : "+this.pay);
    if(this.user!=null)this.router.navigate(['/userHome']);
    else
    this.router.navigate(['/storeOwnerUser']);
  }
}
}
