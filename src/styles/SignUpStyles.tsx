import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import { Z_BINARY } from 'zlib';
import { SignInput } from '../components/shared';
import colors from '../constants/colors';

// 상단 부분
export const Wrapper = styled.form`
  width: 482px;
  margin: 0px auto;
`;

export const Header = styled.h1`
  color: ${colors.prime};
  font-weight: bold;
  font-size: 24px;
  margin-top: 115px;
  text-align: center;
`;

export const StepIndicatorWrapper = styled.div`
  margin: 80px auto 63px auto;
  display: flex;
  width: 92px;
  justify-content: space-between;
`;

/** 로그인 단계 표시기  */
export const SignUpStepIndicator = styled.div<{ isCurrentStep?: boolean }>`
  font-size: 30px;
  text-align: center;
  display: inline-block;
  line-height: 34px;
  width: 34px;
  height: 34px;
  font-weight: bolder;
  color: ${({ isCurrentStep = false }) => (isCurrentStep ? colors.prime : '#a8a8a8')};
  border: solid 3px ${({ isCurrentStep = false }) => (isCurrentStep ? colors.prime : '#a8a8a8')};
  border-radius: 50%;
`;

// 로그인 인풋 래퍼
export const InputWrapper = styled.div`
  & > div {
    margin-bottom: 19px;
  }
`;

// 사용자 중복체크 버튼
export const CheckUsernameButton = styled.button`
  display: inline-block;
  flex-shrink: 0;
  width: 116px;
  height: 58px;
  background-color: ${colors.prime};
  color: white;
  font-size: 20px;
  text-align: center;
  border: none;
  &:disabled {
    background-color: #9d9d9d;
  }
`;

// 비밀번호 안내문구
export const PasswordHelpText = styled.div`
  position: absolute;
  font-size: 14px;
  color: #737373;
  right: 10px;
  bottom: 10px;
`;

// 일반 항목 input
export const UserInfoInput = styled(SignInput)`
  display: block;
`;

// 일반 항목 label
export const UserInfoLabel = styled.label<{ zIndex: number }>`
  display: block;
  position: relative;
  padding: 0px;
  z-index: ${({ zIndex }) => zIndex + 1};
  & > span {
    position: absolute;
    margin-top: -10px;
    left: 6px;
    height: 24px;
    padding: 0px 8px 0px 8px;
    background-color: white;
    font-size: 18px;
    &::before {
      content: '* ';
      color: ${colors.prime};
    }
  }
`;

const LabelWrapperDiv = styled.div<{ zIndex: number }>`
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
`;

export const LabelWrapper = ({
  name,
  children,
  zIndex = 0,
}: {
  name: string;
  children: ReactChild;
  zIndex?: number;
}) => (
  <LabelWrapperDiv zIndex={zIndex}>
    <UserInfoLabel zIndex={zIndex}>
      <span>{name}</span>
    </UserInfoLabel>
    {children}
  </LabelWrapperDiv>
);

export const MonthInfoInputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
`;

export const Interval = styled.div`
  font-size: 24px;
  line-height: 58px;
  height: 58px;
`;

// 달 항목 input
export const MonthInfoInput = styled(UserInfoInput)`
  display: inline-block;
  width: 200px;
  margin-bottom: 0px;
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  &::-webkit-inner-spin-button {
    display: none;
  }
  &::-webkit-search-cancel-button {
    display: none;
  }
  &[type='date']::-webkit-input-placeholder {
    visibility: hidden !important;
  }
`;

export const CalendarWrapper = styled.div<{ calendarState: string }>`
  z-index: 100;
  padding: 5px 0px 5px 0px;
  position: absolute;
  top: 58px;
  ${({ calendarState }) => (calendarState === 'JOINED' ? 'left: 0;' : 'right: 0;')};
`;

export const InputFooter = styled.div`
  margin-top: 54px;
  text-align: center;
`;

export const StepButton = styled(CheckUsernameButton)`
  font-size: 24px;
  width: 136px;
  height: 58px;
  &:nth-child(2) {
    margin-left: 44px;
  }
`;
