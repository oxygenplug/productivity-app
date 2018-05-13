import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenu } from './home.component';

describe('HomeMenu', () => {
  let component: HomeMenu;
  let fixture: ComponentFixture<HomeMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMenu ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
