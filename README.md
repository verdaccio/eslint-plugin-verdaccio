# eslint-plugin-verdaccio

verdaccio code guide lines

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-verdaccio`:

```
$ npm install eslint-plugin-verdaccio --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-verdaccio` globally.

## Usage

Add `verdaccio` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "verdaccio"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "verdaccio/jsx-spread": 2
    }
}
```

## Supported Rules

* [verdaccio/jsx-spread](docs/rules/jsx-spread.md): Enforce don't use of spread operators with JSX components.





