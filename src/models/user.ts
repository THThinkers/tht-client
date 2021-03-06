import { IMajor } from './major';
import { ITag } from './tag';

/** *  @desc 사용자 데이터 */
export interface IUser {
  _id: string;
  username: string; // 계정
  password: string; // 비밀번호
  name: string; // 이름
  phoneNumber: string; // 전화번호
  major: IMajor; // 전공
  studentId: number; // 학번
  joined: string; // 가입 & 활동 종료 시기
  ended: string;
  tags: ITag[]; //  태그
  isActive?: boolean; // 현재 활동중인 회원인지?
  isVerified?: boolean; // 학회장 승인이 떨어진 계정인지?
  isLinked?: boolean; // 계정 외부와 연결되어있는지?
  isAdmin?: boolean; // 어드민인지?
  kakaoId?: string;
  googleId?: string;
  profilePicture?: string;
  description?: string;
  createdAt?: Date;
}

export type ISigninUser = Pick<IUser, 'username' | 'password'>;

export type ISignupUser = Pick<
  IUser,
  'username' | 'password' | 'name' | 'phoneNumber' | 'major' | 'studentId' | 'joined' | 'ended' | 'tags'
>;

export type IOauthLinkUser = Partial<IUser> & Required<Pick<IUser, 'username' | 'password'>>;
export type IMemberUser = Pick<IUser, '_id' | 'name' | 'major' | 'isActive' | 'studentId' | 'profilePicture'>;
export type PartialUser = { [K in keyof IUser]?: IUser[K] };
