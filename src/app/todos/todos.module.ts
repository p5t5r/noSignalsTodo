import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    TodosComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class TodosModule {}
