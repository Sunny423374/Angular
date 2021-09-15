import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private pservice: ProductService, private activeRoute: ActivatedRoute, private myrouter: Router) { }

  prodid: any;
  prod: Product = new Product();

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params => {
        this.prodid = params.get("pid");
      }
    )

    console.log("get the data");
    this.prod = this.pservice.getProdsById(this.prodid);
    console.log(this.prod);
  }
  
  cats=["Grocery","Electronics","Fashion","Utilities","BeatyandHealth"];

  saveProduct(prodForm: any) {
    this.prod = prodForm.value;
    console.log(this.prod);
    this.pservice.editProduct(this.prod);
    this.myrouter.navigate(['home']);
  }

}
