import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  prodArray:Array<Product>=[];

  addProduct(product:Product)
  {
    this.prodArray.push(product)
  }

  getProducts()
  {
    return this.prodArray;
  }

  deleteProduct(i:any)
  {
    this.prodArray.splice(i,1);
  }

  searchArray:Array<Product>=[];
  searchProduct(cat:any)
  {
    console.log(cat);
    for(let a of this.prodArray)
    {
      if(a.category==cat)
      {
        this.searchArray.push(a);
      }
    }
    return this.searchArray;
    
  }
  
  editProduct()
  {
    const prodForm = new FormGroup(
      {
        prodid:new FormControl('',Validators.required),
        prodname:new FormControl('',Validators.required),
        price:new FormControl('',Validators.required),
        
      }
    )
    for(let i=0;i<this.prodArray.length;i++)
    {
      prodForm.patchValue({
        prodid:this.prodArray[i].prodid,
        prodname:this.prodArray[i].prodname,
        price:this.prodArray[i].price
      });
    }
    console.log(prodForm.value);
  }

}
