// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideochatComponent} from './videochat/videochat.component';
import {MainComponent} from './main/main.component';
import {ShowvideosComponent} from './showvideos/showvideos.component';
import {promise} from 'selenium-webdriver';
import fullyResolved = promise.fullyResolved;
import {ChannelComponent} from './channel/channel.component';
import {ListComponent} from './list/list.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'channel/:channel',
    component: VideochatComponent,
  },
  {
    path: 'connect',
    component: ShowvideosComponent
  },
  {
    path : 'channel',
    component: ChannelComponent
  },
  {
    path: 'list',
    component: ListComponent
  }
];


// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })

