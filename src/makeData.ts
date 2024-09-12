import { faker } from "@faker-js/faker";
import dayjs from "dayjs";

export type Person = {
  firstName: string;
  lastName: string;
  token_amount: number;
  created_datetime: string;
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    token_amount:
      parseInt(faker.string.numeric({ length: { min: 0, max: 4 } })) *
      (faker.number.binary() === "1" ? 1 : -1),
    // token_amount: faker.number.float({
    //   min: -10000,
    //   max: 10000,
    //   fractionDigits: 3,
    // }),
    created_datetime: dayjs(faker.date.past().getTime()).toISOString(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((): Person => {
      return {
        ...newPerson(),
      };
    });
  };

  return makeDataLevel();
}
