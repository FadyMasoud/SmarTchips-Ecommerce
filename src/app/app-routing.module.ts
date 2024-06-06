import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LaptopComponent } from './laptop/laptop.component';
import { CameraComponent } from './camera/camera.component';
import { SmartwatchComponent } from './smartwatch/smartwatch.component';
import { HeadphoneComponent } from './headphone/headphone.component';
import { PsComponent } from './ps/ps.component';
import { MobileComponent } from './mobile/mobile.component';
import { SaleComponent } from './sale/sale.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
            {path:'home',component:HomeComponent},
            {path:'login',component:LoginComponent},
            {path:'signup',component:SignupComponent},
            {path:'mobile',component:MobileComponent},
            {path:'camera',component:CameraComponent},
            {path:'laptop',component:LaptopComponent},
            {path:'smartwatch',component:SmartwatchComponent},
            {path:'headphone',component:HeadphoneComponent},
            {path:'sale',component:SaleComponent},
            {path:'product',component:ProductComponent},
            {path:'ps',component:PsComponent},

            {path:'',redirectTo:'/home',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
