#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# fd0073ed132eb69233860692ecb5cae8cafa61aa
basepath=$(cd `dirname $0`; pwd)
sourcePath=$basepath'/developers/.vuepress/dist/'

echo "开始构建项目"
# 生成静态文件
npm run build
echo "构建完毕"

cd $sourcePath

cd -