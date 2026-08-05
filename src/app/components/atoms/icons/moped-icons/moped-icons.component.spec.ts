import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MopedIconsComponent } from './moped-icons.component';

describe('MopedIconsComponent', () => {
  let component: MopedIconsComponent;
  let fixture: ComponentFixture<MopedIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MopedIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MopedIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
