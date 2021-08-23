export class Appointment {
    key:string;

    constructor(public id: number, public patientName: string, public doctorName: string, public date: number, public notes: string) { }

}
