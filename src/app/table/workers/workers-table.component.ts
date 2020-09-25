import {Component, OnInit} from '@angular/core';
import {WorkersService} from '../../services/workers.service';
import {TagsService} from '../../services/tags.service';


@Component({
  selector: 'app-workers-table',
  templateUrl: './workers-table.component.html',
  styleUrls: ['./workers-table.component.css']
})
export class WorkersTableComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'secondName', 'office', 'birthDate', 'phoneNumber', 'tags', 'actions'];
  dataSource;
  tags: [];
  userTagsOpen: boolean = false;

  constructor(private workersService: WorkersService, private tagsService: TagsService) {}

  ngOnInit(): void {
    this.workersService.workers$.subscribe({
      next: (data) => {
        return this.dataSource = data;
      }
    });
    this.tagsService.tags$.subscribe({
      next: (data) => {
        return this.tags = data;
      }
    });
  }

  deleteWorker(id) {
    this.workersService.deleteWorker(id);
  }

  deleteTag(worker, tagId) {
    this.workersService.deleteWorkerTag({worker: {...worker}, tagId})
  }

  assignTags(worker, tag) {
    const isTagAssigned = worker.tags.find(item=>item._id===tag._id)
    if(!isTagAssigned) this.workersService.addWorkerTag({worker: {...worker}, tag})
  }
}
