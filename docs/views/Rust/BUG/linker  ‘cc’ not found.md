---
title: linker `cc` not found
date: 2022-01-06
sidebar: "auto"
categories:
  - Rust
tags:
  - BUG
---

::: tip
BUG
:::

运行`cargo run`时出错
错误信息为：```error: linker `cc` not found```
原因：未安装GCC
```
sudo apt install gcc
```
