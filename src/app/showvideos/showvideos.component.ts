import { Component, OnInit } from '@angular/core';
import {ChatService} from '../app.service';

@Component({
  selector: 'app-showvideos',
  templateUrl: './showvideos.component.html',
  styleUrls: ['./showvideos.component.css']
})
export class ShowvideosComponent implements OnInit {

  video: HTMLVideoElement;

  constructor(private _chatService: ChatService) {

    const myMediaSource = new MediaSource();

    this.video = document.querySelector('video');
    this.video.src = URL.createObjectURL(myMediaSource);

    const videoSourceBuffer = myMediaSource
      .addSourceBuffer('video/mp4; codecs="avc1.64001e"');


  }

  ngOnInit() {
  }

}
