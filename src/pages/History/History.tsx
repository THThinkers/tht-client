import React, { Component } from 'react';
import { historybanner, historyImage1, historyImage2, thtObjective } from '../../assets/images';
import { logoWithText } from '../../assets/logo';
import {
  HistoryBanner,
  HistoryBannerWrapper,
  HistoryContentWrapper,
  HistoryEntry,
  HistoryEvent,
  HistoryEventWrapper,
  HistoryImage,
  HistoryImageWrapper,
  HistoryLogo,
  HistoryTimeFlag,
  HistoryTimeline,
  HistoryTitle,
  HistoryWrapper,
  IconDescription,
  THTDescription,
  THTIcon,
  THTObjective,
  THTQutation,
} from './HistoryStyles';
import LocationBreadCrumb from '../../components/LocationBreadCrumb';

interface IHistoryProps {
  location: {
    pathname: string;
  };
}

const History = ({ location: { pathname } }: IHistoryProps) => {
  return (
    <>
      <LocationBreadCrumb pathname={pathname} />
      <HistoryContentWrapper>
        <HistoryTitle>THT Introduction</HistoryTitle>
        <HistoryBannerWrapper>
          <HistoryBanner src={historybanner} />
        </HistoryBannerWrapper>
        <THTQutation>“Do THT, The Hybrid Thinkers"</THTQutation>
        <THTDescription>
          <strong>THT</strong>는 한국외국어대학교의 IT경영학회로 다양한 IT 트렌드 이슈를 학습하고 이에 대한 비즈니스적인
          관점을 길러보는 곳입니다.
        </THTDescription>
        <THTObjective src={thtObjective} />
        <div>
          <THTIcon src={logoWithText} />
          <IconDescription>
            <h3>로고</h3>
            <div>다양한 사람들이 모여 하나의 틀을 만든다는 뜻으로 ‘뇌'와 ‘퍼즐'을 합성한 이미지입니다.</div>
          </IconDescription>
        </div>
        <HistoryEntry>THT History</HistoryEntry>
        <HistoryLogo>THT</HistoryLogo>
        <HistoryTimeline />
        <HistoryWrapper>
          <ol>
            <HistoryEventWrapper>
              <HistoryEvent>
                <div>2009</div>
                <div>THT의 시작</div>
              </HistoryEvent>
              <HistoryTimeFlag />
            </HistoryEventWrapper>
            <HistoryEventWrapper marginTop={54}>
              <HistoryEvent>
                <div>2014</div>
                <div>로고 제작</div>
              </HistoryEvent>
              <HistoryTimeFlag />
            </HistoryEventWrapper>
            <HistoryEventWrapper marginTop={137}>
              <HistoryEvent>
                <div>2018</div>
                <div>홈페이지 제작</div>
              </HistoryEvent>
              <HistoryTimeFlag />
            </HistoryEventWrapper>
          </ol>
          <HistoryImageWrapper>
            <HistoryImage imageSrc={historyImage1} width={200} height={180} />
            <HistoryImage marginTop={80} imageSrc={historyImage2} width={150} height={250} />
          </HistoryImageWrapper>
        </HistoryWrapper>
      </HistoryContentWrapper>
    </>
  );
};

export default History;
