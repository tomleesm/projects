#!/bin/bash

# 抓取目前的目錄(不是絕對路徑)
DIR=${PWD##*/}

# 如果已經存在 /tmp/projects，會有錯誤訊息
rm -rf /tmp/projects

# 設定 /tmp/projects 爲 gh-pages 分支的工作目錄
# - 會自動新增目錄 /tmp/projects
# - -f 覆蓋之前的設定
git worktree add -f /tmp/projects gh-pages

# 建立部署檔到資料夾 dist
yarn build

# 刪除舊的舊的部署檔
rm -rf /tmp/projects/$DIR/* # this won't delete the .git directory

# 複製新的部署檔
cp -rp dist/* /tmp/projects/$DIR

# 提交 commit 到 Git 並 push 到 gh-pages 分支
cd /tmp/projects/$DIR
git add --all
git commit -m 'new project deployment'
git push origin gh-pages

# 切換回 main 分支所在的工作目錄
cd -
