import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchIconComponent } from './watch-icon.component';

describe('WatchIconComponent', () => {
  let component: WatchIconComponent;
  let fixture: ComponentFixture<WatchIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
