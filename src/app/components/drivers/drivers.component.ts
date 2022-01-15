import { Component, Input, OnInit } from '@angular/core';
import { Driver, Drivers, DriversService, Entity } from '@formulaone/types';
import { ToastService } from 'ngx-jaka';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paginator } from 'src/app/shared/paginator';

@Component({
  selector: 'fow-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent extends Paginator implements OnInit {

  @Input() drivers: Entity<Drivers>

  constructor(private driverService: DriversService, private toast: ToastService) {
    super();
  }

  ngOnInit(): void {
    this._search().subscribe();
  }

  next(): void {
      super.next();
      this._search().subscribe();
      this.toast.pushMessage({
        message: 'bonjour',
        type: 'info',
        title: 'au revoir'
      })
  }

  previous(): void {
      super.previous();
      this._search().subscribe();
  }

  private _search(): Observable<void> {
    return this.driverService.getDrivers(super.requestOptions)
      .pipe(
        map((data: Entity<Drivers>) => {
          this.drivers = data;
          console.log(data);
        })
      );
  }

}
