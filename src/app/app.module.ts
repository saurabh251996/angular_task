import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ProductComponent } from './product/product/product.component';

// import { BrowserModule } from '@angular/platform-browser'
// ..
// ..
// @NgModule({
//   imports: [BrowserModule, /* or CommonModule */],
//   ..
// })

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomecomponentComponent,
    AddProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
