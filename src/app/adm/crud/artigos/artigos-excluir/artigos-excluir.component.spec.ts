import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosExcluirComponent } from './artigos-excluir.component';

describe('ArtigosExcluirComponent', () => {
  let component: ArtigosExcluirComponent;
  let fixture: ComponentFixture<ArtigosExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigosExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
