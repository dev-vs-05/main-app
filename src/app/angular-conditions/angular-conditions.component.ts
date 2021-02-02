import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-conditions',
  templateUrl: './angular-conditions.component.html',
  styles: [`
    .online {
      color: #fff;
      padding: 0.30rem;
    }
    .offline {
      color: #fff;
      padding: 0.30rem;
    }
  `]
})
export class AngularConditionsComponent implements OnInit {

  serverData: any = '';
  serverCreated: any = false;

  serverId: any = '10';
  serverStatus: string = 'offline'; 

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  onClickTrue() {
    this.serverCreated = true;
  }

  getColor () {
    return this.serverStatus === 'online' ? '#72fc72' : '#e13232'; 
  }

  getStatusColor() {
    return this.serverStatus === 'online' ? '#2efe2e' : '#ac0505';
  }

}
