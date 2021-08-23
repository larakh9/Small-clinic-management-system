import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../models/patient';
import { PatientsService } from '../services/patients.services';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  createForm:FormGroup;

  constructor(private patientService: PatientsService) { }

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

    let patient = new Patient(this.patientService.patients.length + 1, this.createForm.value.fullName.firstName, this.createForm.value.fullName.lastName,  this.createForm.value.age);

    patient.email = this.createForm.value.email;
    patient.gender = this.createForm.value.gender;

    this.patientService.addPatient(patient);

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
