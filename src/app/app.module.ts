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
import { MobileComponent } from './mobile/mobile.component';
import { SmartwatchComponent } from './smartwatch/smartwatch.component';
import { LaptopComponent } from './laptop/laptop.component';
import { HeadphoneComponent } from './headphone/headphone.component';
import { CameraComponent } from './camera/camera.component';
import { PsComponent } from './ps/ps.component';
import { SaleComponent } from './sale/sale.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    SliderComponent,
    MobileComponent,
    SmartwatchComponent,
    LaptopComponent,
    HeadphoneComponent,
    CameraComponent,
    PsComponent,
    SaleComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
