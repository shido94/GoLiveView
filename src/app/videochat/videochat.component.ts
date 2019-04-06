import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChatService, PeerData} from '../app.service';
import * as $ from 'jquery';
import 'webrtc-adapter';
import {config} from 'rxjs';

/** CONFIG **/
const USE_AUDIO = {
  sampleRate: 48000,
  channelCount: 2,
  volume: 0,
  echoCancellation : true
};

const USE_VIDEO = true;
const DEFAULT_CHANNEL = 'some-global-channel-name';
const MUTE_AUDIO_BY_DEFAULT = false;

declare let RTCPeerConnection: any;

let local_media_stream = null; /* our own microphone / webcam */
let peers = {};                /* keep track of our peer connections, indexed by peer_id (aka socket.io id) */
let peer_media_elements = {};  /* keep track of our <video>/<audio> tags, indexed by peer_id */


/** You should probably use a different stun server doing commercial stuff **/
const ICE_SERVERS = [
  {url: 'stun:stun.l.google.com:19302'}
];





@Component({
  selector: 'app-videochat',
  templateUrl: './videochat.component.html',
  styleUrls: ['./videochat.component.css']
})
export class VideochatComponent implements OnInit, OnDestroy {
  // video: HTMLVideoElement;
  // stream;

  constructor(private _chatService: ChatService) {

    // console.log('Signaling server said to add peer:', config);
    this._chatService.recievingAddPeer()
      .subscribe(config => {
        // console.log('reaching');
        // console.log('Signaling server said to add peer:', config);

        const peerId = config.peerId;
        if (peerId in peers) {
          /* This could happen if the user joins multiple channels where the other peer is also in. */
          // console.log("Already connected to peer ", peer_id);
          return;
        }

        const peer_connection = new RTCPeerConnection(
          {'iceServers': ICE_SERVERS},
          {'optional': [{'DtlsSrtpKeyAgreement': true}]}  /* this will no longer be needed by chrome
                                                           * eventually (supposedly), but is necessary
                                                           * for now to get firefox to talk to chrome */
          );

        peers[peerId] = peer_connection;
        let i = 0;
        peer_connection.onicecandidate = (event) => {
          // console.log('event => ', event);
          i++;
          if (event.candidate) {
            // console.log(i);
            // console.log('phuch gya');
            this._chatService.relayIceCandidate({
              'peerId': peerId,
              'iceCandidate': {
                'sdpMLineIndex': event.candidate.sdpMLineIndex,
                'candidate': event.candidate.candidate
              }
            });
          }
        };

        peer_connection.onaddstream = (event) => {
          // console.log('I am getting media stream');
          // (<HTMLVideoElement>document.getElementById('vid2')).src = window.URL.createObjectURL(local_media_stream);
          const video = <HTMLVideoElement>document.querySelector('#vid2');
          // // inserting our stream to the video tag
          video.src = window.URL.createObjectURL(event.stream);
        };

        /* Add our local stream */
        peer_connection.addStream(local_media_stream);
        /* Only one side of the peer connection should create the
         * offer, the signaling server picks one to be the offerer.
         * The other user will get a 'sessionDescription' event and will
         * create an offer, then send back an answer 'sessionDescription' to us
         */

        if (config.should_create_offer) {
          // console.log('reaches');
          peer_connection.createOffer( (local_description) => {
            // console.log("Local offer description is: ", local_description);
            peer_connection.setLocalDescription(local_description, () => {
              // console.log('peerIDIzd => ', peerId);
              // console.log('2');
              this._chatService.relaySessionDescription(
                {'peerId': peerId, 'sessionDescription': local_description});
            }, () => {
              console.log('Offer setLocalDescription failed!');
              alert('Offer setLocalDescription failed!');
            });
          }, (error) => {
            console.log('Error sending offer: ', error);
          });
        }
      });

    this._chatService.recievingSessionDescription()
      .subscribe(config => {
        const peerId = config.peerId;
        const peer = peers[peerId];
        const remoteDescription = config.sessionDescription;
        // console.log('config => ', config);
        const desc = new RTCSessionDescription(remoteDescription);
        const stuff = peer.setRemoteDescription(desc, () => {
          // console.log('reaches2');
          // console.log('setRemoteDescription succeeded');
          if (remoteDescription.type === 'offer') {
            // console.log('reaches3');
            // console.log('Creating Answer');
            peer.createAnswer( (localDescription) => {
              // console.log('reaches4');
              // console.log('Answer description is: ', localDescription);
              peer.setLocalDescription(localDescription, () => {
                // console.log('1');
                // console.log('peerId');
                this._chatService.relaySessionDescription(
                  {'peerId': peerId, 'sessionDescription': localDescription});
                // console.log('Answer setLocalDescription succeeded');
              }, () => {
                alert('Answer setLocalDescription failed!');
              });
            }, (error) => {
              console.log('Error creating answer: ', error);
              console.log(peer);
            });
          }
        }, (error) => {
          console.log('setRemoteDescription error: ', error);
        });
      });

    this._chatService.recievingIceCandidate()
      .subscribe( config => {
        const peer = peers[config.peerId];
        const iceCandidate = config.iceCandidate;
        peer.addIceCandidate(new RTCIceCandidate(iceCandidate));
      });

    this._chatService.removePeer()
      .subscribe(config => {
        const peerId = config.peerId;
        if (peerId in peer_media_elements) {
          peer_media_elements[peerId].remove();
        }
        if (peerId in peers) {
          peers[peerId].close();
        }
        delete peers[peerId];
        delete peer_media_elements[config.peerId];
      });
  }

  ngOnInit(): void {
    const _navigator = <any>navigator;
    const constraints = { audio: USE_AUDIO, video: USE_VIDEO };

    // Set_up Th e local media
    setup_local_media( () => {
      /* once the user has given us access to their
       * microphone/camcorder, join the channel and start peering up */

      this._chatService.sendData({'channel': DEFAULT_CHANNEL, 'userdata': {'whatever-you-want-here': 'stuff'}});

    }, error => {
      alert('Camera can not be access');
    });

    function setup_local_media(callback, errorback) {
      if (local_media_stream != null) {  /* ie, if we've already been initialized */
        if (callback) {
          callback();
          return;
        }
      }
      // const desktopConstraints = {
      //
      //   video: USE_VIDEO,
      //   audio: USE_AUDIO
      // };
      // // constraints for mobile browser
      // const mobileConstraints = {
      //
      //   video: USE_VIDEO,
      //   audio: USE_AUDIO
      // };
      // let constraints;
      // // if a user is using a mobile browser
      // if (/Android|iPhone|iPad/i.test(_navigator.userAgent)) {
      //   constraints = mobileConstraints;
      // } else {
      //   constraints = desktopConstraints;
      // }

      function hasUserMedia() {
        // check if the browser supports the WebRTC
        return !!(_navigator.getUserMedia
          || _navigator.webkitGetUserMedia ||
          _navigator.mozGetUserMedia || _navigator.msGetUserMedia
        );
      }

      if (hasUserMedia()) {

        _navigator.getUserMedia = ( _navigator.getUserMedia || _navigator.webkitGetUserMedia
          || _navigator.mozGetUserMedia || _navigator.msGetUserMedia);


        _navigator.mediaDevices.getUserMedia(constraints)
          .then(stream => {
            const video = <HTMLVideoElement>document.querySelector('#vid1');

            // inserting our stream to the video tag
            video.src = window.URL.createObjectURL(stream);
            // (<HTMLVideoElement>document.getElementById('vid1')).src = window.URL.createObjectURL(stream);

            // asign stream to local_media
            local_media_stream = stream;
            if (callback) {
              callback();
            }
          })
          .catch(error => {
            console.log(error);
            alert(error);
          });
      } else {
        alert('WebRTC is not supported');
        if (errorback) {
          errorback();
        }
      }
    }

  }

  ngOnDestroy() {

    for (const peer_id in peer_media_elements) {
      if (peer_media_elements.hasOwnProperty(peer_id)) {
        peer_media_elements[peer_id].remove();
      }
    }
    for (const peer_id in peers) {
      if (peers.hasOwnProperty((peer_id))) {
        peers[peer_id].close();
      }
    }

    peers = {};
    peer_media_elements = {};
    this.ngOnInit();
    this._chatService.disconnets();
    location.reload();
  }


}
