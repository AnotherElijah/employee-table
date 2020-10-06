import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateWorkerComponent } from './create-worker.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('CreateWorkerComponent', () => {
  let component: CreateWorkerComponent;
  let fixture: ComponentFixture<CreateWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkerComponent ],
      imports: [ HttpClientTestingModule, FormsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
