import styled from 'styled-components';

// TODO: 공통 컴포넌트 분리되면 버튼 작성 예정
interface IButtonProps {
  color: string;
}

const Button = styled.div<IButtonProps>`
  background-color: ${({ color }) => color};
`;
