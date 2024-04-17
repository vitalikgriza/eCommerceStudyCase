import { useAppSelector } from '@/hooks';

export const useToken = () => useAppSelector(state => state.auth.token);
