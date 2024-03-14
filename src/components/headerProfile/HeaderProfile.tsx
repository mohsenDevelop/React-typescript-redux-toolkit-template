import { FC } from 'react';

import { Flex, Text, Image } from '@uiKits';
import { HeaderProfileProps } from './HeaderProfile.types';

export const HeaderProfile: FC<HeaderProfileProps> = ({ name, family }) => {
    return (
        <Flex
            gap={4}
        >
            <Image
                src={'/user.svg'}
                w={24}
                h={24}
            />

            <Text>
                {`${name} ${family}`}
            </Text>
        </Flex>
    );
};