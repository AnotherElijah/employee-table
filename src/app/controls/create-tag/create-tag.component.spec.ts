import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTagComponent } from './create-tag.component';
import {TagsService} from '../../services/tags.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('CreateTagComponent', () => {
  let component: CreateTagComponent;
  let fixture: ComponentFixture<CreateTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTagComponent ],
      imports: [HttpClientTestingModule, FormsModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
