import React, { Component } from 'react';
import styled from 'styled-components';
import 'styled-components/macro';

const ProgressBar = ({ progress }) => (
  <Bar>
    <Progress
      css={`
        width: ${progress * 100}%;
      `}
    />
  </Bar>
);

const Bar = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  height: 2px;
  margin-bottom: 5px;
`;

const Progress = styled.div`
  background: #fff;
  position: absolute;
  height: 100%;
  /* transition: width 250ms linear; */
`;

export default ProgressBar;
