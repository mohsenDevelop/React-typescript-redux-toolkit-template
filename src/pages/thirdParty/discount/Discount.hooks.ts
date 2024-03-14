import { useState } from 'react';

import { useDiscountListQuery } from '@api';
import { useFormContext } from '../ThirdPartyProvider';

export const useCar = () => {

    const form = useFormContext();

    const { data } = useDiscountListQuery('discounts');

    const [openModal, setOpenModal] = useState<boolean>(false);

    const discountList = data?.map((discount) => ({ value: discount.id.toString(), label: discount.title }));

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return {
        form,
        discountList,
        openModal,
        handleCloseModal,
        handleOpenModal
    };
};