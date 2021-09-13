import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }

  view()
  {
    this.myrouter.navigate(['/home/viewproduct']);
  }
  edit()
  {
    this.myrouter.navigate(['/home/editproduct']);
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
