import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { StoreFormComponent } from './components/store-form/store-form.component';
import { BrandFormComponent } from './components/brand-form/brand-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { StoreService } from './shared-services/store.service';
import { BrandService } from './shared-services/brand.service';
import { ProductService } from './shared-services/product.service';
import { StoreOwnerHomeComponent } from './components/store-owner-home/store-owner-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { BuyFormComponent } from './components/buy-form/buy-form.component';
import { StatService } from './shared-services/stat.service';
import { AdminRegisterComponent } from './components/registers/admin-register/admin-register.component';
import { UserRegisterComponent } from './components/registers/user-register/user-register.component';
import { StoreOwnerRegisterComponent } from './components/registers/store-owner-register/store-owner-register.component';
import { CollabratorRegisterComponent } from './components/registers/collabrator-register/collabrator-register.component';
import { CollabratorLoginComponent } from './components/logins/collabrator-login/collabrator-login.component';
import { NormalUserLoginComponent } from './components/LOGINS/normal-user-login/normal-user-login.component';
import { StoreOwnerLoginComponent } from './components/LOGINS/store-owner-login/store-owner-login.component';
import { AdminLoginComponent } from './components/LOGINS/admin-login/admin-login.component';
import { AdminService } from './shared-services/user-services/admin.service';
import { CollabratorService } from './shared-services/user-services/collabrator.service';
import { StoreownerService } from './shared-services/user-services/storeowner.service';
import { NormaluserService } from './shared-services/user-services/normaluser.service';
import { NormalUser } from './NormalUser';
import { CollabratorHomeComponent } from './components/collabrator-home/collabrator-home.component';
import { CommandService } from './shared-services/command.service';
import {Ng2Webstorage, LocalStorageService, SessionStorageService} from 'ngx-webstorage';


const appRoutes=[
{path:'' ,component:ListusersComponent},
{path:'addStore',component:StoreFormComponent },
{path:'addBrand',component:BrandFormComponent },
{path:'addProduct',component:ProductFormComponent},
{path:'adminHome',component:AdminHomeComponent},
{path:'storeOwnerHome',component:StoreOwnerHomeComponent},
{path:'userHome',component:UserHomeComponent},
{path:'purchase',component:BuyFormComponent},
{path:'adminlogin',component:AdminLoginComponent},
{path:'userlogin',component:NormalUserLoginComponent},
{path:'sologin',component:StoreOwnerLoginComponent},
{path:'collablogin',component:CollabratorLoginComponent},
{path:'userform',component:UserRegisterComponent},
{path:'soform',component:StoreOwnerRegisterComponent},
{path:'adminform',component:AdminRegisterComponent},
{path:'collabform',component:CollabratorRegisterComponent},
{path:'collabHome',component:CollabratorHomeComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    StoreFormComponent,
    BrandFormComponent,
    ProductFormComponent,
    StoreOwnerHomeComponent,
    AdminHomeComponent,
    UserHomeComponent,
    BuyFormComponent,
    AdminRegisterComponent,
    UserRegisterComponent,
    StoreOwnerRegisterComponent,
    CollabratorRegisterComponent,
    CollabratorLoginComponent,
    NormalUserLoginComponent,
    StoreOwnerLoginComponent,
    AdminLoginComponent,
    CollabratorHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Webstorage,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StoreService,BrandService,ProductService,StatService,AdminService,CollabratorService,StoreownerService
  ,NormaluserService,CommandService,LocalStorageService,SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
