#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy update 🎉'

# if you are deploying to https://<USERNAME>.github.io
# git pull https://github.com/haochenli/haochenli.github.io.git master --rebase
 git push -f --set-upstream https://github.com/haochenli/haochenli.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:haochenli/hellohub.cn.git master:gh-pages
