import styled from 'styled-components';
import colorMap from '../../constants/colors';

interface IButtonProps {
  color?: string;
  width?: number;
  invert?: boolean;
}

const Button = styled.button<IButtonProps>`
  width: ${(props) => props.width || 215}px;
  padding: 10px 0;
  text-align: center;
  outline: none;
  border: none;
  color: ${({ color = colorMap.prime, invert = false }) => (!invert ? color : 'white')};
  cursor: pointer;
  background-color: ${({ color = colorMap.prime, invert = false }) => (invert ? color : 'white')};
`;

export default Button;
