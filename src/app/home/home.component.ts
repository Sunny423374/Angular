import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myrouter:Router) { }

  user:any;
  ngOnInit(): void {
    this.user=localStorage.getItem("logid");
  }

  view()
  {
    this.myrouter.navigate(['/home/viewproduct']);
  }

  new()
  {
    this.myrouter.navigate(['/home/newproduct']);
  }
  search()
  {
    this.myrouter.navigate(['/home/search']);
  }


}
