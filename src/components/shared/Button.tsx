import styled from 'styled-components';
import colorMap from '../../constants/colors';
// TODO: 공통 컴포넌트 분리되면 버튼 작성 예정
interface IButtonProps {
  color?: string;
  width?: number;
  invert?: boolean;
}

const Button = styled.div<IButtonProps>`
  width: ${props => props.width || 215}px;
  padding: 10px 0;
  text-align: center;
  color: ${({ color = colorMap.prime, invert = false }) => (!invert ? color : 'white')};
  cursor: pointer;
  background-color: ${({ color = colorMap.prime, invert = false }) => (invert ? color : 'white')};
`;

export default Button;
