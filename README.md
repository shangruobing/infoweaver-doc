# Infoweaver-doc

## Introduction

Infoweaver is a notice file chatbot based on the knowledge graph and BERT model. This repository stores the infoweaver docs, which is made with Vitepress.

## Dependency

- VitePress 1.0.0-alpha.4
- Vue.js 3.2.25

## Get Started

1. Create the package.json file and copy the following content into it.

```json
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

2. Install dependencies with the `npm install` command.
3. Launch the server with the `npm run docs:dev` command.

```bash
# common commands
# install
npm install
# run
pm run docs:dev
# build
npm run docs:build
# preview
npm run docs:serve
```
