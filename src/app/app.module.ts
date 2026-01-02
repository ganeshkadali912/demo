import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { IphoneComponent } from './navigatingcomponents/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponents/android/android.component';
import { HelpComponent } from './navigatingcomponents/help/help.component';
import { CompanyComponent } from './navigatingcomponents/company/company.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { AndroidUsersComponent } from './welcome/android-users/android-users.component';
import { MobileSecurityComponent } from './welcome/mobile-security/mobile-security.component';
import { SpywareComponent } from './welcome/spyware/spyware.component';
import { HelpcenterComponent } from './welcome/helpcenter/helpcenter.component';
import { SomeoneSpyingComponent } from './welcome/someone-spying/someone-spying.component';
import { LatestInsightsComponent } from './welcome/latest-insights/latest-insights.component';

@NgModule({

  
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    IphoneComponent,
    AndroidComponent,
    HelpComponent,
    CompanyComponent,
    BannerComponent,
    AndroidUsersComponent,
    MobileSecurityComponent,
    SpywareComponent,
    HelpcenterComponent,
    SomeoneSpyingComponent,
    LatestInsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
