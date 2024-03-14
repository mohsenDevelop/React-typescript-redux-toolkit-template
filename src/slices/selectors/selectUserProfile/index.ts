import { useAppSelector } from '@hooks';

export const useSelectUserProfile = () => {

    const { user } = useAppSelector((state) => state.userSlice);

    return user;
};