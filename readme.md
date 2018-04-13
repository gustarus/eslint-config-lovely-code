# [Lovely code] Check my `javascript` with `eslint`
Please, read before about [lovely-code collection](https://github.com/gustarus/lovely-code).

## What is included in standards?
### `Silver` standard
The following tools are used for this standard in the configuration:
- Browsers compatibility via [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat)
- Flowtype validation via [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype)
- ES6 improt/export validation via [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- JSX elements properties validation via [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- React validation via [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)

:floppy_disk:&nbsp;&nbsp;[Show current version of the configuration file](/silver.js).

#### Check browser compatibility with special features for `eslint-plugin-compat`
##### Use default configuration files for standards
**1. Install browserlist lovely code package**
```bash
yarn add browserslist-config-lovely-code --dev
```

**2. Add `browserslist` section to your `package.json`**
```json
{
  "browserslist": [
    "extends browserslist-config-lovely-code/silver"
  ]
}
```

## How to use?
### How to install the presents?
**1. Add via yarn package manager**
```bash
yarn add lovely-code
```

### How to use default configuration?
**1. Define `scripts` command in your package.json**

It would be better if you define only files which you want to test.
For example: the following command will use custom configuration file and check only files with extension `.js` only in folder `./core`.
```json
{
  "scripts": {
    "lint:js": "./node_modules/.bin/eslint --config eslint-config-lovely-code/silver --ext .js ./core"
  }
}
```

**2. Run the command**
```bash
yarn lint:js 
```

### How to extend from default configuration?
**1. Create `.eslintrc` in the project**
```bash
touch .eslintrc
```

**2. Extend from the configuration and write your own rules**

Open created file for editing and write your code.
```json
{
  "extends": "lovely-code/silver",
  "rules": {
    "no-console": "error"
  }
}
```

**3. Define `scripts` command in your package.json**
```json
{
  "scripts": {
    "lint:js": "./node_modules/.bin/eslint --ext .js ./core"
  }
}
```

**2. Run the command**
```bash
yarn lint:js 
```

# Hints
## How to resolve webpack aliases?
Specify path to your webpack configuration file (where the `resolve` property is defined).
```json
{
  "extends": "lovely-code/silver",
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./webpack/webpack.config.js"
      }
    }
  }
}
```

## How to fix some of the errors?
Eslint have an ability to fix some of errors which were found.
To use this feature run `yarn run lint:js -- --fix`.
Or add this command to the package.json.
```json
{
  "scripts": {
    "lint:js": "./node_modules/.bin/eslint --ext .js ./core"
  }
}
```

Or, if you already defined `lint:js` you can use the following syntax.
```json
{
  "scripts": {
    "lint:js": "...",
    "lint:fix": "yarn lint:js --fix"
  }
}
```
