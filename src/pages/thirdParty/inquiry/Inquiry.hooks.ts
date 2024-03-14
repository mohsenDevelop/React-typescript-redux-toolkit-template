import { useFormContext } from '../ThirdPartyProvider';

export const useInquiry = () => {

    const form = useFormContext();

    return {
        ...form.values
    };
};