import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MobileDashboardComponent } from './mobile/mobile-dashboard/mobile-dashboard.component';
import { DashboardEditComponent } from './mobile/dashboard-edit/dashboard-edit.component';
import { HeaderComponent } from './header/header.component';
import { MobileDetailsComponent } from './mobile/mobile-details/mobile-details.component';
import { MobileService } from './shared/mobile.service';
import { RoutingModule } from './app-routing.module';
import { MobileComponent } from './mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
      MobileDashboardComponent,
      DashboardEditComponent,
      HeaderComponent,
      MobileDetailsComponent,
      MobileComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
