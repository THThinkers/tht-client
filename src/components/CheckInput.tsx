import React, { InputHTMLAttributes, ReactChild, memo } from 'react';
import styled from 'styled-components';
import { passIcon, failIcon } from '../assets/icons';
import SignInput from './SignInput';
import colors from '../constants/colors';

const InfoContent = styled.div<{ condition: boolean }>`
  color: ${({ condition }) => (condition ? colors.positive : colors.negative)};
  font-size: 16px;
  margin-top: 4px;
  margin-left: 6px;
  height: 20px;
`;

const InfoIcon = styled.img`
  vertical-align: bottom;
  width: 18px;
  height: 18px;
  padding: 2px;
  margin-right: 3px;
`;

interface IInfoText {
  condition: boolean;
  children: string;
}

const InfoText = ({ condition, children }: IInfoText) => (
  <InfoContent condition={condition}>
    {!!children.length && (
      <>
        <InfoIcon src={condition ? passIcon : failIcon} />
        {children}
      </>
    )}
  </InfoContent>
);

const CheckInputWrapper = styled.div`
  margin-bottom: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

interface ICheckInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean;
  validInfo: string;
  inValidInfo: string;
  rightComponent?: ReactChild | null;
}

const setInfoText = (
  value: string | string[] | number | undefined,
  isValid: boolean,
  validInfo: string,
  inValidInfo: string,
): string => {
  if (!value || typeof value !== 'string') {
    return '';
  }
  if (value.length === 0) {
    return '';
  }
  return isValid ? validInfo : inValidInfo;
};

const CheckInput = ({
  value,
  onChange,
  type,
  placeholder,
  isValid,
  validInfo,
  inValidInfo,
  rightComponent = null,
}: ICheckInputProps) => {
  console.log(value);
  return (
    <CheckInputWrapper>
      <InputWrapper>
        <SignInput placeholder={placeholder} value={value} onChange={onChange} type={type} />
        {rightComponent}
      </InputWrapper>
      <InfoText condition={isValid}>{setInfoText(value, isValid, validInfo, inValidInfo)}</InfoText>
    </CheckInputWrapper>
  );
};

export default memo(CheckInput);
