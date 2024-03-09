import { Component, Input } from '@angular/core';
import { ModalComponent } from '../ui/modal/modal.component';
import { Task } from '../../interfaces';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.css',
})
export class DeleteTaskComponent {
  @Input() task: Task = { id: '', text: '', dueDate: '', completed: 'false' };

  constructor(private tasksService: TaskService) {}

  deleteTask(id: string) {
    this.tasksService.deleteTask(id);
  }
}
