import { Injectable } from '@angular/core';
import { Task } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveTasks();
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
