module.exports = {
    'extends': 'eslint-config-airbnb-es5',
    'env': {
        'browser': true,
        'jquery': true
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'rules': {
        'indent': ['warn', 4,  {'SwitchCase': 1}],
        'comma-dangle': ['error', 'never'],
        'no-unused-vars': 'warn',
        'no-var': 'off',
        'no-console': 'off',
        'max-len': ['warn', { 'ignoreComments': true }],
        'newline-per-chained-call': 'off',
        'vars-on-top': 'off',
        'func-names': 'off'
    },
    'globals': {
        'document': true,
        'localStorage': true,
        'window': true,
        'branch': true,
        'chrome': true
    }
}
