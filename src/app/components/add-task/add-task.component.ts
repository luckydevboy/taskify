import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';

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

  onAddNewTask(task: string) {
    const today = new Date();
    this.addTaskEvent.emit({
      id: uuidv4(),
      text: task,
      createdAt: today.toISOString().split('T')[0],
    });
    this.newTask = '';
  }
}