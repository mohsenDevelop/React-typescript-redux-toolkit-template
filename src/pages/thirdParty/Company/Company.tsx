import React from 'react';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import { Select, Flex, Text, Button } from '@uiKits';
import { useCompany } from './Company.hooks';

const Company = () => {

    const {
        form,
        companies,
        handleBackRoute,
        handleNextRoute
    } = useCompany();

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
                شرکت بیمه گر قبلی خود را در این بخش وارد کنید.
            </Text>
            <Select
                flex={1}
                placeholder='شرکت بیمه گر قبلی'
                data={companies ?? []}
                onChange={(_value, option) => form.setFieldValue('company', option)}
                value={form.values.company?.value}
            />

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
                    onClick={handleNextRoute}
                >
                    مرحله بعد
                </Button>
            </Flex>

        </Flex>
    );
};

export default Company;