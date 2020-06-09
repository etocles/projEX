import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedBarComponent } from './nested-bar.component';

describe('NestedBarComponent', () => {
  let component: NestedBarComponent;
  let fixture: ComponentFixture<NestedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
