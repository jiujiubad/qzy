# 修改项目目录
# 复制多个文件时，目标文件夹最后要加斜杠如 $dir/vscode/
dirFrom=~/Library/Mobile\ Documents/com~apple~CloudDocs/Doc/信息/第4章\ Mac
dirTo=~/Documents/PJ/other/qzy/macos

rsync -az $dirFrom/时间机器-TimeMachine.md $dirTo
rsync -az $dirFrom/搜索-Alfred.md $dirTo
rsync -az $dirFrom/虚拟机-Paralles.md $dirTo
rsync -az $dirFrom/Mac-使用.md $dirTo
rsync -az $dirFrom/Mac-应用-app-chrome.md $dirTo
rsync -az $dirFrom/Mac-重装.md $dirTo
rsync -az $dirFrom/Markdown-语法.md $dirTo

git add -A
git commit -am "`date +%Y-%m-%d-%H:%M:%S`"
git push origin
