/* global zuix */
'use strict';
zuix.controller(function(cp) {

  function sendtoCode(){
    var peerSend = new Peer(); 
    let adress = document.getElementById("code").value;
    let data = document.getElementById("data").value;
    var conn = peerSend.connect(adress);
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function(){
      // here you have conn.id
      conn.send(data);
    });
  }

});
