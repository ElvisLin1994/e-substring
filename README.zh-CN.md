[English](./README.md) | 简体中文

# e-substring

快速提取指定的两个字符串之间的字符。

## 安装

使用 npm 安装:
```shell
$ npm i -g npm
$ npm i --save e-substring
```

在 Node.js 中使用:
```js
var substring = require('e-substring')
var str = '<img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png">'
console.log(substring(str, 'https', '.png'))
```

输出结果:
```shell
$ https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png
```

## License

MIT