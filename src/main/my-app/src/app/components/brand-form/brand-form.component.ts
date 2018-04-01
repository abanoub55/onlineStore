import { Component, OnInit } from '@angular/core';
import {BrandService} from '../../shared-services/brand.service';
import {Brand} from '../../Brand';
import {Router} from '@angular/router';
@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {
  brand:Brand;
  constructor(private brandservice:BrandService,private router:Router) { }

  ngOnInit() {
    this.brand=this.brandservice.getter();
  }

  processForm()
  {

    this.brandservice.createStore(this.brand).subscribe((store)=>
    {
      console.log(store);
      this.router.navigate(['/']);
    },(error)=>
  {
    console.log(error);
  })
    
  }

}
