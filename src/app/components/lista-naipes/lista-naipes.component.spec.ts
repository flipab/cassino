import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNaipesComponent } from './lista-naipes.component';

describe('ListaNaipesComponent', () => {
  let component: ListaNaipesComponent;
  let fixture: ComponentFixture<ListaNaipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNaipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNaipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
