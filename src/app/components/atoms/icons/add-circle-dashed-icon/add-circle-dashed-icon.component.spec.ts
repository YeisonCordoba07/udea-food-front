import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCircleDashedIconComponent } from './add-circle-dashed-icon.component';

describe('AddCircleDashedIconComponent', () => {
  let component: AddCircleDashedIconComponent;
  let fixture: ComponentFixture<AddCircleDashedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCircleDashedIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCircleDashedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
