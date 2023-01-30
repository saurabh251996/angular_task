import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ProductComponent } from './product/product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
const routes: Routes = [
 {
  path:'',
  component:HomecomponentComponent
 },
 {
  path:'product',
  component:ProductComponent
  
 },
 {
  path:'add-product',
  component:AddProductComponent
  
 }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
