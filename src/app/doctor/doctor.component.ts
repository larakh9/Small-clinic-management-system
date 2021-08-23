import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { LoggingService } from '../services/logging.service';
import { DoctorService } from '../services/doctor.services';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  firstName: string = 'Max'
  doctorName: string;
  isWhite: boolean = true;
  showMessage: boolean = true;
  doctor: Doctor[];
  showDirective = true;
  @ViewChild('firstName')
  fName: string = '';
  message: string = "Pipe test testing";
  currentDate: Date = new Date();
  isLoading = false;
  error: string;

  constructor(private router: Router, private doctorService: DoctorService) {
    this.doctorName = "Maria";


    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.doctorService.getDoctor()
      .subscribe(response => {
        this.isLoading = false;
        this.doctor = response;
      },
        (error: HttpErrorResponse) => {
          this.error = error.message;
        });;
  }

  getFullName() {
    return this.doctorName;
  }


  addDoctor(data: Doctor) {
    this.doctorService.addDoctor(data);
  }

  onAddDoctor() {
    this.router.navigate(['/doctor/create'])
  }

  onClearDoctor() {
    this.doctorService.clearDoctor();
  }
}
