- iframe
- a
- form
- input
- select
- textarea
- table

## iframe

-  iframe单独使用
-  iframe结合a标签一起使用

### iframe单独使用
iframe默认的宽度是300px,高度是150px;可以通过css改变样式

```html
<iframe style="width: 100%;height:400px;" src="https://www.zhihu.com" frameborder="0"></iframe>
```
![iframe单独使用.png](https://upload-images.jianshu.io/upload_images/11616333-5240e5c0e914029d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### iframe与a标签一起使用
iframe的src也可以是#,点击a标签.则新的页面会在iframe里出现
```html
<iframe name="xxx" style="width: 100%;height:400px;" src="https://www.sina.com.cn/" frameborder="0"></iframe>
<a target="xxx" href="http://www.qq.com">QQ</a>
<a target="xxx" href="http://www.baidu.com">百度</a>
```
![iframe与a标签一起使用.gif](https://upload-images.jianshu.io/upload_images/11616333-b4750e4342ddf672.gif?imageMogr2/auto-orient/strip)
#### 小Tips:

- iframe的src可以是相对路径
- iframe与a标签一起使用,iframe需要加name,a标签需要加target的属性值,与iframe的name相同
- 文章的代码都是要放在html文件里面的body里面的

## a标签(HTTP GET 请求)

### a标签的属性

- target
- download
- href

### a标签的target属性

先来学习一下英语吧

| 英文   | 翻译    |
| ------ | ------- |
| blank  | 空白的  |
| self   | 自己    |
| parent | 父母    |
| top    | 顶部/顶 |

记住了吗?下面开始学习target的属性值含义

- `_blank` 新窗口打开
- `_self` 当前页面打开/加载
- `_parent` 在父级窗口打开新页面(需结合iframe使用,才能展示出效果)
- `_top` 在顶级窗口打开新页面(需结合iframe使用,才能展示出效果)

#### 代码展示:

index1.html

```html
<iframe style="width: 400px;height: 300px;border:2px solid blue;" src="./index3.html" frameborder="0"></iframe>
```

index2.html

```html
<iframe style="border:2px solid red;" src="./index3.html" frameborder="0"></iframe>
```

index3.html

```html
<!-- 点击会在一个新的标签页面打开 -->
<a href="http://www.qq.com" target="_blank">QQ_blank</a>
<!-- 点击会在index3的嵌套页面里面打开 -->
<a href="http://www.qq.com" target="_self">QQ_self</a>
<!-- 点击会在index2的嵌套页面里面打开 -->
<a href="http://www.qq.com" target="_parent">QQ_parent</a>
<!-- 点击会在index里打开 -->
<a href="http://www.qq.com" target="_top">QQ_top</a>
```
具体可以自己操作一下,体验一下

![a的target属性.png](https://upload-images.jianshu.io/upload_images/11616333-e31a7f638c23ae3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### a的download属性

这个链接时用来下载,不是用来展示的

```html
<a href="http://www.qq.com" download>下载</a>
```

如果不想通过这个download下载文件,还可以:

通过http响应以下载的形式接收请求`Content-type: application/octet-stream`

### a的href

在开始讲这个之前,先在本地开启服务器

操作如下:

1. `mkdir demo`
2. `touch index.html`
3. `npm install -g http-server`
4. `http-server . -c-1`(注意中间有一个空格一个点再加一个空格）实现不缓存

然后你就可以直接访问 <http://localhost:8080/index.html> 来预览你的index.html

1. `<a href="http://www.qq.com">QQ</a>` 使用http协议
2. `<a href="http://www.qq.com">QQ</a>` 如果网站支持HTTPS协议,可以这样写
3. `<a href="//qq.com">QQ</a>`href里写的是无协议地址，意思是当前页面用的是什么协议,就会用什么协议
4. `<a href="#xxx">QQ</a>`锚点,点击之后不会发起请求,因为锚点仅仅是在当前页面内跳转
5. `<a href="?username=ojl&psd=123456">QQ</a>`点击之后会在当前面页面发起?username=ojl&psd=123456的请求
6. `<a href="./index.html">QQ</a>`点击后浏览器会发起GET请求,路径是/index.html,协议是HTTP/1.1
7. `<a href="javascript:;"></a>`  点击之后不跳转/a标签不会做任何事情
8. `<a href="javascript:alert(1);"></a>` 点击之后弹出1

## form标签(HTTP POST请求)

form标签主要是发起POST请求,也可以发起GET请求

form标签也有target,跟a标签的target是一样的

#### 代码展示

```html
<form action="users" method="post">
    <input type="text" name="username">
    <input type="password" name="password">
    <input type="submit" value="提交">
    <!-- form表单里面一般要有submit按钮才能提交 -->
</form>
```

如果填写的信息是英文,数字或特殊符号的话
![POST请求上传的数据是英文/数字/特殊符号.png](https://upload-images.jianshu.io/upload_images/11616333-c5109da68215b8f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

如果是填写的信息是中文的话,会出现不一样的效果
![POST请求提交中文信息.png](https://upload-images.jianshu.io/upload_images/11616333-ed1b2d8c84938b47.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![POST请求要上传的数据.png](https://upload-images.jianshu.io/upload_images/11616333-b25350701c43a309.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
上图中展示的数据并没有显示"小帅"两个字,而是出现了`%E5%B0%8F%E5%B8%85`

这是因为Content-Type: application/x-www-form-urlencoded中的x-www-form-urlencoded规定所有英文字符/键盘上的字母之外,都要经过转译,将"小帅"变成对应的UTF-8,可以搜索`character utf-8 E5 B0 8F`,得出"小"这个字对应的utf-8就是`E5 B0 8F`,如果发现中文,就把utf-8中的每一个字节前面加个%,所以就有上图这个效果了

#### 小Tips:

- 如果form表单没有提交按钮,无法提交数据,除非用JS
- 如果一个form表单里面只有一个按钮`<button></button>`,它会自动升级为提交按钮
- form表单里面的表单元素input等,里面的name会被带到请求的第四部分那里的key
- utf-8中英文是占一个字节,中文占3个字节
- GET不会把那个参数作为第四部分,默认会把参数放到查询参数,而且不能通过任何方法让GET有第四部分
- POST请求上传的数据会出现在第四部分,默认会把参数放到第四部分
- POST请求若想有查询参数，可以直接写在action里`action="users?zzz=333`

## input标签

### (name一定要写,提交数据的时候要用到)

### type="checkbox"

```
你喜欢的动漫:<input type="checkbox" name="cartoon">海贼王
<input type="checkbox" name="cartoon">火影忍者
<input type="checkbox" name="cartoon">刀剑神域
```
![type="checkbox".png](https://upload-images.jianshu.io/upload_images/11616333-9346983774c166fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
我想点击海贼王这个词的时候,会自动勾选上
```
<!-- label标签是为了id=onepiece的input做准备的,label的for和input的id是要一起出现 -->
<label for="onepiece"><input type="checkbox" name="cartoon" id="onepiece">海贼王</label>
<!-- 老司机做法 -->
<label><input type="checkbox" name="cartoon">海贼王</label>
```

### 全部代码:

```html
<form action="users" method="get">
    你喜欢的动漫:
    <label><input type="checkbox" name="cartoon"value="oneprice">海贼王</label>
    <label><input type="checkbox" name="cartoon" value="Hokage Ninjia">火影忍者</label>
    <label><input type="checkbox" name="cartoon" value="Sword Art Online">刀剑神域</label>
    <input type="submit" value="提交">
</form>
```

一定要有name才能被提交上去
![GET请求上传的数据.png](https://upload-images.jianshu.io/upload_images/11616333-7212c150d5ccac17.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### type="radio"

```html
性别:<input type="radio" name="sex" value="男">男
<input type="radio" name="sex" value="女">女
```

#### 小Tips:

- 记得一定要加上name,而且给**相同的名字**,才能实现单选

- 两个name一样的radio只能选中一个

![type="radio".png](https://upload-images.jianshu.io/upload_images/11616333-65aa70a188d5c80d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### input和button的区别

input没有子元素,button有子元素

## select

```html
<select name="group" multiple>
    <option value="">-</option>
    <option value="1">第一组</option>
    <option value="2">第二组</option>
    <option value="3" disabled>第三组</option>
    <option value="4" selected>第四组</option>
</select>
```

#### 小Tips:

- multiple 可以同时选中几项
- disabled 默认不能被选中
- selected 默认被选中 
  ![select.png](https://upload-images.jianshu.io/upload_images/11616333-86a799ab457b97ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## textarea

```html
<textarea style="width: 200px;height: 200px; resize: none;"  name="hobbies" cols="30" rows="10"></textarea>
```

- 通过设置width和height,设置textarea的宽度和高度,能够更准确的控制宽度和高度
- resize设置为none，则用户就不可以随意更改输入框的大小

## table

### 表格的基本元素

| 基本元素 | 翻译/含义              |
| -------- | ---------------------- |
| caption  | 标题                   |
| thead    | table head(表头)       |
| tbody    | table body(表格主体)   |
| tfoot    | table foot(表格的底部) |
| tr       | table row(表格行)      |
| th       | table header(表格页眉) |
| td       | table data(单元格)     |

```html
<table border="1" style="font-size: 12px;border-collapse: collapse;">
    <colgroup>
        <col width="74">
        <col width="86">
        <col width="497">
    </colgroup>
    <thead>
        <tr>
            <th>称号</th>
            <th>姓名</th>
            <th>简介</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>白胡子</td>
            <td>爱德华·纽盖特</td>
            <td>白胡子海贼团船长，被称为世界最强男人，过去与罗杰、金狮子，并成为三大传说中的海贼，震震果实能力者，顶上战争上被黑胡子海贼团杀死，享年72岁。</td>
        </tr>
        <tr>
            <td>红发</td>
            <td>香克斯</td>
            <td>红发海贼团船长，原罗杰海贼团的实习员，拥有强大的霸王色霸气，是路飞海贼之路的引路人，为了救路飞失去了左臂。</td>
        </tr>
        <tr>
            <td>百兽</td>
            <td>凯多</td>
            <td>百兽海贼团船长，被称为世界最强生物，与和之国将军霸占着和之国。</td>
        </tr>
        <tr>
            <td>BIG·MOM</td>
            <td>夏洛特·玲玲</td>
            <td>BIG·MOM海贼团船长，四皇中的唯一女性，魂魂果实能力者，托特兰统治者。</td>
        </tr>
        <tr>
            <td>黑胡子</td>
            <td>马歇尔·D·蒂奇</td>
            <td>黑胡子海贼团提督，原白胡子海贼团二番队成员，暗暗果实、震震果实双能力者，极恶的世代之一，顶上战争杀死白胡子，夺取其果实能力，两年后成为四皇。</td>
        </tr>   
    </tbody>
</table>
```
![表格的应用.png](https://upload-images.jianshu.io/upload_images/11616333-034cfd2cb6c00dee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 小Tips:

- th和td的区别是:th里面不是放数据,td里面全是数据
- thead tbody tfoot不写,浏览器也不会报错，浏览器会自动全部加入到tbody里
- thead tbody tfoot书写的顺序颠倒没关系,浏览器会自动纠正顺序(头->身体-->脚)
- `border-collapse: collapse;`合并边框
- `col`可以规定每一列的样式