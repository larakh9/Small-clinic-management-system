import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Patient } from "../models/patient";
import { LoggingService } from "./logging.service";
import { environment } from "src/environments/environment";
import { map, tap } from "rxjs/operators";


@Injectable({
    providedIn:'root'
})
export class PatientsService{

    patientAdded = new Subject<Patient>();

    public patients: Patient[] = [];

    constructor(private logService:LoggingService, private httpClient:HttpClient){

    }

    addPatient(data:Patient){
        this.httpClient.post(`${environment.WebApiUrl}/patients.json`, data,
        {
            headers: new HttpHeaders().set('token', 'xyz')
        }).subscribe(result=>{
            console.log(result);
        });
        
        this.patients.push(data);
        this.logService.logInfo('Patients was Added');
        this.patientAdded.next(data);
    }

    getPatients(){
        return this.httpClient.get(`${environment.WebApiUrl}/patients.json`)
        .pipe(
            map((response:{[key:string]: any})=>{
           
                let result:Patient[] = [];

            for(let key in response){
                if(response.hasOwnProperty(key))
                    {
                        let patient = new Patient(0,'','',0);
                        Object.assign(patient,response[key]);
                        patient.key = key;
                        result.push(patient);
                    }
            }
            this.patients = result;
            return result;
        }),
        tap(response =>{
            console.log('Tap Operator');
                console.log(response);
        }))

        //return this.patients;
    }

    updatePatient(patient:Patient){
        let obj :{[key:string]: any} = {};
        console.log(patient);

        obj[patient.key] = patient;
        console.log(obj);
        this.httpClient.patch(`${environment.WebApiUrl}/patients.json`, obj).subscribe(response =>{
            console.log(response);
        })
    }

    clearPatients(){
        this.httpClient.delete(`${environment.WebApiUrl}/patients.json`).subscribe(s => {
            this.patients = [];
        });
    }

}