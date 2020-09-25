import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {WorkersService} from '../../services/workers.service';
import {TagsService} from '../../services/tags.service';

@Component({
  selector: 'app-create-worker',
  templateUrl: './create-worker.component.html',
  styleUrls: ['./create-worker.component.css']
})
export class CreateWorkerComponent implements OnInit {
  effect = false;
  errMsg;
  showNotif = false;
  panelOpenState = false;
  offices = [
    'Tallinn',
    'Vilnius',
    'Riga',
  ];
  tags;
  tagsChosen = [];
  officeValue;
  constructor(
    private workersService: WorkersService,
    private tagsService: TagsService
    ) {
  }

  ngOnInit(){
    this.tagsService.tags$.subscribe(data=> {
      this.tags = data;
    });
  }

  assignTags(value){
    this.tagsChosen.push(value)
    this.tags = this.tags.filter((item:any)=> item._id!==value._id)
  }

  removeTag(tag) {
    this.tagsChosen = this.tagsChosen.filter(item=>item._id!==tag._id)
    this.tags.push(tag)
  }

  refreshAll(form){
    this.effect = false
    this.officeValue = ''
    this.tagsChosen = []
    form.resetForm()
  }

  onSubmit(form: NgForm) {
    this.effect = true;

    this.workersService.saveWorker({...form.value, office: this.officeValue, tags: this.tagsChosen}).then(() => {
      this.refreshAll(form)
      this.showNotif = true;
      setTimeout(()=>this.showNotif=false, 2000)
      },
      err => {
        this.effect = false;
        console.log(err);
      }
    );
  }
}
