### Alfred 使用方法

`alt + 空格` 打开 Alfred，输入：

* in <关键词>：全文搜索
* 搜索后 `command + Enter` 会在 Finder 打开
* 搜索后 `ctrl + Enter` 会用谷歌打开
* 搜索后，按两次 ctrl，可以对文件复制、移动、删除等
* 搜索后，`alt + ↑` 在搜索框上边缓存多个文件，然后 `alt + →` 对多个文件一起操作（打开、复制、移动、删除等）。`alt + ←` 删除缓存

### 设置 - General、Workflows、Appearance、Advanced 页

> **mac 自带搜索很烂（弃用），spotlight 搜索很烂（只保留计算器和转换）**

1）General：勾选开机启动

2）[Workflow 工作流下载 packal.org](http://www.packal.org)

* Caffeinate Control：下载时用，让 Mac 在设置时间内不进入睡眠
* CodeVar：驼峰命名、下划线命名

3）Appearance：皮肤 Alfred Dark

4）Advanced：Force Keyboard 选 搜狗拼音

### 设置 - Feature 页

1）Default Results

* Essentials：选 Application
* Extras：选 Text Files（可以搜索 markdown 文件）、Documents（可搜索 ppt/xls）
* Unintelligent：不勾选，勾选会严重影响搜索速度
* Search Scope：搜索范围按默认。**搜索黑名单文件夹设置：系统偏好设置 -> 聚焦 -> 隐私，按 `+` 添加文件夹**
* Fallbacks：在搜索结果最后显示，只保留谷歌

2）File Search

File Search 的 Search 标签全部勾选其他默认，Result Limit 选 30

3）Web Search 搜索指定网站

设置 -> Features -> Web Search -> 勾选『Only show enabled searches』，Add custom search 添加

```
百度：https://www.baidu.com/s?wd={query}
k8s：https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fkuboard.cn%2F+{query}&oq=site%3Ahttps%3A%2F%2Fkuboard.cn%2F+imagePullPolicy&aqs=chrome..69i57j69i58.12772j0j7&sourceid=chrome&ie=UTF-8
rails：https://ruby-china.github.io/rails-guides/index.html
github：https://github.com/search?utf8=%E2%9C%93&q={query}
淘宝：https://s.taobao.com/search?oe=utf-8&f=8&q={query}
v2ex：https://www.google.com/search?q=site:v2ex.com/t%20{query}
知乎：https://www.zhihu.com/search?q={query}

翻译成中文zh：https://translate.google.cn/#en/zh-CN/{query}
翻译成英语en：https://translate.google.cn/#zh-CN/en/{query}
京东：https://search.jd.com/Search?keyword={query}&enc=utf-8
微信文章：http://weixin.sogou.com/weixin?type=2&query={query}
stackoverflow：http://www.stackoverflow.com/search?q={query}
rails api：http://api.rubyonrails.org/
ruby api：https://ruby-doc.org/core-2.5.0/
```

4）Web Bookmarks 书签

设置 -> Features -> Web Bookmarks，取消『Google Chrome Bookmarks』后重新勾选，Show bookmarks 关键词 sq

5）Clipboard 剪贴板

设置 -> Features -> Clipboard：

* History：全部勾选。Keep Plain Text 选『3 Months』，Keep Images 选『24 Hours』，Keep File Lists 选『24 Hours』，快捷键设置为 `ctrl + command + c`
* Merging：不勾选
* Advanced：Pasting 两个都勾选，Max Clip Size 复制文本片段的长度（1M 约存 50万 汉字，按默认 256k 即可）

### 重建索引、搜索 Chrome 书签

重建 spotlight 索引：系统偏好设置 -> 聚焦 -> 隐私，按 `+` 添加文件夹 -> 然后按 `-` 删除文件夹 

重建 chrome 书签索引：设置 -> Features -> Web Bookmarks，取消『Google Chrome Bookmarks』后重新勾选

### 搜索黑名单（不搜索某个文件夹）

系统偏好设置 -> 聚焦 -> 隐私 -> 添加文件夹

### 用 Alfred 打开 app 不切换界面？

系统偏好设置 -> 调度中心 -> 第一项不勾选，其他三项勾选，特别是第二项『切换到某个应用程序时，会切换到包含该应用程序的打开窗口的空间』