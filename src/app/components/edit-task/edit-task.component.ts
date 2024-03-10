import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces';
import { ModalComponent } from '../ui/modal/modal.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TaskService } from '../task/task.service';

type ErrorsMap = { [key: string]: boolean };

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [ModalComponent, FormsModule, NgIf],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent implements OnInit {
  originalTask!: Task;
  @Input() task: Task = { id: '', text: '', dueDate: '', completed: 'false' };
  errors: ErrorsMap = { dueDate: false, text: false };

  constructor(private tasksService: TaskService) {}

  ngOnInit() {
    this.originalTask = { ...this.task };
  }

  onSubmit(formState: NgForm) {
    this.tasksService.updateTask(this.task.id, formState.form.value);
  }

  checkValidity(localRef: NgModel, elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      this.errors[elementId] = !localRef.valid;
      if (!localRef.valid) {
        element.style.border = '1px solid #ef4444';
      } else {
        element.style.border = '1px solid #d1d5db';
      }
    }
  }

  protected readonly Boolean = Boolean;
}
