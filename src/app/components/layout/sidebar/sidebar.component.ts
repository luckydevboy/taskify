import { Component, OnInit } from '@angular/core';
import { QueryHandlerService } from '../../../services/query-handler/query-handler.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  status: 'all' | 'todos' | 'completed' = 'all';

  constructor(
    private queryHandlerService: QueryHandlerService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const completed = params.get('completed');
      switch (completed) {
        case null:
          this.status = 'all';
          break;
        case 'true':
          this.status = 'completed';
          break;
        case 'false':
          this.status = 'todos';
          break;
        default:
          this.status = 'all';
      }
    });
  }

  updateQueryParams(params: Params) {
    this.queryHandlerService.handleQuery(params);
  }
}
