import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChildComponent } from './dialog-child.component';

describe('DialogChildComponent', () => {
  let component: DialogChildComponent;
  let fixture: ComponentFixture<DialogChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
