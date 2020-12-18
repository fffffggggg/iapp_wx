module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        // "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "plugins": [
        // "vue"
    ],
    "rules": {
        // "no-unused-vars": 0
    },
    "parser": "babel-eslint"
};