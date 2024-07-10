import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/CategoryComponent';
import { AuthGuard } from './Auth gurd/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductformComponent } from './productform/productform.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategoryformComponent } from './categoryform/categoryform.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { CardComponent } from './card/card.component';
import { UsercardComponent } from './usercard/usercard.component';


const routes: Routes = [
            {path:'home',component:HomeComponent,canActivate:[AuthGuard] },
            {path:'login',component:LoginComponent},
            {path:'signup',component:SignupComponent},
            // {path:'mobile',component:MobileComponent,canActivate:[AuthGuard]},
            // {path:'camera',component:CameraComponent,canActivate:[AuthGuard]},
            // {path:'laptop',component:LaptopComponent,canActivate:[AuthGuard]},
            // {path:'smartwatch',component:SmartwatchComponent,canActivate:[AuthGuard]},
            // {path:'headphone',component:HeadphoneComponent,canActivate:[AuthGuard]},
            // {path:'sale',component:SaleComponent,canActivate:[AuthGuard]},
            {path:'product/:pd_id',component:ProductComponent,canActivate:[AuthGuard]},
            // {path:'ps',component:PsComponent,canActivate:[AuthGuard]},

            {path:'category/:cat_id',component:CategoryComponent,canActivate:[AuthGuard]},
            {path:'card/:pd_id',component:CardComponent,canActivate:[AuthGuard]},

             { path:'userupdate',component:UserupdateComponent,canActivate:[AuthGuard],data:{role:['admin']}},
            { path:'userupdate/:us_id',component:UserupdateComponent,canActivate:[AuthGuard],data:{role:['admin']}},
            { path: 'userdetails/:us_id',component:UserdetailsComponent,canActivate:[AuthGuard],data:{role:['employee','admin']}},


             { path:'productform',component:ProductformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
            { path:'productform/:pd_id',component:ProductformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
            { path: 'productdetails/:pd_id',component:ProductdetailsComponent,canActivate:[AuthGuard],data:{role:['employee','admin']}},

            { path:'categoryform',component:CategoryformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
            { path:'categoryform/:cat_id',component:CategoryformComponent,canActivate:[AuthGuard],data:{role:['admin']}},
            { path: 'categorydetails/:cat_id',component:CategorydetailsComponent,canActivate:[AuthGuard],data:{role:['employee','admin']}},

            {path:'usercard',component:UsercardComponent,canActivate:[AuthGuard]},
            
           
            {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],data:{role:['employee','admin']}},
            {path:'card',component:CardComponent,canActivate:[AuthGuard]},
            // {path:'category:',component:CategoryComponent},
             // { path: 'employee-form', component: EmployeeFormComponent   , canActivate: [AuthGuard],data:{role:['admin']}},
            // //, canActivate: [AuthGuard],data:{role:['admin']}
            // { path: 'employee-form/:id', component: EmployeeFormComponent }

            {path:'',redirectTo:'/login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
