import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionIconComponent } from './add-section-icon.component';

describe('AddSectionIconComponent', () => {
  let component: AddSectionIconComponent;
  let fixture: ComponentFixture<AddSectionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSectionIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSectionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
