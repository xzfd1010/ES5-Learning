module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-console":[
            "off"
        ],
        "no-redeclare":[
            "off"
        ],
        "no-unused-vars":[
            "off"
        ],
        "no-inner-declarations":[
            "off"
        ],
        "no-func-assign":[
            "off"
        ]
    }
};