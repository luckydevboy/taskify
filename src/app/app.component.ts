import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LayoutComponent } from './components/layout/layout.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { Task } from './interfaces';
import { TaskComponent } from './components/task/task.component';
import { NgForOf } from '@angular/common';
import { ModalComponent } from './components/ui/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    AddTaskComponent,
    TaskComponent,
    NgForOf,
    ModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit(): void {
    initFlowbite();
  }

  handleAddNewTask(task: Task) {
    this.tasks.push(task);
  }
}
