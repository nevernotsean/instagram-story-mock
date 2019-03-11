import React, { Component } from 'react';
import styled from 'styled-components';

const centered = ({ centered }) => centered && `justify-content: center; align-items: center;`;

export const Box = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;

  ${centered};
`;

export const Column = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  ${centered};
`;
