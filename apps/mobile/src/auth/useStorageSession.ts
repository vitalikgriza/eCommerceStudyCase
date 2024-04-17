import { useEffect, useState } from 'react';

import { authService } from '@/auth/AuthService';
import { useAppDispatch } from '@/hooks';
import { useToken } from '@/store/auth/auth.selectors';
import { setToken } from '@/store/auth/auth.slice';

type ISessionReturn = {
  token: string | null;
  isLoading: boolean;
};

export function useSession(): ISessionReturn {
  const token = useToken();
  const [isLoading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    authService
      .getSession()
      .then(session => {
        if (session) {
          dispatch(setToken({ token: session }));
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return { token, isLoading };
}
