import { Component, OnInit } from '@angular/core';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { NgForOf, NgIf } from '@angular/common';
import { TaskComponent } from '../../components/task/task.component';
import { Task } from '../../interfaces';
import { TaskService } from '../../components/task/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddTaskComponent, NgForOf, NgIf, TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  tasks!: Task[];

  constructor(
    private tasksService: TaskService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
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
