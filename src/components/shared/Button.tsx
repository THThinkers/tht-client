import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';
import colorMap from '../../constants/colors';

interface IButtonProps {
  color?: string;
  width?: number;
  invert?: boolean;
}

const ButtonCss = css<IButtonProps>`
  width: ${(props) => props.width || 215}px;
  padding: 10px 0;
  text-align: center;
  outline: none;
  border: none;
  color: ${({ color = colorMap.prime, invert = false }) => (!invert ? color : 'white')};
  cursor: pointer;
  background-color: ${({ color = colorMap.prime, invert = false }) => (invert ? color : 'white')};
  &:disabled {
    background-color: ${colorMap.gray};
  }
`;

const Button = styled.button<IButtonProps>`
  ${ButtonCss}
`;

// 스타일드 컴포넌트에서 사용되는 프롭을 필터하기 위해서 만듬
const PropFilteredLink: React.SFC<IButtonProps & LinkProps> = ({ color, width, invert, ...linkProps }) => (
  <Link {...linkProps} />
);

export const LinkButton = styled(PropFilteredLink)<IButtonProps>`
  text-decoration: none;
  ${ButtonCss}
`;

export default Button;
