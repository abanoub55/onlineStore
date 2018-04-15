import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared-services/store.service';
import { Store } from '../../Store';
import {Router,Routes} from '@angular/router'
import { Product } from '../../Product';
import { ProductService } from '../../shared-services/product.service';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/observable';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-store-owner-home',
  templateUrl: './store-owner-home.component.html',
  styleUrls: ['./store-owner-home.component.css']
})
export class StoreOwnerHomeComponent implements OnInit {
  stores:Store[];
  store:Store;
  products:Product[];
  product:Product;
  buttonClicked:boolean=false;
  buttonClicked2:boolean=false;
 
  constructor(private storeservice:StoreService,private router:Router,
  private productservice:ProductService) { }

  ngOnInit() {
    this.storeservice.getstores().subscribe(stores=>{
      console.log(stores);
      this.stores=stores;
    }
    ,(error)=>{
      console.log(error);
    }) 
    let store= new Store();
    this.store=store;
    let product= new Product();
    this.product=product;
  }
  showStats()  {
    this.storeservice.getstore(this.store.storeID).subscribe((store)=>{
     this.store=store;
   },(error)=>{
     console.log(error);
   })
    this.productservice.getstoreproducts(this.store.storeID).subscribe((products)=>{
     this.products=products;
     console.log(products);
   },(error)=>{
     console.log(error);
   })
    this.buttonClicked=true;
    this.buttonClicked2=true;
   console.log(this.store.storeID);
   this.refreshDdata();
}
refreshDdata()
{
   timer(60000).first().subscribe(() => this.showStats());
}
// addToStore()
// {
//   this.productservice.
// }

}
