module.exports = {
    root: true,
    extends: [
        '../index.js',
        'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    overrides: [
        {
            "files": ["**/*.{js,jsx}", "**/*.{ts,tsx}",],
            "rules": {
                "complexity": [
                    "error",
                    10
                ]
            }
        }
    ],
}
