import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AddName } from 'src/app/reducers/names.reducer';
import { Store, select } from '@ngrx/store';

interface AppState {
  names: string[];
  frutes: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  names$: Observable<string[]>;

  frutes$: Observable<string[]>;

  index = 1;

  constructor(private store: Store<AppState>) {
    this.names$ = store.pipe(select('names'));
    this.frutes$ = store.pipe(select('frutes'));
  }

  increment(action) {
    this.store.dispatch({type: action ,payload: 'Name ' + this.index++});
  }
}
