##HTTP入门
- curl命令的使用
- HTTP请求
- HTTP响应

###一、curl命令的使用
####1. GET请求
```
curl -s -v -H "xxx: yyy" -- "https://www.baidu.com"
```
如果不清楚,如何使用curl命令的话,可以查看[常用命令行的使用及explainshell.com的使用技巧](https://www.jianshu.com/p/e4e256f578b2),这里就不多讲,废话少说,直接进入正题。
- `-s` 不要显示进度条
- `-v` 要显示请求和响应
- `-H` 添加响应头
- https://www.baidu.com 请求的网站
- `"xxx: yyy" `可以不用写的,下同

不知道为什么在windows下先把要下载的内容放在前面,还有其他东西还特别多,这里就展示重要的内容
![curl命令_get1.png](https://upload-images.jianshu.io/upload_images/11616333-dbc1835ac92a959e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![curl命令_get2.png](https://upload-images.jianshu.io/upload_images/11616333-a226b68118d5c2dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
上面图片中出现的`*`代表是**注释**,`>`代表的是请求的内容,`<`代表的是响应的内容

请求的内容:
| 请求的内容              | 含义                                        |
| ----------------------- | ------------------------------------------- |
| GET / HTTP/1.1          | 获取根目录,使用协议是HTTP1.1                |
| Host: www.baidu.com     | 请求的网址                                  |
| User-Agent: curl/7.59.0 | 用的软件是curl/7.59.0,发起请求              |
| Accept: */*             | 接受你返回的所有内容                        |
| xxx: yyy                | 上面命令有的这个,下面请求的内容也会显示这个 |
|                         | 回车                                        |
响应的内容:(下面的响应内容是我能够理解,有一些不能理解,这个就没有写出来)
| 响应的内容              | 含义                                            |
| ----------------------- | ----------------------------------------------- |
| HTTP/1.1 200 OK         | 协议是HTTP,版本号是1.1 状态码是200 状态解释是OK |
| Content-Length: 2443    | 响应内容的长度                                  |
| Content-Type: text/html | Content-Type标注响应内容的格式                  |
|                         | 回车                                            |
####2. POST请求
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
####3. POST请求带数据
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
###二、HTTP请求
####1.HTTP请求的格式(包含的部分)
| 部分    | 内容                                            |
| ------- | ----------------------------------------------- |
| 第1部分 | 动词 路径 协议/版本                             |
| 第2部分 | Key1: value1                                    |
| 第2部分 | Key2: value2                                    |
| 第2部分 | Content-Type: application/x-www-form-urlencoded |
| 第2部分 | Host: [www.baidu.com](www.baidu.com)            |
| 第2部分 | User-Agent: curl/7.54.0                         |
| 第3部分 |                                                 |
| 第4部分 | 要上传的数据                                    |
PS.
- 请求最多包含4部分,最少包含3部分(第4部分可以为空)
- 第3部分永远都是一个回车(\n),分隔第2部分和第4部分
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
  - 3xx 表示滚吧(301永久搬走了，第二部分会告诉新地址；302暂时搬走了(临时不存在)，我还会回来这里哒；304这次的内容和上一次说的内容一样，都是一种类型的滚)
  - 4xx 表示你丫错了
  - 5xx 表示好吧，我错了
- 状态解释没什么用
- GET 请求和 POST 请求对应的响应可以一样，也可以不一样
####2.用 Chrome 开发者工具查看 HTTP 响应内容
过程跟请求类似,这里就不多说啦,不同之处已经加粗了
1. 打开浏览器,右键点击检查/按F12,打开Chrome 开发者工具
2. 在浏览器的地址栏输入网址
3. 在Network点击查看 **Response Headers**,点击「view source」,看到请求的前三部分
4. 查看 **Response** 或者 **Preview**，你会看到响应的第 4 部分
  ![查看响应的第 4 部分.png](https://upload-images.jianshu.io/upload_images/11616333-d216da032d94d57f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)