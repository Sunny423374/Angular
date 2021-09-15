import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ps:ProductService,private myrouter:Router) { }

  
  ngOnInit(): void {
    
  }

  logid:any;
  logpass:any;
  err="";

  validate()
  {
      if(this.ps.validateLogin(this.logid,this.logpass))
      {
        localStorage.setItem("logid",this.logid);
        this.myrouter.navigate(['home']);
      }
      else
      {
        this.err="Invalid User!";
      }
  }

}
