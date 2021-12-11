import { Component, OnInit } from '@angular/core';
import { Circuits, CircuitsService, Entity } from '@formulaone/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private circuitsService: CircuitsService
  ) { }

  // TODO : add PWA feature
  // TODO : page size and offset
  ngOnInit() {
    this.circuitsService.getCircuits()
      .subscribe((res: Entity<Circuits>) => {
        console.log(res);
      })
  }

}
