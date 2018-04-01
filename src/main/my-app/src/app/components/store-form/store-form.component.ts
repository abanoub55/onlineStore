import { Component, OnInit } from '@angular/core';
import {Store} from '../../Store';
import {StoreService} from '../../shared-services/store.service';
import {Router,Routes} from '@angular/router';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {
  private store:Store;
  constructor(private storeservice:StoreService,private router:Router) { }

  ngOnInit() {
    this.store=this.storeservice.getter();

  }
  processForm()
  {

      this.store.approved=false;
    this.storeservice.createStore(this.store).subscribe((store)=>
    {
      console.log(store);
      this.router.navigate(['/userHome']);
    },(error)=>
  {
    console.log(error);
  })
    
  }

  
}
