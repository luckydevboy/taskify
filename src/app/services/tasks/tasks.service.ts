import { Injectable } from '@angular/core';
import { Task } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];

  constructor() {}

  addNewTask(task: Task) {
    this.tasks.push(task);
  }
}
