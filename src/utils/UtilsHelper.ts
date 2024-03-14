export class UtilsHelper {
  public static fixFarsiForSearch = (s: string) => {
    const replaces = [
      [/ي/g, 'ی'],
      [/ك/g, 'ک'],
      [/۰/g, '0'],
      [/۱/g, '1'],
      [/۲/g, '2'],
      [/۳/g, '3'],
      [/۴/g, '4'],
      [/۵/g, '5'],
      [/۶/g, '6'],
      [/۷/g, '7'],
      [/۸/g, '8'],
      [/۹/g, '9'],
    ];
    //  YEKE
    return !!s && s.toString().length > 0
      ? replaces.reduce(
        (_elm, [from, to]) => _elm.replace(from, to.toString()),
        s.toString()
      )
      : '';
  };

  public static threeDigitSeparator = (value: any) => {
    try {
      if (!value) {
        return '';
      }

      const isValueTypeSuitable =
        typeof value === 'number' || typeof value === 'string';
      if (!isValueTypeSuitable) {
        return '';
      }

      // Convsert the `value` to string
      // Value += '';
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      // Return value.toLocaleString('en')
    } catch (e) {
      return '';
    }
  };
  public static addCommas = (num: string) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  public static removeNonNumeric = (num: string) =>
    UtilsHelper.fixFarsiForSearch(num)
      .toString()
      .replace(/[^0-9]/g, '');

  public static getFirstElement = (item: string) =>
    item
      .split(' ')
      .filter((_el, _index) => _index === 0)
      .join('');

}
