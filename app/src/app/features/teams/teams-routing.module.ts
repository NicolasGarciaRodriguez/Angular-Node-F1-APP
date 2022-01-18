import { TeamsDetailComponent } from './components/teams-detail/teams-detail.component';
import { TeamsComponent } from './components/teams/teams.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: TeamsComponent},
  {path: "detail/:idTeam", component: TeamsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
