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

  updateTaskStatus(id: string) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  filterTasksByStatus(completed: boolean | null) {
    this.loadTasks();
    if (completed !== null) {
      this.tasks = this.tasks.filter((task) => task.completed === completed);
    }
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
