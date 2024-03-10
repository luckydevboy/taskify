import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../../interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasksChanged = new EventEmitter<Task[]>();
  private tasks: Task[] = [];

  constructor(private router: Router) {
    this.loadTasks();
  }

  getTasks() {
    return [...this.tasks];
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.emit([...this.tasks]);
    this.saveTasks();
    this.router.navigate(['/']);
  }

  updateTaskStatus(id: string) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (this.tasks[index].completed === 'true') {
      this.tasks[index].completed = 'false';
    } else {
      this.tasks[index].completed = 'true';
    }
    this.tasksChanged.emit([...this.tasks]);
    this.saveTasks();
  }

  updateTask(
    id: string,
    modifiedTask: Pick<Task, 'dueDate' | 'completed' | 'text'>,
  ) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index] = { id, ...modifiedTask };
    this.tasksChanged.emit([...this.tasks]);
    this.saveTasks();
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.tasksChanged.emit([...this.tasks]);
    this.saveTasks();
  }

  filterTasksByStatus(completed: boolean | null) {
    if (completed !== null) {
      // FIXME: Make it type safe when getting data from the form
      this.tasksChanged.emit([
        ...this.tasks.filter(
          (task) => (task.completed === 'true') === completed,
        ),
      ]);
    } else {
      this.tasksChanged.emit([...this.tasks]);
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
