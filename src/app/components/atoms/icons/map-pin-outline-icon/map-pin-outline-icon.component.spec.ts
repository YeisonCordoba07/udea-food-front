import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPinOutlineIconComponent } from './map-pin-outline-icon.component';

describe('MapPinOutlineIconComponent', () => {
  let component: MapPinOutlineIconComponent;
  let fixture: ComponentFixture<MapPinOutlineIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPinOutlineIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPinOutlineIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
