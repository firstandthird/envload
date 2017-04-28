'use strict';
const camelCase = require('lodash.camelcase');

// const obj = envload('prefix', envvars)
module.exports = (prefix, envvars) => {
  const getObject = (tokens, value) => {
    const majorTokens = tokens.split('__');
    const topObj = {}
    let obj = topObj;
    for (let i = 0; i < majorTokens.length; i++) {
      const curToken = camelCase(majorTokens[i]);
      // if it's not the last token:
      if (i !== majorTokens.length - 1) {
        obj[curToken] = {};
        obj = obj[curToken];
        continue;
      }
      // if it's the last token it's just the value:
      obj[curToken] = value;
    }
    return topObj;
  };
  const allFields = envvars !== undefined ? envvars : process.env;
  const outputFields = {};
  Object.keys(allFields).forEach((key) => {
    // console.log(key)
    const tokens = key.split('_');
    if (tokens[0] === prefix.toUpperCase()) {
      Object.assign(outputFields, getObject(key.replace(`${prefix.toUpperCase()}_`, ''), allFields[key]));
    }
  });
  return outputFields;
};
