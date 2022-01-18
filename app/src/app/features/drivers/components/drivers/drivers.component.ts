import { DriversService } from './../../services/drivers.service';
import { Idriver } from './../../models/idriver';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit, OnDestroy {

  public driversList: Idriver[] = [];

  protected readonly clearSubscriptions$ = new Subject();
  
  constructor(private driversService: DriversService) { }

  
  ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }

  ngOnInit(): void {
    this.recoverDrivers()
  }

  public recoverDrivers() {
    return this.driversService.getDrivers().pipe(takeUntil(this.clearSubscriptions$), ).subscribe((data) => {
      this.driversList = data;
    })
  }

}
