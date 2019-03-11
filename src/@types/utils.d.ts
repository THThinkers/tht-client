/**
 * 객체 타입 중에 특정 키 제거
 */
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * 전부 제외하지만, 정의된 키는 확정으로 들어있음
 */
declare type PartialExclude<T, N extends keyof T> = { [key in N]: T[N] } & { [P in keyof T]?: T[P] | undefined };

/**
 * 프로미스를 반환하는 함수의 리턴 타입
 */
declare type PromiseReturnType<T extends (...p: any[]) => Promise<any>> = T extends (...p: any[]) => Promise<infer R>
  ? R
  : any;
