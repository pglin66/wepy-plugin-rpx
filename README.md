# wepy框架rpx插件

## 安装

```
npm install wepy-plugin-rpx --save-dev
```

## 配置`wepy.config.js`

```
module.exports.plugins = {
    'rpx': {
        filter: /\.(wxss|wxml)$/, //文件后缀匹配
    },
};
```


## 参数说明 

px自动转rpx 方便格式化代码和编写方便
