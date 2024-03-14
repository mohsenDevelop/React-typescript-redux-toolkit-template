
export class ValidationHelper {

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

  public static isPersian = (value: string) => {

    const persianRegex = /^[\u0600-\u06FF\s]+$/;

    return persianRegex.test(value);
  };
}
