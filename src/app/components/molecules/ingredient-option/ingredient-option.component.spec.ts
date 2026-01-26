import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IngredientOptionComponent} from './ingredient-option.component';

describe('IngredientOptionComponent', () => {
  let component: IngredientOptionComponent;
  let fixture: ComponentFixture<IngredientOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
