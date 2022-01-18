import { DriversComponent } from './components/drivers/drivers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';

const routes: Routes = [
  {path: "", component: DriversComponent},
  {path: "detail/:idDriver", component: DriverDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
