import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SliderComponent } from './slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/CategoryComponent';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductformComponent } from './productform/productform.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CategoryformComponent } from './categoryform/categoryform.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { CardComponent } from './card/card.component';
import { UsercardComponent } from './usercard/usercard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    SliderComponent,
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    UserupdateComponent,
    UserdetailsComponent,
    ProductformComponent,
    ProductdetailsComponent,
    CategoryformComponent,
    CategorydetailsComponent,
    CardComponent,
    UsercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

