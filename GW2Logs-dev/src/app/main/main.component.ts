import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Boss } from '../helpers/boss';

import { HttpClient } from '@angular/common/http';

/*$.getJSON('assets/logs.json', function (data) {
  if (!data) {
    return;
  }
  console.log('logs json loaded');
  for (let i = 0; i < BOSSES.length; i++) {
    BOSSES[i].buildLogs(data);
  }
  console.log('logs done');
});*/

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bosses: Boss[] = [];
  selectedBoss: Boss;
  selectedDisplay = 'compo';
  logsStyle = { 'background-image': 'url(assets/logs.png)' };
  compoStyle = { 'background-image': 'url(assets/compo.png)' };

  constructor(private http: HttpClient) {
    const _this = this;
    this.http.get('assets/bosses.json')
      .subscribe(function (data: { bosses: any[] }) {
        console.log('bosses.json loaded');
        _this.bosses = data.bosses.map(bossData => new Boss(bossData));
        console.log('bosses done');
        _this.http.get('assets/logs.json')
          .subscribe(function (logs: any) {
            console.log('logs json loaded');
            for (let i = 0; i < _this.bosses.length; i++) {
              _this.bosses[i].buildLogs(logs);
            }
            console.log('logs done');
            _this.selectedBoss = _this.bosses[0];
          });
      });
  }

  ngOnInit() {
  }

  onSelect(boss: Boss): void {
    this.selectedBoss = boss;
  }

  onSelectDisplay(display: string): void {
    this.selectedDisplay = display;
  }

}
