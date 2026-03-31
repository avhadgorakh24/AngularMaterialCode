import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansCreateProfile } from './loans-create-profile';

describe('LoansCreateProfile', () => {
  let component: LoansCreateProfile;
  let fixture: ComponentFixture<LoansCreateProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoansCreateProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansCreateProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
