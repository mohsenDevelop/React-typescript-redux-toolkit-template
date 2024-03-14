import { ValidationHelper } from '@utils';

export const formValidations = {
    name: (value: string) => value.length && ValidationHelper.isPersian(value) ? null : 'لطفا فارسی وارد نمایید',
    family: (value: string) => value.length && ValidationHelper.isPersian(value) ? null : 'لطفا فارسی وارد نمایید',
    mobile: (value: string) => value.length && ValidationHelper.isMobileNumber(value) ? null : 'لطفا شماره موبایل را به درستی وارد نمایید',
    password: (value: string) => value.length && ValidationHelper.checkPasswordComplexity(value) ? null : 'رﻣﺰ ﻋﺒﻮر از ﺣﺪاﻗﻞ ﯾﮏ ﻋﺪد ﺣﺪاﻗﻞ ﯾﮏ ﺣﺮف ﻻﺗﯿﻦ ﺑﺰرگ و ﺣﺪاﻗﻞ ﯾﮏ ﺣﺮف ﻻﺗﯿﻦ ﮐﻮﭼﮏ ﺗﺸﮑﯿﻞ ﺷﺪه ﺑﺎﺷﺪ و ﻃﻮل آن ﺣﺪاﻗﻞ ۴ و ﺣﺪاﮐﺜﺮ ١٠ ﮐﺎراﮐﺘﺮ ﺑﺎﺷﺪ.',
};