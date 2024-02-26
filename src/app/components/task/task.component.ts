import { AfterViewInit, Component, Input } from '@angular/core';
import { Task } from '../../interfaces';
import { initFlowbite } from 'flowbite';
import { ModalComponent } from '../ui/modal/modal.component';
import { TasksService } from '../../services/tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements AfterViewInit {
  @Input() task: Task = { id: '', text: '', createdAt: '' };
  @Input() index!: number;

  constructor(public tasksService: TasksService) {}

  ngAfterViewInit() {
    initFlowbite();
  }
}
