export class Doctor {
    key:string;
    email: string;
    gender: string;

    constructor(public id: number, public firstName: string, public lastName: string, public age: number) { }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
