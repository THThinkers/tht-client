import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const arrow = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0
    transform: translate(-10px, -10px)
  }
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1220px;
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type ContentAlignPosition = 'bottom-center' | 'middle-left' | 'middle-right' | 'top-left' | 'bottom-right';

export const Content = styled('div')<{ position?: ContentAlignPosition }>`
  position: absolute;
  width: 1366px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 200px;

  ${props => {
    switch (props.position) {
      case 'top-left': {
        return `
          padding-top: 200px;
          align-items: flex-start;
          justify-content: flex-start;
        `;
      }
      case 'middle-left': {
        return `
          align-items: flex-start;
          justify-content: center;
        `;
      }
      case 'middle-right': {
        return `
          align-items: flex-end;
          justify-content: center;
        `;
      }
      case 'bottom-center': {
        return `
          align-items: center;
          justify-content: flex-end;
        `;
      }
      case 'bottom-right': {
        return `
          align-items: flex-end;
          padding-bottom: 250px;
          justify-content: flex-end;
        `;
      }
      default: {
        return ``;
      }
    }
  }}
`;

export const LinkBox = styled.div`
  display: flex;
`;

export const CustomLink = styled(Link)`
  border: 1px solid #ccc;
  width: 120px;
  margin: 20px;
  padding: 20px 10px;
  text-align: center;
  color: white;
  text-decoration: none;
`;

export const ArrowBox = styled.div`
  position: absolute;
  width: 40px;
  left: 50%;
  bottom: 30px;
`;

export const Arrow = styled.div`
  width: 100%;
  height: 40px;
  margin: -20px 0 0 -20px;
  transform: rotate(45deg);
  position: relative;
  &:before {
    position: absolute;
    left: 50%;
    content: '';
    width: 20px;
    height: 20px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    animation: ${arrow} 2s infinite;
  }
  border-left: none;
  border-top: none;
  border-right: 5px #fff solid;
  border-bottom: 5px #fff solid;
`;

export const ImageContainer = styled(Container)<{ backgroundImage: string }>`
  max-width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)), url('${({ backgroundImage }) => backgroundImage}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
`;

export const MainHeader = styled.h1`
  font-weight: bold;
  color: white;
  font-size: 70px;
`;

export const MainSubHeader = styled.h1`
  margin-top: 266px;
  font-weight: bold;
  color: white;
  font-size: 30px;
`;

export const ImageHeader = styled.h1`
  font-size: 60px;
  color: white;
  margin-bottom: 27px;
`;

export const ImageSubHeader = styled(ImageHeader)`
  font-size: 30px;
  font-weight: 400;
  margin: 0px;
`;
