export interface IMajor {
  _id: string;
  name: string;
  createAt: string;
  [key: string]: string;
}

export type MajorList = IMajor[];
