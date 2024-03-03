import { AfterViewInit, Component, Input } from '@angular/core';
import { Task } from '../../interfaces';
import { initFlowbite } from 'flowbite';
import { ModalComponent } from '../ui/modal/modal.component';
import { TaskService } from './task.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ModalComponent, NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements AfterViewInit {
  @Input() task: Task = { id: '', text: '', dueDate: '', completed: false };
  @Input() index!: number;

  constructor(private tasksService: TaskService) {}

  ngAfterViewInit() {
    initFlowbite();
  }

  updateStatus(id: string) {
    this.tasksService.updateTaskStatus(id);
  }

  deleteTask(id: string) {
    this.tasksService.deleteTask(id);
  }
}
