# `source-map-support` bug

Steps to reproduce:

- Run `npm install`
- Execute the `npm run babel`

Acutal output:

_Note that only the first function name is correct. They seem to be off by one. The line numbers and columns are correct though._

```txt
Error:
    at foo (/my-project/src/foo.js:5:15)
    at foo (/my-project/src/foo.js:9:3)
    ...more
```

Expected output:

```txt
Error:
    at foo (/my-project/src/foo.js:5:15)
    at bar (/my-project/src/foo.js:9:3)
    ...more
```

You can also run `npm run terser`, this issue is also reproducible with terser.
