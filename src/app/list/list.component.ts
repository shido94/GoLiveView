import { Component, OnInit } from '@angular/core';
import {ChatService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list = [];

  constructor(private _chatService: ChatService, private _router: Router) {
    this._chatService.getList()
      .subscribe(channels => {
        console.log(channels);
        for (const channel in channels) {
          if (channels.hasOwnProperty(channel)) {
            console.log(channel);
            console.count(channel);
            this.list.push(channels[channel]);
            const result = this.list.filter(i => i === channels[channel]).length;
            if (result === 2) {
              const filtered = this.list.filter(function (element) {
                return element !== channels[channel];
              });
              this.list = filtered;
            }
          }
        }
      });
  }

  ngOnInit() {
  }

  goLive(link) {
    this._router.navigate(['channel', link]);
  }

}
