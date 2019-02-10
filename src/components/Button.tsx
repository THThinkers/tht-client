import styled from 'styled-components';

interface IButtonProps {
  color: string;
}

const Button = styled.div<IButtonProps>`
  background-color: ${({ color }) => color};
`;
