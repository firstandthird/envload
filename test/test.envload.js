'use strict';
const tap = require('tap');
const envload = require('../index.js');

tap.test('can turn an env into a set of properties', (t) => {
  const env = envload('prefix', {
    PREFIX_TEST: 1,
    PREFIX_FULL_NAME__FIRST: 'bob',
    PREFIX_FULL_NAME__LAST: 'smith'
  });
  t.deepEqual(env, {
    test: 1,
    fullName: {
      first: 'bob',
      last: 'smith'
    }
  });
  t.end();
});


tap.test('by default will use process.env', (t) => {
  process.env.PREFIX_TEST = 1;
  process.env.PREFIX_FULL_NAME__FIRST = 'bob';
  process.env.PREFIX_FULL_NAME__LAST = 'smith';
  const env = envload('prefix');
  t.deepEqual(env, {
    test: 1,
    fullName: {
      first: 'bob',
      last: 'smith'
    }
  });
  t.end();
});
