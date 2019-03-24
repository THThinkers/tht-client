import styled from 'styled-components';
import { SignInput } from '../components/shared';
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
  margin-top: 79px;
`;

export const FindUserInput = styled(SignInput)`
  margin-bottom: 15px;
`;
