import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LayoutComponent } from './components/layout/layout.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { NgForOf, NgIf } from '@angular/common';
import { ModalComponent } from './components/ui/modal/modal.component';
import { TaskService } from './components/task/task.service';

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
  providers: [TaskService],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    initFlowbite();
  }
}
