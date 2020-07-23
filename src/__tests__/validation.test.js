import { validation } from "../utils/validation";

describe("string length validation", () => {
  const sortString = "short";
  const medString = "alittlelonger";
  const longString = "a veryvery long text for testing";

  it("Min length", () => {
    const validate = validation({ minLength: 13 });
    expect(validate(sortString)).toBe(false);
    expect(validate(medString)).toBe(true);
    expect(validate(longString)).toBe(true);
  });

  it("Max length", () => {
    const validate = validation({ maxLength: 13 });
    validate(sortString).toBe(true);
    expect(validate(medString)).toBe(true);
    expect(validate(longString)).toBe(true);
  });

  it("Max and min length", () => {
    const validate = validation({ minLength: 6, maxLength: 14 });
    validate(sortString).toBe(false);
    expect(validate(medString)).toBe(true);
    expect(validate(longString)).toBe(false);
  });
});
