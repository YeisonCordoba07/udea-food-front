import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateSectionDialogComponent} from './create-section-dialog.component';

describe('CreateSectionDialogComponent', () => {
  let component: CreateSectionDialogComponent;
  let fixture: ComponentFixture<CreateSectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSectionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
