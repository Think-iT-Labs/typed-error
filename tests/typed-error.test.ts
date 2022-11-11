import { TypedError } from "../src";

describe("TypedError", () => {
  it("instantiate a typed error", () => {
    // given
    class TestError extends TypedError<"test"> {}

    // when
    const error = new TestError("test");

    // then
    expect(error).toBeInstanceOf(TestError);
    expect(error).toBeInstanceOf(TypedError);
    expect(error.type).toBe("test");
    expect(error.name).toBe("TestError(test)");
    expect(error.message).toBe("");
  });

  it("receives an optional message", () => {
    // given
    class TestError extends TypedError<"test-with-message"> {}

    // when
    const error = new TestError("test-with-message", "the error message");

    // then
    expect(error.type).toBe("test-with-message");
    expect(error.name).toBe("TestError(test-with-message)");
    expect(error.message).toBe("the error message");
  });

  it("receives an optional error options", () => {
    // given
    class TestError extends TypedError<"test-with-cause"> {}

    // when
    const cause = new Error("cause error");
    const error = new TestError("test-with-cause", "an error with cause", {
      cause,
    });

    // then
    expect(error.type).toBe("test-with-cause");
    expect(error.name).toBe("TestError(test-with-cause)");
    expect(error.message).toBe("an error with cause");
    expect(error.cause).toBe(cause);
  });
});
