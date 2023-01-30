import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent {
Product: any;
constructor(private productSrv:ProductService){
  this.getData()
}
ngOninit(){
  this.getData()
}
getData(){
  this.productSrv.getData().subscribe((res:any) => {
    
    this.Product = res['data'];
    console.log(this.Product)


})

}
}

