import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myrouter:Router) { }

  
  ngOnInit(): void {
    
  }
  logid:any;
  logpass:any;
  check:any;
  err="INVALID LOGIN";
  onsubmit()
  {
    console.log(this.logid);
    console.log(this.logpass);
    if(this.logid=="SA" && this.logpass=="Sa@123")
  {
    this.check=true;
    console.log(this.check);
    if(this.check)
    {
      this.myrouter.navigate(['/home']);
    }

  }
  
  }
}
