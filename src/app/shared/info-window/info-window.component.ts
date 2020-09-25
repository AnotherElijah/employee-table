import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {
  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}
