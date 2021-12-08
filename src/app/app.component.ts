import { Component, OnInit } from '@angular/core';
import { Entity } from './models/entity.model';
import { SeasonSchedule } from './models/schedule.model';
import { SchedulesService } from './services/schedules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private schedulesService: SchedulesService) { }

// TODO : add PWA feature

  ngOnInit() {
    this.schedulesService.getSeasonSchedule({ year: 2021 })
      .subscribe((res: Entity<SeasonSchedule>) => {
        console.log(res.RaceTable.Races);
      });
  }

}
