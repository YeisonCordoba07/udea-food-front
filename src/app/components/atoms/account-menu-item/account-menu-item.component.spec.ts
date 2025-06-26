import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMenuItemComponent } from './account-menu-item.component';

describe('AccountMenuItemComponent', () => {
  let component: AccountMenuItemComponent;
  let fixture: ComponentFixture<AccountMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountMenuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
