# mobx-weapp

`weapp + react / mobx` 示例,解放你的双手

## Usage

```shell
npm install

npm run dev:react   # react 开发
npm run dev:weapp   # react 开发
```

打开http://localhost:7778/dist/index.html 或用小程序打开 `path/to/mobx-weapp/shells/weapp`

### 如果需要看控制台信息

```js
localStorage.setItem('debug', 'React:*');
```

## 文档结构

```
shells
├── alias.js
├── react
│   ├── index.html
│   ├── src
│   └── webpack.config.js
└── weapp
    ├── build
    ├── gulpfile.js
    ├── logic.js
    ├── src
    ├── webpack.config.js
    └── webpack.dll.js
src
├── css
│   ├── app.css
│   └── todos.css
├── store
│   ├── index.js
│   ├── timerView.js
│   └── todos
└── utils.js
```

## 截图

[!demo](https://raw.githubusercontent.com/cytle/mobx-weapp/master/images/demo.png)
