import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.html',
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  setServerStatus() {
    return this.serverStatus;
  }
}
