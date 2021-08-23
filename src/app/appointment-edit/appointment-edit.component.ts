import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.services';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {

  appointment: Appointment;

  @ViewChild('editForm')
  editForm: NgForm;

  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.appointment = this.appointmentService.appointments.find(d => d.id == +params['id']) as Appointment
    })
  }

  onSubmit(editForm: NgForm) {

    if (!editForm.valid)
      return;

    this.appointmentService.updateAppointment(editForm.value)

    this.editForm.reset()

  }
}
