<div align="center">
  <h1>TypedError ⌨️💥</h1>
  <p>
    <b>
      A better JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> for Node.js, Deno and the browser.
    </b>
  </p>
  <sub>
    Built with ❤️ at <a href="https://think-it.io">Think-it</a>.
  </sub>
</div>

## Abstract

Error handling is a tough subject. And it's even more difficult when dealing with
large projects.
The [JavaScript `Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
is a necessary component of the error handling story, but it's often too limited.

The main difficulty is categorizing errors; when building the main business logic
of any project, it's common to encounter similar errors (e.g. duplicate entities,
forbidden access, etc.), and relying on
[`Error.prototype.message`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
is quite restrictive.

`TypedError` aims to solve this issue, providing a extra `TypedError.prototype.type`.
The `type` field is typed through [TypeScript](https://www.typescriptlang.org/), allowing
a smoother error handling story.

## Usage

### Node.js

Install via `npm` or `yarn`

```sh
npm install @think-it-labs/typed-error
```

```sh
yarn add @think-it-labs/typed-error
```

### Deno

Import as ES module

```ts
import { TypedError } from "https://deno.land/x/typederror/mod.ts"
```

Then it's possible to create a custom `Error` class extending the `TypedError`

```ts
enum MyErrorType {
  Unknown,
  HTTP,
}

export class MyError extends TypedError<MyErrorType> {}

```

Now, during error handling code can inspect the `type` error and define behavior accordingly

```ts
import { MyError, MyErrorType } from "./my-error"

export function errorHandling(error: unknown) {
  if (error instanceof MyError) {
    switch (error.type) {
      case MyErrorType.HTTP: {
        // handle http errors
      }
      case MyErrorType.Unknown:
      default: {
        // red alert: unknown behavior
      }
    }
  }
}

```

## License

_TypedError_ is distributed under the terms of the MIT license.

See [LICENSE](LICENSE) for details.
