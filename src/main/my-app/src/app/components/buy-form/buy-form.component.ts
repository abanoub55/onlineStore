import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared-services/product.service';
import { Product } from '../../Product';
import {Router,Routes} from '@angular/router'

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {
  product:Product;
  amount:number;
  constructor(private productservice:ProductService, private router:Router) { }

  ngOnInit() {
    this.product=this.productservice.getter();
  }
  processForm()
  {
    console.log(this.amount);
    console.log(this.product);
    this.product.amount=this.product.amount-this.amount;
    this.product.numOfBuyers=this.product.numOfBuyers+1;
    this.product.productsSold= + this.amount;
    this.productservice.updateProduct(this.product).subscribe((product)=>{
      this.product=product;
    },(error)=>{
      console.log(error);
    }
  );
    this.router.navigate(['/userHome']);
  }
}
