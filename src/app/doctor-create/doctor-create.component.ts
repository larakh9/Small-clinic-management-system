import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.services';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {

  createForm:FormGroup;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {

    this.createForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
      }),      
      age: new FormControl(),    
      email: new FormControl(null, [Validators.required, Validators.email,this.restrictedEmails]),
      gender: new FormControl('Male')
    })
  }

  onSubmit(){
    if(!this.createForm.valid)
      return;

    let doctor = new Doctor(this.doctorService.doctors.length + 1, this.createForm.value.fullName.firstName, this.createForm.value.fullName.lastName,  this.createForm.value.age);

    doctor.email = this.createForm.value.email;
    doctor.gender = this.createForm.value.gender;

    this.doctorService.addDoctor(doctor);

    this.createForm.reset();
  }

  restrictedEmails(control:FormControl){ 
    let emails = ['test@test.com', 'aa@aa.com']
      if(emails.indexOf(control.value) > -1){
        return {restrictedEmail: true}
      }
  
      return null;      
  }

}
