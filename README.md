# Installation

```sh
npm install -D @pderas/eslint-config
```

Then create a .eslintrc.js file in the root of the project with the following contents.
```js
require("@pderas/eslint-config/patch")

module.exports = {
    "extends": ["@pderas"]
}
```
Optional (but recommended) add the following line to the "scripts" section in package.json
```json
    "lint:js": "eslint resources/js --ext .js,.vue",
    "lint:fix:js": "eslint resources/js --fix --ext .js,.vue"
```
