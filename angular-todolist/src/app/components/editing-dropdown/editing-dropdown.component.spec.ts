import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingDropdownComponent } from './editing-dropdown.component';

describe('EditingDropdownComponent', () => {
  let component: EditingDropdownComponent;
  let fixture: ComponentFixture<EditingDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
