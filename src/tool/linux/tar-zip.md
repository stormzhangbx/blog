# 打包（归档）和压缩

如果想通过聊天工具（如微信）给某人发送资料，可以将单个文件拖到微信客户端聊天区即可，但当拖动某个文件夹到聊天区时会提示“只允许拖拽单个文件”，此时必须将文件夹打包或者压缩之后才能传输。

打包，也称为归档，指的是一个文件或目录的集合，而这个集合被存储在一个文件中。归档文件没有经过压缩，因此，它占用的空间是其中所有文件和目录的总和。如tar包、jar包、war包。

和归档文件类似，压缩文件也是一个文件和目录的集合，且这个集合也被存储在一个文件中，但它们的不同之处在于，压缩文件采用了不同的存储方式，使其所占用的磁盘空间比集合中所有文件大小的总和要小。

常用打包/解包命令：tar

常用压缩/解压缩命令：zip/unzip

## 打包（归档）

tar命令既可以用于打包，也可以用于解包

### 打包

> 可以对**目录或者文件**进行打包

用法：`tar [选项] 源文件或目录`

常用选项：

- `-c` 将多个文件或目录进行打包
- `-v` 显示打包文件过程
- `-f 包名` 指定打包后的文件名。包的扩展名是用来给管理员识别格式的，所以一定要正确指定扩展名

例子：

初始目录结构：

```
/root
|- /workspace
   |- /hello
      |- hello.txt
```

`tar -cvf hello.tar hello` shell命令进入workspace目录，将目录hello打包成单个文件，打包后的文件名叫hello.tar，位于workspace目录下

### 解包

用法：`tar [选项] 压缩包`

常用选项：

- `-x` 对 tar 包做解包操作
- `-v` 显示解包的具体过程
- `-f` 指定要解压的 tar 包的包名

例子：

`tar -xvf hello.tar` 解包到当前目录下，再当前目录下多出一个hello目录

### 打包压缩

> 打包压缩操作可以理解为**先打包再压缩**，所有跟上述打包操纵一样，需要可选项`-cvf`，额外加`-z`表示压缩

用法：`tar [选项] 压缩包 源文件或目录`

常用选项：

- `-z` 压缩“.tar.gz”格式
- `-g` 压缩“.tar.bz2”格式

例子：

`tar -zcvf hello.tar.gz hello` 把hello目录直接打包压缩为".tar.gz"格式，通过"-z"来识别格式，"-cvf"和打包选项一致

### 解压缩解包

> 解压缩解包可以理解成包含解压缩、解包两个操作，所以跟上述解包操作一样，需要可选项`-xvf`，额外加`-z`表示解压缩

用法：`tar [选项] 压缩包`

常用选项：

- `-z` 解压缩“.tar.gz”格式
- `-g` 解压缩“.tar.bz2”格式

例子：

`tar -zxvf hello.tar.gz` 解压缩与解包".tar.gz"格式

### 重点

常用可选项的区别：

可选项 | 含义
:-- | :--
`-vf` | 上面4个操作最好加上这两个可选项
`-c` | 表示打包
`-x` | 表示解包
`-z`、`-j` | 跟压缩包相关的操作要加这个参数


因为Linux中文件扩展名仅仅用于给用户识别文件类型、用处，因此在打包、打包压缩操作时需要指定打包或打包压缩后的文件名。

对比hello.tar.gz和hello.tar，可以发现，打包压缩比单纯打包可以大幅减少最终的体积大小。通过hello.tar.zip和hello.tar.gz，可以发现，打包压缩操作其实就是先打包再进行压缩。

![](https://image.newarea.site/2023-12-02-23-16-02.png)

## 压缩

### zip

用法：`zip [选项] 压缩包名 源文件或源目录列表`

- `-r` 递归压缩目录

例子：

`zip hello.tar.zip hello.tar` 压缩文件hello.tar

`zip hello01.tar.zip hello` 递归压缩目录

`zip test.zip test01.txt test02.txt` 同时压缩多个文件

![](https://image.newarea.site/2023-12-02-23-16-03.png)

### unzip

用法：`unzip [选项] 压缩包名`

- `-d 目录名` 将压缩文件解压到指定目录下

解压上述产生的压缩包test.zip

![](https://image.newarea.site/2023-12-02-23-16-04.png)
