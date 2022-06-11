import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(() => {

    })
  }

}
