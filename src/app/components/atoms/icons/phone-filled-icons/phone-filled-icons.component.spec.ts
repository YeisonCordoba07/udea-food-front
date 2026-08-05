import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFilledIconsComponent } from './phone-filled-icons.component';

describe('PhoneFilledIconsComponent', () => {
  let component: PhoneFilledIconsComponent;
  let fixture: ComponentFixture<PhoneFilledIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneFilledIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneFilledIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
