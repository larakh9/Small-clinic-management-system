import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription:Subscription;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.subscription =  interval(1000).pipe(

      filter((s:number) => {
        if(s <= 10)
          return true;

          return false;
      }),
      map(s => {
        return 'Count: ' + s;
      }),)
    .subscribe(data =>{
      console.log(data);
    });

  }

  onStop(){
    this.ngOnDestroy();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onLoadPatients(){
      this.router.navigate(['/patients']);
  }

  onLoadDoctors(){
    this.router.navigate(['/doctor']);
}

onAddAppointment(){
  this.router.navigate(['/appointment/create']);
}
}