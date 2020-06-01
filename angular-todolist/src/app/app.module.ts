import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BenchmarkComponent } from './components/benchmark/benchmark.component';
import { NestedBarComponent } from './components/nested-bar/nested-bar.component';
import { PartComponent } from './components/part/part.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditingDropdownComponent } from './components/editing-dropdown/editing-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    ProgressBarComponent,
    BenchmarkComponent,
    NestedBarComponent,
    PartComponent,
    EditingDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTooltipModule,
    MatIconModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
