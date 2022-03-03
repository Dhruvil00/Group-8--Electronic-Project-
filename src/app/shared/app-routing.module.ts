import { AdminproductComponent } from './../adminproduct/adminproduct.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { DialogComponent } from './../dialog/dialog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';



const routes: Routes = [
  {
    path:'',redirectTo:'adminlogin', pathMatch:'full'
  },
  {
    path: 'adminlogin', component:AdminloginComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'adminproduct',component: AdminproductComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
