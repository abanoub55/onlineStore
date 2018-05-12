import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared-services/store.service';
import { Store } from '../../Store';
import {Router,Routes} from '@angular/router'
import { ProductService } from '../../shared-services/product.service';
import { Product } from '../../Product';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  stores:Store[];
  store:Store;
  products:Product[];
  product:Product;
  buttonClicked:boolean=false;
  constructor(private storeservice:StoreService,private router:Router,
  private productservice:ProductService) { }

  ngOnInit() {
    this.storeservice.getastores().subscribe(stores=>{
      console.log(stores);
      this.stores=stores;
    }
    ,(error)=>{
      console.log(error);
    }) 
    let store = new Store();
    this.store=store;
  }
  visit(store:Store)
  {
    this.storeservice.visit(store).subscribe((store)=>{
        console.log(store);
      },(error)=>{
        console.log(error);
      })
      //alert("visited!");
      this.buttonClicked=true;
      this.productservice.getstoreproducts(store.storeID).subscribe((products)=>{
        this.products=products;
        console.log(products);
      },(error)=>{
        console.log(error);
      })
      var p:any;
      for (p in this.products) {
         store.productsSold+=p.productsSold;
         store.numOfBuyers+=p.numOfBuyers;
      }
      this.router.navigate(['/userHome']);
  }
  productVisit(product)
  {
    
    this.productservice.visit(product).subscribe((product)=>{
      this.product=product;

    },(error)=>{
      console.log(error);
    }
  )
  alert("product visited!");
  }
  addStore()
  {
    let store=new Store();
    this.storeservice.setter(store);
    this.router.navigate(['/addStore']);
  }
  Buy(product)
  {
      this.productservice.setter(product);
      this.router.navigate(['/purchase']);
  }
 
}
