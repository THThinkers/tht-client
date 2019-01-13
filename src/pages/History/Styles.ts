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
  font-size: 28px;
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
  font-size: 26px;
  & > h3 {
    color: ${colors.prime};
    font-size: 30px;
    margin-bottom: 15px;
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
  & > div {
    width: 50%;
  }
`;

export const HistoryEvent = styled.div`
  display: inline-block;
`;

export const HistoryTimeFlag = styled.div`
  display: inline-block;
  width: 214px;
  height: 1px;
  background-color: ${colors.prime};
  &::after {
    content: '';
    background-image: url(${dotCircle});
    width: 20px;
    height: 20px;
  }
`;
