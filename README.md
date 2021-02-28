# envload

envload is a simple helper that loads a set of environment variables into Javascript

## Usage
```js
const env = envload('prefix', {
  PREFIX_TEST: 1,
  PREFIX_FULL_NAME__FIRST: 'bob',
  PREFIX_FULL_NAME__LAST: 'smith'
});
console.log(env);

/*
{
  test: 1,
  fullName: {
    first: 'bob',
    last: 'smith'
  }
}
*/
```
