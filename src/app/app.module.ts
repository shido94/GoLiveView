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
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChannelComponent } from './channel/channel.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideochatComponent,
    MainComponent,
    ShowvideosComponent,
    ChannelComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
