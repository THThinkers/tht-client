export interface ITag {
  _id: string;
  name: string;
  createAt: string;
  [key: string]: string;
}

export type TagList = ITag[];
