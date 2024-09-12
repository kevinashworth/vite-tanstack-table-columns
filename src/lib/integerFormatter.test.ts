import integerFormatter from "./integerFormatter";

describe("integerFormatter", () => {
  it("should return 0 when the input is null or undefined", () => {
    expect(integerFormatter(null)).toBe("0");
    expect(integerFormatter(undefined)).toBe("0");
    expect(integerFormatter(NaN)).toBe("0");
    expect(integerFormatter()).toBe("0");
  });

  it("should return a negative number when the input is negative", () => {
    expect(integerFormatter(-.01)).toBe("-0.01");
    expect(integerFormatter(-123)).toBe("-123");
  });

  it("should return the input number as a string if it is not an integer", () => {
    expect(integerFormatter(3.14)).toBe("3.14");
    expect(integerFormatter(123.456)).toBe("123.456");
  });

  it("should return the input number as a formatted string when input is over 999", () => {
    expect(integerFormatter(12345)).toBe("12,345");
    expect(integerFormatter(1234567)).toBe("1,234,567");
    expect(integerFormatter(-123456)).toBe("-123,456");
  });
});
