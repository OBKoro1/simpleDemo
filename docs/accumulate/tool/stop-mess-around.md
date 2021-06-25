# 我用来阻止你摸鱼看直播、知乎和微博的Chrome插件
> chrome插件**通过强制的手段禁止大家浪费时间摸鱼**，在上班/学习期间下意识的打开摸鱼网站, 自动检测摸鱼网站, 提示激励信息后, 关闭摸鱼网站。

### Github地址

[stop-mess-around](https://github.com/OBKoro1/stop-mess-around)

### 插件解决的问题: 停止下意识的摸鱼

在工作、学习期间，如果事情不是太忙，或者说在学习/忙碌一小段时间之后。

**就会下意识的打开或者输入知乎、掘金沸点、微博等网站，开始了摸鱼时光**。

**可能是摸鱼奶头乐太快乐了，时间很快就过去两三个小时，而忘记自己的工作、学习初衷了**。

事后我们通常会为之内疚，觉得很浪费时间

但无奈摸鱼网站深谙人性弱点，仅靠我们自身的自律还是很难去抵抗这种诱惑。

作者本人曾经也深受其害，后来我想到可以用工具来限制这种下意识的行为。

于是很喜欢写工具的我, 写了一个脚本**用来检测摸鱼网站、检测到了就自动关闭摸鱼网站**。

**我在经过一段时间的使用之后，我就再也没有在电脑上打开摸鱼网站了，工作学习效率也提高了很多**。

**很奇怪，每次打开之后就被插件提示我不要摸鱼，然后被关闭摸鱼网站。**

**久而久之我就戒掉了在休息的间隙没事做就打开摸鱼网站的习惯了**。

**就我个人而言，真的很有用，很有效果，为我节省了很多时间**。

所以我将它做成chrome插件，开发了可视化的界面，方便不懂技术的人也可以直接上手使用。

希望这个开源工具可以有效的帮助大家减少摸鱼时间，提高工作和学习的效率。

### 使用示例

1. 添加摸鱼网站以及匹配摸鱼网站弹窗提示、关闭网页
![start](https://img-blog.csdnimg.cn/202106250059254.gif#pic_center)
2. 一键开启/关闭以及批量添加摸鱼网站

![addCheckout](https://img-blog.csdnimg.cn/20210625005924363.gif#pic_center)

3. 匹配摸鱼网站后出现的提示信息 - 随机激励语录

![mottoSetting](https://img-blog.csdnimg.cn/20210625005925326.gif#pic_center)
4. 一些设置提示。

![setting](https://img-blog.csdnimg.cn/20210625005924750.gif#pic_center)
### 安装插件

#### chrome应用商店

审核中，暂不支持。

#### 本地安装

只需要6步即可安装，非常方便，快捷。

1. 打开仓库的[releases](https://github.com/OBKoro1/stop-mess-around/releases), 下载最新版本的`zip`包到本地。

![downZip](https://img-blog.csdnimg.cn/20210625010603658.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L09CS29ybzE=,size_16,color_FFFFFF,t_70#pic_center)
2. 解压刚刚下载的zip包变成一个文件夹。
3. 进入chrome扩展程序管理页面

选项(右上角)-> 更多工具 -> 扩展程序

4. 打开开发者模式
5. 加载已解压的扩展程序
6. 选择刚才解压的那个文件夹。
![setPlugin](https://img-blog.csdnimg.cn/20210625010603503.gif#pic_center)
### 插件文档

[快速上手以及使用说明](https://github.com/OBKoro1/stop-mess-around/wiki/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B%E4%BB%A5%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E)

[插件节省下来的时间如何合理利用](https://github.com/OBKoro1/stop-mess-around/wiki/%E5%A6%82%E4%BD%95%E5%90%88%E7%90%86%E5%88%A9%E7%94%A8%E6%97%B6%E9%97%B4)

### 点个Star吧

如果觉得这个插件还不错，对你有所帮助的话，就给我点个[Star]((https://github.com/OBKoro1/stop-mess-around))吧~

### 我的其他开源推荐

#### [koroFileHeader](https://github.com/OBKoro1/koro1FileHeader)

1. 它是用于生成文件头部注释以及函数注释的，帮助我们养成良好的编码习惯，规范整个团队风格。
2. 插件从18年5月维护至今, 2.7K+ Star，插件支持所有主流语言,功能强大，灵活方便，文档齐全，食用简单！
![headTip](https://img-blog.csdnimg.cn/20210625010721742.gif#pic_center)
![functionParams](https://img-blog.csdnimg.cn/20210625010718989.gif#pic_center)
#### [AutoCommit](https://github.com/OBKoro1/autoCommit)

这是一个用于Git自动commit的VSCode插件，它可以用来补充之前忘记提交commit，帮助你把首页的绿色格子填满。
![autoCommit](https://img-blog.csdnimg.cn/20210625010731634.gif#pic_center)
### License

[MIT](http://opensource.org/licenses/MIT)

### 欢迎赞助

十块八块不嫌多，三块五块也是爱 😘

![](https://img-blog.csdnimg.cn/img_convert/83470560af7e6dc944d557998f676377.png)

### 联系我

[掘金](https://juejin.im/user/78820536236951)、[前端进阶积累](http://obkoro1.com/web_accumulate/)、[公众号](https://user-gold-cdn.xitu.io/2018/5/1/1631b6f52f7e7015?w=344&h=344&f=jpeg&s=8317)、[GitHub](https://github.com/OBKoro1)、[微信](https://raw.githubusercontent.com/OBKoro1/articleImg_src/master/weibo_img_move/005Y4rCogy1fsnslyz5pnj309j0cdgm6.jpg):OBkoro1、邮箱：obkoro1@foxmail.com
<!-- 特殊字符串：用于修改/删除markdown的结尾提示语-OBKoro1 -->
### 点个[Star](https://github.com/OBKoro1/web_accumulate)支持我一下~

