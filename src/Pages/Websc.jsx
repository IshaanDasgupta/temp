import React, { useEffect, useState } from 'react'
import { connect, io } from 'socket.io-client'
import WebSocket from 'isomorphic-ws';
import VideoC from '../components/Interview/VideoC';

const Websc = () => {

    const ws = new WebSocket('wss://h2jvyv36o7.execute-api.ap-south-1.amazonaws.com/production/');
    
    const [audio, setAudio] = useState('')

    ws.onopen = () => console.log('connected');
    ws.onmessage = (data) =>{ console.log (`from server:${data.data}`)
                                    setAudio(data.data)
                            };

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
        < VideoC audio={audio} />
    </div>
  )
}
export default Websc
