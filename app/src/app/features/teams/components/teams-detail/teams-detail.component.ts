import { ActivatedRoute } from '@angular/router';
import { DriversService } from './../../../drivers/services/drivers.service';
import { Iteam } from './../../models/iteam';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.scss']
})
export class TeamsDetailComponent implements OnInit {

  private URL: String = "http://localhost:5000/api/teams/"
  public teamId?: any
  public dataTeam: Iteam = {
    _id: "",
    position: "",
    points: "",
    name: "",
    logo: "",
    driver1: "",
    driver2: "",
    carImage: "",
    logo2: "",
    base : "",
    teamChief: "",
    chassis: "",
    powerUnit: "",
    teamEntry: "",
    worldTitles: "",
    poles: "",
    fastestLaps: "",
    driver1Image: "",
    driver2Image: "",
  }

  constructor(private driverService: DriversService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => { this.teamId = params.idTeam});
    this.recoverTeamDetail(this.teamId)
  }


  public recoverTeamDetail (idTeam: any) {
    this.driverService.getTeamsDetail(this.URL + idTeam).subscribe((data: any) => {
      this.dataTeam = data.msg
    })
  }

}
