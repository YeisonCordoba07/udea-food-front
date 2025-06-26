import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenEditIconComponent } from './pen-edit-icon.component';

describe('PenEditIconComponent', () => {
  let component: PenEditIconComponent;
  let fixture: ComponentFixture<PenEditIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenEditIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenEditIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
