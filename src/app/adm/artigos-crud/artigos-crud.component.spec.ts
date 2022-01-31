import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosCrudComponent } from './artigos-crud.component';

describe('ArtigosCrudComponent', () => {
  let component: ArtigosCrudComponent;
  let fixture: ComponentFixture<ArtigosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigosCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
