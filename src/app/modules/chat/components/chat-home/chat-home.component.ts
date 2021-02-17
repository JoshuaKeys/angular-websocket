import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthToken } from 'src/app/modules/auth/ngrx/auth.selectors';
import { WsService } from '../../services/ws.service';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss']
})
export class ChatHomeComponent implements OnInit {

  constructor(private wsService: WsService, private store: Store) {
    this.wsService.wsConnection.subscribe(console.log)
  }

  ngOnInit(): void {
    this.store.select(selectAuthToken).subscribe(token => {
      this.wsService.wsConnection.next(JSON.stringify({ token }))
    });

  }

}
