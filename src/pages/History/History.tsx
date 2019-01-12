import React, { Component } from 'react';
import { historybanner, thtObjective } from '../../assets/images';
import {
  HistoryBanner,
  HistoryBannerWrapper,
  HistoryContentWrapper,
  HistoryTitle,
  THTDescription,
  THTObjective,
  THTQutation,
} from './Styles';

class History extends Component {
  render() {
    return (
      <HistoryContentWrapper>
        <HistoryTitle>THT Introduction</HistoryTitle>
        <HistoryBannerWrapper>
          <HistoryBanner src={historybanner} />
        </HistoryBannerWrapper>
        <THTQutation>“Do THT, The Hybrid Thinkers"</THTQutation>
        <THTDescription>
          <strong>THT</strong>는 한국외국어대학교의 IT경영학회로 다양한 IT
          트렌드 이슈를 학습하고 이에 대한 비즈니스적인 관점을 길러보는
          곳입니다.
        </THTDescription>
        <THTObjective src={thtObjective} />
      </HistoryContentWrapper>
    );
  }
}

export default History;
