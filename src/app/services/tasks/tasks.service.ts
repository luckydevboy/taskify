import { Injectable } from '@angular/core';
import { Task } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];

  constructor() {}

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
