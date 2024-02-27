import { AfterViewInit, Component, Input } from '@angular/core';
import { Task } from '../../interfaces';
import { initFlowbite } from 'flowbite';
import { ModalComponent } from '../ui/modal/modal.component';
import { TasksService } from '../../services/tasks/tasks.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ModalComponent, NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements AfterViewInit {
  @Input() task: Task = { id: '', text: '', createdAt: '', completed: false };
  @Input() index!: number;

  constructor(private tasksService: TasksService) {}

  ngAfterViewInit() {
    initFlowbite();
  }

  updateStatus(id: string) {
    this.tasksService.updateStatus(id);
  }

  deleteTask(id: string) {
    this.tasksService.deleteTask(id);
  }
}
