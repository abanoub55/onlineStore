import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared-services/product.service';
import { Product } from '../../Product';
import {Router,Routes} from '@angular/router'
import { NormalUser } from '../../NormalUser';
import { StoreOwner } from '../../StoreOwner';
import { SessionStorageService } from 'ngx-webstorage';

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
  constructor(private productservice:ProductService, private router:Router,private sstorage:SessionStorageService) { }

  ngOnInit() {
    this.product=this.productservice.getter();
    this.user=this.sstorage.retrieve('user');
    this.user2=this.sstorage.retrieve('storeowner');
  }
  processForm()
  {
    console.log(this.amount);
    console.log(this.product);
    if(this.user2!=undefined)
    {
      this.product.price-=(0.15*this.product.price);
    }
    if(this.user2.firstPurchase==true || this.user.firstPurchase)
    {
      this.product.price-=(0.05*this.product.price);
    }
    if(this.amount>=2)
    {
      this.product.price-=(0.10*this.product.price);
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
    alert("the total price is : "+this.product.price);
    if(this.user!=undefined)this.router.navigate(['/userHome']);
    else
    this.router.navigate(['/storeonwer']);
  }
}
