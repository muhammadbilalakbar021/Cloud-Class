import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudClassComponent } from './cloud-class.component';

describe('CloudClassComponent', () => {
  let component: CloudClassComponent;
  let fixture: ComponentFixture<CloudClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
