import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-doctor-header',
  templateUrl: './doctor-header.component.html',
  styleUrls: ['./doctor-header.component.css']
})
export class DoctorHeaderComponent implements OnInit {

  @Output()
  doctorAdded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  addDoctor(firstName:HTMLInputElement, lastName:HTMLInputElement, age:HTMLInputElement){
    this.doctorAdded.emit(new Doctor(0,firstName.value, lastName.value, +age.value));
 }
}
