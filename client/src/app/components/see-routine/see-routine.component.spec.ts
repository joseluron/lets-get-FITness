import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeRoutineComponent } from './see-routine.component';

describe('SeeRoutineComponent', () => {
  let component: SeeRoutineComponent;
  let fixture: ComponentFixture<SeeRoutineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeRoutineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
