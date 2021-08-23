import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.services';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  appointment:Appointment;

  constructor(private router:Router, private appointmentService:AppointmentService, private route:ActivatedRoute) {
    this.appointment = new Appointment(0,'','',0,'')
   }

  ngOnInit(): void {
       let allowEdit = this.route.snapshot.queryParams['allowEdit'];

      this.route.params.subscribe((params:Params)=>{
        this.appointment = this.appointmentService.appointments.find(d => d.id == +params['id'] ) as Appointment;
        
      })
    
  }

  onEdit(id:number){
    this.router.navigate(['/appointments', id, 'edit' ], {queryParams: {allowEdit: true}});
  }

}
