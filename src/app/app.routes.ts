// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideochatComponent} from './videochat/videochat.component';
import {MainComponent} from './main/main.component';
import {ShowvideosComponent} from './showvideos/showvideos.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'live',
    component: VideochatComponent
  },
  {
    path: 'connect',
    component: ShowvideosComponent
  }
];


// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })

