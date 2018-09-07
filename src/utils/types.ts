// Type하나를 받아서 그 타입의 속성을 모두 ?로 가지는 타입을 만들어 줌.
export type Partial<T> = { [K in keyof T]?: T[K] };
