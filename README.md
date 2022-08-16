# NFQA 文档

#### 介绍

NFQA 文档 采用 VitePress 构造

#### 主要依赖

- VitePress 1.0.0-alpha.4
- Vue 3.2.25

#### 使用说明
```
// 新建 package.json 文件
{
  "dependencies": {
    "vitepress": "^1.0.0-alpha.4",
    "vue": "^3.2.37"
  },
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```
#### 常用命令
```
安装 npm install
运行 npm run docs:dev
构建 npm run docs:build
预览 npm run docs:serve
```