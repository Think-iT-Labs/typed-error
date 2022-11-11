/**
 * `TypedError` is a superset of the `Error` class.
 * It extends it by allowing the specialisation to a custom _type_.
 *
 * **Example:**
 * ```ts
 * enum MyErrorType {
 *   Unknown = "Unknown",
 *   Http = "Http",
 * }
 *
 * export class MyError extends TypedError<MyErrorType> {}
 *
 * ```
 */
export class TypedError<T> extends Error {
  /** Specialisation type */
  type: T;

  constructor(type: T, message?: string, options?: ErrorOptions) {
    super(message, options);

    this.type = type;
  }

  /**
   * Returns the name of the new `TypedError` class, concatenating the `type` field.
   *
   * For class `MyError` with `type` field `Unknown`, the result is: `MyError(Unknown)`
   */
  get name(): string {
    return `${this.constructor.name}(${this.type})`;
  }
}
