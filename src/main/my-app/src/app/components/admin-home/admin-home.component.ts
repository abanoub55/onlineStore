import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared-services/store.service';
import { Store } from '../../Store';
import {Router,Routes} from '@angular/router'
import { BrandService } from '../../shared-services/brand.service';
import {Brand} from '../../Brand';
import { Product } from '../../Product';
import { ProductService } from '../../shared-services/product.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  stores:Store[];
  constructor(private storeservice:StoreService,private router:Router,
  private brandservice:BrandService,private productservice:ProductService) { }

  ngOnInit() {
    this.storeservice.getustores().subscribe((stores)=>{
      this.stores=stores;
      console.log(stores);
    },(error)=>{
      console.log(error);
    })
  }
  accept(store:Store)
  {
      this.storeservice.accept(store).subscribe((store)=>{
        console.log(store);
      },(error)=>{
        console.log(store);
      })
      this.stores.splice(this.stores.indexOf(store),1);
      this.router.navigate(['/adminHome']);
    }
  reject(store:Store)
  {
    this.storeservice.deleteStore(store.storeID).subscribe((store)=>{
      console.log(store);

    },(error)=>{
      console.log(error);
    })
    this.stores.splice(this.stores.indexOf(store),1);

    this.router.navigate(['/adminHome']);
  }
  addBrand()
  {
    let brand=new Brand();
    this.brandservice.setter(brand);
    this.router.navigate(['/addBrand']);
  }
  addProduct()
  {
    let product= new Product();
    product.owningStore=0;
    this.productservice.setter(product);
    this.router.navigate(['/addProduct']);
  }
}
