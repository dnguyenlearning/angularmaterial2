import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarChildComponent } from './snackbar-child.component';

describe('SnackbarChildComponent', () => {
  let component: SnackbarChildComponent;
  let fixture: ComponentFixture<SnackbarChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
