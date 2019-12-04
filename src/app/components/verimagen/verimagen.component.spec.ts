import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerimagenComponent } from './verimagen.component';

describe('VerimagenComponent', () => {
  let component: VerimagenComponent;
  let fixture: ComponentFixture<VerimagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerimagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
