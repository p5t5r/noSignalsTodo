import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  component: TodosComponent
}
];

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule
  ]
})

export class TodosModule { }
