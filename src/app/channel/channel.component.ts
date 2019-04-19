import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ChatService} from '../app.service';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  matcher: any;
  uploadForm: FormGroup;
  list = {};
  error = false;

  constructor(private _router: Router, private _formBuilder: FormBuilder, private _chatService: ChatService) {
    this._chatService.getList()
      .subscribe(channels => {
        this.list = channels;
      });
  }

  ngOnInit() {
    this.uploadForm = this._formBuilder.group({
      chatName : [null, Validators.required],
      userName : [null, Validators.required]
    });
    this.matcher = new MyErrorStateMatcher();
  }

  OnUpload(form) {
    // form.chatName in this.list
    if (localStorage.getItem('channelName') === form.chatName) {
      this.error = true;
    } else {
      this.error = false;
      localStorage.setItem('channelName', form.chatName);
      this._router.navigate(['channel', form.chatName]);
    }
  }

}
