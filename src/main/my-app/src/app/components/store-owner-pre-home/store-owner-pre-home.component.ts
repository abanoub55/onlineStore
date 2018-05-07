import { Component, OnInit } from '@angular/core';
import { Store } from '../../Store';
import { StoreService } from '../../shared-services/store.service';
import { Product } from '../../Product';
import { ProductService } from '../../shared-services/product.service';
import { Router,Routes } from '@angular/router';

@Component({
  selector: 'app-store-owner-pre-home',
  templateUrl: './store-owner-pre-home.component.html',
  styleUrls: ['./store-owner-pre-home.component.css']
})
export class StoreOwnerPreHomeComponent implements OnInit {

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
  goHome()
  {
    this.router.navigate(['/storeOwnerHome']);
  }
  visit(store:Store)
  {
    this.storeservice.visit(store).subscribe((store)=>{
        console.log(store);
      },(error)=>{
        console.log(error);
      })
      alert("visited!");
      this.buttonClicked=true;
      this.productservice.getstoreproducts(store.storeID).subscribe((products)=>{
        this.products=products;
        console.log(products);
      },(error)=>{
        console.log(error);
      })
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
  
  Buy(product)
  {
      this.productservice.setter(product);
      this.router.navigate(['/purchase']);
  }
}
