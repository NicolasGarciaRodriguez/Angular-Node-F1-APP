import { DriversService } from './../../../drivers/services/drivers.service';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Iteam } from '../../models/iteam';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public teamList: Iteam[] = []

  protected readonly clearSubscriptions$ = new Subject();

  constructor(private driversService: DriversService) { }


  ngOnDestroy(): void {
    this.clearSubscriptions$.complete();
  }

  ngOnInit(): void {
    this.recoverTeams()
  }

  public recoverTeams() {
    return this.driversService.getTeams().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data: any) => {
      this.teamList = data
    })
  }

}
