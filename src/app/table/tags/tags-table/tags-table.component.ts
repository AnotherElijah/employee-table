import {Component, Input, OnInit} from '@angular/core';
import {TagsService} from '../../../services/tags.service';

@Component({
  selector: 'app-tags-table',
  templateUrl: './tags-table.component.html',
  styleUrls: ['./tags-table.component.css']
})
export class TagsTableComponent implements OnInit {
  panelOpenState = false
  showCreateFrom = false
  displayedColumns: string[] = ['tags', 'actions']
  dataSource
  constructor(private tagsService: TagsService) {}

  ngOnInit() {
    this.tagsService.tags$.subscribe({
      next: (data) => {
        return this.dataSource = data;
      }
    });
  }

  deleteTag(id) {
    this.tagsService.deleteTag(id)
  }

  toggleShowCreateFrom() {
    this.showCreateFrom = !this.showCreateFrom;
  }
}
