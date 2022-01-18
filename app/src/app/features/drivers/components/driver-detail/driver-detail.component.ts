import { Idriver } from './../../models/idriver';
import { DriversService } from './../../services/drivers.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent implements OnInit {
  [x: string]: any;

  private URL: string = "http://localhost:5000/api/drivers/";
  public driverId?: any;
  public dataDriver: Idriver = {
    _id: "",
    name: "",
    number: "",
    points: "",
    flag: "",
    team: "",
    image1: "",
    country: "",
    podiums: "",
    gps: "",
    worldtitles: "",
    date: "",
    birth: "",
    image2: "",
    casco: "",
    position: ""
  }
  constructor(private driversService: DriversService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => { this.driverId = params.idDriver});
    this.recoverDriverDetail(this.driverId)
  }


  public recoverDriverDetail (idDriver: any) {
    this.driversService.getDriverDetail(this.URL + idDriver).subscribe((data: any) => {
      this.dataDriver = data.msg
      console.log(this.dataDriver)
    })
  }




}

