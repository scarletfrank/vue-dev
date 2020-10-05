# simple-marked

## Project Notes

### Structure

- FetchItem.vue, rendering a list

演示了通过axios，从一个API获取数据，并循环展示。

- MarkEditor.vue

通过`marked.js`写一个简单的在线Markdown编辑器

- ToDo.vue

从`Mozilla`的Vue教程写的一个Todo App。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

`build`之后生成一个`dist`文件夹，可以和Nginx配合使用。单独写一个conf，监听某个端口。`root`指向绝对路径，`index`参数指向`index.html`。重启Nginx后就能看到页面了。

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
