import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared-services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../Product';
import { CommandService } from '../../shared-services/command.service';
import { Command } from '../../Command';
import { SessionStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product:Product;
  operation:boolean=false;
  constructor(private productservice:ProductService,private commandservice:CommandService,private router:Router,
  private sstorage:SessionStorageService) { }

  ngOnInit() {

    if(this.sstorage.retrieve('editPressed')){
      
      let cmd= new Command("edit");
      this.product=this.sstorage.retrieve('editPressed');
    this.operation=true;
    cmd.name=this.product.name;cmd.operationID=333;
    cmd.productID=this.product.productID;cmd.amount=this.product.amount;
    cmd.brandName=this.product.brandName;cmd.owningStore=this.product.owningStore;
    cmd.numOfBuyers=this.product.numOfBuyers;cmd.numOfVisits=this.product.numOfVisits;
    cmd.price=this.product.price;cmd.productsSold=this.product.productsSold;
    cmd.shippingAddress=this.product.shippingAddress;cmd.category=this.product.category;
    this.commandservice.createCommand(cmd).subscribe((command)=>{
      console.log(command);
    },(error)=>{
      console.log(error);
    })
    }
    else
    {
      this.product=new Product();
    }
  }
  processForm()
  {
    if(this.operation)
    {
      this.productservice.updateProduct(this.product).subscribe(product=>{
        alert("updated!");
      })
    }
    else{
    this.productservice.createProduct(this.product).subscribe((product)=>
    {
      console.log(product);
      alert('added successfully!');
    },(error)=>
  {
    console.log(error);
  })
    }
 
}

}
