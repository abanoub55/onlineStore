import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {UserService} from './shared-services/user.service';
import { ListusersComponent } from './components/listusers/listusers.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { StoreFormComponent } from './components/store-form/store-form.component';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { StoreService } from './shared-services/store.service';
import { BrandService } from './shared-services/brand.service';
import { ProductService } from './shared-services/product.service';
import { LoginComponent } from './components/login/login.component';
import { StoreOwnerHomeComponent } from './components/store-owner-home/store-owner-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const appRoutes=[
{path:'' ,component:ListusersComponent},
{path:'Register',component:UserFormComponent },
{path:'addStore',component:StoreFormComponent },
{path:'addBrand',component:BrandFormComponent },
{path:'addProduct',component:ProductFormComponent},
{path:'adminHome',component:AdminHomeComponent},
{path:'storeOwnerHome',component:StoreOwnerHomeComponent},
{path:'userHome',component:UserHomeComponent},
{path:'Login',component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    UserFormComponent,
    StoreFormComponent,
    BrandFormComponent,
    ProductFormComponent,
    LoginComponent,
    StoreOwnerHomeComponent,
    AdminHomeComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,StoreService,BrandService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
