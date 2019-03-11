import React from 'react';
import styled from 'styled-components';

const BreadCrumbWrapper = styled.div`
  font-size: 14px;
  margin-top: 6px;
  margin-left: 10px;
`;

interface ILocationBreadCrumbProps {
  pathname: string;
}

interface IMainNameMap {
  [main: string]: string;
}

const MainNameMap: IMainNameMap = {
  info: 'THT',
};

interface ISubNameMap {
  [sub: string]: string;
}

const SubNameMap: ISubNameMap = {
  introduction: 'Introduction',
};

/**
 * 현재 pathname을 읽어서 현재 pathname에 맞는 브레드크럼을 랜더
 */
export default function LocationBreadCrumb({ pathname }: ILocationBreadCrumbProps) {
  const [_, main, sub] = pathname.split('/');
  return (
    <BreadCrumbWrapper>
      홈 &gt; {MainNameMap[main]} &gt; {SubNameMap[sub]}
    </BreadCrumbWrapper>
  );
}
