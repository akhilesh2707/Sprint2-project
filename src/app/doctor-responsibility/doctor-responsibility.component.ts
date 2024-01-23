import { Component } from '@angular/core';
import { response } from 'express';
import { DoctorResServiceService } from '../doctor-res-service.service';
import { Patient } from '../Patient';
import { resolve } from 'path';

@Component({
  selector: 'app-doctor-responsibility',
  templateUrl: './doctor-responsibility.component.html',
  styleUrl: './doctor-responsibility.component.css'
})
export class DoctorResponsibilityComponent {

  constructor(private doctorSer: DoctorResServiceService){}

  records: any;
  id: any;
  patientRecords: any;

  display(){
    this.doctorSer.findDoctorById(this.id).subscribe(
      (response) => {this.records=response}
    );

    this.doctorSer.doctorAppointments(this.id).subscribe(
      (response) => {this.patientRecords = response;}
    )
  }

  model: any;

  updatePatient(patientId:number, patientName: string, age: number, address:string, phoneNumber: string, diseaseDetails: string){
    this.model = new Patient(1, patientName, age, address, phoneNumber, diseaseDetails);
    this.doctorSer.updatePatientRecord(this.model).subscribe(
      (response) => {console.log(response);}
    );
    
  }

  deletePatient(patientId: number){
    this.doctorSer.deletPatientRecord(patientId).subscribe(
      (response) => {console.log(response);}
    );
  }


}

