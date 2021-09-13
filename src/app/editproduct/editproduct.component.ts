import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private pservice:ProductService) { }

  ngOnInit(): void {
  }

  prodForm = new FormGroup(
    {
      prodid:new FormControl('',Validators.required),
      prodname:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      
    }
  )
  
  editData()
  {
    console.log(this.prodForm.value);
    this.pservice.editProduct();
  }
}
