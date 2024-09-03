/**
 * @function integerFormatter
 * @param {number} num - string, integer, or float
 * @param {number} digits - non-zero positive integer
 * @returns {string}
 *
 * 1. Display integers less than 10^(digits+1) just as they are
 * 2. Higher values are displayed with `digits - 2` precision plus a symbol
 * 3. TODO: Is this correct? If not, fix it.
 *
 */

import { isNil } from "lodash-es";

const integerFormatter = (num: number, digits = 2) => {
  if (isNil(num)) {
    return "";
  }
  if (!Number.isInteger(num)) {
    return num + "";
  }
  if (digits < 1) {
    return num + "";
  }
  let result = "";
  if (num < 10 ** (digits + 1)) {
    result = new Intl.NumberFormat("en-US").format(num);
  } else {
    const lookup = [
      { value: 1e12, symbol: "T" },
      { value: 1e9, symbol: "G" },
      { value: 1e6, symbol: "M" },
      { value: 1e3, symbol: "k" }, // stylized as uppercase K
    ];
    const item = lookup.find((item) => {
      return num >= item.value;
    }) ?? { value: 1, symbol: "" };
    result = (num / item.value).toFixed(Math.max(0, digits - item.symbol.length - 1)) + item.symbol;
  }
  return result.toString();
};

export default integerFormatter;
