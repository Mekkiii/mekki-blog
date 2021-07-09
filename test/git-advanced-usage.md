---
title: "git进阶用法"
date: "2021-05-23"
author:
  name: Mekki
---

### git rebase

Git 操作
假设 Git 目前只有一个分支 master。

开发人员的工作流程是
git clone master branch
在自己本地 checkout -b local 创建一个本地开发分支
在本地的开发分支上开发和测试
阶段性开发完成后（包含功能代码和单元测试），可以准备提交代码
首先切换到 master 分支，git pull 拉取最新的分支状态
然后切回 local 分支
通过 git rebase -i 将本地的多次提交合并为一个，以简化提交历史。本地有多个提交时,如果不进行这一步,在 git rebase master 时会多次解决冲突(最坏情况下,每一个提交都会相应解决一个冲突)
git rebase master 将 master 最新的分支同步到本地，这个过程可能需要手动解决冲突(如果进行了上一步的话,只用解决一次冲突)
然后切换到 master 分支，git merge 将本地的 local 分支内容合并到 master 分支
git push 将 master 分支的提交上传
本地开发分支可以灵活管理
git checkout master
git pull
git checkout local
git rebase -i HEAD~2 //合并提交 --- 2 表示合并两个
git rebase master---->解决冲突--->git rebase --continue
git checkout master
git merge local
git push

### 常见报错

```
fatal: unable to access 'https://github.com/Mekkiii/mekki-blog.git/': OpenSSL SSL_read: Connection was reset, errno 10054
```

首先，造成这个错误很有可能是网络不稳定，连接超时导致的，<br>
如果再次尝试后依然报错，可以执行下面的命令。

打开 Git 命令页面，执行 git 命令脚本：修改设置，解除 ssl 验证

```
git config --global http.sslVerify "false"
```

###
