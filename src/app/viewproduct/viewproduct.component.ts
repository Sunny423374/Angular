import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private pservice:ProductService) { }
  prodData:any;

  ngOnInit(): void {
    this.prodData=this.pservice.getProducts();
  }

  deleteData(i:any)
  {
    this.pservice.deleteProduct(i);
  }
  
  editData()
  {
    this.prodData=this.pservice.editProduct();
  }
}
