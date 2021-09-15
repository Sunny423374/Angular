import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private pservice:ProductService,private myrouter:Router) { }
  prodData:any;

  ngOnInit(): void {
    this.prodData=this.pservice.getProducts();
  }

  deleteData(i:any)
  {
    this.pservice.deleteProduct(i);
  }
  
  goHome()
  {
    this.myrouter.navigate(['home']);
  } 

  editData(p:String)
  {
    console.log(p);
    this.myrouter.navigate(['home/editproduct/',p]);
  }
}
