import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  constructor(private pservice:ProductService,private myrouter:Router) { }

  prodData:any;
  cat:any;
  categories=["Grocery","Electronics","Fashion","Utilities","BeautyandHealth"];

  ngOnInit(): void {
  
  }

  deleteData(i:any)
  {
    this.pservice.deleteProduct(i);
 
  }

  search()
  {
    this.prodData=this.pservice.searchProduct(this.cat);
    console.log(this.cat)
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
