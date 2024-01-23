import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { response } from 'express';
import { Doctor } from '../Doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

  constructor(
    public doctorService : AdminServiceService
  ){}

  post: any;
  post2: any;

  ngOnInit(){
    this.doctorService.getDoctor().subscribe(
      (response) => {this.post = response;
      }
    );
  }

  model: any;

  updateDoctor(doctorId: number, doctorName: string, specialization: string, yearsOfExperience: number){
    this.model = new Doctor(doctorId, doctorName, specialization, yearsOfExperience);
    this.doctorService.updateDoctor(this.model).subscribe(
      (response) => {this.post2 = response;}
    );
    window.location.reload();
  }

  deleteDoctor(doctorId: number){
    this.doctorService.deleteDoctor(doctorId).subscribe(
      (response) => {console.log(response);}
    );
    window.location.reload();
  }

  model2 = new Doctor(3, "Kunal", "MBBS", 2);

  addDoctor() {
    this.doctorService.addDoctor(this.model2).subscribe(
      (response) => {console.log(response);}
    );
  }



}
