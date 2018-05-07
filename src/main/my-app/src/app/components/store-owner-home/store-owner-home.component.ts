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
import { Command } from '../../Command';
import { CommandService } from '../../shared-services/command.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Collabrator } from '../../Collabrator';
import { StoreOwner } from '../../StoreOwner';

@Component({
  selector: 'app-store-owner-home',
  templateUrl: './store-owner-home.component.html',
  styleUrls: ['./store-owner-home.component.css']
})
export class StoreOwnerHomeComponent implements OnInit {
  stores:Store[];
  store:Store;
  products:Product[];
  allproducts:Product[];
  product:Product;
  stats:Statistics[];
  stat:Statistics;
  brands:Brand[];
  availps:boolean=false;
  islist:boolean=false;
  listproducts:boolean=false;
  listbrands:boolean=false;
  liststores:boolean=false;
  commands:Command[];
  availprods:Product[];
  constructor(private storeservice:StoreService,private router:Router,
  private productservice:ProductService,private statservice:StatService
,private brandservice:BrandService,private commandservice:CommandService,
private sstorage:SessionStorageService) { }

  ngOnInit() {
    this.productservice.getavailproducts().subscribe((availproducts)=>{
        this.availprods=availproducts;
        console.log(this.availprods);

    },(error)=>{
      console.log(error);
    })
    this.storeservice.getstore(this.sstorage.retrieve('storeowner').storeID).subscribe((store)=>{
      this.store=store;
    },(error)=>{
      console.log(error);
    })
    this.commandservice.getcommands(this.sstorage.retrieve('storeowner').storeID).subscribe((commands)=>{
      this.commands=commands;
      console.log(commands);
    },(error)=>{
      console.log(error);
    })
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
      this.allproducts=products;
      console.log(this.products);
    },(error)=>{
      console.log(error);
    })
    this.showStats();
  }
  showStats()  {
    let s = new StoreOwner();
    s=this.sstorage.retrieve('storeowner');
    this.storeservice.getstore(s.storeID).subscribe((store)=>{
     this.store=store;
   },(error)=>{
     console.log(error);
   })
    this.productservice.getstoreproducts(s.storeID).subscribe((products)=>{
     this.products=products;
     console.log(products);
   },(error)=>{
     console.log(error);
   })

   console.log(this.store.storeID);
   this.refreshDdata();
}
refreshDdata()
{
   timer(60000).first().subscribe(() => this.showStats());
}

addProduct()
{
  this.availps=!this.availps;
}
add(product:Product)
{
  product.owningStore=this.sstorage.retrieve('storeowner').storeID;
  this.availprods.splice(this.availprods.indexOf(product),1);
  this.productservice.updateProduct(product).subscribe((productt)=>{
    console.log(productt);
  },(error)=>{
    console.log(error);})

    alert('added successfully to your store!');
    let cmd= new Command("add");
    //cmd.operationName="add";
    cmd.name=product.name;
    cmd.productID=product.productID;cmd.amount=product.amount;
    cmd.brandName=product.brandName;cmd.owningStore=product.owningStore;
    cmd.numOfBuyers=product.numOfBuyers;cmd.numOfVisits=product.numOfVisits;
    cmd.price=product.price;cmd.productsSold=product.productsSold;
    cmd.shippingAddress=product.shippingAddress;cmd.category=product.category;
    this.commandservice.createCommand(cmd).subscribe((command)=>{
      console.log(command);
    },(error)=>{
      console.log(error);
    })
    this.commandservice.getcommands(this.sstorage.retrieve('storeowner').storeID).subscribe((commands)=>{
      this.commands=commands;
      console.log(commands);
    },(error)=>{
      console.log(error);
    })
    this.productservice.getstoreproducts(this.sstorage.retrieve('storeowner').storeID).subscribe((products)=>{
      this.products=products;
      console.log(products);
    },(error)=>{
      console.log(error);
    })
}
listStats()
{
  this.islist=!this.islist;
}
edit(product:Product)
{
  this.productservice.setter(product);
  this.sstorage.store('editPressed',product);
  this.router.navigate(['addProduct']);
}
delete(product:Product)
{
  
  this.productservice.deleteStoreProduct(product).subscribe((command)=>{
    console.log(command);

  },(error)=>{
    console.log(error)}
  )
  this.products.splice(this.products.indexOf(product),1);

  alert('deleted successfully from your store!');
    let cmd= new Command("delete");
    cmd.name=product.name;
    cmd.productID=product.productID;cmd.amount=product.amount;
    cmd.brandName=product.brandName;cmd.owningStore=product.owningStore;
    cmd.numOfBuyers=product.numOfBuyers;cmd.numOfVisits=product.numOfVisits;
    cmd.price=product.price;cmd.productsSold=product.productsSold;
    cmd.shippingAddress=product.shippingAddress;cmd.category=product.category;
    this.commandservice.createCommand(cmd).subscribe((command)=>{
      console.log(command);
    },(error)=>{
      console.log(error);
    })
    this.commandservice.getcommands(this.sstorage.retrieve('storeowner').storeID).subscribe((commands)=>{
      this.commands=commands;
      console.log("these are your commands !"+commands);
    },(error)=>{
      console.log(error);
    })
    this.productservice.getstoreproducts(this.sstorage.retrieve('storeowner').storeID).subscribe((products)=>{
      this.products=products;
      console.log(products);
    },(error)=>{
      console.log(error);
    })
}
show(stat:Statistics)
{
    if(stat.entityName=='product')
    {
      this.listproducts=!this.listproducts;
    }
    else if(stat.entityName=='brand')
    {
      this.listbrands=!this.listbrands;
    }
    else if(stat.entityName=='store')
    {
      this.liststores=!this.liststores;
    }
}
undo(command:Command)
  {
      if(command.name=='add')
      {
        //command.prod.owningStore=0;
      }
      else if(command.name=='delete')
      {
      //  command.prod.owningStore=this.sstorage.retrieve('storeowner').storeID;
        
      }
      else if(command.name=='edit')
      {

      }
      // this.productservice.updateProduct(command.prod).subscribe((product)=>{
      // },(error)=>{
      //   console.log(error);
      // })
      this.commandservice.deleteCommand(command.id).subscribe((command)=>{

      },(error)=>{
        console.log(error);
      })
      this.commands.splice(this.commands.indexOf(command),1);
      this.commandservice.getcommands(this.sstorage.retrieve('storeowner').storeID).subscribe((commands)=>{
        this.commands=commands;
        console.log(commands);
      },(error)=>{
        console.log(error);
      })
      this.productservice.getstoreproducts(this.sstorage.retrieve('storeowner').storeID).subscribe((products)=>{
        this.products=products;
        console.log(products);
      },(error)=>{
        console.log(error);
      })

  }
addCollab()
{
  this.router.navigate(['collabform']);
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
