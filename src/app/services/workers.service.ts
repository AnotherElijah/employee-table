import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Worker} from '../../types/types';
import {Tag} from '@angular/compiler/src/i18n/serializers/xml_helper';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  public workers$ = new Subject<[]>();

  constructor(private http: HttpClient) {
    this.getAllWorkers();
  }

  getAllWorkers() {
    return this.http.get<any>(`workers/`).subscribe((workers) => this.workers$.next(workers));
  }

  async saveWorker(workerData) {
    return this.http.post<Worker>(`workers/create/`, workerData).subscribe(() => this.getAllWorkers());
  }

  addWorkerTag(body){
    return this.http.put<Tag>(`tags/add-workers-tag`, body)
      .subscribe(() => this.getAllWorkers())
  }

  deleteWorker(id: string) {
    return this.http.delete<string>(`workers/delete?id=${id}`).subscribe(() => this.getAllWorkers());
  }

  deleteWorkerTag(body){
    console.log(body)
    return this.http.put<any>(`tags/remove-workers-tag`, body)
      .subscribe(() => this.getAllWorkers())
  }

}
