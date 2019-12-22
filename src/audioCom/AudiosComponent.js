import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudiosComponent extends React.Component {
    state = {
      audio: "",
    }
    audio = new Audio(this.props.url)
  
    render() {
      return (
        <div>
     <ReactAudioPlayer
      src={this.props.url}
      autoPlay
      controls
    />
        </div>
      );
    }
  }
  
  export default AudiosComponent ;