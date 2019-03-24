import isEmail from 'validator/lib/isEmail';

export const notEmptyString = (value: string) => {
  return value.length !== 0;
};

export const email = (value: string): boolean => {
  return isEmail(value);
};

export const validPassword = (value: string): boolean => {
  const check = RegExp(/(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/);
  return check.test(value);
};

export const shallowEqual = (a: any, b: any): boolean => {
  if (Number.isNaN(a)) {
    return Number.isNaN(a) && Number.isNaN(b);
  }
  return a === b;
};
