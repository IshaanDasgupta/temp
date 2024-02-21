import React, { useEffect } from 'react'
import "./video.css"
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const VideoC = (data) => {

    // useEffect =(()=>{
    //     play_buffersource(data);
    // },[data])
    useEffect(() => {
        play_buffersource(data);
    }, [data]);

    const kSampleRate = 44100; // Other sample rates might not work depending on the your browser's AudioContext
    const kNumSamples = 16834;
    const kFrequency  = 440;
    const kPI_2       = Math.PI * 2;

// function play_buffersource(data) {
//     if (!window.AudioContext) {
//         if (!window.webkitAudioContext) {
//             alert("Your browser sucks because it does NOT support any AudioContext!");
//             return;
//         }
//         window.AudioContext = window.webkitAudioContext;
//     }

//     var ctx = new AudioContext();

//     var buffer = ctx.createBuffer(1, kNumSamples, kSampleRate);
//     var buf    = buffer.getChannelData(0);
//     for (i = 0; i < kNumSamples; ++i) {
//         buf[i] = Math.sin(kFrequency * kPI_2 * i / kSampleRate);
//     }

//     var node = ctx.createBufferSource(0);
//     node.buffer = buffer;
//     node.connect(ctx.destination);
//     node.noteOn(ctx.currentTime + 0.5);

//     node = ctx.createBufferSource(0);
//     node.buffer = buffer;
//     node.connect(ctx.destination);
//     node.noteOn(ctx.currentTime + 2.0);
//     node.start(ctx.currentTime + 2.0);
// }

function play_buffersource(data) {
    if (!window.AudioContext) {
        if (!window.webkitAudioContext) {
            alert("Your browser does not support any AudioContext!");
            return;
        }
        window.AudioContext = window.webkitAudioContext;
    }

    var ctx = new AudioContext();

    var buffer = ctx.createBuffer(1, kNumSamples, kSampleRate);
    var buf = buffer.getChannelData(0);
    for (var i = 0; i < kNumSamples; ++i) {
        buf[i] = Math.sin(kFrequency * kPI_2 * i / kSampleRate);
    }

    var node = ctx.createBufferSource();
    node.buffer = buffer;
    node.connect(ctx.destination);
    node.start(ctx.currentTime + 0.5);

    node = ctx.createBufferSource();
    node.buffer = buffer;
    node.connect(ctx.destination);
    node.start(ctx.currentTime + 2.0);
}

  return (
    <div className='vc'>
        <div className='person'>

        </div>

        <div className='ai'>
            <div className='robo'>
                <img className='image' src="https://images.unsplash.com/photo-1601132359864-c974e79890ac?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="robot" />

                {/* TextToSpeech.talk("Hello Beautiful World!"); */}

            </div>
        </div>
    </div>
  )
}

export default VideoC