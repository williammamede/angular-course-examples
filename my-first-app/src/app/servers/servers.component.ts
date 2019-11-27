import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServe = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testserver';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServe = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  // binding in one way
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
