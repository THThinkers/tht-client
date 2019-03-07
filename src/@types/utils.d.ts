// 객체 타입 중에 특정 키 제거
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 프로미스를 반환하는 함수의 리턴 타입
declare type PromiseReturnType<T extends (...p: any[]) => Promise<any>> = T extends (...p: any[]) => Promise<infer R>
  ? R
  : any;
