English | [简体中文](./README.zh-CN.md)

# e-substring

Extract characters in a string that are between two specified strings.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save e-substring
```

In Node.js:
```js
var substring = require('e-substring')
var str = '<img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png">'
console.log(substring(str, 'https', '.png'))
```

Output:
```shell
$ https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png
```

## License

MIT