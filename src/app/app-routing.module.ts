import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IphoneComponent } from './navigatingcomponents/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponents/android/android.component';
import { HelpComponent } from './navigatingcomponents/help/help.component';
import { CompanyComponent } from './navigatingcomponents/company/company.component';

const routes: Routes = [{path: '',component:WelcomeComponent},
  {path:'iphone',component:IphoneComponent},
  {path:'android',component:AndroidComponent},
  {path:'iphone',component:IphoneComponent},
  {path:'help',component:HelpComponent},
  {path:'company',component:CompanyComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
