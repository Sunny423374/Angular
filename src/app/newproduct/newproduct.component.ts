import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  prod:Product=new Product();
  categories=["Grocery","Electronics","Fashion","Utilities","BeatyandHealth"];

  constructor(private prodService:ProductService,private myrouter:Router) { }

  ngOnInit(): void {
  }

  saveProduct(productDetForm:any)
  {
    console.log(this.prod);
    this.prod=productDetForm.value;
    this.prodService.addProduct(this.prod);
    
  }
  
  goHome()
  {
    this.myrouter.navigate(['home']);
  } 

}



