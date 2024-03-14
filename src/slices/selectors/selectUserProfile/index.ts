import { useAppSelector } from '@hooks';

export const useSelectUserProfile = () => {

    const userProfile = useAppSelector((state) => state.userSlice);

    return userProfile;
};