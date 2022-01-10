# 网站说明


# LoveIt

[huaimingxiang.site](https://huaimingxiang.site)

![](http://ubtcn.huaimingxiang.site:8830/images/2021/12/18/20211218133155.png)

### 这个一个什么东西
1. LoveIt是一个hugo的主题，
Hugo是由Go语言实现的静态网站生成器。简单、易用、高效、易扩展、快速部署。
2. 在mac系统hugo配置：
``` shell
    # 使用 Homebrew 安装
    brew install hugo

    # 使用Hugo快速生成站点，已经有网址了
    #hugo new site /path/to/site

    # 安装themes 目录
    # 有很多不同的皮肤的，可以自己选择
    git clone https://github.com/LoveIt/LoveIt.github.io.git
    
    # 创建一个 about 页面
    hugo new about.md

    # Hugo 命令进行调试
    # http://localhost:1313 访问
    hugo server --buildDrafts

    
    # Hugo 生成静态代码，在public目录下面
    hugo -D

    # 发布到网上
    # 1. git同步到github等网站
    git init
    git remote add origin https://github.com/LoveIt/LoveIt.github.io.git
    git push -u origin master

    # 发布到网上
    # 2. 使用自己的服务器，通过nginx发布
    brew install nginx
    # 配置nginx.conf
    # listener监听端口,自己定义端口
    # server_name监听域名，自己的域名
    # location{}，root指定对应uri的资源查找路径，index指定首页index文件的名称

```

3. 在mac系统nginx配置：
``` shell
# 1313端口的配置
server
{ 
    listen 1313;
    server_name ubtcn.huaimingxiang.site;
    index index.php index.html index.htm default.php default.htm default.html;
    root /home/huaimingxiang/git/my_website/public/;

    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }

    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        expires      30d;
        error_log /dev/null;
        access_log /dev/null;
    }

    location ~ .*\.(js|css)?$
    {
        expires      12h;
        error_log /dev/null;
        access_log /dev/null;
    }
}
```

## 对于大家有什么借鉴意义
1. 自己以前都是使用wordpress，虽然功能很多，但是比较厚重，不利于修改和发布的；
2. 使用hugo，可以运用hugo + vscode + picgo + chevereto，完成闭环的开源部署；
3. hugo是生成静态的网站；
4. vscode有markdown，可以预览，有git工具，有终端，可以使用picgo的插件，整体是技术编辑的好帮手；
5. picgo主要是配合自动上传到图床；
6. 图床使用的是开源的chevereto，比较全方面，也可以支持下收费，几十块钱。
![](http://ubtcn.huaimingxiang.site:8830/images/2021/12/18/20211218133929.png)




