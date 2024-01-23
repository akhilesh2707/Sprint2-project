import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './Doctor';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  getDoctor(){
    const url = "http://localhost:8080/in/doctor/get-all-records";
    return this.http.get(url);
  }

  updateDoctor(doctor: Doctor){
    const url = "http://localhost:8080/in/doctor/update-record-by-id/"+doctor.doctorId;
    var headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(url, doctor, {headers});
  }

  deleteDoctor(doctorId: number){
    const url = "http://localhost:8080/in/doctor/delete-by-id/"+doctorId;
    return this.http.delete(url);
  }

  addDoctor(doctor: Doctor){
    const url = "http://localhost:8080/in/doctor/add-doctor-record";
    var headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(url, doctor, {headers});
  }

  adminLogin(model:Login){
    const url = "http://localhost:8080/in/admin/admin-login";
    var headers = new HttpHeaders({'Content-Type':'application/json', responseType:'text'});
    return this.http.post(url, model, {headers, 'responseType':'text'});
  }

}
