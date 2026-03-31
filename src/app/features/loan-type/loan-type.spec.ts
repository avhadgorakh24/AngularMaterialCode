import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanType } from './loan-type';

describe('LoanType', () => {
  let component: LoanType;
  let fixture: ComponentFixture<LoanType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
