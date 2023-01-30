import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { BrowserModule, } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,CommonModule
    
  ],
  declarations: [
    ProductComponent
  ]
  
})
export class ProductModule { }
