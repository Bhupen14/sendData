import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislayComponent } from './dislay.component';

describe('DislayComponent', () => {
  let component: DislayComponent;
  let fixture: ComponentFixture<DislayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
