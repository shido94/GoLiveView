const express = require('express');
const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');
const path = require('path');


channels = {};
sockets = {};

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
      console.log('channel', channel);
      part(channel);
    }
    delete socket[socket.id];

  });

  socket.on('pageDisconnected', () => {
    for(let channel in socket.channels) {
      console.log('channel', channel);
      part(channel);
    }
    delete socket[socket.id];
  });

  socket.on('check', (val) => {
    // console.log(val);
  });

  socket.on('join', (config) => {
    // console.log("["+ socket.id + "] join ", config);
    const channel = config.channel;
    const userdata = config.userdata;
    if(channel in socket.channels) {
      // console.log("["+ socket.id + "] ERROR: already joined ", channel);
      return;
    }
    if(!(channel in channels)) {
      channels[channel] = {};
    }
    for (let id in channels[channel]) {
      // console.log('Id => ', id);
      // console.log(socket.id);
      channels[channel][id].emit('addPeer', {peerId: socket.id, should_create_offer: false});
      socket.emit('addPeer', {peerId: id, should_create_offer: true});
    }

    channels[channel][socket.id] = socket;
    socket.channels[channel] = channel;
  });

  function part(channel) {
    console.log("[ "+ socket.id + " ] part");

    if(!(channel in socket.channels)) {
      // console.log("["+ socket.id + "] ERROR: not in ", channel);
      return;
    }

    delete socket.channels[channel];
    delete channels[channel][socket.id];

    for( id in channels[channel]) {
      channels[channel][id].emit('removePeer', {'peerId' : socket.id});
      socket.emit('removePeer', {'peerId' : id});
    }
  }

  socket.on('relayIceCandidate', (config) => {
    // console.log(config);
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
    // console.log('peerId ', peerId);
    // console.log('socketId', socket.id);
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
