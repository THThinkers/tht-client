import { InputHTMLAttributes } from 'react';

export const UserInfoFormMap: { [key: string]: InputHTMLAttributes<{}> } = {
  name: { placeholder: '이름', type: 'text' },
  phoneNumber: { placeholder: '전화번호', type: 'tel' },
  major: { placeholder: '전공', type: 'text' },
  studentId: { placeholder: '학번', type: 'number', min: '00', max: '99' },
  period: { placeholder: '활동시기', type: 'month', min: '2018-03' },
};
