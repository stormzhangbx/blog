# 文件及目录管理

## 1 新建、编辑文件

### 1.1 vim 用于新建、编辑文件

这里涉及到vim命令的使用

`vim test.txt` 如果当前目录下存在test.txt文件，可用于编辑文件；如果不存在，可用于创建文件

### 1.2 touch 新建文件（常用）

`touch test.txt` 如果当前目录下不存在test.txt文件，则新建文；如果已经存在，则不做任何改动（即不会新建一个空文件去覆盖原有的文件）


## 2 mkdir 新建目录

`mkdir test` 在当前目录下创建一名为 test 的新目录，如果当前目录已经存在test目录，创建失败，提示mkdir: cannot create directory ‘test’: File exists

`mkdir -p test/test1/test2` 递归创建test、test、test2目录

`mkdir -m 711 test` 创建目录时指定权限rwx--x--x

## 3 cp 复制文件、目录（相当于Windows中的复制Ctrl+C）

用法：`cp [options] source dest`，source表示文件、目录的路径，dest表示目的路径。这些路径可以时相对路径也可以时绝对路径

**注意复制目录时需使用-r可选项**

### 3.1 将一个文件复制到目标文件夹

新建如下文件、目录用于测试：

- /root/test/test.txt文件
- /root/test1目录

`cp test/test.txt test1` 表示将/root/test/test.txt文件复制到/root/test1目录下。相对路径test/test.txt表示被复制的/root/test/test.txt文件，相对路径test1表示/root/test1目录

### 3.2 将一个文件夹复制到目标文件夹

新建如下文件、目录用于测试：

- /root/test/test.txt文件
- /root/test1目录

`cp -r test test1` 表示将/root/test文件夹复制到/root/test目录下。相对路径test表示被复制的/root/test目录，相对路径test1表示/root/test1目录

## 4 mv 移动文件、目录（相当于Windows中的剪切Ctrl+X）、改名（Windows也可以对文件、目录改名）

用法：`mv [options] source dest`

### 4.1 将一个文件移动到目标文件夹

新建如下文件、目录用于测试：

- /root/test/test.txt文件
- /root/test1目录

`mv test/test.txt test1`，将文件/root/test/test.txt移动到/root/test1下面。执行命令后的结果：存在/root/test目录、/root/test1/test.txt文件

### 4.2 将一个文件夹移动到目标文件夹

新建如下文件、目录用于测试：

- /root/test/test.txt文件
- /root/test1目录

`mv test test1` 将目录/root/test移动到目录/root/test1下。结果目录/root/test消失了，目录/root/test1变成/root/test1/test/test.txt

### 4.3 改名

用于修改文件、目录的名称

新建如下文件、目录用于测试：

- /root/test/test.txt文件
- /root/test1目录

`mv test/test.txt test/hello.txt` 重命名文件

`mv test1 hello` 重命名目录

## 5 rm 删除目录、文件（相当于Windows中的删除Del）

### 5.1 删除文件

`rm test.txt` 直接删除文件，常用

`rm -i test.txt` 删除前会询问是否删除

### 5.2 删除文件夹

`rm test` 本打算删除test目录，但实际结果并不是这样，因为不可以直接删除文件夹

`rm -rf test` 删除test目录，并递归删除里面的文件和目录。-f是为了防止每删除一个文件时都给出删除确认，这是很麻烦的。-r表示递归删除。常用
