import React from 'react';
import styled from 'styled-components';
import { Field } from '../components';
import { PartialUser } from '../models/user';

const Form = styled.form`
  max-width: 95%;
  width: 760px;
  margin: 0 auto;
`;
const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  color: white;
  background-color: #0594e0;
  padding: 20px 10px;

  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    transition: opacity 0.1s;
  }
`;
interface ISignupDetailProps {
  handleUpdate: (user: PartialUser) => void;
}
class SignupDetail extends React.Component<ISignupDetailProps, PartialUser> {
  state = {
    major: '',
    name: '',
    studentId: 0,
  };
  handleChange = (fieldName: string) => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    this.setState({
      [fieldName]: e.target.value,
    });
  };
  handleUpdate = () => {
    this.props.handleUpdate(this.state);
  };
  render() {
    return (
      <Form>
        {Object.keys(this.state).map((field, i) => (
          <Field key={i} name={field} onChange={this.handleChange(field)} />
        ))}
        <Button onClick={this.handleUpdate}>등록</Button>
      </Form>
    );
  }
}

export default SignupDetail;
