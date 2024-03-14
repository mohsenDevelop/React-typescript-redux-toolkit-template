import { useMediaQuery } from '@mantine/hooks';

import { Flex, Image } from '@uiKits';
import { Header } from '../header';
import { Content } from '../content';

export const MainLayout = () => {

    const matches = useMediaQuery('(max-width: 48em)');

    return (
        <Flex
            pos={'relative'}
            direction={'column'}
            h={'100vh'}
        >
            <Header />
            <Content />
            <Image
                src='/car-green.svg'
                alt='car'
                pos={'absolute'}
                bottom={'10%'}
                left={matches ? 0 : 20}
                w={matches ? 150 : 500}
            />
        </Flex >
    );
};