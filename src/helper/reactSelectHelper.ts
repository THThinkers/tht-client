export interface ISelectOption {
  label: string; // 라벨
  value: string; // 값
  index?: number;
}

interface IKeyedObject {
  [key: string]: string;
}

export const mapValuesToOptions = <T extends IKeyedObject>(values: T[], key: string): ISelectOption[] => {
  return values.map((curr, index) => ({ value: curr[key], label: curr[key], index }));
};

export const makeOptionValue = <T>(value: T, checker: boolean, index?: number) => {
  return checker ? undefined : { label: value, value, index };
};
