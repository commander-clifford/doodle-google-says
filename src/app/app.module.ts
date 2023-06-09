import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamePadComponent } from './game-pad/game-pad.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GamePadComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
