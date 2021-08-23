import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Appointment } from "../models/appointment";
import { LoggingService } from "./logging.service";
import { environment } from "src/environments/environment";
import { map, tap } from "rxjs/operators";


@Injectable({
    providedIn:'root'
})
export class AppointmentService{

    appointmentAdded = new Subject<Appointment>();

    public appointments: Appointment[] = [];

    constructor(private logService:LoggingService, private httpClient:HttpClient){

    }

    addAppointment(data:Appointment){
        this.httpClient.post(`${environment.WebApiUrl}/appointments.json`, data,
        {
            headers: new HttpHeaders().set('token', 'xyz')
        }).subscribe(result=>{
            console.log(result);
        });
        
        this.appointments.push(data);
        this.logService.logInfo('Appointment was Added');
        this.appointmentAdded.next(data);
    }

    getAppointment(){
        return this.httpClient.get(`${environment.WebApiUrl}/appointments.json`)
        .pipe(
            map((response:{[key:string]: any})=>{
           
                let result:Appointment[] = [];

            for(let key in response){
                if(response.hasOwnProperty(key))
                    {
                        let doctor = new Appointment(0,'','',0,'');
                        Object.assign(this.appointments,response[key]);
                        doctor.key = key;
                        result.push(doctor);
                    }
            }
            this.appointments = result;
            return result;
        }),
        tap(response =>{
            console.log('Tap Operator');
                console.log(response);
        }))
    }

    updateAppointment(appointment:Appointment){
        let obj :{[key:string]: any} = {};
        console.log(appointment);

        obj[appointment.key] = appointment;
        console.log(obj);
        this.httpClient.patch(`${environment.WebApiUrl}/appointments.json`, obj).subscribe(response =>{
            console.log(response);
        })
    }

    clearAppointment(){
        this.httpClient.delete(`${environment.WebApiUrl}/appointments.json`).subscribe(s => {
            this.appointments = [];
        });
    }

}