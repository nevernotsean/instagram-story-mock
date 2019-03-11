import React, { Component } from 'react';
import Profile from '../components/Profile';
import ProgressBar from '../components/ProgressBar';
import styled from 'styled-components';
// import DropZone from './components/DropZone';

// import story from '../assets/Tongue.mp4';

import story from '../assets/sling-slot.mp4';
import { Box } from '../components/Flex';

export default class App extends Component {
  video = React.createRef();
  state = {
    progress: 0,
    isPaused: false
  };
  handleTouchStart = e => {
    this.video.current.pause();
  };
  handleTouchEnd = e => {
    this.video.current.play();
  };
  render() {
    return (
      <Container
        className="App"
        onMouseDown={this.handleTouchStart}
        onMouseUp={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className="header">
          <ProgressBar progress={this.state.progress} />
          <Profile />
        </div>
        <Box className="content">
          <video
            ref={this.video}
            src={story}
            autoPlay
            loop
            muted
            onTimeUpdate={e =>
              this.setState({ progress: e.target.currentTime / e.target.duration })
            }
          />
        </Box>
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  width: 320px;
  height: 568px;
  margin: 0 auto;
  margin-top: 20px;
  .header {
    position: relative;
    z-index: 1;
    padding: 10px;
  }
  .content {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    z-index: 0;
  }

  video {
    pointer-events: none;
  }

  @media screen and (max-width: 640px) {
    width: 100vw;
    height: 100vh;
    margin-top: 0px;

    .content {
      background: #58b4dd;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
  }
`;
