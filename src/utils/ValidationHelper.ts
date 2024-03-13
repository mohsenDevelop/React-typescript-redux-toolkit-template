// import { UtilsHelper } from './UtilsHelper';

export class ValidationHelper {
  // public static isDigit = (input): boolean => {
  //     if (typeof input !== 'string') input = input.toString();

  //     const reg = /^\d+$/;
  //     const isDigit = input.match(reg);
  //     if (isDigit)
  //         return true;
  //     else
  //         return false;
  // }

  // public static isEmpty = (value): boolean => {
  //     if (typeof value !== 'string') value = value.toString();

  //     if (value.length > 0) {
  //         return true;
  //     } else {
  //         return false;
  //     }
  // }

  static checkPasswordComplexity = (input: any) => {
    if (typeof input !== 'string') {
      input = input.toString();
    }

    const exp =
      /^(?=.*[A-Z])(?=.*[!@%#$&*()-/.`:\\<=>\]?;/[^_{}|~'])(?=.*[0-9])(?=.*[a-z]).{8,64}$/;
    const reg = new RegExp(exp);
    const isAccepted = input.match(reg);

    if (isAccepted) {
      return true;
    }
    return false;
  };

  public static isMobileNumber = (value: string) => {
    if (value && value.length > 0 && value.match(/((9|9|9)[0-9]{9})/gi)) {
      const v = value.match(/((9|9|9)[0-9]{9})/gi);

      return (
        !!v &&
        v !== undefined &&
        v.length > 0 &&
        v[0].length === 10 &&
        (v[0] === value || ['0', v[0]].join('') === value)
      );
    }
    return false;
  };

  // public static isEnglishType = (value: any) => {
  //     const texts = value;
  //     const english = /^[A-Za-z0-9]*$/;
  //     const result = english.test(texts);
  //     return result;
  // }

  // public static isNumber = (value: any) => {

  //     if (!!value && value.toString().includes('.')) {

  //         return !!UtilsHelper.fixFarsiForSearch(value.toString().split('.').join('')).match('^[0-9\\.\\,]*$');
  //     }

  //     if (!!value) return !!UtilsHelper.fixFarsiForSearch(value).match('^[0-9\\.\\,]*$');

  //     return false;

  // };

  // public static isPostalCode = (value: any) => {
  //     const str = value.toString();
  //     const firstPartDigiStr = str.substr(0, 6);
  //     return Validation.isNumber(str)
  //         && str.length === 10
  //         && /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/gm.test(str)
  //         && firstPartDigiStr.indexOf('2') === -1
  //         && firstPartDigiStr.indexOf('0') === -1;

  // }

  // public static checkPasswordComplexity = (input): boolean => {

  //     if (typeof input !== 'string') input = input.toString();

  //     const exp = /^(?=.*[A-Z])(?=.*[!@%#$&*()-/.`:\\<=>\]?;/[^_{}|~'])(?=.*[0-9])(?=.*[a-z]).{8,64}$/;
  //     const reg = new RegExp(exp);
  //     const isAccepted = input.match(reg);
  //     if (isAccepted)
  //         return true;
  //     else {
  //         return false;
  //     }
  // }

  // public static isNationalCode = (value) => {
  //     let sum = 0;
  //     let r = 0;
  //     let checkDigit = 0;
  //     let nationalCodeStr: any = UtilsHelper.fixFarsiForSearch(value.toString());
  //     if ((nationalCodeStr && nationalCodeStr.length === 10 && nationalCodeStr.split('').every((char) => char === nationalCodeStr[0])) || nationalCodeStr.length > 10) {
  //         return false;
  //     }
  //     if (nationalCodeStr.length <= 8 || nationalCodeStr * 1 <= 0x98968a) {
  //         return false;
  //     }
  //     nationalCodeStr = ['00', nationalCodeStr.trim()].join('');
  //     nationalCodeStr = nationalCodeStr.substring(nationalCodeStr.length - 10, nationalCodeStr.length);
  //     checkDigit = nationalCodeStr.substring(9, 10) * 1;
  //     nationalCodeStr = nationalCodeStr.split('');
  //     for (let i = 0; i < 9; i += 1) {
  //         sum += nationalCodeStr[i] * (10 - i);
  //     }
  //     r = sum % 11;
  //     if ((r > 1 ? 11 - r : r) === checkDigit) {
  //         return true;
  //     } else {
  //         return false;
  //     }
  // };

  // public static isTel = (value: any): boolean => {
  //     if (
  //         (value && value.length > 0 && (value + '').slice(0, 2) !== '09') &&
  //         (value + '').slice(0, 2) !== '00' &&
  //         value.length === 11
  //     ) {
  //         return true;
  //     }
  //     return false;
  // };

  // public static isEmail = (input) => {
  //     if (typeof input !== 'string') input = input.toString();

  //     const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  //     const isEmail = input.match(reg);
  //     if (isEmail)
  //         return true;
  //     else
  //         return false;
  // }
}
