import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Column } from './Flex';

import 'styled-components/macro';

export default class Header extends Component {
  render() {
    return (
      <Row>
        <Column
          css={`
            padding: 5px;
          `}
        >
          <Logo src="http://unsplash.it/100/100" />
        </Column>
        <Column css={'justify-content: center;'}>
          <Name>Sling</Name>
          <Subname>Sponsored</Subname>
        </Column>
      </Row>
    );
  }
}

const Logo = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100%;

  object-fit: cover;
  object-position: center;
`;

const Name = styled.h2`
  font-weight: bolder;
  font-size: 10px;
  color: #fff;
  opacity: 0.8;
  margin-bottom: 3px;
`;
const Subname = styled.p`
  font-size: 9px;
  color: #fff;
  opacity: 0.8;
`;
