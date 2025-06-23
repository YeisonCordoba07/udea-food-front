import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPinIconComponent } from './map-pin-icon.component';

describe('MapPinIconComponent', () => {
  let component: MapPinIconComponent;
  let fixture: ComponentFixture<MapPinIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPinIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
