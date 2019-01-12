import styled from 'styled-components';
import colors from '../../constants/colors';

export const HistoryTitle = styled.h1`
  margin-top: 41px;
  color: ${colors.prime};
`;

export const HistoryContentWrapper = styled.div`
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
