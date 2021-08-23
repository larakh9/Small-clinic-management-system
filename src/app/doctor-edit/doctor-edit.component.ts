import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.services';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  doctor: Doctor;

  @ViewChild('editForm')
  editForm: NgForm;

  genders = ["Male", "Female"]
  constructor(private route: ActivatedRoute, private doctorService: DoctorService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.doctor = this.doctorService.doctors.find(d => d.id == +params['id']) as Doctor
    })
  }

  onSubmit(editForm: NgForm) {

    if (!editForm.valid)
      return;

    this.doctorService.updateDoctor(editForm.value)

    this.editForm.reset()
    this.editForm.form.patchValue({
      gender: 'Male'
    })
  }
}
