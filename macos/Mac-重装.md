## 1. 科普

> **mac 特点**：触摸板、多桌面、时间机器、标签、全局搜索（Alfred、IDE 的 `command+p`）

### 1.2 cpu 常驻进程

- kernel_task：守护进程，防止其他 app 占用内存。文件过大时，是其他 app 在大量占用内存
- mds_stores、mds、md_worker：Spotlight 索引，建议开启（`sudo mdutil -a -i on`，关为 `off`）
- WindowServer：管理 Mac 视觉图形界面显示，比如透明度、动画效果等
- coreaudiod：跟扬声器相关，打开 Boom 3D 增大音量时就会有这一项（`pmset -g` 的 sleep 项能看到 sleep prevented by coreaudiod），可能会占近 G 的大内存

### 1.3 Mac 的睡眠模式（休眠就是睡眠）

- 浅度睡眠：显示器关闭后会自动进入。所有 app 会话**保存到内存，几分钟后自动断开 wifi**
- 深度睡眠（又叫待机模式）：睡眠后三小时自动进入。会把所有 app 会话状态**保存到硬盘的闪存**，关闭部分硬件电源以省电（移动硬盘会因断电被推出）
- 安全睡眠：电池电量不足，或电脑长期闲置时进入。会把所有 app 会话状态**保存到硬盘**，然后彻底关闭所有电源（即关机）
- 唤醒 Mac 的方式：按下电源键、鼠标、触控板、键盘按键，或打开电脑盖子



## 2. 系统设置

### 2.1 偏好设置导入导出

mac 迁移助手：https://support.apple.com/zh-cn/HT204350

### 2.2 全局快捷键

**全局的『系统偏好设置』**：键盘-快捷键-应用快捷键-加号-名称『系统偏好设置...』、快捷键 `command + option + ,`

### 2.3 安装任何来源的 app

> 不设置的坏处：安装第三方时会提示 **app已损坏**

- 系统偏好设置 -> 键盘 -> 快捷键 -> 底部选择『所有控制』
- 执行命令 `sudo spctl --master-disable` 输入锁屏密码，会在 系统偏好设置 -> 安全与隐私的『允许从以下位置下载应用』，出现『任何来源』选项 -> 点击左下角解锁，然后勾选『任何来源』，用 tab 键控制光标移到允许按键上，**用空格确认（！！非常重要）**

![20190510024432_mac_config.jpg](https://i.loli.net/2019/12/29/MnjlfLw4iW6XruC.jpg)

### 2.4 安全

系统偏好设置 -> 安全性与隐私：

- 通用：勾选『进入睡眠或开始保护程序**立即**要求输入密码』
- 文件保险箱：停用
- 防火墙：关闭
- 隐私
  - 定位服务：勾选『启用定位服务』，app 全部不勾选
  - 辅助功能：有道词典，CheatSheet，Magnet
  - 分析：全部取消勾选

### 2.5 触摸板

**三指移动（三指拖移）**：系统偏好设置 -> 辅助功能 -> 左侧『鼠标与触控板』 -> 触控板选项 -> 勾选『启用拖移』，下拉选择『三指拖移』 

系统偏好设置 -> 触控板： 

- 光标与点按：全部勾选。其中『查询与数据监测器』选三指轻点，『辅助点按』选双指点按或轻点，『点按』选中，『跟踪速度』选最快
- 滚动缩放：全部勾选
- 更多手势：全部勾选，除了『在页面之间轻扫』。其中『在全屏幕显示的应用之间轻扫』选四指左右轻扫，『调度中心』选四指向上轻扫，『应用 Expose』选四指向下轻扫

### 2.6 调度中心

系统偏好设置 -> 调度中心：

- 前四项：全部勾选，除了第一项『根据最近的使用情况自动重新排列空间』
- 仪表盘：关闭
- 快捷键：随意（因为极少用）
- 触发角：左下角按住 command 选择『将显示器置入睡眠』，右下角按住 command 选择『启动屏幕保护程序』

### 2.7 finder 及速度优化

1）finder -> 偏好设置：

- 通用：勾选『在标签页（而不是新窗口）中打开文件夹』，其他全部取消勾选。开启新访达窗口时打开『下载』
- 标记：全部删除
- 边栏：『个人收藏』只保留常用的，『共享的』全部取消，『设备』只保留外置磁盘，『标记』取消
- 高级：只勾选『显示所有文件扩展名』、『从 icloud 云盘中移除前显示警告』、『清倒废纸屡之前显示警告』、『按名称顺序时保持文件夹在顶部』，执行搜索时『搜索当前文件夹』

2）更多设置：

- **分栏显示**：一直按 `command+↑` 到最上一层文件夹 -> `command+j`，勾选『始终以分栏显示方式打开』，排列方式选『种类』，排序方式选『名称』，文字大小 14，勾选『显示图标』，不勾选『显示图标预览』、『显示预览栏』
- **Finder 分栏宽度**：Finder 最上方『显示』改为『分栏』-> 按住 `option` 拉动分栏调宽度 -> 按住 `option` 右键 Finder 选择『重新启动』
- 底部显示文件夹可用容量：`command + /`
- 底部显示路径：`command + option + p`
- 优化 finder 速度：`sudo vim /etc/auto_master`，注释掉第五行 `/net                     -hosts          -nobrowse,hidefromfinder,$`，然后 `sudo automount -vc` 返回『automount: /home updated』和『automount: /net unmounted』
- **全局打开 finder 的快捷键**：1）自动操作 -> 文件 -> 新建 -> 服务（或叫快速操作） -> 左侧『实用工具』，把『开启应用程序』拖到右边 -> 右侧最上面选择『没有输入』 -> 『开启应用程序』展开没有访达所以要选『新建变量』，名称输入『全局开启访达』，路径 `系统/资源库/CoreServices/访达.app`-> 点击运行测试 -> 保存。2）键盘 -> 快捷键 -> 聚焦，取消『显示访达搜索窗口』，然后左侧『服务』，找到并设置快捷键为 `command+option+空格`

### 2.8 程序坞

- 置于屏幕上的位置：左边
- 最小化窗口时使用：神奇效果
- 打开文稿时首选标签页：始终
- 勾选『连接窗口标题栏以缩放』、『弹跳打开应用程序』、『为打开的应用程序显示指示灯』

### 2.9 屏保

屏保时间可以短一点，比如 2-10分钟

### 2.10 节能

- [apple 官网 - 节能设置详解](https://support.apple.com/zh-cn/HT202824)
- [mac 系统有很多 bug 不能睡眠，能睡眠时又自动唤醒](https://blog.51cto.com/xu20cn/1860861)

> mac 系统有 bug， 设置『当显示器关闭时，防止电脑自动进入休眠』后还是会睡眠，所以**下载时要开启 Amphetamine 等防睡眠 app 阻止睡眠和屏保**

**节能 -> 电池**：

- 此时间段后关闭显示器（默认 15）：按实际需要比如 10
- 如果可能，使硬盘进入睡眠：**勾选**
- 使用电池电源时使显示屏略暗一些：**不勾选**
- 电池供电时启用电能小憩：有 bug，要**先勾选然后取消勾选**

**节能 -> 电源适配器（全部不勾选）**：

- 此时间段后关闭显示器（默认 15）：按实际需要比如 15
- 当显示器关闭时，防止电脑自动进入休眠：**不勾选**，默认显示器关闭后不久进入睡眠
- 如果可能，使硬盘进入睡眠：**勾选**。指的是在鼠标键盘不动的情况下，黑屏以节省电量，但是后台程序会进行，但是会冻结（不能使用处理器、网络，只占用内存）
- 唤醒以供 Wi-Fi 网络访问：**不勾选**。如果有人访问电脑的共享资源如打印机、itunes 播放列表等，会从睡眠中唤醒电脑（只会唤醒电脑，官方没有说会不会自动连接 wifi 估计不会，官方没说会不会唤醒屏幕估计不会）
- 接上电源适配器时启用电能小憩：**不勾选**。从睡眠中暂时唤醒电脑（不会唤醒屏幕和其他硬件以省电），执行完继续睡眠。适用于时间机器同步、接收邮件、icloud 同步、日历等

### 2.11 键盘

- **键盘**：『按键重复』滑动到『快』即七档，『重复前延迟』滑动到『短』即七档，勾选『在光线较弱时调整键盘亮度』、『闲置30秒后关闭键盘背光灯』
- **文本**：取消勾选所有
- **快捷键**：底部选择『所有控制』
  - 调度中心：取消勾选『向左移动一个空间』、『向右移动一个空间』、『切换到桌面1』
  - 服务：xxx
  - 聚焦：取消勾选『显示访达搜索窗口』
  - 应用快捷键：xxx
- **输入法**：在菜单栏中显示
- **听写**：关闭

**按住按键不会重复输入的解决办法**：`defaults write -g ApplePressAndHoldEnabled -bool false` 然后重启电脑

### 2.12 Siri

关闭，以免耗电

### 2.13 登录项

用户与群组

- 密码：勾选『允许用户使用 Apple ID 重设密码』
- 登录项：Alfred，VrayU，Magnet，Bob，Paragon NTFS for mac

### 2.14 icloud

- 勾选『icloud 云盘』 -> 选项，勾选常用如『自动操作』『提醒事项』『Clearview』『系统偏好设置』。不勾选『优化 Mac 储存空间』，好处是 icloud 所有文件都会下载到电脑上 
- 勾选常用的如『日历』『提醒事项』『备忘录』



## 3. 问题优化

### 3.1 内存优化

- 可简化 spotlight 搜索：系统偏好设置 -> 聚焦 -> 『搜索结果』全部取消勾选，只保留计算器、转换
- 可禁用透明效果：系统偏好设置 -> 辅助功能 -> 显示器，勾选『减弱动态效果』、『减少透明度』

### 3.2 电池优化

解决 Mac 盒盖掉电快的问题：[Mac合盖休眠掉电快？关掉这个设置再试试](https://post.smzdm.com/p/a83dmxrn)

- **方案一（实测有效）**：偏好设置 + tcpkeepalive 盒盖时断网
- **方案二（v2ex 多人解决）**：tcpkeepalive （不盒盖）睡眠时断网
- **方案三（多人重置了没用）**：官方重置 Nvram 和 SMC

1）设置

- 共享 -> 关闭互联网共享
- 时间机器 -> 选项 -> 取消『允许电池供电时进行备份』。『自动备份』可关闭
- 蓝牙偏好设置 -> 高级 -> 去掉勾选「允许蓝牙设备唤醒这台电脑」
- 系统偏好设置 -> 节能 -> 电源适配器下，去掉勾选「唤醒以供 Wifi 网络访问」
- 系统偏好设置 -> 节能 -> 电池下，先勾选「启用电能小憩」后退出，再去掉勾选该选项，解决看似未勾选，实际上是勾选的 Bug，导致用电池睡眠时仍在定期唤醒 Wifi
- 后台程序阻止了睡眠：输入 `pmset -g`，sleep 一行如果出现『sleep prevented by caffeinate』，要把这些应用程序停掉
- 合盖即断网 `sudo pmset -a tcpkeepalive 0`。修改后 icloud『查找我的Mac』功能无法运行（默认 1，-a 全部情景、-b 用电池、-c 用充电器、-u 用 UPS 防断电电源）。查看状态 `pmset -g custom`，查看日志 `pmset -g log`

2）更极致的设置：

- `sudo pmset -a hibernatemode 25` 较慢的唤醒和更长的电池寿命（默认 3 掉电一般，盒盖状态存到内存；25 只掉一点电，盒盖状态存到硬盘）
- `sudo pmset -a standby 1` 在 standbydelay 秒时，从浅度睡眠（为保持内存而供电）转为深度睡眠（内存数据保存到硬盘后停止供电）
- `sudo pmset -a standbydelay 1800`（默认 10800 秒即三小时）：优点是 100% 杜绝漏电，缺点是从开盖到显示内容要慢两秒（因为从内存恢复数据到硬盘）

### 3.3 wifi 唤醒后自动连接

**wifi 睡眠唤醒后自动连接**：wifi -> 网络偏好设置 -> 顶部添加位置。左侧栏只保留 wifi，其他的蓝牙、vpn 等删除，右侧勾选『自动加入此网络』和『询问加入新网络（不会自动连接其他乱七八糟的网络，连接前会询问）』-> 高级 -> 把当前网络拖动到第一个位置

### 3.4 盒盖睡眠，盒盖后关闭外接显示器

- 没有显示器时，盒盖即睡眠，或手动点睡眠（方法如下）
- 有显示器时，先手动睡眠（方法如下），然后再盒盖
  - 触发角，比如设置左下角
  - Alfred 输入 `sleep`
  - Mac 左上角苹果图标 -> 睡眠

### 3.5 修改用户名会丢失管理员权限

> **注意**：修改『账户名称』或『全名』后，所有的系统偏好设置都会还原

**原因**：修改了账户名称。账户名称是电脑识别账户路径用的，不能有空格且只能用英文，而全名可以有空格也可以中文。如果是 mojave 系统，系统偏好设置 -> 用户与群组 -> 在用户头像右键 -> 高级选项，这时『账户名称』会是灰色的不能修改

**解决办法**：重启 -> 按住 `command+s`，会出现很多代码 -> 输入 `/sbin/mount -uaw` 回车，`rm var/db/.applesetupdone` 回车，`reboot` 回车会重启 -> 自动进入新建管理员账户的设置流程中，新建完成后还不能看见之前的用户资料 -> 系统偏好设置 -> 用户与群组，解开左下角锁头，左侧选择之前的用户名，在右侧勾选『允许用户管理这台电脑』-> 重启进入之前的账户 -> 可以删除刚刚临时建立的管理员

**正确的修改步骤**：

- 系统偏好设置 -> 用户与群组 -> 新建临时管理员如 apple -> 注销后用临时管理员账户进入 -> 访达，菜单栏选择『前往』电脑 -> 进入磁盘（硬盘的图标）-> 进入『用户』文件夹 -> 修改原账户文件夹名称为新账户名称 -> 系统偏好设置 -> 用户与群组 -> 旧账号右键 -> 高级选项，修改『账户名称』和上一步的一致，『全名』可自定义，修改『个人目录』和上一步一致 -> 注销后用新用户进入
- 删除临时用户：用户与群组 -> 删除用户，选择『删除用户文件夹』
- 使用 Airdrop 隔空投送时显示的名称：系统偏好设置 -> 共享 -> 修改『电脑名称』

### 3.6 Chrome

**省电**：chrome 特别耗电，使用『扩展管理器』关闭不常用的插件

**提高查词精准度**：搜索英文会直接出来中文解释。谷歌搜索任意词 -> 点击菜单栏 Settings 选择 Languages -> 使用语言选择 English，搜索结果显示选择 English（还可追加中文、日文）

### 3.7 关闭开机声音

- 在关机或重启前把音量调最小、或静音：有效
- 已测重启会失效：下载安装 [matteoacrossi/nobootsound](https://github.com/matteoacrossi/nobootsound)，注意当插入耳机或外接音箱时会失效，关机后也会失效。
- 已测试无效：`sudo nvram SystemAudioVolume=%80` 或%00、%01、"" 

### 3.8 硬盘、分区、windows

> 分区、合并分区（在有数据等硬盘上操作）：一般不会丢失原文件，但过程中比较容易出错或断电等，最好先备份数据

- DiskGenius 格式化为 NTFS
- u盘启动pe系统：提示 ud 分区失败，多试几次就可以
- Windows to go：单文件最大识别 4G（会报错存储空间不足），要下载最初始的 win10 镜像（Enterprise 2015 LTSB），或用新镜像通过软碟通删除多余的版本只保留一个（企业版 LTSB 或专业版保存后容量大于 4G 也可以）



## 4. 个性设置

### 4.2 开机背景图

finder -> `command + shift + g` 输入前往 `/Library/Caches/` -> 把 com.apple.desktop.admin.png 改名为 com.apple.desktop.admin.png.bak -> 把图片放入并改名 com.apple.desktop.admin.png 

### 4.3 预览 pdf 做高亮笔记的快捷键

**预览 pdf 时标记文字高亮**：键盘-快捷键-应用快捷键-加号-选择预览.app-名称『文字高亮显示』、快捷键 `option + c`

### 4.4 外接显示器

**显示器分辨率**：显示器 -> 缩放 -> 显示更多内容（即第三项）

### 4.5 图片压缩 smv1

- [websperts/tinypng-cli 可上传文件、文件夹、-r遍历文件夹](https://github.com/websperts/tinypng-cli)

`vim ~/.zshrc` 添加 `alias smv1='tinypng -k yourApiToken /Users/aaron/Documents/截图'` 再 `source ~/.zshrc`。压缩图片用 `smv1`

### 4.6 图片上传 smv2

- [n0vad3v/smv2 sm.ms-图床-cli：一次只能上传一张](https://github.com/n0vad3v/smv2)

编辑配置文件如 [config-file](https://github.com/jiujiubad/config-file/tree/master/sm.ms)，上传图片用 `smv2 <图片路径>`

### 4.7 截图

**截图格式/文件名/路径**：

* [Mac OS X EI Capitan 修改截图的默认文件名](https://www.mycode.net.cn/platform/linux-unix/1398.html)
* [学习automator：实现快捷键截图并自动保存成指定名称的图片](https://zhuanlan.zhihu.com/p/32535444)

```
1）重启Mac，按住command+R，终端csrutil disable
2）去掉日期前后的空格，去掉日期的-符号
cd /System/Library/CoreServices/SystemUIServer.app/Contents/Resources/zh_CN.lproj  #打开目录
sudo plutil -convert xml1 ScreenCapture.strings                                                          #转为xml格式
sudo vim ScreenCapture.strings                                                    
第七行即<key>%@ %@ at %@</key>下一行，改为<string>%@%@_%@</string>               #去掉日期前后的空格（默认%@ %@ %@，表示前缀 日期 时间）
第十三行即<key>-</key>下一行，改为<string></string>                                                 #去掉日期的-符号
sudo plutil -convert binary1 ScreenCapture.strings                                                       #转为原格式
killall SystemUIServer                                                                                              #重启生效
重启Mac，按住command+R，终端csrutil enable
3）继续设置
defaults write com.apple.screencapture name ""                                              #文件名前缀改为空（注意：无法用变量，如$(date +%Y%m%d%H%M%S)会失效）
defaults write com.apple.screencapture "include-date" 1                                   #文件名后缀开启
defaults write com.apple.screencapture type jpg                                              #截图格式（jpg比png小约1/4到一半，且用tinypng压缩后在chrome放大看与png相同）
defaults write com.apple.screencapture location /Users/aaron/Documents/截图   #截图路径
defaults write com.apple.screencapture disable-shadow -bool false                   #窗口截图带阴影（快捷键command+shift+4再按空格，图片大小会变大或变小5-10k）
killall SystemUIServer                                                                                   #重启生效（更改设置后都要执行）
4）更多用法
screencapture -T 10 -t jpeg ~/Desktop/screenshot01.png                                  #在终端截图（延迟十秒）
ctrl + command + shift + 4                                                                            #复制到剪贴板
```



## 5. 编程设置

### 5.1 homebrew 命令

```
brew install <name>     #安装
brew uninstall <name>  #卸载
brew remove <name>    #卸载全部
brew services restart <name> #重启

brew update    #更新brew本身
brew upgrade  #更新brew下的所有gem
brew doctor    #查看brew有无异常
brew missing  #查看缺少的依赖
brew cleanup  #清除所有旧的没有使用的gem，非常好用

brew search | grep <name> #搜索app
brew list | grep <name>      #搜索已安装的app
find / -name redis.conf      #搜索文件
gem list | grep rails            #查看gem存不存在
```

### 5.2 ruby 环境配置

```
#rubygem源
$ gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/

#安装 Xcode
先在 AppStore 安装
xcode-select --install  #安装 Command Line Tools
打开 Xcode 让它初始化配置，设置 - Locations - Command Line Tools 选择 Xcode
xcode-select -p  #如果安装成功，会提示 /Applications/Xcode.app/Contents/Developer

#安装 Homebrew（https://brew.sh）
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor

#安装 git
brew install git
git --version

#安装 python3
brew install python3

#安装 ruby
brew install rbenv ruby-build 
rbenv install -l
rbenv install <2.6.0>
which ruby
ruby -vs
rbenv local <2.6.0>  #设置当前目录所用版本

#安装 Rails
brew install bundler
gem install rails
gem update

#oh-my-zsh 安装
#autojump | autosuggestions | syntax-highlighting | tmux | percol | mosh | Vim

#安装 redis
brew install redis
ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents  #开机自启动
brew services start redis        #启动redis
redis-cli                              #进入redis
vim /usr/local/etc/redis.conf  #修改密码（定位于 requirepass xxx）
brew services restart redis     #重启
redis-cli                             #再次进入redis
auth 密码                            #如果没有密码则执行命令会提示 NOAUTH Authentication required

#安装 java
brew cask install java  
java --version  #比如10.0.2

#创建mac公钥
ssh-keygen -t rsa -C "xxx@gmail.com"  #输入路径，密码之类的，如果不输入，工程就会保存到根目录下面，密码也为空
cat ~/.ssh/id_rsa.pub  #打印公钥
sudo vim /etc/hosts   #编辑host
vim ~/.zshrc && source ~/.zshrc

#安装 pg（PostgreSQL）
#安装 docker、k8s
#终端：去掉小括号，终端->显示->隐藏标记
```
