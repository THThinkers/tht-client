import styled from 'styled-components';
import { dotCircle } from '../../assets/images';
import colors from '../../constants/colors';

export const HistoryTitle = styled.h1`
  margin-top: 41px;
  color: ${colors.prime};
`;

export const HistoryContentWrapper = styled.div`
  width: 1026px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HistoryBannerWrapper = styled.div`
  width: 1026px;
  height: 311px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const HistoryBanner = styled.img`
  height: fit-content;
`;

export const THTQutation = styled.div`
  padding-top: 24px;
  font-size: 24px;
  font-weight: bold;
`;

export const THTDescription = styled.div`
  padding-top: 33px;
  width: 728px;
  font-size: 24px;
  text-align: center;
  & > strong {
    font-size: 30px;
    color: ${colors.prime};
    font-weight: bold;
  }
`;

export const THTObjective = styled.img`
  padding-top: 20px;
  width: 797px;
  height: max-content;
`;

export const THTIcon = styled.img`
  width: 147px;
  height: 123px;
  padding-right: 150px;
  display: inline-block;
`;

export const IconDescription = styled.div`
  width: 532px;
  display: inline-block;
  font-size: 24px;
  & > h3 {
    color: ${colors.prime};
    font-size: 30px;
    font-weight: bold;
    margin: 0px;
  }
`;

export const HistoryEntry = styled.div`
  color: ${colors.prime};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 28px;
  margin-top: 140px;
`;

export const HistoryLogo = styled.h3`
  width: 90px;
  color: ${colors.prime};
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  border-top: solid 2px ${colors.prime};
  border-bottom: solid 2px ${colors.prime};
  margin-bottom: 0px;
`;

export const HistoryTimeline = styled.div`
  ::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 600px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${colors.prime};
  }
`;

export const HistoryWrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  & > ol {
    width: 50%;
  }
`;

interface IEventProps {
  marginTop?: number;
}

export const HistoryEventWrapper = styled.li<IEventProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
`;

export const HistoryEvent = styled.div`
  display: inline-block;
  margin-right: 45px;
  width: 180px;
  & > :first-child {
    color: ${colors.prime};
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  & > :nth-child(2) {
    font-size: 24px;
    color: black;
    text-align: center;
  }
`;

export const HistoryTimeFlag = styled.div`
  display: inline-flex;
  height: 20px;
  align-items: center;
  &::before {
    content: '';
    display: inline-block;
    width: 214px;
    height: 1px;
    margin-right: -10px;
    background-color: ${colors.prime};
  }
  &::after {
    content: '';
    display: inline-block;
    background-image: url(${dotCircle});
    background-size: cover;
    margin-right: -10px;
    width: 20px;
    height: 20px;
  }
`;

export const HistoryImageWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IHistoryImageProps {
  imageSrc: string;
  width: number;
  height: number;
  marginTop?: number;
}

export const HistoryImage = styled.li<IHistoryImageProps>`
  list-style-type: none;
  background-image: url(${({ imageSrc }) => imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
