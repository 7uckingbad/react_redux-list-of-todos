import { useSelector } from 'react-redux';

export const useAppSelector = <T>(selector: (state: RootState) => T): T => {
  return useSelector(selector);
};
