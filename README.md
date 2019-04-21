# Babel Sourcemap bug

Steps to reproduce:

- Run `yarn install` or `npm install`
- Execute the `test` npm script

Acutal output:

_Note that only the first function name is correct. They seem to be off by one. The line numbers and columns are correct though._

```txt
Error:
    at foo (/my-project/src/foo.js:5:15)
    at foo (/my-project/src/foo.js:9:3)
    at bar (/my-project/src/foo.js:13:3)
    ...more
```

Expected output:

```txt
Error:
    at foo (/my-project/src/foo.js:5:15)
    at bar (/my-project/src/foo.js:9:3)
    at bob (/my-project/src/foo.js:13:3)
    ...more
```
