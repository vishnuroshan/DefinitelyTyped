const safeEval = require('safe-eval');

let code = '"app" + "le"';
safeEval(code); // "apple"

// math
code = 'Math.floor(22/7)';
safeEval(code); // 3.142857142857143

// JSON
code = '{name: "Borat", hobbies: ["disco dance", "sunbathing"]}';
safeEval(code); // {name: "Borat", hobbies: ["disco dance", "sunbathing"]}

// function expression
code = '(function square(b) { return b * b; })(5)';
safeEval(code); // 25

// no access to Node.js objects
code = 'process';
safeEval(code); // THROWS!

// your own context API
code = '{ apple: a()}';
const context = {
    a: function () {
        return 'APPLE';
    },
};
safeEval(code, context);
