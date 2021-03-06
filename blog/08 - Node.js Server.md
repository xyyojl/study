- http-server安装及使用
- TCP传输控制协议
- IP网络协议
- 端口
- 实现一个最简单的Node.js Server

## http-server 安装及使用

http-server的使用方法很简单：

1. `mkdir http-demo`
2. `touch xxx.html`
3. `npm install -g http-server`
4. `http-server . -c-1` （注意中间有一个空格一个点再加一个空格）当然还可以简写成`hs . -c-1`

你就可以访问 <http://localhost:8080/xxx.html> 来预览你的 html 了。

注：**Windows 上 http-server 的缓存「有可能」无法消除**，如果你发现你改了页面，页面却无法更新，那么就这样做：

1. 打开 Chrome 开发者工具
2. 点击 Network
3. 勾选 Disable Cache

## TCP 传输控制协议（Transmission Control Protocol）

面试的时候顶多会问两个相关问题，更多详情去看博客了解一下即可：

1. [TCP 和 UDP 的区别是什么](https://www.nowcoder.com/questionTerminal/63c8b45c91a544bd8febc1f1ff02e3b5?toCommentId=73766)
   简答：TCP 可靠、面向连接、相对 UDP 较慢；UDP 不可靠，不面向连接、相对 TCP 较快。搞定。

理解：

- 可靠：即TCP传送数据有反馈，是否可以传输？对象是否错误[扔石子到水塘]；而UDP则没有反馈[扔石子到草地]
- 面向连接：可参考下面的题目[TCP的三次握手是什么？]
- 速度：TCP的传输速度较慢（因为使用了复杂的 [拥塞控制算法](https://zh.wikipedia.org/zh-hans/%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6)），但是稳定安全；而UDP的传输速度较快，安全性却不得而知，但是目前UDP的应用范围依然很广。

2. TCP 的三次握手指的是什么

简答：每次建立连接前，客户端和服务端之前都要先进行三次对话才开始正式传输内容，三次对话大概是这样的：

```
 1. 客户端：我要连接你了，可以吗
 2. 服务端：嗯，我准备好了，连接我吧
 3. 客户端：那我连接你咯。
 4. 开始后面步骤
```

上面内容足以应付前端面试中关于 TCP 的考题 :)

如果你想更了解 TCP 可以看 [此文](http://www.ruanyifeng.com/blog/2017/06/tcp-protocol.html)，也可以买一本《TCP/IP 详解（卷一）》（共三卷，先只买一卷即可）。

## IP 网络协议（Internet Protocol）

IP 分为「内网 IP」 和「外网 IP」，以下图为例：

![外网和内网](C:\Users\ASUS-PC\Desktop\外网和内网.png)

1. 外网IP
   只要路由器连上电信的服务器，那么路由器就会有一个「外网 IP」
2. 内网IP
   路由器会在你家里创建一个内网，一般路由会给自己分配一个好记的内网 IP，如 192.168.1.1，然后路由会给每一个内网中的设备分配一个不同的内网 IP
3. **本地 IP：127.0.0.1**，localhost 指向 127.0.0.1
4. **特别特殊的 IP：0.0.0.0**，它不表示任何设备。

注：

-  你的路由器没有「固定的外网 IP」
- 内网中的设备可以互相访问，外网中的设备可以互相访问，但内网和外网之间不能互相访问，所以你在家上网就是通过路由器的外网和其他外网连接，你访问的网站在外网发送信息到你的路由器上，然后路由器将信息转到内网发送到你电脑上
- 内网和外网就像两个隔绝的空间，无法互通，唯一的联通点就是路由器（因为路由器既有外网 IP 也有内网 IP），所以路由器有时候也被叫做「网关」

## 端口

端口其实就是一个编号，并不是一种硬件。

一个服务器（硬件）不一定只提供一种服务，比如一个服务器既提供 HTTP 服务，又提供 FTP 服务，还提供 SMTP 服务（邮件服务），那么只用一个 IP 是无法告诉服务器你想要使用哪种服务。

使用HTTP协议访问一个IP，要同时提供IP和端口号，平常没填是因为浏览器默认帮你加了

重要原则：**一个端口对应一个服务**「不建议你违反这个约定」

- 要提供HTTP服务，你最好使用80端口
- 要提供HTTPS服务，你最好使用443端口
- 要提供 FTP 服务，你最好使用 21 端口

### 问题1：我怎么知道应该使用什么端口？

Google 「维基百科 端口」

维基百科把 0 到 1023 号端口对应的服务都告诉你了，点进去看看吧。

### 问题2：一共有多少个端口？

每个机器一共有 65535（2的16次方减1）个端口（这是协议规定的）。不过这些端口的使用由一些规定

1. 0 到 1023（2的10次方减1）号端口是留给系统使用的，你只有拥有了管理员权限后，才能使用这 1024 个端口。
2. 其他端口可以给普通用户使用
3. 如果一个端口正在提供服务，也就是被占用了，那么就不能再使用这个端口。除非你先停掉正在占用这个端口的服务。以后你们会经常遇到这个问题。「要记住这个，以防踩坑」

## 一个简易 Server

### 接收请求

1. 进入一个安全目录，然后创建一个目录`cd ~/Desktop; mkdir node-demo; cd node-demo`
2. `touch server.js`，然后编辑server.js，[server.js的内容](https://github.com/FrankFang/nodejs-test/blob/master/server.js)
3. 运行node server.js或者node server.js，如看到报错，请根据报错提示调整命令
4. 成功之后，这个server会保持运行，无法退出
   1. 如果你想「中断」这个 server，按  <kb>Ctrl</kbd>  + <kbd>C</kbd> 即可（C 就是 Cancel 的意思）
   2. 中断后你才能输入其他命令
5. 要发起一个请求到这个服务器，打开新的Bash窗口运行`curl http://localhost:你的指定的端口/xxx`
6. server 打印出了路径，说明server收到了我们用 curl 发出的请求，但是server没有发出响应，所以 curl 就一直等在那里，无法退出（用 <kb>Ctrl</kbd> + <kbd>C</kbd> 中断这个傻 curl）

### 发出响应

1. 编辑server.js
2. 在中间的标注的区域添加两行代码

```repsonse.write('Hi')
repsonse.write('Hi')
repsonse.end()
```

3. 终端之前的server，重新运行node server 8888
4. `curl http://127.0.0.1:8888/xxx`，结果如下：` Hi%`。这个 % 不是我们的内容，% 表示结尾。
5. 使用 `curl -s -v -- "http://localhost:8888/xxx"` 可以查看完整的请求和响应

server根据请求返回不同的响应

1. 响应 /
2. 响应 /xxx
3. 响应 404
4. 响应 /xxx.html
5. 响应 /xxx.css
6. 响应 /xxx.js

注：

HTTP 路径不是文件路径！！！/xxx.html 不一定对应 xxx.html 文件

后缀是废话。文件内容是有 HTTP 头中的 Content-Type 保证的

## 总结

- 使用 HTTP 协议访问另一个 IP 时，必须同时提供 IP 和端口号，缺一不可。那为什么我访问 http://qq.com 时并没有提供端口号，为什么我依然可以访问？？？因为**浏览器**帮你加了默认端口号 80。浏览器这么好

扩展思考：

- 端口号的用途是什么？
  - 用途1：标识服务器上提供特定网络服务的进程。客户机可以按照服务器IP与端口号与相应的服务器进程创建网络连接，获得相应的网络服务。例如，通常使用80端口号提供http服务，使用23端口号telnet服务。服务器的这种功能叫做listening。客户机通常使用动态指定的端口号与服务器创建连接。
  - 用途2：由本机地址、本机端口号、目标机地址、目标机端口号、通信协议组成的五元组，用于唯一确定正在使用的网络连结。因此，对于不同的协议、不同的目标机地址，本机的不同地址（如果本机使用多个网卡）等多种情形，同一个端口号可以复用。因此对于1对1通信，且本机与目标机之间只能创建一个通信连接，则不需要使用端口号。