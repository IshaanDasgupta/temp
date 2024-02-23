import React, { useState, useEffect } from "react";
import "./index.css";


const styles = {
    noteContainer : {
    border: "1px solid grey",
    minHeight: "15rem",
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
  },
  
 button: {
    margin: '5px'
  }
}
function App2() {
    const [isRecording, setisRecording] = useState(false);
    const [note, setNote] = useState(null);
    const [notesStore, setnotesStore] = useState([]);
    function playByteArray(byteArray) {
        const context = new AudioContext();
        if(byteArray.length){
            const arrayBuffer = new ArrayBuffer(byteArray.length);
            const bufferView = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteArray.length; i++) {
            bufferView[i] = byteArray[i];
            }
    
            context.decodeAudioData(arrayBuffer, function (buffer) {
            const source = context.createBufferSource();
            source.buffer = buffer;
            source.connect(context.destination);
            source.start(0);
            });
        }
      }
    useEffect(() => {
        startRecordController();
      }, [isRecording]);
    const startRecordController = () => {
        if (isRecording) {
          microphone.start();
          microphone.onend = () => {
            // console.log("continue..");
          };
        } else {
          microphone.stop();
          microphone.onend = () => {
            // console.log("Stopped microphone on Click");
          };
        }
        microphone.onstart = () => {
        //   console.log("microphones on");
        };
      
        microphone.onresult = (event) => {
          const recordingResult = Array.from(event.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("");
        //   console.log(recordingResult);
          setNote(recordingResult);
          microphone.onerror = (event) => {
            // console.log(event.error);
          };
        };
      };
    //   const getAIRes = async(text)=>{
    //     const res = await fetch('http://localhost:3000/store-data',{
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //             message: text
    //         })
    //     })
    //     const result = await res.json();
    //     console.log(result);
    //     return result[result.length - 1].text;
    //   }
    const sendToConvert = async(text)=>{
        // text = await getAIRes(text);
        console.log(text);
        const res = await fetch('https://p6rubpnr7e.execute-api.ap-south-1.amazonaws.com/production/generateText',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                userID: 'test',
                userText: text
            })
        });
        const result =  await res.json();
        return result;
    }
    const storeNote = async() => {
        const result = await  sendToConvert(note);
        const byteArray = result.byteArray;
        playByteArray(byteArray);
        setnotesStore([...notesStore, note]);
        setNote("");
        microphone.stop();
    };
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const microphone = new SpeechRecognition();
    microphone.continuous = true;
    microphone.interimResults = true;
    microphone.lang = "en-US";
  return (
    <>
      <h1>Record Voice Notes</h1>
      <div>
        <div style = {styles.noteContainer}>
          <h2>Record Note Here</h2>
          {isRecording ? <span>Recording... </span> : <span>Stopped </span>}
          <button style = {styles.button} onClick={storeNote} disabled={!note}  className="button">
            Save
          </button>
          <button onClick={() => setisRecording((prevState) => !prevState)} >
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div style= {styles.noteContainer} className="noteContainer">
          <h2>Notes Store</h2>
          **{notesStore.map((note) => (
            <p key={note}>{note}</p>
          ))}**
        </div>
      </div>
    </>
  );
}

export default App2;