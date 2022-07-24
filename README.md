# cat

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


## 功能定位
使用 vue3 vant 实现前端功能
学习bilbili

1. 收集更新猫猫照片
2. 注册用户才能发布猫猫照片
3. 猫猫照片分类功能 ,品种, 标签(玩耍,眺望)
4. 拍摄功能,支持自动识别猫品种 ( 第一版不需要实现)

### 数据结构
```
user {
id,
username,
password,
lasttime,
lastip
}

photo{
id,
userid,
type,
tag,
url,
addtime
like,
status
}
```
