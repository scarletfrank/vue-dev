# router-v2

## Docker commands


一般情况下用`http-server`，正经一点还是用`nginx`结合的吧。`--rm`在容器退出时自动清理容器内部的文件系统

```bash
docker build -t vuejs-cookbook/dockerize-vuejs-app .
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

```bash
docker build -f Dockerfile.dev -t vuejs-cookbook/dockerize-nginx-app .
docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-nginx-app
```

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
