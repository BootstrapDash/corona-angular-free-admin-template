import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRtlComponent } from './todo-rtl.component';

describe('TodoRtlComponent', () => {
  let component: TodoRtlComponent;
  let fixture: ComponentFixture<TodoRtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoRtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoRtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
