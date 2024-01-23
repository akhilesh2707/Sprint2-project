import { Component } from '@angular/core';
import { Login } from '../Login';
import { DoctorResServiceService } from '../doctor-res-service.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private doctorService: DoctorResServiceService,
    private adminService: AdminServiceService,
    private router: Router
  ){}

  model=new Login("akhil@123", "123456");
  mes: any;

  doctorLogin(){
    this.doctorService.doctorLogin(this.model).subscribe(
      (response:string) => {this.mes = response;
        if(this.mes === 'Login Successfully, WELCOME!...'){
          this.router.navigate(['/doctor-res']);
        } else {
          alert(this.mes);
        }
      }
    )
  }

  doctorSignup(){
    this.doctorService.doctorSignup(this.model).subscribe(
      (response:string) => {this.mes = response;
        alert(this.mes);
      }
      
    );
  }

  adminLogin(){
    this.adminService.adminLogin(this.model).subscribe(
      (response:string) => {this.mes = response;
        if(this.mes === 'Login Successfully'){
          this.router.navigate(['/doctor']);
        } else {
          alert(this.mes);
        }
      }
    )
  }
  

}
