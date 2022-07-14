import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejaNossoParceiroComponent } from './seja-nosso-parceiro.component';

describe('SejaNossoParceiroComponent', () => {
  let component: SejaNossoParceiroComponent;
  let fixture: ComponentFixture<SejaNossoParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejaNossoParceiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SejaNossoParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
