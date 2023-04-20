import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDashComponent } from './index-dash.component';

describe('IndexDashComponent', () => {
  let component: IndexDashComponent;
  let fixture: ComponentFixture<IndexDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
