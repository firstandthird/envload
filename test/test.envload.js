'use strict';
const tap = require('tap');
const envload = require('../index.js');

tap.test('can turn an env into a set of properties', (t) => {
  const env = envload('prefix', {
    PREFIX_TEST: 1,
    PREFIX_FULL_NAME__FIRST: 'bob'
  });
  t.deepEqual(env, {
    test: 1,
    fullName: {
      first: 'bob'
    }
  });
  t.end();
});
