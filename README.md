# rollup-quick-lib-template

> A go-to rollup template for quick pulling off a js lib written in es6

## features
0. Empowered by rollup
1. Support es6 syntax & babel extensions
2. Output all lib formats CJS, ESM and UMD...
3. Dev mode hot reload

## Quick Start
```
yarn add
```

```
// Specify fields in package.json
"main": "dist/example-lib.js" // cjs
"module": "dist/example-lib.m.js" // esm
"umd:main": "dist/example-lib.umd.js" // umd
...
```

```
// In dev mode, hot reload enables
npm run dev
```

```
// ready for publishing & build bundle
npm build
```