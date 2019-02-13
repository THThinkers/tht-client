import React, { InputHTMLAttributes, ReactChild } from 'react';
import styled from 'styled-components';
import { passIcon, failIcon } from '../assets/icons';
import SignInput from './SignInput';
import colors from '../constants/colors';

const InfoContent = styled.div<{ condition: boolean }>`
  color: ${({ condition }) => (condition ? colors.positive : colors.negative)};
  font-size: 16px;
  margin-top: 4px;
  margin-left: 6px;
  line-height: 20px;
`;

const InfoIcon = styled.img`
  vertical-align: bottom;
  width: 18px;
  height: 18px;
  padding: 2px;
`;

interface IInfoText {
  condition: boolean;
  children: ReactChild;
}

const InfoText = ({ condition, children }: IInfoText) => (
  <InfoContent condition={condition}>
    <InfoIcon src={condition ? passIcon : failIcon} />
    {children}
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
  return (
    <CheckInputWrapper>
      <InputWrapper>
        <SignInput placeholder={placeholder} value={value} onChange={onChange} type={type} />
        {rightComponent}
      </InputWrapper>
      {value && typeof value === 'string' && value.length && isValid ? (
        <InfoText condition={isValid}>{validInfo}</InfoText>
      ) : (
        <InfoText condition={isValid}>{inValidInfo}</InfoText>
      )}
    </CheckInputWrapper>
  );
};

export default CheckInput;
