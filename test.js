const assert = require('assert');

function calc(input) {
    return eval(input);
}


assert.strictEqual(calc("1+2"), 3);
assert.strictEqual(calc("5-2"), 3);
assert.strictEqual(calc("3*4"), 12);
assert.strictEqual(calc("8/2"), 4);

console.log("Tous les tests passent !");
