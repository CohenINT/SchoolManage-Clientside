import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHellosComponent } from './list-hellos.component';

describe('ListHellosComponent', () => {
  let component: ListHellosComponent;
  let fixture: ComponentFixture<ListHellosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHellosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHellosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
