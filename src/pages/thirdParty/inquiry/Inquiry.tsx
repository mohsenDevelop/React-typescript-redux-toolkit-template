import { FC } from 'react';

import { Modal, Flex, Text, Stack } from '@uiKits';
import { useInquiry } from './Inquiry.hooks';
import { InquiryPops } from './Inquiry.types';

const Inquiry: FC<InquiryPops> = ({ open, onClose }) => {

    const { carType, carModel, thirdDiscount, accidentDiscount, company } = useInquiry();

    return (
        <Modal
            opened={open}
            onClose={onClose}
            title={'بررسی نهایی'}
            centered
        >
            <Stack
                gap={24}
            >
                <Flex
                    gap={16}
                    pb={16}
                    align={'center'}
                    style={(theme) => ({
                        borderBottom: `1px solid ${theme.colors.gray[2]}`
                    })}
                >
                    <Text size='md' c={'gray.8'}>نوع خودرو: </Text>
                    <Text size='sm' c={'gray.6'}>{carType?.label}</Text>
                </Flex>

                <Flex
                    gap={16}
                    pb={16}
                    align={'center'}
                    style={(theme) => ({
                        borderBottom: `1px solid ${theme.colors.gray[2]}`
                    })}
                >
                    <Text size='md' c={'gray.8'}>مدل خودرو: </Text>
                    <Text size='sm' c={'gray.6'}>{carModel?.label}</Text>
                </Flex>

                <Flex
                    gap={16}
                    pb={16}
                    align={'center'}
                    style={(theme) => ({
                        borderBottom: `1px solid ${theme.colors.gray[2]}`
                    })}
                >
                    <Text size='md' c={'gray.8'}>شرکت بیمه گر قبلی: </Text>
                    <Text size='sm' c={'gray.6'}>{company?.label}</Text>
                </Flex>

                <Flex
                    gap={16}
                    pb={16}
                    align={'center'}
                    style={(theme) => ({
                        borderBottom: `1px solid ${theme.colors.gray[2]}`
                    })}
                >
                    <Text size='md' c={'gray.8'}>درصد تخفیف ثالث: </Text>
                    <Text size='sm' c={'gray.6'}>{thirdDiscount?.label}</Text>
                </Flex>

                <Flex
                    gap={16}
                    pb={16}
                    align={'center'}
                >
                    <Text size='md' c={'gray.8'}>درصد تخفیف حوادث راننده: </Text>
                    <Text size='sm' c={'gray.6'}>{accidentDiscount?.label}</Text>
                </Flex>

            </Stack>
        </Modal>
    );
};

export default Inquiry;