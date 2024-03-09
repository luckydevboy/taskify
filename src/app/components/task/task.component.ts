import { AfterViewInit, Component, Input } from '@angular/core';
import { Task } from '../../interfaces';
import { initFlowbite } from 'flowbite';
import { ModalComponent } from '../ui/modal/modal.component';
import { TaskService } from './task.service';
import { NgClass } from '@angular/common';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ModalComponent, NgClass, EditTaskComponent, DeleteTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements AfterViewInit {
  @Input() task: Task = { id: '', text: '', dueDate: '', completed: 'false' };
  @Input() index!: number;

  constructor(private tasksService: TaskService) {}

  ngAfterViewInit() {
    initFlowbite();
  }

  updateStatus(id: string) {
    this.tasksService.updateTaskStatus(id);
  }
}
