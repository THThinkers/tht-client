interface IOption {
  label: string;
  value: string;
  index: number;
}

interface IKeyedObject {
  [key: string]: string;
}

type Options = IOption[];

const mapValuesToOptions = <T extends IKeyedObject>(values: T[], key: string): Options => {
  return values.map<IOption>((curr, index) => ({ value: curr[key]!, label: curr[key]!, index }));
};

export default mapValuesToOptions;
