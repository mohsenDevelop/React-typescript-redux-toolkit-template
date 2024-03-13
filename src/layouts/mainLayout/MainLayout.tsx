import { Outlet } from 'react-router-dom';

import { Flex, Stack, Image, Container } from '@uiKits';
import { Header } from '../header';

export const MainLayout = () => {
    return (
        <Flex
            pos={'relative'}
            direction={'column'}
            h={'100vh'}
        >
            <Header />
            <Flex
                h={'100%'}
                mt={'-60px'}
            >
                <Stack
                    flex={4}
                    pt={90}
                >
                    <Container
                        w={'100%'}
                    >
                        <Outlet />
                    </Container>
                </Stack>
                <Stack
                    flex={2}
                    h={'100%'}
                    bg={'#fefbeb'}
                />
            </Flex>

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