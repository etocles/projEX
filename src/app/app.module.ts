import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BenchmarkComponent } from './components/benchmark/benchmark.component';
import { NestedBarComponent } from './components/nested-bar/nested-bar.component';
import { PartComponent } from './components/part/part.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditingDropdownComponent } from './components/editing-dropdown/editing-dropdown.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { ArchiveFormComponent } from './components/archive-form/archive-form.component';
import { PreferencesFormComponent } from './components/preferences-form/preferences-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectItemComponent,
    HeaderComponent,
    AddProjectComponent,
    ProgressBarComponent,
    BenchmarkComponent,
    NestedBarComponent,
    PartComponent,
    EditingDropdownComponent,
    AddFormComponent,
    ArchiveFormComponent,
    PreferencesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
