import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconInfoStoreComponent } from './icon-info-store.component';

describe('IconInfoStoreComponent', () => {
  let component: IconInfoStoreComponent;
  let fixture: ComponentFixture<IconInfoStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconInfoStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconInfoStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
