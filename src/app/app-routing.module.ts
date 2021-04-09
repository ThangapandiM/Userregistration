import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{loginComponent} from './Loginpage/loginpage.component';
import{CreateaccountComponent}from'./Createaccount/createaccount.component';
import{ProfileComponent} from './profile/profile.component';
import{ProviderComponent}  from './provider/provider.component';
import{DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'Login', component: loginComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: '', component: loginComponent },
  {path:'clientprofile',component:ProfileComponent},
  {path:'provider',component:ProviderComponent},
  {path:'welcome/:Name',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
