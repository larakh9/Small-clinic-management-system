import { OnChanges } from '@angular/core';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Patient } from '../models/patient';


@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input('patientItem')
    patient: Patient; 

  constructor() {
    this.patient = new Patient(0,'Joe', 'E',31);
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){

  }

  ngOnChanges(){

  }
}
