# `is-(unknown)/is-typed-array`
Check if a value is a typed array.

## usage
```js
const isTypedArray = require("@is-(unknown/is-typed-array")

const assert = require("assert-fn")

assert(isTypedArray(new Uint8Array()))

assert(!isTypedArray([]))
```