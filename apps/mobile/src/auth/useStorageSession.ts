import { useEffect } from 'react';

import { authService } from '@/auth/AuthService';
import { useAppDispatch } from '@/hooks';
import { useToken } from '@/store/auth/auth.selectors';
import { setToken } from '@/store/auth/auth.slice';

export function useSession(): boolean | null {
  const token = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    authService.getSession().then(session => {
      if (session) {
        dispatch(setToken({ token: session }));
      }
    });
  }, []);

  return Boolean(token);
}
