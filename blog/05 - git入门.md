- 配置github
- 配置git
- 使用git
- 总结git常用的命令
- 指定「哪些文件不上传到远程仓库」
- 其他有用的命令
- 学习git的众多资源

## 配置github

注：这个是完全针对小白的教程

1. 去github官网上注册一个账号吧，怎么注册，自己都知道，不知道请Google

2. 进入 <https://github.com/settings/keys>

3. 点击 New SSH key，你需要输入 Title 和 Key，但是你现在没有 key，往下看

4. 在自己电脑上打开 Git Bash，前提是你已经安装好Git Bash

5. 需要创建属于自己的钥匙。运行 `ssh-keygen -t rsa -b 4096 -C "你的邮箱"`，注意填写**你的邮箱**！

6. 按回车三次

7. 运行 `cat ~/.ssh/id_rsa.pub`，得到一串东西，完整的复制这串东西

8. 回到上面第 3 步的页面，在 Title 输入「我的第一个 key」

9. 在 Key 里粘贴刚刚你你复制的那串东西

10. 点击 Add SSH key

11. 回到 Git Bash

12. 运行`ssh -T git@github.com`，你可能会看到这样的提示：

    ![图片](https://video.jirengu.com/FtfPAJz5jxIhUopvXPmHMAbsolXM)

    输入 yes 回车……问你话你就答，别傻在那

13. 然后如果你看到 `Permission denied (publickey).` 就说明你失败了，请回到第 1 步重来，是的，回到第 1 步重来；如果你看到 `Hi FrankFang! You've successfully authenticated, but GitHub does not provide shell access.` 就说明你成功了！

如果要讲清楚，太浪费时间了，我们只是想用用 GitHub 而已。

- 一台电脑只需要一个 SSH key
- 一个 SSH key 可以访问你的所有仓库，即使你有 1000000 个仓库，都没问题
- 如果你新买了电脑，就在**新电脑上重新生成一个 SSH key**，把这个 key 也上传到 GitHub，它可以和之前的 key 共存在 GitHub 上
- 如果你把 key 从电脑上删除了，重新生成一个 key 即可，替换之前的 key

## 配置Git

```
git config --global user.name 你的英文名      	#此英文名不需要跟GitHub账号保持一致         
git config --global user.email 你的邮箱          #此邮箱不需要跟GitHub账号保持一致           
git config --global push.default matching
git config --global core.quotepath false
git config --global core.editor "vim"
```

五句话，依次在命令行（Git Bash）中运行，请将上面的中文换成你对应的信息。

## 使用Git

使用 git 有以下常用的方式，请按照你的需求选择

1. 只在本地使用
2. 将本地仓库上传到 GitHub
3. 下载 GitHub 上的仓库
4. 上传更新

### 1. 只在本地使用

- 初始化仓库`git init`
- 在新建文件之后，可以显示当前所有文件的状态`git status -sb`
- 将变动加到暂存区`git add 文件路径`或`git add .`
- 将你 add 过的内容「正式提交」到本地仓库（.git就是本地仓库），并添加一些注释信息，方便日后查阅`git commit -m "信息"`
- 修改文件之后，**每一次改动，都要经过 git add 和 git commit 两个命令，才能被添加到 .git 本地仓库里。**
- 查看变更历史`git log`

### 2. 将本地仓库上传到Github

- 在 GitHub 上新建一个空仓库，名称随意，**一般可以跟本地目录名一致**，也叫做 git-demo-1,只需填写仓库名即可，其他不要动。

- 一定要点击SSH按钮
- 如果你本地仓库没有东西，可以按照下面的步骤，在Git Bash执行这些代码

```
echo "# slides-demo-2" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:xyyojl/slides-demo-2.git
git push -u origin master
```

- 本地仓库有东西，要把本地仓库上传，就执行下面的代码

```
git remote add origin git@github.com:xyyojl/slides-demo-2.git
git push -u origin master
```

注：细节问题不懂，请Google

### 3. 下载Github上的仓库

- 可以直接在 GitHub 创建一个仓库，然后下载到本地。
- 打开 Git Bash，找一个安全的目录，比如 ~/Desktop 桌面目录就很安全：`cd ~/Desktop`。运行。运行 `git clone 你刚才得到的以git@github.com开头的地址`，运行完了你就会发现，桌面上多出一个 git-demo-2 目录。

### 如何上传更新

你在本地目录有任何变动，只需按照以下顺序就能上传：

1. git add 文件路径
2. git commit -m "信息"
3. git pull （相信我，你一定会忘记这一个命令）
4. git push

## 总结Git常用的命令

1. git clone [git@github.com](mailto:git@github.com):xxxx，下载仓库，建议不要自己打，直接复制即可
2. git init，初始化本地仓库 .git
3. git status -sb，显示当前所有文件的状态
4. git add 文件路径，用来将变动加到暂存区
5. git commit -m "信息"，用来正式提交变动，提交至 .git 仓库
6. 如果有新的变动，我们只需要依次执行 git add xxx 和 git commit -m 'xxx' 两个命令即可。别看本教程废话那么多，其实就这一句有用！先 add 再 commit，行了，你学会 git 了。
7. git log 查看变更历史

##  .gitignore

在项目目录创建` .gitignore` 文件就可以指定「哪些文件不上传到远程仓库」

```
/node_modules/
/.vscode/
```

这样就可以避免 node_modules/ 和 .vscode/ 目录被上传到 github 了。

## 记住一句话：永远都不要上传 node_modules 到 github。

如果你想防止自己手贱上传 node_modules 到 github ，可以：

1. 在项目根目录 touch .gitignore
2. 在 .gitignore 里添加一行 `/node_modules/`
3. git add .gitignore; git commit -m 'ignore'

## 其他有用的命令

- `git remote add origin git@github.com:xxxxxxx.git` 将本地仓库与远程仓库关联
- `git remote set-url origin git@github.com:xxxxx.git` 上一步手抖了，可以用这个命令来挽回
- `git branch` 新建分支
- `git merge` 合并分支
- `git stash` 通灵术
- `git stash pop` 反转通灵术
- `git revert` 后悔了
- `git reset` 另一种后悔了
- `git diff` 查看详细变化

## 拓展思考：

- [SSH的原理与运用（一）：远程登录](http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html)
- [.gitignore 的作用](http://gitbook.liuhui998.com/4_1.html)、[README.md 的作用](http://www.jianshu.com/p/94406f5d9b46) 以及 [LISENCE 的作用](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)
- [常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- [读懂 diff - 阮一峰](http://www.ruanyifeng.com/blog/2012/08/how_to_read_diff.html)
- [搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)
- [Git 菜鸟教程](http://www.runoob.com/git/git-install-setup.html)
- [廖雪峰的 Git 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013743256916071d599b3aed534aaab22a0db6c4e07fd0000)
