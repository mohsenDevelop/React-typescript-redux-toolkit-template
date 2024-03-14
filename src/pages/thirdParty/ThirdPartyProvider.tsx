import { FC, PropsWithChildren } from 'react';
import { createFormContext } from '@mantine/form';

interface FormValues {
    carType: { value: string, label: string } | null;
    carModel: { value: string, label: string } | null;
    company: { value: string, label: string } | null;
    thirdDiscount: { value: string, label: string } | null;
    accidentDiscount: { value: string, label: string } | null;
}

export const [FormProvider, useFormContext, useForm] =
    createFormContext<FormValues>();

export const FormContextProvider: FC<PropsWithChildren> = (props) => {

    const form = useForm({
        initialValues: {
            carType: null,
            carModel: null,
            company: null,
            thirdDiscount: null,
            accidentDiscount: null,
        },
    });

    console.log({ values: form.values });

    return (
        <FormProvider form={form}>
            <form onSubmit={form.onSubmit(() => { })}>
                {props.children}
            </form>
        </FormProvider>
    );
};