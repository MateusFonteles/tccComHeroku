import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosCriarComponent } from './artigos-criar.component';

describe('ArtigosCriarComponent', () => {
  let component: ArtigosCriarComponent;
  let fixture: ComponentFixture<ArtigosCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigosCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
