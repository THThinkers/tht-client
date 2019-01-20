import React from 'react';
import styled from 'styled-components';

interface IContainerProps {
  fullWidth: boolean;
}
const Container = styled.div`
  ${(props: IContainerProps) =>
    props.fullWidth
      ? `width: 100%;`
      : `display: inline-block;`} position: relative;
  margin-bottom: 1rem;
  &:focus-within label {
    color: black;
    transition: color 0.1s ease-in-out;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  width: 100%;
  padding: 10px 0;
  &:focus {
    border-bottom: 1px solid black;
    transition: border-bottom 0.1s ease-in-out;
  }
`;
const Label = styled.label`
  display: block;
  color: #eee;
`;
interface IFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  fullWidth?: boolean;
}
const Field: React.SFC<IFieldProps> = ({
  name,
  fullWidth = true,
  ...props
}) => (
  <Container fullWidth>
    <Label htmlFor={name}>{name.toUpperCase()}</Label>
    <Input id={name} {...props} />
  </Container>
);

export default Field;
