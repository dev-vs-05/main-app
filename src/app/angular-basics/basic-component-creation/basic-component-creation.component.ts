import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-component-creation',
  templateUrl: './basic-component-creation.component.html',
  styleUrls: ['./basic-component-creation.component.css']
})
export class BasicComponentCreationComponent implements OnInit {

  // serverStatus to return in method ...... This is way to define a method in typescript
  // so this method name should be called in html file.
  classTopic: string = 'Angular Basics';
  serverId: number = 10;
  serverStatus: string = 'Offline';

  allowNewServer = false;

  serverCreationStatus = "No server was created."

  updateServerId: any = '';
  serverName: any =  '';

  newServerData: any = '';

  newServerName: any = '';

  userName: any = '';

  serverCreated = false;

  servers = [];

  onClickAddUserName() {}

  getServerStatus () {
    return this.serverStatus;
  }

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 10000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.userName); 
    this.serverCreationStatus = "Server was Created!"
  }

  onUpdateServerId(event) {
    this.updateServerId = event.target.value;
  }

  onUpdateServerName(event) {
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }
}
