import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { nameReducer } from 'src/app/reducers/names.reducer';
import { fruteReducer } from 'src/app/reducers/frutes.reducer';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ names: nameReducer, frutes: fruteReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
