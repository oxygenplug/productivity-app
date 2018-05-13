import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxyModalComponent } from './oxy-modal.component';

describe('OxyModalComponent', () => {
  let component: OxyModalComponent;
  let fixture: ComponentFixture<OxyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
