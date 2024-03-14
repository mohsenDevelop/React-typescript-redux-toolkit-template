import { useNavigate } from 'react-router-dom';

import { useCarsListQuery } from '@api';
import { useFormContext } from '../ThirdPartyProvider';
import { PACKAGE_THIRD_PARTY_COMPANY_URL } from '@configs';

export const useCar = () => {

    const navigate = useNavigate();

    const form = useFormContext();

    const { data } = useCarsListQuery('cars');

    const carsType = data?.map((car) => ({ value: car.id.toString(), label: car.title }));
    const carsModel = data?.find((car) => car.id.toString() === form.values.carType?.value)?.usages?.map((usage) => ({ value: usage.id.toString(), label: usage.title }));

    const handleBackRoute = () => {
        navigate(-1);
    };

    const handleNextRoute = () => {
        navigate(PACKAGE_THIRD_PARTY_COMPANY_URL);
    };

    return {
        form,
        carsType,
        carsModel,
        handleBackRoute,
        handleNextRoute
    };
};