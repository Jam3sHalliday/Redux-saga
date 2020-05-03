module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        // "airbnb",
        'prettier'
    ],
    rules: {
        'react/prop-types': 0,
        'react/jsx-max-props-per-line': 1,
        'linebreak-style': 0,
        'import/no-extraneous-dependencies': 0,
        'class-methods-use-this': 0,
        'react/jsx-file-name-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/forbid-prop-types': 0,
        'react/require-default-props': 0,
        'prettier/prettier': ['error']
    },
    plugins: ['prettier']
};