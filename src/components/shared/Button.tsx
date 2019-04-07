import { Link } from 'react-router-dom';
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

export const LinkButton = styled(Link)<IButtonProps>`
  text-decoration: none;
  ${ButtonCss}
`;

export default Button;
