import React from 'react';

import { Select, Flex, Text, Button } from '@uiKits';
import { useCar } from './Discount.hooks';
import Inquiry from '../inquiry/Inquiry';

const Discount = () => {

    const {
        form,
        discountList,
        openModal,
        handleCloseModal,
        handleOpenModal
    } = useCar();

    return (
        <>
            <Inquiry
                open={openModal}
                onClose={handleCloseModal}
            />

            <Flex
                direction={'column'}
                gap={24}
                maw={500}
            >
                <Text
                    size={'xl'}
                    pb={'md'}
                >
                    بیمه شخص ثالث
                </Text>

                <Text
                    size={'14px'}
                    c={'gray.6'}
                    pb={'md'}
                >
                    درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.
                </Text>
                <Flex
                    direction={'column'}
                    gap={24}
                >
                    <Select
                        flex={1}
                        placeholder='درصد تخفیف ثالث'
                        data={discountList ?? []}
                        onChange={(_value, option) => form.setFieldValue('thirdDiscount', option)}
                        value={form.values.thirdDiscount?.value ?? null}
                    />
                    <Select
                        flex={1}
                        placeholder='درصد تخفیف حوادث راننده'
                        data={discountList ?? []}
                        onChange={(_value, option) => form.setFieldValue('accidentDiscount', option)}
                        value={form.values.accidentDiscount?.value ?? null}
                    />
                </Flex>

                <Flex
                    justify={'flex-end'}
                    pt={20}
                >

                    <Button
                        w={125}
                        type='button'
                        disabled={!form.values.accidentDiscount || !form.values.thirdDiscount}
                        onClick={handleOpenModal}
                    >
                        استعلام قیمت
                    </Button>
                </Flex>

            </Flex>
        </>
    );
};

export default Discount;