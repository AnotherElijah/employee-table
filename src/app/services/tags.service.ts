import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Tag} from '@angular/compiler/src/i18n/serializers/xml_helper';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  public tags$ = new Subject<[]>();

  constructor(private http: HttpClient) {
    this.getAllTags();
  }

  getAllTags() {
    return this.http.get<any>(`tags/`).subscribe(tags => this.tags$.next(tags));
  }

  async saveTag(name:string) {
    return this.http.get<Tag[]>(`tags/create?name=${name}`).subscribe(() => this.getAllTags());
  }

  deleteTag(id: string) {
    return this.http.delete<any>(`tags/delete?id=${id}`)
      .subscribe(() => this.getAllTags());
  }
}
