# 域名

在 Internet 上有千百万台主机，为了区分这些主机，每一台主机都被分配一个 IP 地址。但由于 IP 地址没有实际意义难于记忆，于是就有了域名（Domain Name）。而获得域名的方式是通过付费获得域名一年或多年内的使用权，我们称之为域名注册。

同时，HTTS 协议必须通过域名来访问。

## 建站基本流程

![](https://image.newarea.site/2024-01-27-23-11-26.png)

### 购买云服务器

您的网站在 Internet 需要有一个空间作为载体存放您的网站信息，所以您需要购买云服务器。假设购买的云服务器

### 搭建网站

在购买的云服务上部署网站。

### 域名注册

域名注册时选择的是`域名后缀`，如 `example.com`，`根据这个后缀可以产生多个域名`，如 `www.example.com`、`a.example.com`、`b.example.com` 等。域名和 IP 是相互对应的，一个域名只能对应一台计算机主机。

域名注册实际上是通过付费获得域名一年或几年的`使用权`的过程。

### 网站备案

域名本身是无需备案的，但要实名认证，只有这个域名指向**中国大陆地区服务器的网站**时才需要备案。国家工信部规定，未取得许可或者未履行备案手续的网站不得从事互联网信息服务，否则属违法行为。

### 域名解析

域名解析是指您通过输入域名访问网站时，将域名解析到对应的 IP，找到对应服务器，打开对应的访问页面。

## 域名组成

域名通常由若干部分组成，**从右向左**依次表示不同的层级。以"www.example.com"为例，它包括以下几个部分：

1. 顶级域（Top-Level Domain，TLD）：顶级域位于最右边，是域名的最高级别。在示例中，".com"就是顶级域。其他常见的顶级域还包括“.net”、“.org”、“.edu”、“.gov”等。此外，还有国家代码顶级域（Country Code Top-Level Domains，ccTLD），如“.cn”代表中国、“.uk”代表英国等。

2. 二级域（Second-Level Domain）：紧跟在顶级域后面，是在互联网上注册的名字或标识。在示例中，"example"就是二级域，通常用于指代特定的组织、公司、个人或主题。

3. 子域（Subdomain）：子域名位于二级域名前面，通过句点与其连接。例如，在"www.example.com"中，“www”就是一个常见的子域名。子域名可以用来指代特定的服务器、服务或功能。

总的来说，域名的组成是按照一定的层级结构组织起来的，从高到低依次为顶级域、二级域和子域。这种结构使得域名具有清晰的层级关系，并且能够清晰地表示出不同的组织、国家或类型。