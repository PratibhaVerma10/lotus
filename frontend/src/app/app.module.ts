import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BetslipComponent } from './betslip/betslip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    BetslipComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      {
        path: '', component: HomeComponent
      }
  ])
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
