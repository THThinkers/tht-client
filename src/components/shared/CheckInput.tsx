import React, { InputHTMLAttributes, memo, ReactChild } from 'react';
import styled from 'styled-components';
import { failIcon, passIcon } from '../../assets/icons';
import colors from '../../constants/colors';
import SignInput from './SignInput';

/**
 * input 의 valiation 상태에 따라서 Text를 띄워주는 컴포넌트
 */

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

/**
 * conditon에 따라서 children을 랜더.
 */
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
  rightComponent?: ReactChild | null | false;
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

/**
 * input에 오른쪽 컴포넌트와 상태에 관련된 메시지를 넣을 수 있는 컴포넌트.
 * isValid의 참거짓 유무에 따라서 validInfo, inValidInfo를 랜더한다.
 */
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
      <InfoText condition={isValid}>{setInfoText(value, isValid, validInfo, inValidInfo)}</InfoText>
    </CheckInputWrapper>
  );
};

export default memo(CheckInput);
