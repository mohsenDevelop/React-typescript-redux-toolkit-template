import { useNavigate } from 'react-router-dom';

import { Flex, Text } from '@uiKits';
import { PackageCard } from './PackageCard';
import {
    PACKAGE_THIRD_PARTY_URL,
} from '@configs';

const Packages = () => {

    const navigate = useNavigate();

    return (
        <>
            <Text
                size={'xl'}
                pb={24}
            >
                ثبت نام
            </Text>
            <Flex
                gap={24}
            >
                <PackageCard
                    title='شخص ثالث'
                    onClick={() => navigate(PACKAGE_THIRD_PARTY_URL)}
                />
                <PackageCard
                    title='بدنه'
                    disabled
                />
            </Flex>
        </>
    );
};

export default Packages;