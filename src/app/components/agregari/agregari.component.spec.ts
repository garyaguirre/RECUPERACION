import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregariComponent } from './agregari.component';

describe('AgregariComponent', () => {
  let component: AgregariComponent;
  let fixture: ComponentFixture<AgregariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
