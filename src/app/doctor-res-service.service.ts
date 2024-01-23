import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './Patient';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class DoctorResServiceService {

  constructor(private httpClient: HttpClient) { }

  findDoctorById(doctorId: number){
    const url = "http://localhost:8080/in/doctor/find-doctor-by-id/"+doctorId;
    return this.httpClient.get(url);
  }

  doctorAppointments(doctorId: number){
    const url = "http://localhost:8080/in/doctor/check-doctor-appointment/"+doctorId;
    return this.httpClient.get(url);
  }

  updatePatientRecord(patient: Patient){
    const url = "http://localhost:8080/in/patient/update-record-by-id/"+patient.patientId;
    var headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(url, patient, {headers});
  }

  deletPatientRecord(patientId: number){
    const url = "http://localhost:8080/in/patient/delete-by-id/"+patientId;
    return this.httpClient.delete(url);
  }

  addPatientRecord(patient: Patient){
    const url = "http://localhost:8080/in/patient/add-patient-record";
    var headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(url, patient, {headers});
  }

  doctorLogin(model: Login){
    const url="http://localhost:8080/in/doctor/login-doctor";
    var headers = new HttpHeaders({'Content-Type':'application/json', responseType:'text'});
    return this.httpClient.post(url, model, {headers, 'responseType' : 'text'});
  }

  doctorSignup(model: Login){
    const url="http://localhost:8080/in/doctor/signup-doctor";
    var headers = new HttpHeaders({'Content-Type':'application/json', responseType:'text'});
    return this.httpClient.post(url, model, {headers, 'responseType' : 'text'});
  }

}
