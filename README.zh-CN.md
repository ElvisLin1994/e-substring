[English](./README.md) | 简体中文

# e-substring

在两个指定字符串之间提取字符串中的字符。

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
console.log(substring(str, 'https', '.png')) // 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png'
```

## License

MIT