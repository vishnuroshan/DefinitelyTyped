// Type definitions for safe-eval 0.4.1
// Project: https://www.npmjs.com/package/safe-eval
// Definitions by: Vishnu Roshan <https://github.com/vishnuroshan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export default safe_eval;

interface RunningScriptOptions {
    filename?: string | undefined;
    lineOffset?: number | undefined;
    columnOffset?: number | undefined;
    displayErrors?: boolean | undefined;
    timeout?: number | undefined;
    breakOnSigint?: boolean | undefined;
    microtaskMode?: 'afterEvaluate' | undefined;
}

interface Context {
    [key: string]: any;
}

/**
 * safe-eval lets you execute JavaScript code without having to use the much discouraged and feared upon eval()
 * @param {string} code is the JavaScript code you want to execute.
 * @param {Context} context is an object of methods and properties, these methods and properties are interpreted as global objects in code. Be careful about the objects you are passing to the context API, because they can completely defeat the purpose of safe-eval
 * @param {RunningScriptOptions} opts is the [options object](https://nodejs.org/api/vm.html) for the vm executing the code.
 * @returns {any} the result of the very last statement executed in the script.
 */
declare function safe_eval(code: string, context?: Context, opts?: RunningScriptOptions): any;
