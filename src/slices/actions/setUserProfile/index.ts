import { useAppDispatch } from '@hooks';
import { setUserProfileAction } from '@slices';

type setUserProfile = {
  name: string,
  family: string,
  mobile: string
}
export const useSetUserProfile = () => {
  const dispatch = useAppDispatch();

  const setUserProfile = (params: setUserProfile) => {
    dispatch(setUserProfileAction(params));
  };

  return { setUserProfile };

};
