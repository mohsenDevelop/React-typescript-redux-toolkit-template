import React from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import { Select, Flex, Text, Button } from '@uiKits';
import { useCar } from './Car.hooks';

const Car = () => {

    const {
        form,
        carsModel,
        carsType,
        handleBackRoute,
        handleNextRoute
    } = useCar();

    return (
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
                نوع و مدل خودروی خود را انتخاب کنید
            </Text>
            <Flex
                gap={24}
            >
                <Select
                    flex={1}
                    placeholder='نوع خودرو'
                    data={carsType ?? []}
                    onChange={(_value, option) => form.setFieldValue('carType', option)}
                    value={form.values.carType?.value ?? null}
                />
                <Select
                    flex={1}
                    placeholder='مدل خودرو'
                    data={carsModel ?? []}
                    disabled={!form.values.carType}
                    onChange={(_value, option) => form.setFieldValue('carModel', option)}
                    value={form.values.carModel?.value ?? null}
                />
            </Flex>

            <Flex
                justify={'space-between'}
                pt={20}
            >
                <Button
                    w={120}
                    type='button'
                    variant='outline'
                    leftSection={<IconChevronRight />}
                    onClick={handleBackRoute}
                >
                    بازگشت
                </Button>

                <Button
                    w={125}
                    variant='outline'
                    type='button'
                    rightSection={<IconChevronLeft />}
                    disabled={!form.values.carType || !form.values.carModel}
                    onClick={handleNextRoute}
                >
                    مرحله بعد
                </Button>
            </Flex>

        </Flex>
    );
};

export default Car;