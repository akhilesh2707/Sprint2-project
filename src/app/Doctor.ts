import { spec } from 'node:test/reporters';

export class Doctor {
  doctorId: number;
  doctorName: string;
  specialization: string;
  yearsOfExperience: number;

  constructor(doctorId: number, doctorName: string, specialization: string, yearsOfExperience: number) {
    (this.doctorId = doctorId),
    (this.doctorName = doctorName),
    (this.specialization = specialization),
    (this.yearsOfExperience = yearsOfExperience);
  }
}
