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
import { Statistics } from '../../Statistics';
import { StatService } from '../../shared-services/stat.service';
import { Brand } from '../../Brand';
import { BrandService } from '../../shared-services/brand.service';

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
  stats:Statistics[];
  stat:Statistics;
  brands:Brand[];
  buttonClicked:boolean=false;
  buttonClicked2:boolean=false;
  islist:boolean=false;
  listproducts:boolean=false;
  listbrands:boolean=false;
  liststores:boolean=false;
  constructor(private storeservice:StoreService,private router:Router,
  private productservice:ProductService,private statservice:StatService
,private brandservice:BrandService) { }

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
    this.statservice.getstats().subscribe(stats=>{
        this.stats=stats;
        console.log(this.stats);
    })
    this.brandservice.getbrands().subscribe(brands=>{
      this.brands=brands;
      console.log(this.brands);
    },(error)=>{
      console.log(error);
    })
    this.productservice.getproducts().subscribe(products=>{
      this.products=products;
      console.log(this.products);
    },(error)=>{
      console.log(error);
    })
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
listStats()
{
  this.islist=!this.islist;
}
show(stat:Statistics)
{
    if(stat.entityName=='product')
    {
      this.listproducts=true;
    }
    else if(stat.entityName=='brand')
    {
      this.listbrands=true;
    }
    else if(stat.entityName=='store')
    {
      this.liststores=true;
    }
}

avg(stat:Statistics)
{
      if(stat.entityName=='product')
      {
          
      }
      else if(stat.entityName=='store')
      {

      }
}
max()
{

}
min()
{

}
}
