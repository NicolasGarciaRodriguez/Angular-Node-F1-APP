import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamsDetailComponent } from './components/teams-detail/teams-detail.component';


@NgModule({
  declarations: [
    TeamsComponent,
    TeamsDetailComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
