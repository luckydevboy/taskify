import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LayoutComponent } from './components/layout/layout.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { NgForOf } from '@angular/common';
import { ModalComponent } from './components/ui/modal/modal.component';
import { TasksService } from './services/tasks/tasks.service';

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
  providers: [TasksService],
})
export class AppComponent implements OnInit {
  constructor(public tasksService: TasksService) {}

  ngOnInit(): void {
    initFlowbite();
  }
}
