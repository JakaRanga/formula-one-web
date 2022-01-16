import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fow-content',
  template: '<router-outlet></router-outlet>',
  host: { 'class': 'd-flex flex-column flex-fill'}
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
