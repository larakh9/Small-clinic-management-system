import { OnChanges } from '@angular/core';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input('appointmentItem')
    appointment: Appointment; 

  constructor() {
    this.appointment = new Appointment(0,'','',0,'');
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){

  }

  ngOnChanges(){

  }
}
