import { useNavigate } from 'react-router-dom';

import { useCompanyListQuery } from '@api';
import { useFormContext } from '../ThirdPartyProvider';
import { PACKAGE_THIRD_PARTY_DISCOUNT_URL, PACKAGE_THIRD_PARTY_URL } from '@configs';

export const useCompany = () => {

    const navigate = useNavigate();

    const form = useFormContext();

    const { data } = useCompanyListQuery('companies');

    const companies = data?.map((company) => ({ value: company.id.toString(), label: company.title }));

    const handleBackRoute = () => {
        navigate(-1);
    };

    const handleNextRoute = () => {
        navigate(`${PACKAGE_THIRD_PARTY_URL}/${PACKAGE_THIRD_PARTY_DISCOUNT_URL}`);
    };

    return {
        form,
        companies,
        handleBackRoute,
        handleNextRoute
    };
};