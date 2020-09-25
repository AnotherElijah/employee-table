import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WorkersService} from '../../services/workers.service';
import {NgForm} from '@angular/forms';
import {TagsService} from '../../services/tags.service';

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent {
  effect:boolean = false
  showNotif:boolean = false
  constructor(private tagsService: TagsService) {
  }

  onSubmit(form: NgForm) {
    this.effect = true
    this.tagsService.saveTag(form.value.name).then(() => {
        this.effect = false
        form.resetForm()
        this.showNotif = true
        setTimeout(()=>this.showNotif=false, 2000)
      },
      err => {
      console.log(err)
        this.effect = false
      }
    )
  }
}
