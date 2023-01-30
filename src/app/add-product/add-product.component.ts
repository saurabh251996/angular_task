// import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, ComponentFactoryResolver } from '@angular/core'
import {ProductService } from "../product.service"

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent
 {
  productForm:any=[];


  constructor(private fb:FormBuilder,private router:Router ,private el:ElementRef,private productSrv:ProductService) {

  }

  ngOnInit() {
    this.addProductForm()
  }

  addProductForm(){
  this.productForm=this.fb.group({
    name:['',[Validators.required]],
    price:['',[Validators.required]],
    description:['',[Validators.required]],
    quantity:['',[Validators.required]]
  })
  console.log(this.productForm)
  }
  passwordFormSubmission(value:any){
    console.log(value)
  let obj={
    name:value.name,
    description:value.description,
    price:value.price,
    quantity:value.quantity

  }
    this.productSrv.addProduct(obj).subscribe((res:any)=>{
      console.log(res)
    })
 
  

  }
}

  

  
