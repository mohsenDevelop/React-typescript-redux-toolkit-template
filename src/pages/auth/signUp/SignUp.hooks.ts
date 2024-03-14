import { useNavigate } from 'react-router-dom';

import { FormValues } from './SignUp.types';
import { useSetUserProfile } from '@slices';
import { PACKAGES_URL } from '@configs';

export const useSignUp = () => {

    const navigate = useNavigate();

    const { setUserProfile } = useSetUserProfile();

    const handleSubmit = (values: FormValues) => {
        setUserProfile({ name: values.name, family: values.family, mobile: values.mobile });
        navigate(PACKAGES_URL);
    };

    return {
        handleSubmit
    };
};