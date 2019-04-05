import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';
// import * as ss from 'socket.io-stream';

export interface PeerData {
  peerId: any;
  should_create_offer: boolean;
}

export interface SessionData {
  peerId: any;
  sessionDescription: any;
}

export interface IceCandidate {
  peerId: any;
  iceCandidate: any;
}

export interface RemovePeer {
  peerId: any;
}


const BASE_URL = 'https://go-live-app.herokuapp.com';
@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private socket = io(BASE_URL);

  sendData(joinData) {
    this.socket.emit('join', joinData);
  }

  disconnets() {
    console.log('reaxdf');
    this.socket.on('disconnect');
    this.socket.emit('pageDisconnected');
  }

  removePeer() {
    const observables = new Observable<RemovePeer>(observer => {
      this.socket.on('removePeer', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect(); };
    });
    return observables;
  }

  recievingAddPeer(): Observable<PeerData> {
    const observables = new Observable<PeerData>(observer => {
      this.socket.on('addPeer', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnect(); };
    });
    return observables;
  }

  relayIceCandidate(iceData) {
    this.socket.emit('relayIceCandidate', iceData);
  }

  relaySessionDescription(sessionData) {
    this.socket.emit('relaySessionDescription', sessionData);
  }

  recievingSessionDescription(): Observable<SessionData> {
    const observable = new Observable<SessionData>(observer => {
      this.socket.on('sessionDescription', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnets(); };
    });
    return observable;
  }

  recievingIceCandidate(): Observable<IceCandidate> {
    const observable = new Observable<IceCandidate>(observer => {
      this.socket.on('iceCandidates', (data) => {
        observer.next(data);
      });
      return () => {this.socket.disconnets(); };
    });
    return observable;
  }

}
