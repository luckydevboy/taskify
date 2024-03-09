import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces';
import { ModalComponent } from '../ui/modal/modal.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [ModalComponent, FormsModule, NgIf],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  constructor(private tasksService: TaskService) {}
  @Input() task: Task = { id: '', text: '', dueDate: '', completed: 'false' };

  onSubmit(formState: NgForm) {
    this.tasksService.updateTask(this.task.id, formState.form.value);
  }

  protected readonly Boolean = Boolean;
}
