import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTokenRequest } from './modules/auth/ngrx/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadTokenRequest())
  }
}
