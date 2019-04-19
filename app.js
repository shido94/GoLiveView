const express = require('express');
const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');
const path = require('path');


channels = {};
sockets = {};
list = {};

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const port = 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/GoLiveView'));




io.on('connection', (socket)  => {
  socket.channels = {};
  sockets[socket.id] = socket;
  console.log("[ " + socket.id + " ] connection accepted");

  socket.on('disconnect', () => {
    for(let channel in socket.channels) {
      part(channel);
    }
    delete socket[socket.id];

  });

  socket.on('pageDisconnected', () => {
    for(let channel in socket.channels) {
      part(channel);
    }
    delete socket[socket.id];
  });

  socket.on('join', (config) => {
    console.log("["+ socket.id + "] join ", config);
    const channel = config.channel;
    if(channel in socket.channels) {
      console.log("["+ socket.id + "] ERROR: already joined ", channel);
      return;
    }
    if(!(channel in channels)) {
      channels[channel] = {};
    }
    for (let id in channels[channel]) {
      channels[channel][id].emit('addPeer', {peerId: socket.id, should_create_offer: false});
      socket.emit('addPeer', {peerId: id, should_create_offer: true});
    }

    channels[channel][socket.id] = socket;
    socket.channels[channel] = channel;
    list[socket.id] = channel;
  });


  function part(channel) {
    console.log("[ "+ socket.id + " ] part");


    if(!(channel in socket.channels)) {
      // console.log("["+ socket.id + "] ERROR: not in ", channel);
      return;
    }

    for(let id in list) {
      if(socket.id === id) {
        delete list[socket.id];
      }
    }
    delete socket.channels[channel];
    delete channels[channel][socket.id];


    socket.emit('lists', list);
    for( id in channels[channel]) {
      channels[channel][id].emit('removePeer', {'peerId' : socket.id});
      socket.emit('removePeer', {'peerId' : id});
    }
  }

  socket.emit('lists', list);

  socket.on('relayIceCandidate', (config) => {
    const peerId = config.peerId;
    const iceCandidate = config.iceCandidate;
    // console.log("["+ socket.id + "] relaying ICE candidate to [" + peerId + "] ", iceCandidate);

    if  (peerId in sockets) {
      // console.log('peerId ', socket.id);
      sockets[peerId].emit('iceCandidates', {'peerId': socket.id, 'iceCandidate': iceCandidate});
    }
  });

  socket.on('relaySessionDescription', (config) => {
    const peerId = config.peerId;
    const sessionDescription = config.sessionDescription;
    // console.log("["+ socket.id + "] relaying session description to [" + peerId + "] ", sessionDescription);
    if(peerId in sockets) {
      sockets[peerId].emit('sessionDescription', {'peerId': socket.id, 'sessionDescription': sessionDescription});
    }

  });

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/GoLiveView/index.html'));
});


server.listen(process.env.PORT || port, () =>{
  console.log('Server running at port ', port);
});
