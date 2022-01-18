import { DriversService } from './services/drivers.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';


@NgModule({
  declarations: [
    DriversComponent,
    DriverDetailComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule
  ],
  providers: [DriversService]
})
export class DriversModule { }
