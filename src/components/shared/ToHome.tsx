import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.a`
  top: 30px;
  left: 30px;
  font-size: 36px;
  font-weight: bold;
`;

const ToHome = () => <LogoWrapper href="/">THT</LogoWrapper>;

export default ToHome;
