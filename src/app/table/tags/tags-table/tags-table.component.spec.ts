import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsTableComponent } from './tags-table.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TagsTableComponent', () => {
  let component: TagsTableComponent;
  let fixture: ComponentFixture<TagsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsTableComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
