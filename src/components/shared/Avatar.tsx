import styled from 'styled-components';

export interface IAvatarProps {
  size?: 'small' | 'medium' | 'large';
}
const Avatar = styled('img')<IAvatarProps>`
  width: ${(props) => (props.size === 'large' ? 128 : props.size === 'small' ? 64 : 96)}px;
  height: ${(props) => (props.size === 'large' ? 128 : props.size === 'small' ? 64 : 96)}px;

  border-radius: 50%;
`;

export default Avatar;
