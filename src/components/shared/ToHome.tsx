import React from 'react';
import styled from 'styled-components';

const LogoButton = styled.button`
  top: 30px;
  left: 30px;
`;

const onClickButton = () => {
  window.location.href = '/';
};

const ToHome = () => <LogoButton onClick={onClickButton} />;

export default ToHome;
