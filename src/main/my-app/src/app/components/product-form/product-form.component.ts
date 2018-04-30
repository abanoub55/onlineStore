import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared-services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../Product';
import { CommandService } from '../../shared-services/command.service';
import { Command } from '../../Command';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product:Product;
  constructor(private productservice:ProductService,private commandservice:CommandService,private router:Router) { }

  ngOnInit() {
    this.product=this.productservice.getter();
  }
  processForm()
  {
    this.productservice.createProduct(this.product).subscribe((product)=>
    {
      console.log(product);
      this.router.navigate(['/']);
    },(error)=>
  {
    console.log(error);
  })

  }
}
