Learn more or give us feedback
var assert = require('assert')

function test() {
  assert.equal(2 + 2, 4);
}

if (module == require.main) require('test').run(test);
