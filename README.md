# envload

envload is a simple helper for loading environment variables into Javascript

## Installation

```console
npm install envload
```

## Usage

```console
export PREFIX_TEST=1
export PREFIX_FULL_NAME__FIRST="maggie"
export PREFIX_FULL_NAME__LAST="smith"
```

```js
const env = envload('prefix');
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

You can also pass an env in object notation:
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
