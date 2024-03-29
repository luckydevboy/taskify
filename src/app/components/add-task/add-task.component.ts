import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  newTask = '';
  @Output() addTaskEvent = new EventEmitter<Task>();

  constructor(private tasksService: TaskService) {}

  onAddNewTask(task: string) {
    this.tasksService.addTask({
      id: uuidv4(),
      text: task,
      completed: 'false',
    });
    this.newTask = '';
  }
}
