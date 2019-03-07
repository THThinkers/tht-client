import { useCallback, useEffect, useState } from 'react';
import { State } from '../constants/state';

interface IAsyncEntity {
  endpoint: ApiEndPoint<any>;
  params?: any[];
}

export const useAsync = (
  entity: IAsyncEntity,
  defaultData: PromiseReturnType<typeof entity.endpoint>,
): [State, PromiseReturnType<typeof entity.endpoint>] => {
  const [status, setStatus] = useState<State>('INIT');
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    const { endpoint, params } = entity;
    setStatus('WAITING');
    endpoint
      .apply(null, params || [])
      .then((res) => {
        setData(res);
        setStatus('SUCCESS');
      })
      .catch(() => {
        setStatus('FAILURE');
      });
  }, []);

  return [status, data];
};

const useAsyncCallback = (api: string | Promise<any>, defaultData: any) => {
  const [status, setStatus] = useState<State>('INIT');
  const [data, setData] = useState(defaultData);
};
