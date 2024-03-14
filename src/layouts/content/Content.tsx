import { Outlet } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

import { Flex, Stack, Container } from '@uiKits';

export const Content = () => {

    const matches = useMediaQuery('(max-width: 48em)');

    return (
        <Flex
            h={'100%'}
            mt={'-60px'}
            direction={matches ? 'column' : 'row'}
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
                flex={matches ? .5 : 2}
                h={'100%'}
                bg={'#fefbeb'}
            />
        </Flex>

    );
};