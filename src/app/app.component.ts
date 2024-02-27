import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LayoutComponent } from './components/layout/layout.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { NgForOf } from '@angular/common';
import { ModalComponent } from './components/ui/modal/modal.component';
import { TasksService } from './services/tasks/tasks.service';
import { Task } from './interfaces';

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
  tasks: Task[] = [];

  constructor(
    // TODO: Is it correct to use public instead of make it private and pass it to a new variable?
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    initFlowbite();

    this.activatedRoute.queryParamMap.subscribe((params) => {
      const completed = params.get('completed');

      switch (completed) {
        case 'true':
          this.tasks = this.tasksService.tasks.filter((task) => task.completed);
          break;
        case 'false':
          this.tasks = this.tasksService.tasks.filter((task) => task.completed);
          break;
        default:
          this.tasks = this.tasksService.tasks.map((task) => task);
      }
    });
  }
}
