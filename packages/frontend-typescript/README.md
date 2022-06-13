# @masterborn/eslint-config-frontend-typescript

## Contents

This package is intended to be used as a base for ESLint configs for typescript based repositories.

## Usage
Install package:

```bash
npm i -D @masterborn/eslint-config-frontend-typescript
```

Inside your project, add the following to your `.eslintrc.js` file:

```json
    "extends": ["@masterborn/eslint-config-frontend-typescript"],
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
        "sourceType": 'module',
    }
```

This will point ESLint to the `tsconfig.json` file in your project.

One more thing to be done is inside `tsconfig.json` file, add the following outside `compilerOptions`:

```json
include: [
    "src/**/*.ts",
    "src/**/*.tsx",
    ".eslintrc.js",
    ]
```


And you should be ready to go.
