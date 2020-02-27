import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
total = 100;
alive = 60;
dead = 5;
off = this.total -(this.alive + this.dead)

  public doughnutChartLabels = [ 'Alive', 'Dead', 'OFF'];
  public doughnutChartData = [ this.alive, this.dead, this.off];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}

