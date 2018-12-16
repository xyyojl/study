## CSS的历史

1. 两个人（哈肯·维姆·莱、伯特·波斯）合作发明了CSS
2. W3C开始接管CSS
3. CSS2.1（1998年5月W3C发表了CSS2，CSS2.1修改了CSS2中的一些错误和删除了一些内容）
4. CSS 3（从 2011 年开始 CSS 被分为多个模块单独升级，统称为 CSS 3）
5. CSS4？不好意思，没有 CSS 4，只有各个模块的 level 4

注：中文维基百科严重落后，折射出学好英语是十分必要的，学好英语可以获得一手资料，而不是二手资料

## CSS学习资源推荐

1.Google: 关键词 MDN

> 你想要查找`table`的相关属性，只需要在Google搜索:`table attribute MDN`

2.网站推荐: [CSS Tricks](https://css-tricks.com/)

> 这里有很多的关于 CSS 的神操作，平时没事多看看大神对于CSS是如何写的。多多学习，持续进步！

3.大牛推荐：[Google: 阮一峰 css](https://www.google.com/search?q=%E9%98%AE%E4%B8%80%E5%B3%B0+css)

> 这里记录了一位前端大牛的整个学习过程，很多小白不懂的问题这里都有很详尽的解释，同时，阮老师也是我们前端开发学习的榜样！

4.大牛推荐：[张鑫旭的 240 多篇 CSS 博客](http://www.zhangxinxu.com/wordpress/category/css/page/25/)

> 这是国内关于 CSS 学习文章记录最多的前端大牛之一，9年多以来一直专注于 前端CSS 方向的研究，我们有一些不懂的操作和疑问可以在他的博客中寻找答案，有很大的启发。

5.CSS酷炫玩法：[Codrops 炫酷 CSS 效果](https://tympanus.net/codrops/category/playground/)

> 各种炫酷的操作，简直停不下来，最神奇的一个效果在这 [Cinema Seat Preview Experiment](https://tympanus.net/codrops/2016/01/12/cinema-seat-preview-experiment/)

6.购书学习：[CSS揭秘](http://www.ituring.com.cn/book/1695)

> 因不同的人学习方式不同，有人喜欢一边看文档一边学习和做笔记，有人喜欢看书学习。而国内的大部分书籍都是翻译自国外作者的，因为不同人的思维方式以及语言理解的差异 ，导致国内很多翻译的专业书籍都不是很尽如人意，所以，要买书的话还是首推国外作者写的书。

7.文档学习：[CSS 2.1 中文 spec](http://cndevdocs.com/)

> 当然啦，最方便的还是可以随时查阅的官方文档啦，特别是中文文档哦~

注：

- 如果你想快速上手，就先写小 demo 再学理论。
- 如果你想一鸣惊人，就仔细看 CSS 规范文档。

## 工具

注：先不要看周边工具，学好最朴素的 CSS，然后升级。

- LESS CSS
  一种简化、功能更多的 CSS 语言 [中文官网](https://www.google.com/search?q=less+css+%E4%B8%AD%E6%96%87) [英文官网](https://www.google.com/search?q=less+css)
- SASS
  一种简化、功能更多的 CSS 语言（请自行搜索中英文官网）
- PostCSS
  一种 CSS 处理程序

## 开始写 CSS

1. 引入 CSS 的三/四种方式
2. 从最小的东西开始入手
3. 逐渐变大
4. 学会组织 CSS（以后再说）
5. 自己写 CSS UI 库

### 引入CSS的4种方式

1. 内联style属性
2. style标签
3. 外部文件 csslink
4. `@import url(./b.css)`绝对路径也行

## 如何做横向布局

给所有子元素添加float，他们的爸爸加clearfix的这个类

```css
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}
```

## 如何取色

用qq截图吧，也可以用其他的

注：字体好像有很多种颜色，不同操作系统渲染出来的字，你给一个颜色，但是它可能会出现虚边，不是它的颜色。

## 记住常见 CSS 属性

1. font-family font-size font-weight
2. ul、body 的默认 margin 和 padding
3. color、background-color、margin、padding
4. line-height

## 技巧

- border大法

当我们给元素设定了一个样式，但是效果在页面上并没有显示出来，或者是和别的元素发生了冲突，自己又暂时没有思路进行问题排查的时候，我们该怎么办呢？

很简单，我们可以给这个元素添加一个border，这样我们就能更好地定位问题出现的地方了，比如：

```css
div {
    border: 1px solid red; 
}
```

- 如何用开发者工具确定一个属性的值

一个属性的取值，你不知道到，怎么办？

1. 查 mdn
2. 把属性值删掉，试一下，哪种可以。

- 如何截自己想要的图

1. 快捷键
2. 开发者工具，找到被hover的元素，尝试点击hover，没有用，再往上找，点击hover，被强制触发元素悬浮的hover状态。