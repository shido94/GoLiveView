import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainComponent} from './main/main.component';
import {VideochatComponent} from './videochat/videochat.component';
import {ShowvideosComponent} from './showvideos/showvideos.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {ChatService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    VideochatComponent,
    MainComponent,
    ShowvideosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
