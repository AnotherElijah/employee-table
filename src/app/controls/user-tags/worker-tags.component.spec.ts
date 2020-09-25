import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTagsComponent } from './worker-tags.component';

describe('WorkerTagsComponent', () => {
  let component: WorkerTagsComponent;
  let fixture: ComponentFixture<WorkerTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
