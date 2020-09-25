import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-tags',
  templateUrl: './worker-tags.component.html',
  styleUrls: ['./worker-tags.component.css']
})
export class WorkerTagsComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
