import { isNaN, isNil } from "lodash-es";

const integerFormatter = (num: number): string => {
  if (!num || isNaN(num) || isNil(num)) {
    return "0";
  }

  const result = new Intl.NumberFormat("en-US").format(num);
  return result.toString();
};

export default integerFormatter;
