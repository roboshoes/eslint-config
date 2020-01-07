module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [ "plugin:@typescript-eslint/recommended" ],
    plugins: [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    rules: {
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "overrides": {
                    "constructors": "off"
                }
            }
        ],
        "@typescript-eslint/indent": "error",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/quotes": [ "error", "double" ],
        "@typescript-eslint/semi": [ "error", "always" ],
        "@typescript-eslint/space-within-parens": ["off","never"],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
            }
        ],
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "comment-format": [
                        true,
                        "check-space"
                    ],
                    "component-class-suffix": true,
                    "deprecation": true,
                    "directive-class-suffix": true,
                    "import-blacklist": [
                        true,
                        "rxjs/Rx"
                    ],
                    "import-spacing": true,
                    "no-input-rename": true,
                    "no-output-on-prefix": true,
                    "no-output-rename": true,
                    "no-redundant-jsdoc": true,
                    "one-line": [
                        true,
                        "check-open-brace",
                        "check-catch",
                        "check-else",
                        "check-whitespace"
                    ],
                    "use-host-property-decorator": true,
                    "use-input-property-decorator": true,
                    "use-life-cycle-interface": true,
                    "use-output-property-decorator": true,
                    "use-pipe-transform-interface": true
                }
            }
        ],
        "arrow-body-style": "error",
        "camelcase": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": [ "error", "smart" ],
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "off",
        "max-len": [ "error", { "code": 120 } ],
        "no-bitwise": "error",
        "no-caller": "error",
        "space-before-function-paren": [ "error", "never" ],
        "space-in-parens": [ "error", "always" ],
        "space-infix-ops": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "log",
                    "warn",
                    "error",
                    "dir",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupCollapsed",
                    "groupEnd",
                    "Console",
                    "dirxml",
                    "table",
                    "markTimeline",
                    "profile",
                    "profileEnd",
                    "timeline",
                    "timelineEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-new-wrappers": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "object-curly-spacing": [ "error", "always" ],
        "prefer-const": "error",
        "radix": "error",
    }
}
