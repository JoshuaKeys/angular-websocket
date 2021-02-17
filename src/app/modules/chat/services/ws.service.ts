import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket'
@Injectable({
  providedIn: 'root'
})
export class WsService {
  wsConnection: WebSocketSubject<any>;
  makeConnection() {
    this.wsConnection = webSocket('ws://localhost');
  }
  constructor() {
    this.makeConnection();
  }
}
