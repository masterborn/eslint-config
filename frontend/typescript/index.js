module.exports = {
    root: true,
    extends: [
        'airbnb-typescript',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        project: 'tsconfig.json',
    },
    overrides: [
        {
            files: ["**/*.{ts,tsx}"],
            rules: {
                "complexity": ["error", 10],
                "@typescript-eslint/explicit-function-return-type": ['error'],
                "@typescript-eslint/no-explicit-any": ['error'],
            }
        },
    ],
}
