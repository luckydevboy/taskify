import { Component } from '@angular/core';
import { QueryHandlerService } from '../../../services/query-handler/query-handler.service';
import { Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private queryHandlerService: QueryHandlerService) {}

  updateQueryParams(params: Params) {
    this.queryHandlerService.handleQuery(params);
  }
}
