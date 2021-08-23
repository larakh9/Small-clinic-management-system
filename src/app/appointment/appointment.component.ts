import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { LoggingService } from '../services/logging.service';
import { AppointmentService } from '../services/appointment.services';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  doctorName: string;
  isWhite: boolean = true;
  showMessage: boolean = true;
  appointment: Appointment[];
  showDirective = true;
  @ViewChild('appointment')
  fName: string = '';
  message: string = "Pipe test testing";
  currentDate: Date = new Date();
  isLoading = false;
  error: string;

  constructor(private router: Router, private appointmentService: AppointmentService) {
    this.doctorName = "Maria";


    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.appointmentService.getAppointment()
      .subscribe(response => {
        this.isLoading = false;
        this.appointment = response;
      },
        (error: HttpErrorResponse) => {
          this.error = error.message;
        });;
  }


  addAppointment(data: Appointment) {
    this.appointmentService.addAppointment(data);
  }

  onAddAppointment() {
    this.router.navigate(['/appointment/create'])
  }

  onClearAppointment() {
    this.appointmentService.clearAppointment();
  }

  onLoadPatients(){
    this.router.navigate(['/patients']);
}

onLoadDoctors(){
  this.router.navigate(['/doctor']);
}

}
