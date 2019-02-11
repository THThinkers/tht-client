import React, { InputHTMLAttributes, ReactChild } from 'react';
import styled from 'styled-components';
import SignInput from './SignInput';

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
    <div>
      <InputWrapper>
        <SignInput placeholder={placeholder} value={value} onChange={onChange} type={type} />
        {rightComponent}
      </InputWrapper>
      {value && typeof value === 'string' && value.length && isValid ? validInfo : inValidInfo}
    </div>
  );
};

export default CheckInput;
