import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContPopupComponent } from './cont-popup.component';

describe('ContPopupComponent', () => {
  let component: ContPopupComponent;
  let fixture: ComponentFixture<ContPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
