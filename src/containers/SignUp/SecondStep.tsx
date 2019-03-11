import { format, getTime, getYear } from 'date-fns';
import React, { InputHTMLAttributes, useCallback, useMemo, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import Select from 'react-select';
import Creatable from 'react-select/lib/Creatable';
import { getMajorList } from '../../api/major';
import { getTagList } from '../../api/tag';
import { makeOptionValue, mapValuesToOptions } from '../../helper/reactSelectHelper';
import { useAsync, useEvent, useFormState } from '../../hooks';
import useWindowEvent from '../../hooks/useWIndowEvent';
import { ITag } from '../../models/tag';
import { ISignupUser } from '../../models/user';
import { SignupForm } from '../../pages/SignUp';
import SelectStyles from '../../styles/SelectStyles';
import {
  CalendarWrapper,
  InputFooter,
  InputWrapper,
  Interval,
  MonthInfoInput,
  MonthInfoInputWrapper,
  StepButton,
  UserInfoInput,
} from '../../styles/SingUpStyles';

type SecondFormType = Pick<SignupForm, 'name' | 'phoneNumber' | 'major' | 'studentId' | 'joined' | 'ended'> & {
  [key: string]: string | number | undefined | Array<PartialExclude<ITag, 'name'>>;
};

type CalendarStatus = 'NONE' | 'JOINED' | 'ENDED';

interface ISecondStepProps {
  getForm: () => SignupForm;
  setStep: ({ nextStep, nextForm }: { nextStep: number; nextForm: SecondFormType }) => void;
}

//  UserInfo 에 대한 기본 인풋일 경우 데이터 input 설정
type FlatInputUserData = Exclude<keyof ISignupUser, 'username' | 'password' | 'tags'>;

const UserInfoFormMap: { [key in FlatInputUserData]: InputHTMLAttributes<{}> } = {
  name: { placeholder: '이름', type: 'text' },
  phoneNumber: { placeholder: `전화번호. '-' 없이 입력해주세요`, type: 'tel' },
  major: { placeholder: '전공' },
  studentId: { placeholder: '학번' },
  joined: { placeholder: '활동 시작', type: 'month' },
  ended: { placeholder: '활동 종료', type: 'month' },
};

/**
 * 학번 정보 생성기
 * 2000년부터 현재까지 라벨을 생성한다.
 */
const studentIdOptions = new Array(getYear(Date.now()) - 1999)
  .fill(0)
  .map((_, index) => ({ value: 2000 + index, label: 2000 + index }));

/**
 * 회원 인증 함수 / 상태 초기화
 */
const validator = (form: SecondFormType) =>
  Object.keys(form).every((field) => {
    if (form[field] === undefined) {
      return false;
    }
    return form[field]!.toString().length > 0;
  });

/***************************************
 *
 * 두 번째 회원가입 폼을 사용하는 컴포넌트
 *
 ***************************************/
const SecondStep: React.SFC<ISecondStepProps> = ({ getForm, setStep }) => {
  const { username, password, pwCheck, tags, ...secondForm } = getForm();

  const [userInfo, onChangeUserInfo, isFormValid, setUserInfo] = useFormState<SecondFormType>(secondForm, validator);

  /**
   * form 작성에 필요한 데이터를 가져옴
   */
  const [majorState, major] = useAsync({ endpoint: getMajorList }, []);
  const [tagState, tag] = useAsync({ endpoint: getTagList }, []);

  /**
   * 옵션 데이터 변환
   */
  const majorOptions = useMemo(() => mapValuesToOptions(major, 'name'), [major]);
  const tagOptions = useMemo(() => mapValuesToOptions(tag, 'name'), [tag]);

  /**
   *  input EventListener
   */
  const onChangeMajor = useCallback((ops: any) => {
    setUserInfo({ major: ops.value });
  }, []);

  const onChangeStudendId = useCallback((ops: any) => {
    setUserInfo({ studentId: ops.value });
  }, []);

  const onChangeTags = useCallback((ops: any) => {
    console.log(ops);
  }, []);

  // 전화번호에 - 가 포함되어있을 경우 삭제해줌
  const phoneRef = useRef(null);
  useEvent(phoneRef, 'blur', (e) => {
    const { value } = e.currentTarget;
    setUserInfo({ phoneNumber: value.split('-').join('') });
  });

  /**
   * 날짜 관련 로직들
   * calendarState - 달력 출력여부
   * JOINED / ENDED : 출력
   * NONE : 미출력
   */
  const [calendarState, setCalendar] = useState<CalendarStatus>('NONE');

  const joinedRef = useRef(null);
  const endedRef = useRef(null);
  const calendarWrapperRef = useRef<HTMLDivElement>(null);

  // focus가 가면 달력을 출력해준다.
  useEvent(joinedRef, 'focus', () => {
    setCalendar('JOINED');
  });
  useEvent(endedRef, 'focus', () => {
    setCalendar('ENDED');
  });

  // 달력 이외의 것을 누르면 달력 삭제
  useWindowEvent('click', (e) => {
    if (e.target === joinedRef.current || e.target === endedRef.current) {
      return;
    }
    if (calendarWrapperRef.current && !calendarWrapperRef.current.contains(e.target as Node)) {
      setCalendar('NONE');
    }
  });

  const onChangeCalendar = useCallback(
    (date: Date | Date[]) => {
      if (Array.isArray(date)) {
        return;
      }
      const month = format(date, 'YYYY-MM');
      const updateTarget = calendarState === 'JOINED' ? 'joined' : 'ended';
      setUserInfo({ [updateTarget]: month });
    },
    [calendarState],
  );

  /**
   * api 에러일경우 에러 메시지 출력
   */
  if (majorState === 'FAILURE' || tagState === 'FAILURE') {
    return <div>에러입니다. 새로고침해주세요</div>;
  }

  console.log(getTime(userInfo.joined || Date.now()));

  return (
    <InputWrapper>
      <UserInfoInput id={'name'} value={userInfo.name} onChange={onChangeUserInfo} {...UserInfoFormMap.name} />
      <UserInfoInput
        ref={phoneRef}
        id={'phoneNumber'}
        value={userInfo.phoneNumber}
        onChange={onChangeUserInfo}
        {...UserInfoFormMap.phoneNumber}
      />
      <Select
        placeholder={UserInfoFormMap.major.placeholder}
        options={majorOptions}
        value={makeOptionValue(userInfo.major, userInfo.major === '', -1)}
        onChange={onChangeMajor}
        styles={SelectStyles}
      />
      <Select
        placeholder={UserInfoFormMap.studentId.placeholder}
        value={makeOptionValue(userInfo.studentId, userInfo.studentId === -1, -1)}
        onChange={onChangeStudendId}
        options={studentIdOptions}
        styles={SelectStyles}
      />
      <MonthInfoInputWrapper>
        <MonthInfoInput
          ref={joinedRef}
          id={'joined'}
          value={userInfo.joined}
          onChange={onChangeUserInfo}
          {...UserInfoFormMap.joined}
        />
        <Interval>~</Interval>
        <MonthInfoInput
          ref={endedRef}
          id={'ended'}
          value={userInfo.ended}
          onChange={onChangeUserInfo}
          {...UserInfoFormMap.ended}
        />
        {calendarState !== 'NONE' && (
          <CalendarWrapper ref={calendarWrapperRef as any} calendarState={calendarState}>
            <Calendar
              minDate={calendarState === 'ENDED' ? new Date(getTime(userInfo.joined)) : undefined}
              maxDate={calendarState === 'JOINED' ? new Date(getTime(userInfo.ended || Date.now())) : new Date()}
              view="year"
              maxDetail="year"
              onChange={onChangeCalendar}
            />
          </CalendarWrapper>
        )}
      </MonthInfoInputWrapper>
      <Creatable options={tagOptions} styles={SelectStyles} isMulti onChange={onChangeTags} />
      <InputFooter>
        <StepButton type="button" onClick={() => setStep({ nextStep: 1, nextForm: userInfo })}>
          이전
        </StepButton>
        <StepButton type="submit" onClick={() => setStep({ nextStep: 3, nextForm: userInfo })} disabled={!isFormValid}>
          완료
        </StepButton>
      </InputFooter>
    </InputWrapper>
  );
};

export default SecondStep;
