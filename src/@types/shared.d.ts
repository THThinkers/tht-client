declare type ApiEndPoint<R> = (...param: any[]) => Promise<R>;

declare type State = 'INIT' | 'WAITING' | 'SUCCESS' | 'FAILURE';
