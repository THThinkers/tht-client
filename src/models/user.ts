export interface IUser {
  _id: string;
  username: string;
  password: string;
  name: string;
  major: string;
  studentId: number;
  tags: [{}];
  isVerified?: boolean;
  isAdmin?: boolean;
  kakaoId?: string;
  googleId?: string;
  profilePicture?: string;
  description?: string;
  joind?: Date;
  ended?: Date;
  createdAt?: Date;
}

export type ISignupUser = Pick<IUser, 'username' | 'password' | 'major' | 'studentId' | 'tags'>;

export type PartialUser = { [K in keyof IUser]?: IUser[K] };
