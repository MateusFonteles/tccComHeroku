import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesCriarComponent } from './atividades-criar.component';

describe('AtividadesCriarComponent', () => {
  let component: AtividadesCriarComponent;
  let fixture: ComponentFixture<AtividadesCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadesCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
