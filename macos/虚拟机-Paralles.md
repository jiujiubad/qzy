
## 虚拟机对比

- Mac 用 Parallels Desktop（Mac 用 VMware 内存给足了也会很卡，清晰度也较差，功能也没有 PD 多）
- Windows 用 VMware
- Linux 用 VirtualBox，配合 Vagrant



## 镜像下载

- [一定要在 msdn 下载](https://msdn.itellyou.cn)
- xp 专业版 SP3 32位：windows_xp_professional_with_service_pack_3_x86_cd_vl_xxx.iso **（vl 是免激活版，一定要选这个，否则会反复让你激活）**
- win7 旗舰版 SP1 64位：windows_7_ultimate_with_sp1_x64_xxx.iso  
- win10 企业版 cn_windows_10_business_editions_version_1909_updated_jan_2020_x64_dvd_b3e1f3a6.iso



## Parallels Desktop

### 安装与设置

新建虚拟机 -> 选择 ios 镜像 -> 勾选『安装前配置』具体配置如下 -> 过程中选择『Windows7 旗舰版』-> 安装完成后简单设置安装（关闭防火墙/关闭自动更新/操作中心-更改用户账户控制设置/输入法/rar/pdf） -> **备份快照** -> 复制 pvm 文件（如果原文件变的越来越大时可用）

1）设置 -> 选项

- 启动和关机：勾选『在可能的情况下暂停 Windows』
- 优化：调为第四档（共五挡），适合将 win 和 mac 一起使用。如果 mac 卡，可继续调低档位
- 共享：可全部勾选，『共享 Mac』标签下的『配置』只保留『下载』
- 应用程序：
  - 用融合模式时：可全部勾选
  - 用普通模式时：全部不勾选
- 旅行模式（即省电模式）：自动进入『在电池供电的情况下始终如此』，自动退出『从不』

2）设置 -> 硬件

- CPU 与内存：处理器 2，内存分配多少就会占用多少不会释放出来，所以如果内存只有 8G，就**先按默认 2G，根据实际使用情况分配 2-4G**
- 图形：
  - 『内存』也是占用 mac 内存模拟出来，而不是占用显卡，所以分配『自动』256M
  - 玩游戏或剪辑等比较迟显卡的工作模式：设置 -> 分辨率改成『缩放』，显示效果较差但能减轻不少系统压力
  - 独显的 mac，打开高级设置 -> 勾选『自动图形切换』
- 硬盘：分配的值是容量上限，实际使用多少占用多少，所以可以多分配一些比如 **256G**

**实测内存占用**：一开始都很小（开机 0.5G、二十个chrome窗口 1.5G），但不久会上升（xp 慢慢升到 1.4G、win7 升到 2G、win10 飙升 2.8G），而且占用的内存上去后不会降下来。另外，XP 不能用 v2ray、chrome 版本旧插件少、部分软件不能用（如马赛克视频助手）、界面较丑，**所以优先用 win7**

### 使用

- 常用旅行模式（即省电模式）：操作 -> 进入“旅行模式”。优点是省电、减少电脑发热，缺点是每次重新进入虚拟机要等待两秒
- 关机：点击左上角红色关闭按钮，好处是秒关并且下次打开很快
- 共享文件：把 mac 文件拖入虚拟机桌面。或在虚拟机里打开『计算器』-> 进入『Home on Mac』文件夹（即 mac 的总文件夹） -> 找到常用文件夹后，把它拖入左上角的收藏夹内。以后直接通过收藏夹访问
- 死机怎么办：操作 -> 停止（相当于关机），然后操作 -> 重置（相当于开机）

### 常见问题

- **鼠标光标不见了**：按住 `ctrl + option`
- 在两个系统切换 U盘：窗口右上角的 usb 图标，勾选 U盘就会在虚拟机载入，取消勾选就会在 mac 载入
- pvm 文件变的非常大（约 50G）？操作 -> 重新安装 Parallels Tools，会回收 Parallels.log 日志文件占用的空间
- 备份和恢复：先进性备份（操作 -> 拍快照），恢复时查看快照点击恢复
- 不要弹出程序坞和菜单栏：全屏 -> 勾选『优化游戏的全屏模式』，要临时显示程序坞时按住 `ctrl + option`
- 硬盘容量怎么加大？删除所有快照才能修改，然后加大硬盘（一般默认 256G 够用），最后可以重新添加快照
- win10 特别卡？因为没有关闭系统自动更新 



## VirtualBox

### VirtualBox 文件传输（本机与虚拟机）

- [VirtualBox Win7 虚拟机 共享文件夹设置](https://www.cnblogs.com/qrlozte/p/5683022.html)  
- [本机终端SSH连接VirtualBox中的Linux虚拟机](https://itbilu.com/linux/management/4Jy8JsAIM.html) 

### VirtualBox 备份快照、复制、移动（快照约 2G ）

- [如何将virtualbox的虚拟机目录移动位置](https://www.jianshu.com/p/a05615d1a17c) 
- [VirtualBox快照（Snapshot）功能使用及注意事项](http://blog.51cto.com/callmepeanut/1328601) 
