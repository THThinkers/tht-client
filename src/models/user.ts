export interface IUser {
  _id: string;
  name: string;
  isVerified: boolean;
  password?: string;
  isAdmin?: boolean;
  facebookId?: string;
  googleId?: string;
  profilePicture?: string;
  description?: string;
  joind?: Date;
  ended?: Date;
  major?: string;
  studentId?: number;
  tags?: [{}];
  createdAt?: Date;
}

export type PartialUser = { [K in keyof IUser]?: IUser[K] };
