import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LayoutComponent } from './components/layout/layout.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { NgForOf, NgIf } from '@angular/common';
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
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TasksService],
})
export class AppComponent implements OnInit {
  tasks!: Task[];

  constructor(
    // FIXME: Why not using public?
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    initFlowbite();

    this.tasks = this.tasksService.getTasks();
    this.tasksService.tasksChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });

    this.activatedRoute.queryParamMap.subscribe((params) => {
      const completed = params.get('completed');

      switch (completed) {
        case 'true':
          this.tasksService.filterTasksByStatus(true);
          break;
        case 'false':
          this.tasksService.filterTasksByStatus(false);
          break;
        default:
          this.tasksService.filterTasksByStatus(null);
      }
    });
  }
}
