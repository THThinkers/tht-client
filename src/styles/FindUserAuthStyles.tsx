import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, SignInput } from '../components/shared';
import colors from '../constants/colors';

export const FindAuthWrapper = styled.div`
  margin: 158px auto 0px auto;
  width: 750px;
  h1 {
    color: ${colors.prime};
    font-size: 30px;
    text-align: center;
  }
`;

export const FindAuthDescription = styled.div`
  margin-top: 34px;
  text-align: center;
`;

export const InputWrapper = styled.form`
  width: 482px;
  margin: 79px auto 0px auto;
`;

export const FindUserInput = styled(SignInput)`
  display: block;
  margin-bottom: 25px;
`;

export const FindButton = styled(Button)`
  margin-top: 77px;
  display: block;
  width: 100%;
  height: 58px;
  font-weight: bold;
  font-size: 24px;
`;

export const FindUserStyledLink = styled(Link)`
  display: block;
  font-size: 18px;
  text-align: center;
  margin: 34px 0px 100px 0px;
  color: #808080;
  text-decoration: underline;
`;
