import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFieldComponent } from './table-field.component';

describe('FieldComponent', () => {
  let component: TableFieldComponent;
  let fixture: ComponentFixture<TableFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
