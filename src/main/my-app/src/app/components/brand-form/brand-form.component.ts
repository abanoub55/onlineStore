import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../shared-services/brand.service';
import { Brand } from '../../Brand';
import { Router, Routes } from '@angular/router'
@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {
  brand: Brand;
  constructor(private brandservice: BrandService, private router: Router) { }

  ngOnInit() {
    this.brand = this.brandservice.getter();
  }

  processForm() {
    if (this.brand.brandName == '' || this.brand.category== '')
    {
        alert('please fill the information needed!');
    }
    else {
      this.brandservice.createBrand(this.brand).subscribe((store) => {
        console.log(store);
        this.router.navigate(['/adminHome']);
      }, (error) => {
          console.log(error);
        })
    }
  }

}
