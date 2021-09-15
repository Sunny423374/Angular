import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  prodArray:Array<Product>=[];

  getAllProds()
  {
    return this.prodArray;
  }
  getProdsById(pid:string)
  {
    let p=new Product();
      for(let p1 of this.prodArray)
      {
        if(p1.prodid==pid)
        {
            p=p1;
            break;
        }
      }
      return p;
  }

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

  
  searchProduct(cat:any)
  {
    let searchArray=new Array<Product>();
    console.log(cat);
    for(let a of this.prodArray)
    {
      if(a.category==cat)
      {
        searchArray.push(a);
      }
    }
    return searchArray;
    
  }
  
  editProduct(product:Product)
  {
    let i=0;
      for(i;i<this.prodArray.length;i++)
      {
        if(this.prodArray[i].prodid==product.prodid)
        {
            this.prodArray[i]=product;
            console.log("Updated");
        }
      }
  }

  validateLogin(uid:string,pass:string)
  {
    if(uid=="sa" && pass=="sa123")
      return true;
      else
      return false;
  }

}
