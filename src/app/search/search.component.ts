import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  constructor(private pservice:ProductService) { }

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

  editData()
  {
    this.prodData=this.pservice.editProduct();
  }
  
}
