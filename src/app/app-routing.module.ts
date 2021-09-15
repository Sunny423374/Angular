import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { SearchComponent } from './search/search.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'home/viewproduct',component:ViewproductComponent},
  {path:'home/editproduct/:pid',component:EditproductComponent},
  {path:'home/newproduct',component:NewproductComponent},
  {path:'home/search',component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
