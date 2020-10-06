import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersTableComponent } from './workers-table.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NgForm} from '@angular/forms';

describe('WorkersTableComponent', () => {
  let component: WorkersTableComponent;
  let fixture: ComponentFixture<WorkersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersTableComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
