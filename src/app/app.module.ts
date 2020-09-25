import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {WorkersTableModule} from './table/workers/workers-table.module';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {TagsTableComponent} from './table/tags/tags-table/tags-table.component';
import {WorkersTableComponent} from './table/workers/workers-table.component';
import {CreateWorkerComponent} from './controls/create-worker/create-worker.component';
import { CreateTagComponent } from './controls/create-tag/create-tag.component';
import { InfoWindowComponent } from './shared/info-window/info-window.component';
import { TagComponent } from './shared/tag/tag.component';
import { WorkerTagsComponent } from './controls/user-tags/worker-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersTableComponent,
    CreateWorkerComponent,
    TagsTableComponent,
    CreateTagComponent,
    InfoWindowComponent,
    TagComponent,
    WorkerTagsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    WorkersTableModule,
    HttpClientModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
