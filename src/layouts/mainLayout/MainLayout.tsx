import { Flex, Image } from '@uiKits';
import { Header } from '../header';
import { Content } from '../content';

export const MainLayout = () => {
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
                bottom={0}
                left={20}
                w={500}
            />
        </Flex >
    );
};