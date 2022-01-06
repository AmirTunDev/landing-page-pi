import React from 'react';
import { Player } from 'video-react';
 import styled from 'styled-components';

 const VideoWrapper = styled.div`
 .video-react-control-bar {
     display:none
 }
 .video-react-control-text{
     display: none
 }
 .video-react-big-play-button{
    display: none

 }
 video-react-controls-enabled{
     display: none
 }
 `

const Video = (function () {
    return (
        <VideoWrapper>
        <Player autoplay style={{
            displayStyle: 'none',
        }}>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
        </VideoWrapper>
      );
})

export default Video