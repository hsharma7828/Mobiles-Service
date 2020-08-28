import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MobileComponent } from './mobile/mobile.component';
import { MobileDetailsComponent } from './mobile/mobile-details/mobile-details.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'/home',pathMatch: 'full'},
  {path: 'home', component: MobileComponent,
children: [
  {path:':id' , component: MobileDetailsComponent}
]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {}
