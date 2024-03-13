import { Outlet } from 'react-router-dom';

import { Flex, Stack, Container } from '@uiKits';

export const Content = () => {
    return (
        <Flex
            h={'100%'}
            mt={'-60px'}
        >
            <Stack
                flex={4}
                pt={90}
            >
                <Container
                    size={'sm'}
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

    );
};