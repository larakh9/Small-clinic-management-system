import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientsService } from '../services/patients.services';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  patient: Patient;

  @ViewChild('editForm')
  editForm: NgForm;

  genders = ["Male", "Female"]
  constructor(private route: ActivatedRoute, private patientService: PatientsService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.patient = this.patientService.patients.find(p => p.id == +params['id']) as Patient
    })
  }

  onSubmit(editForm: NgForm) {

    if (!editForm.valid)
      return;

    this.patientService.updatePatient(editForm.value)

    this.editForm.reset()
    // this.editForm.setValue({
    //   firstName:'1',
    //   lastName:'',
    //   email: '',
    //   gender: 'Male'
    // });

    this.editForm.form.patchValue({
      gender: 'Male'
    })
  }
}
