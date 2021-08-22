# Config Xubuntu

## General

1. Change the default source to a fast one, such as mirrors.aliyun.com or mirrors.ustc.edu.cn. Refer to here: https://mirrors.ustc.edu.cn/help/ubuntu.html

2. Install gedit: ``sudo apt-get install gedit`` 

3. Install chrom browser: Menu->Software, search chromium and install.

## Install Cuda

First, update display driver: Settings->Additional Drivers, select a 'proprietary' version.


1. Install cuda: https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html

    ``sudo dpkg -i cuda-repo-ubuntu1804-10-2-local-10.2.89-440.33.01_1.0-1_amd64.deb``

    ``sudo apt-key add /var/cuda-repo-10-2-local-10.2.89-440.33.01/7fa2af80.pub``

    ``sudo apt-get update``

    ``sudo apt-get install cuda``

2. Install libcudnn: https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html

    ``sudo dpkg -i libcudnn8_8.2.1.32-1+cuda10.2_amd64.deb``

2. Environment setup

    ``sudo gedit /etc/profile``

    add the following lines:

    ``PATH=/usr/local/cuda-10.2/bin:$PATH``
    
    ``export PATH``

    then run:

    ``source /etc/profile``

    
    ``sudo gedit /etc/ld.so.conf.d/cuda.conf`` 

    add the following line:

    ``/usr/local/cuda-10.2/lib64``

    then run

    ``sudo ldconfig``

## Install Anaconda


    sh ./Anaconda3-2021.05-Linux-x86_64.sh


## Install Pytorch

Open a terminal at the downloaded file directory

- conda create -n pytorch181 pip python=3.8
- conda activate pytorch181
- pip install torch-1.8.1+cu102-cp38-cp38-linux_x86_64.whl 
- pip install torchvision-0.9.1+cu102-cp38-cp38-linux_x86_64.whl 
- pip install  opencv_python-4.5.3.56-cp38-cp38-manylinux2014_x86_64.whl 
- pip install tensorflow-2.5.0-cp38-cp38-manylinux2010_x86_64.whl 
- pip install jupyter

## Install VScode

## Config github and gitee, same as in Windows
