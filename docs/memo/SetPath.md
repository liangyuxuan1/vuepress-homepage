# 可执行文件路径

编辑PATH

sudo gedit /etc/profile 

添加路径

	PATH=/usr/local/opencv/bin:$PATH
	PATH=/usr/local/cuda/bin:$PATH
	PATH=/usr/local/MATLAB/MATLAB_Production_Server/R2013a/bin/:$PATH
	export PATH

	PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:$PKG_CONFIG_PATH
	export PKG_CONFIG_PATH

更新路径

source  /etc/profile

# LIB 路径

可以在 /etc/profile中添加： 例如 export LD_LIBRARY_PATH=$LD_LIBRARY_LIB:/opt/intel/lib/intel64:/opt/intel/mkl/lib/intel64

或者：

linux在加载动态库的时候，会去标准路径下(/lib,/usr/lib)下去寻找应用程序用到的动态库。对于那些不标准的路径下安装的lib库，linux将非标准路经加入 /etc/ld.so.conf，然后运行 ldconfig 生成 ld.so.cache。 Linux在加载共享库的时候，会从 ld.so.cache 查找。想查看下你的库是否已经在ld.so.cache中，可以这样 ldconfig -p | grep lib**就可以了。

对于，Ubuntu来说，还与其他的LINUX系统不一样，在/etc/ld.so.conf中只有一句`include /etc/ld.so.conf.d/*.conf`，也就是说它我们不能在/etc/ld.so.conf下添加，但是我们可以在/etc/ld.so.conf.d下新建一个*.conf在这里面添加你的非标准路径就可以了，记得调用sudo ldconfig 生成ld.so.cache文件就可以了.