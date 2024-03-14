import { Flex, Text, Container } from '@uiKits';
import { HeaderProfile } from '@components';
import { useSelectUserProfile } from '@slices';

export const Header = () => {

    const userProfile = useSelectUserProfile();

    return (
        <Container
            size={'xl'}
            w={'100%'}
            style={{
                zIndex: 1
            }}
        >
            <Flex
                justify={'space-between'}
                align={'center'}
                h={60}
                flex={1}
            >
                <img
                    src='/logo.svg'
                    alt='logo'
                    width={24}
                    height={24}
                />

                <Text
                    size='md'
                >
                    سامانه مقایسه و خرید آنلاین بیمه
                </Text>

                {
                    userProfile ?
                        <HeaderProfile name={userProfile.name} family={userProfile.family} />
                        :
                        <Text
                            size='md'
                        >
                            ثبت نام
                        </Text>
                }

            </Flex>
        </Container>
    );
};