import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QueryHandlerService {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  handleQuery(params: Params) {
    const mergedParams = {
      ...this.activatedRoute.snapshot.queryParams,
      ...params,
    };

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: mergedParams,
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
  }
}
