import React, { useEffect } from 'react'
import { connect, io } from 'socket.io-client'
import WebSocket from 'isomorphic-ws';

const Websc = () => {

    

    const ws = new WebSocket('wss://h2jvyv36o7.execute-api.ap-south-1.amazonaws.com/production/');

    ws.onopen = () => console.log('connected');
    ws.onmessage = (data) => console.log(`From server: ${Object.data}`);
    ws.onclose = () => console.log('disconnected');

      const clicked = () => {
        ws.send(JSON.stringify({
            "action": "testAudio",
            "message": "testing"
          }))
      }

  return (
    <div>
        <button onClick={clicked}>click</button>
    </div>
  )
}

export default Websc
