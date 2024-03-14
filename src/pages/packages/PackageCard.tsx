import { FC } from 'react';

import { Stack, Image, Text } from '@uiKits';
import { PackageCardProps } from './Packages.types';

export const PackageCard: FC<PackageCardProps> = ({ title, disabled, onClick }) => {
    return (
        <Stack
            align='center'
            justify='center'
            w={120}
            h={120}
            opacity={disabled ? .5 : 1}
            style={(theme) => ({
                border: `1px solid ${theme.colors.gray[5]}`,
                borderRadius: 8,
                cursor: disabled ? 'not-allowed' : 'pointer'
            })}
            gap={8}
            onClick={!disabled ? onClick : undefined}
        >
            <Image
                src={'/insurance.svg'}
                alt='insurance'
                w={24}
                h={24}
            />
            <Text>
                {title}
            </Text>
        </Stack>
    );
};