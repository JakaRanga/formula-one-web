import { Component, OnInit } from '@angular/core';
import { Circuits, CircuitsService, Entity } from '@formulaone/types';
import { ToastService } from 'ngx-jaka';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private toastService: ToastService
  ) { }

  // TODO : add PWA feature
  // TODO : page size and offset
  ngOnInit() {
    // this.circuitsService.getCircuitsById({
    //   circuitId: 'adelaide'
    // })
    //   .subscribe((res: Entity<Circuits>) => {
    //     console.log(res);
    //   });
  }

}
