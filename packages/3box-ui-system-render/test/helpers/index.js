const Script = require('../../src');

function beforeEach(t) {
  const script = new Script({});
  Object.assign(t.context, { script });
}

function afterEach() {}

module.exports = { beforeEach, afterEach };
