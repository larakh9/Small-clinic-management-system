import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.services';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {

  createForm:FormGroup;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {

    this.createForm = new FormGroup({
        patientName: new FormControl(null, Validators.required),
        doctorName: new FormControl(null, Validators.required),
      date: new FormControl(), 
      notes: new FormControl() 
    })
  }

  onSubmit(){
    if(!this.createForm.valid)
      return;

    let appointment = new Appointment(this.appointmentService.appointments.length + 1, this.createForm.value.patientName, this.createForm.value.doctorName,  this.createForm.value.date, this.createForm.value.notes);

    this.appointmentService.addAppointment(appointment);

    this.createForm.reset();
  }


}
