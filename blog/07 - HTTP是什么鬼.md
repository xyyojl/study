- www（万维网）的历史
- curl命令的使用
- HTTP请求
- HTTP响应
- 拓展思考
- 学习资源

## www（万维网）的历史
### WWW的发明

Tim Berners-Lee（下文中称为李爵士） 在 1989 年至 1992 年间，发明了 WWW（World Wide Web），一种适用于全世界的网络。

主要包含三个概念

1. URI，俗称网址（能让你访问一个页面）
2. HTTP，两个电脑之间传输内容的协议（让你能下载这个页面）
3. HTML，超级文本，主要用来做页面跳转（让你能看懂这个页面）

李爵士的贡献：

1. 发明了第一个服务器
2. 发明了第一个浏览器
3. 发明了第一个网页

### URI是什么？

**URI**：**统一资源标识符**（Uniform Resource Identifier）

注：Google URI 维基百科 即可查看更多。

URI分为URL和URN，我们一般使用URL作为网址

#### URN

**URN**：**统一资源名称**（Uniform Resource Name）

注：Google URN 维基百科 即可查看更多。

ISBN: 9787115275790 就是一个 URN，通过 URN 你可以确定一个「唯一的」资源，ISBN: 9787115275790 对应的资源的是《JavaScript 高级程序设计（第三版）》这本书。（通过位置去找，广州某某路某某小区）

#### URL

**URL**：**统一资源定位符**（Uniform Resource Locator）

注：Google URL 维基百科 即可查看更多。

通过 URL 你可以确定一个「唯一的」地址（网址）。（通过名字去找）

![URL的常见组成](C:\Users\ASUS-PC\Desktop\URL的常见组成.png)

**URL**还包括**端口**，**路径不对应任何文件**，路径跟文件不是同级关系

**上面省略端口:80，本来位于域名（主机）之后**

#### 域名

www.baidu.com

- `.com`：顶级域名（一级域名）
- `baidu.com`：二级域名
- `www.baidu.com`：三级域名

#### DNS

**DNS**：**域名系统**（**D**omain **N**ame **S**ystem）

- 输入域名
- 输出IP

注：Google DNS 维基百科即可查看更多

DNS在我们直接调用[网站](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%AB%99)的名字以后就会将像*zh.wikipedia.org* 一样便于**人类使用的名字转化成像*198.35.26.96* 一样便于机器识别的IP地址**。

```
nslookup baidu.com
ping baidu.com
```
## 请求与响应
![服务器与浏览器交互](C:\Users\ASUS-PC\Desktop\服务器与浏览器交互.png)

- 浏览器负责发起请求
- 服务器在80端口接收请求
- 服务器负责返回内容（响应）
- 浏览器负责下载响应内容

HTTP 的作用就是指导浏览器和服务器如何进行沟通。

**HTTP(HyperText Transfer Protocol)**超文本传输协议，它教客户端如何请求、服务器如何响应。

## curl命令的使用 

### curl命令的使用
#### 1. GET请求
```
curl -s -v -H "xxx: yyy" -- "https://www.baidu.com"
```
如果不清楚,如何使用curl命令的话,可以查看[常用命令行的使用及explainshell.com的使用技巧](https://www.jianshu.com/p/e4e256f578b2),这里就不多讲,废话少说,直接进入正题。

浅析命令行

- `curl`命令的作用是发送一个请求内容
- `curl -s -v -- www.baidu.com`一个最简单的获得请求内容和响应内容的命令行。
- `-s` 不要显示进度条
- `-v` 要显示请求和响应
- `-H` 添加响应头
- `-X POST`指定post方法
- `-d 1234567890`向目标网站发送数据
- -H "xxx: yyy" 在请求的内容的第二部分加上xxx: yyy
- https://www.baidu.com 请求的网站
- `"xxx: yyy" `可以不用写的,下同

不知道为什么在windows下先把要下载的内容放在前面,还有其他东西还特别多,这里就展示重要的内容
![curl命令_get1.png](https://upload-images.jianshu.io/upload_images/11616333-dbc1835ac92a959e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![curl命令_get2.png](https://upload-images.jianshu.io/upload_images/11616333-a226b68118d5c2dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
上面图片中出现的`*`代表是**注释**,`>`代表的是请求的内容,`<`代表的是响应的内容

请求的内容:
|  请求的内容    |   含义   |
| ---- | ---- |
|  GET / HTTP/1.1    |   获取根目录,使用协议是HTTP1.1   |
|  Host: www.baidu.com   | 请求的网址     |
|  User-Agent: curl/7.59.0    | 用的软件是curl/7.59.0,发起请求     |
|  `Accept: */*`  |  接受你返回的所有内容    |
|  xxx: yyy    |   上面命令有这个的话,下面请求的内容也会显示这个   |
|      |   回车   |
响应的内容:(下面的响应内容是我能够理解,有一些不能理解,这个就没有写出来)
|   响应的内容   |   含义   |
| ---- | ---- |
|  HTTP/1.1 200 OK    |   协议是HTTP,版本号是1.1 状态码是200 状态解释是OK   |
|  Content-Length: 2443    |   响应内容的长度   |
|  Content-Type: text/html    |   Content-Type标注响应内容的格式   |
|      |   回车   |
#### 2. POST请求
```
curl -X POST -s -v -H "xxx: yyy" -- "https://www.baidu.com"
```
请求的内容:
```
> POST / HTTP/1.1
> Host: www.baidu.com
> User-Agent: curl/7.59.0
> Accept: */*
> xxx: yyy
>
```
响应的内容:
```
< HTTP/1.1 302 Found
< Connection: Keep-Alive
< Content-Length: 17931
< Content-Type: text/html
< Date: Sun, 07 Oct 2018 01:56:57 GMT
< Etag: "54d9748e-460b"
< Server: bfe/1.0.8.18
<
```
注：



#### 3. POST请求带数据

```
curl -X POST -d "1234567890" -s -v -H "xxx: yyy" -- "https://www.baidu.com"
```
请求的内容:
```
> POST / HTTP/1.1
> Host: www.baidu.com
> User-Agent: curl/7.59.0
> Accept: */*
> xxx: yyy
> Content-Length: 10
> Content-Type: application/x-www-form-urlencoded
>
```
响应的内容:
```
< HTTP/1.1 302 Found
< Connection: Keep-Alive
< Content-Length: 17931
< Content-Type: text/html
< Date: Sun, 07 Oct 2018 02:00:10 GMT
< Etag: "54d9748e-460b"
* Server bfe/1.0.8.18 is not blacklisted
< Server: bfe/1.0.8.18
<
```
注：

- Content-Type: application/x-www-form-urlencoded(POST请求带数据必须)
- Content-length: 10(POST请求带数据必须)
- 路径就是URL的路径和它之后的东西，除去了锚点
- Content-Type表示第4部分的数据格式，当没有第4部分时（如GET请求），自然没有Content-Type。
- Host就是URL的域名
- User-Agent就是你是通过什么方式发送的请求，像上面的就是通过 curl 命令行
- accept表示想要什么格式的文件
- 如果请求内容出现Content-Length，你应该要知道它的意思是client发送给server的数据长度

## HTTP请求

### 1.HTTP请求的格式(包含的部分)
| 部分 | 内容 |
| --- | --- |
| 第1部分 | 动词（请求方法） 路径 协议/版本 |
| 第2部分 | Key1: value1 |
| 第2部分 | Key2: value2 |
| 第2部分 | Content-Type: application/x-www-form-urlencoded |
| 第2部分 | Host: [www.baidu.com](www.baidu.com) |
| 第2部分 | User-Agent: curl/7.54.0 |
| 第3部分 |  |
| 第4部分 | 要上传的数据 |
PS.
- 请求最多包含4部分,最少包含3部分(第4部分可以为空)
- 第3部分永远都是一个回车(\n)，目的分隔第2部分和第4部分
- 动词有GET(获取) POST(上传) PUT(整体更新) PATCH(局部更新) DELETE(删除) HEAD OPTIONS等
- 这个的路径包含「查询参数」，但不包括「锚点」,跟URL的不同
- 如果你没有写路径,那么路径默认为/,如果你请求的网址是https://www.baidu.com/s?wd=hello,那么路径是/s?wd=hello
- 第 2 部分中的 Content-Type 标注了第 4 部分的格式
####2.用 Chrome 开发者工具查看 HTTP 请求内容
打开浏览器,右键点击检查/按F12,打开Chrome 开发者工具
![打开Chrome 开发者工具.png](https://upload-images.jianshu.io/upload_images/11616333-dc3ca098cdf6aa8a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在浏览器的地址栏输入网址
![地址栏输入网址.png](https://upload-images.jianshu.io/upload_images/11616333-f1fb2a011e80de31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在Network点击查看Request Headers,点击「view source」,看到请求的前三部分
![寻找访问的网址.png](https://upload-images.jianshu.io/upload_images/11616333-bb6224face1229c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![点击view source.png](https://upload-images.jianshu.io/upload_images/11616333-6b559c1380d8f6e5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![查看到响应的内容.png](https://upload-images.jianshu.io/upload_images/11616333-f0ab4ee07751ea2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
4. 如果(POST)才有请求的第四部分,那么在FormData或 Payload 里面可以看到
###三、HTTP响应
####1.HTTP响应的格式(包含的部分)
| 部分    | 内容                        |
| ------- | --------------------------- |
| 第1部分 | 协议/版本号 状态码 状态解释 |
| 第2部分 | Key1: value1                |
| 第2部分 | Key2: value2                |
| 第2部分 | Content-Length: 2443        |
| 第2部分 | Content-Type: text/html     |
| 第3部分 |                             |
| 第4部分 | 要下载的内容                |
PS.
- 状态码要背，是服务器对浏览器说的话
  - 1xx 不常用
  - 2xx 表示成功(200 普通成功,204 创建成功(POST))
  - 3xx 表示滚吧(301永久搬走了，第二部分会告诉新地址「永久移动」；302暂时搬走了(临时不存在)「临时移动」，我还会回来这里哒；304这次的内容和上一次说的内容一样，都是一种类型的滚)
  - 4xx 表示你丫错了（403 「服务器理解请求客户端的请求，但是拒绝执行此请求」，404「请求失败，请求所希望得到的资源未被在服务器上发现，但允许用户的后续请求」）
  - 5xx 表示好吧，我错了（500「服务器内部错误，无法完成请求」，502「充当网关或代理的服务器，从远端服务器接收到了一个无效的请求」）
- 状态解释没什么用
- GET 请求和 POST 请求对应的响应可以一样，也可以不一样
####2.用 Chrome 开发者工具查看 HTTP 响应内容
过程跟请求类似,这里就不多说啦,不同之处已经加粗了
1. 打开浏览器,右键点击检查/按F12,打开Chrome 开发者工具
2. 在浏览器的地址栏输入网址
3. 在Network点击查看 **Response Headers**,点击「view source」,看到请求的前三部分
4. 查看 **Response** 或者 **Preview**，你会看到响应的第 4 部分
![查看响应的第 4 部分.png](https://upload-images.jianshu.io/upload_images/11616333-d216da032d94d57f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 常见的状态码（背下来）

状态码是服务器对浏览器说的话

200 OK

> 请求已成功，请求所希望的响应头或数据体将随此返回。实际的响应将取决于所使用的请求方法。在GET请求中，响应将包含与请求的资源相对应的实体。在POST请求，响应将包含描述或操作结果的实体。

**201 Created**

> 请求已经被实现，而且有一个新的资源已经依据请求的需要而建立，且其[URI](https://zh.wikipedia.org/wiki/URI)已经随Location头信息返回。假如**需要的资源无法及时创建**的话，应当返回'[202 Accepted](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#202)'。

**202 Accepted**

> 服务器已接收请求，但尚未处理。最终该请求可能会也可能不会被执行，并且可能在处理发生时被禁止。

**203 Non-Authoritative Information（自HTTP / 1.1起）**

> 服务器是一个转换代理服务器（transforming proxy，例如[网络加速器](https://zh.wikipedia.org/wiki/%E7%B6%B2%E7%B5%A1%E5%8A%A0%E9%80%9F%E5%99%A8)），以`200 OK`状态码为起源，但回应了原始响应的修改版本。

**204 No Content**

> 服务器成功处理了请求，没有返回任何内容。表示服务器接收到的请求已经处理完毕，但浏览器页面不会刷新。

**300 Multiple Choices**

> 被请求的资源有一系列可供选择的回馈信息，每个都有自己特定的地址和浏览器驱动的商议信息。用户或浏览器能够自行选择一个首选的地址进行重定向。除非这是一个HEAD请求，否则该响应应当包括一个资源特性及地址的列表的实体，以便用户或浏览器从中选择最合适的重定向地址。这个实体的格式由Content-Type定义的格式所决定。浏览器可能根据响应的格式以及浏览器自身能力，自动作出最合适的选择。

**301 Moved Permanently**

请求的网页已永久移动到新位置，永久性重定向

> 被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个URI之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。

**302 Found**

HTTP/1.0就有的，临时性重定向，POST方法的重定向在未询问用户的情况下就会变成GET

> 要求客户端执行临时重定向（原始描述短语为“Moved Temporarily”）。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。

**303 See Other**

HTTP/1.1新加的，都是临时重定向，303和302一样，POST重定向为GET。

> 对应当前请求的响应可以在另一个URI上被找到，当响应于POST（或PUT / DELETE）接收到响应时，客户端应该假定服务器已经收到数据，并且应该使用单独的GET消息发出重定向。这个方法的存在主要是为了允许由脚本激活的POST请求输出重定向到一个新的资源。这个新的URI不是原始资源的替代引用。同时，303响应禁止被缓存。当然，第二个请求（重定向）可能被缓存。

**304 Not Modified**

表示自从上次请求后，网页未被修改过(这次的内容和上一次说的内容一样，都是一种类型的滚)

> 表示资源在由请求头中的If-Modified-Since或If-None-Match参数指定的这一版本之后，未曾被修改。在这种情况下，由于客户端仍然具有以前下载的副本，因此不需要重新传输资源。

**400 Bad Request**

客户端中存在语法错误。

> 由于明显的客户端错误（例如，格式错误的请求语法，太大的大小，无效的请求消息或欺骗性路由请求），服务器不能或不会处理该请求。

**401 Unauthorized**

用户未授权，需要用户验证。

> 类似于403 Forbidden，401语义即“[未认证](https://zh.wikipedia.org/wiki/%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81)”，即用户没有必要的凭据。该状态码表示当前请求需要用户验证。该响应必须包含一个适用于被请求资源的WWW-Authenticate信息头用以询问用户信息。客户端可以重复提交一个包含恰当的Authorization头信息的请求。如果当前请求已经包含了Authorization证书，那么401响应代表着服务器验证已经拒绝了那些证书。如果401响应包含了与前一个响应相同的身份验证询问，且浏览器已经至少尝试了一次验证，那么浏览器应当向用户展示响应中包含的实体信息，因为这个实体信息中可能包含了相关诊断信息。
>
> 注意：当网站（通常是网站域名）禁止IP地址时，有些网站状态码显示的401，表示该特定地址被拒绝访问网站。

**402 Payment Required**

> 该状态码是为了将来可能的需求而预留的。该状态码最初的意图可能被用作某种形式的数字现金或在线支付方案的一部分，但几乎没有哪家服务商使用，而且这个状态码通常不被使用。如果特定开发人员已超过请求的每日限制，[Google Developers](https://zh.wikipedia.org/wiki/Google_Developers) API会使用此状态码。

**403 Forbidden**

服务器已经理解请求，但拒绝执行

> 服务器已经理解请求，但是拒绝执行它。与[401响应](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#401)不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。如果这不是一个HEAD请求，而且服务器希望能够讲清楚为何请求不能被执行，那么就应该在实体内描述拒绝的原因。当然服务器也可以返回一个[404响应](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#404)，假如它不希望让客户端获得任何信息。

**404 Not Found**

服务器找不到请求的网页。

> 请求失败，请求所希望得到的资源未被在服务器上发现，但允许用户的后续请求。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用[410状态码](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81#410)来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。

**500 Internal Server Error**

服务器遇到错误，无法完成请求。

> 通用错误消息，服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。没有给出具体错误信息。

**501 Not Implemented**

> 服务器不支持当前请求所需要的某个功能。当服务器无法识别请求的方法，并且无法支持其对任何资源的请求。

**502 Bad Gateway**

> 作为[网关](https://zh.wikipedia.org/wiki/%E7%BD%91%E5%85%B3)或者[代理](https://zh.wikipedia.org/wiki/%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8)工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。

**503 Service Unavailable**

> 由于临时的服务器维护或者[过载](https://zh.wikipedia.org/w/index.php?title=%E8%BF%87%E8%BD%BD&action=edit&redlink=1)，服务器当前无法处理请求。这个状况是暂时的，并且将在一段时间以后恢复。如果能够预计延迟时间，那么响应中可以包含一个Retry-After头用以标明这个延迟时间。如果没有给出这个Retry-After信息，那么客户端应当以处理[500响应](https://zh.wikipedia.org/w/index.php?title=500_Internal_Error&action=edit&redlink=1)的方式处理它。

**504 Gateway Timeout**

> 作为网关或者代理工作的服务器尝试执行请求时，未能及时从上游服务器（URI标识出的服务器，例如[HTTP](https://zh.wikipedia.org/wiki/HTTP)、[FTP](https://zh.wikipedia.org/wiki/FTP)、[LDAP](https://zh.wikipedia.org/wiki/LDAP)）或者辅助服务器（例如[DNS](https://zh.wikipedia.org/wiki/DNS)）收到响应。

## 拓展思考

- URL包括哪些内容？

- 顶级域名，二级域名，三级域名分别是什么？

- 锚点是什么？

  - URL：`https://www.baidu.com/s?wd=hello&rsv_spt=1#5`,`#5`就是锚点，他的作用就是让整个网页的页面的id=5的元素与浏览器的左上角对齐。

- 域名查询IP过程是怎么样的？

  - 第一种：如果你修改了自己的Host文件，如`123.233.233.233 www.baidu.com`，那么很明显，此时的域名是通过你的Host文件查询IP地址的。**如果修改了Host文件，指定了某些网站与域名的对应关系，那么就不会通过第二种方式来获得IP**
  - 第二种：如果你不修改文件，此时是通过DNS**（输入域名，输出IP）**来得到IP地址的。

- 请求方法的PUT和PATCH区别

  - PUT：全局更新

  - PATCH：局部更新

  - 例子：在`userInfo`里面，有`useId`，`useName`字段

    如果你只想修改`useId`，那么应该用PATCH方法局部更新。

    如果用了PUT方法，理论上useInfo上就只有`useId`了，`useName`没有了，因为你在修改的时候并没有加上`useName`。

- 消息报头是什么鬼？

  1. 上面请求内容和响应内容的`key: value` 学名叫消息报头，分为普通报头、请求报头、响应报头、实体报头。
  2. 普通报头：在请求内容和响应内容都可以用，但不用于被传输的实体，只用于传输的消息。
  3. 请求报头：允许客户端向服务器端传递请求的附加信息以及客户端自身的信息。
  4. 响应报头：允许服务器传递不能放在状态行中的附加响应信息，以及关于服务器的信息和对Request-URI所标识的资源进行下一步访问的信息。
  5. 实体报头：定义了关于实体正文的信息。

  ### 学习资源

- [curl网站开发指南](http://www.ruanyifeng.com/blog/2011/09/curl.html)

- [HTTP协议详解（前端面试常考知识点）](https://www.cnblogs.com/puyaoyao/p/3705970.html)
- [http全过程的问题](https://segmentfault.com/a/1190000007033157)