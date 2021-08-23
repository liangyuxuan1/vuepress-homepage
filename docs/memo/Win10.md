# Config the development environment on Windows 10

Attention: Software versions may vary at the time of download, but the versions of python, CUDA and pytorch should match.

## Install git
- run Git-2.32.0-64-bit.exe

## Install Cuda Toolkit 10.2 for Windows
- run cuda_10.2.89_441.22_win10.exe. If the system reboot, run it again.
- run cuda_10.2.1_win10.exe, patch 1.
- run cuda_10.2.2_win10.exe, patch 2. 
- install cuDNN. Unzip cudnn-10.2-windows10-x64-v8.2.1.32.zip, and copy the extracted files to C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v10.2

## Install Anaconda

## Install Pytorch
- conda create -n pytorch181 pip python=3.8
- conda activate pytorch181
- cd to downloaded file path
- pip install torch-1.8.1+cu102-cp38-cp38-win_amd64.whl
- pip install torchvision-0.9.1+cu102-cp38-cp38-win_amd64.whl
- pip install opencv-python
- pip install tensorflow-2.5.0-cp38-cp38-win_amd64.whl 
- pip install jupyter

## Install VSCode
- Install python extension
- open Anaconda Power Shell, run "set-ExecutionPolicy RemoteSigned" as administrator

## Config Gitee and Github
- git config --global user.email "872277196@qq.com"
- git config --global user.name "liangyuxuan1"
- ssh-keygen -t rsa -C “liangyuxuan1” 
- ssh -T git@github.com
- ssh -T git@gitee.com
- add key to security settings of github and gitee

## Visualization of training using Tensorboard
- Enter the virtual environment of Pytorch181: conda activate pytorch181
- tensorboard --logdir=e:\phasefunction\traning_results
- download the charts (svg format)
- convert svg to png online. This one is good: https://www.svgtopng.me/

