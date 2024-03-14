import { Flex, TextInput, Text, Button } from '@uiKits';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';

import { useSignUp } from './SignUp.hooks';
import { FormValues } from './SignUp.types';
import { formValidations } from './SignUp.validations';

export const SignUpForm = () => {

    const matches = useMediaQuery('(max-width: 48em)');

    const { handleSubmit } = useSignUp();

    const form = useForm<FormValues>({
        initialValues: {
            name: '',
            family: '',
            mobile: '',
            password: ''
        },

        validate: formValidations
    });

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Flex
                direction={'column'}
                gap={24}
                maw={500}
            >
                <Text
                    size={'xl'}
                >
                    ثبت نام
                </Text>
                <Flex
                    gap={matches ? 24 : 16}
                    direction={matches ? 'column' : 'row'}
                >
                    <TextInput
                        flex={1}
                        placeholder='نام'
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        flex={1}
                        placeholder='نام خانوادگی'
                        {...form.getInputProps('family')}
                    />
                </Flex>

                <TextInput
                    placeholder='شماره موبایل'
                    {...form.getInputProps('mobile')}
                />
                <TextInput
                    placeholder='رمز عبور'
                    {...form.getInputProps('password')}
                />
                <Button
                    w={150}
                    type='submit'
                    style={{
                        alignSelf: 'flex-end'
                    }}
                >
                    ثبت نام
                </Button>

            </Flex>
        </form>
    );
};