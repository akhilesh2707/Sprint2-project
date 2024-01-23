import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor/doctor.component';
import { RouterModule } from '@angular/router';
import { DoctorResponsibilityComponent } from './doctor-responsibility/doctor-responsibility.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorResponsibilityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'doctor', component: DoctorComponent},
      {path:'doctor-res', component: DoctorResponsibilityComponent},
      {path:'login', component: HomeComponent},
      {path: '', redirectTo:'/login', pathMatch: 'full'}  //by default page will load
    ])
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()) //http client import
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
