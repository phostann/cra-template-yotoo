# 自定义 Create-React-App 模板

## 目录结构

```shell
|-- [your project name]
|   |-- public
|   |-- src
|   |   |-- __test__ # 单元测试工具包
|   |   |-- app
|   |   |   |-- reducer.ts # 创建 reducer
|   |   |   |-- store.ts # 配置 store
|   |   |-- components # 存放全局公共组件
|   |   |-- features # 功能模块，页面级
|   |   |   |-- components # 页面级组件
|   |   |   |-- slice # 切片
|   |   |   |   |-- counterState.ts # 定义切片类型及初始值
|   |   |   |   |-- index.ts # 创建切片
|   |   |   |   |-- saga.ts # 创建 saga
|   |   |   |   |-- selectors.ts # 数据 selector 从全局仓库中选择需要的部分
|   |   |   |-- Counter.tsx # 页面 ui 和逻辑
|   |   |   |-- Counter.test.tsx # 单元测试
|   |   |   |-- style.ts # 页面样式
|   |   |-- hooks # 公用自定义 hooks
|   |   |-- styles # 全局样式
|   |   |-- theme # 主题配置
|   |   |-- types # 数据流 types
|   |   |-- utils # 通用工具包
|   |   |-- App.tsx
|   |   |-- index.tsx
```

## 使用方法

### 1. 创建项目

```shell
yarn create react-app [project-name] --template yotoo 
```

### 2. 添加远程仓库

```shell
git remote add origin ssh://git@ip:port/group-name/project-name.git
```

### 3. 配置 `gitlab ci Environment variables`

```shell
STATIC_PATH: # path of the static folder
# 只需要配置上传路径，其余变量假定已在 group cicd 中配置好
```

### 4. 配置 `nginx`

```shell
# 配置好端口号 以及静态文件路径，需要与上一步中的 PATH 一致
```

### 5. `lint` 校验

```shell
yarn lint
```

### 6. 单元测试

```shell
yarn test
```

### 7. 提交代码至 dev 分支

```shell
# 触发 ci 流程，进行自动化部署
```
