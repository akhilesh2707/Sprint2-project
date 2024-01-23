import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorResponsibilityComponent } from './doctor-responsibility.component';

describe('DoctorResponsibilityComponent', () => {
  let component: DoctorResponsibilityComponent;
  let fixture: ComponentFixture<DoctorResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorResponsibilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
