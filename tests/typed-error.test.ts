import { TypedError } from "../mod.ts";
import {
  assertEquals,
  assertInstanceOf,
} from "https://deno.land/std@0.170.0/testing/asserts.ts";

Deno.test("TypedError", async (t) => {
  await t.step("instantiate a typed error", () => {
    // given
    class TestError extends TypedError<"test"> {}

    // when
    const error = new TestError("test");

    // then
    assertInstanceOf(error, TestError);

    assertEquals(error.type, "test");
    assertEquals(error.name, "TestError(test)");
    assertEquals(error.message, "");
  });

  await t.step("receives an optional message", () => {
    // given
    class TestError extends TypedError<"test-with-message"> {}

    // when
    const error = new TestError("test-with-message", "the error message");

    // then
    assertEquals(error.type, "test-with-message");
    assertEquals(error.name, "TestError(test-with-message)");
    assertEquals(error.message, "the error message");
  });

  await t.step("receives an optional error options", () => {
    // given
    class TestError extends TypedError<"test-with-cause"> {}

    // when
    const cause = new Error("cause error");
    const error = new TestError("test-with-cause", "an error with cause", {
      cause,
    });

    // then
    assertEquals(error.type, "test-with-cause");
    assertEquals(error.name, "TestError(test-with-cause)");
    assertEquals(error.message, "an error with cause");
    assertEquals(error.cause, cause);
  });
});
