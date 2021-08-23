import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorItemComponent } from './doctor-item/doctor-item.component';
import { DoctorHeaderComponent } from './doctor-header/doctor-header.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { PatientItemComponent } from './patient-item/patient-item.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsHeaderComponent } from './patients-header/patients-header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AppHiddenDirective } from './directives/app-hidden.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HomeComponent } from './home/home.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { AppRoutingModule } from './app.routing.module';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentItemComponent } from './appointment-item/appointment-item.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorItemComponent,
    DoctorHeaderComponent,
    DoctorDetailComponent,
    DoctorEditComponent,
    DoctorCreateComponent,
    PatientsComponent,
    PatientItemComponent,
    PatientsHeaderComponent,
    HighlightDirective,
    AppHiddenDirective,
    ShortenPipe,
    HomeComponent,
    PatientDetailComponent,
    PatientEditComponent,
    PatientCreateComponent,
    AppointmentDetailComponent,
    AppointmentEditComponent,
    AppointmentItemComponent,
    AppointmentComponent,
    AppointmentCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
