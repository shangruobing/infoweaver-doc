# Linux服务器部署指南

## 服务器配置

- Ubuntu 20.0.4

- 腾讯云 2核心4GB SSD60G 学生价￥120/年

<!-- - IP地址 43.138.43.128

- 系统账号 ubuntu

- 密码srb010209! -->

  

## SSH

使用VScode RemoteSSH连接服务器

```shell
sudo apt install openssh-server
#查看SSH服务是否开启
ps aux|grep ssh
#开启服务
sudo systemctl start ssh.service
#本地生成公钥
ssh-keygen -R "远程服务器ip地址"
```



## ZSH

```shell
sudo apt install zsh
sudo apt install git
git clone https://github.com/robbyrussell/oh-my-zsh
chsh -s /bin/zsh

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
 
mkdir ~/.oh-my-zsh/plugins/incr
wget -P ~/.oh-my-zsh/plugins/incr  http://mimosa-pudica.net/src/incr-0.2.zsh
source ~/.oh-my-zsh/plugins/incr/incr*.zsh

source ~/.zshrc   
```



## Nginx

```shell
sudo apt-get install nginx
nginx -v
service nginx start

sudo vim /etc/nginx/sites-available/default
root /home/ubuntu/NFQA/frontend/dist;
sudo nginx -t
service nginx restart 
```

## uwsgi

```shell
sudo apt-get install libpcre3 libpcre3-dev
pip3.7 install uwsgi --no-cache-dir

sudo ln -s /home/ubuntu/.local/bin/uwsgi  /usr/bin/uwsgi

uwsgi --http :8000 --module NFQA.wsgi

ps -A 查看所有进程
pkill 进程号
sudo pkill -f uwsgi -9

uwsgi --ini uwsgi.ini
```

## SSL

```shell
cd ~/software/Python3.7.3
./configure --with-ssl
 
make
 
sudo make install
import ssl
```



## MySQL

```shell
sudo apt-get install mysql-server
#连接服务
sudo mysql -u root -p
show databases;
create database nfqa;
use nfqa;
mysql> source /home/NFQA/data/nfqa.sql;

service mysql status
service mysql start
service mysql stop

#退出命令行
quit
select user,authentication_string from user where user='root';
update user set authentication_string='123456' where user='root';


create user 'django-user'@'localhost' identified by '123456';
grant usage on *.* to 'django-user'@'localhost';
grant all privileges on nfqa.* to 'django-user'@'localhost';

INSERT INTO `QAS_user` (`id`, `name`, `username`, `role`, `password`, `last_login`) VALUES (1, '尚若冰', '若水', '0', '427a6f3407bed6ec08cd9684872a4d07', '2022-08-07 16:23:47.331502');
```



### Python3.7

```shell
#失败
sudo apt-get install python3.7
#手动安装
apt-get install gcc build-essential
apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev  libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev   xz-utils tk-dev

wget https://www.python.org/ftp/python/3.7.3/Python-3.7.3.tgz
make && make install
PATH=$PATH:$HOME/bin:/usr/local/python3.7.3/bin

```

## virtualenv 可选

```shell
pip install virtualenv
sudo pip install virtualenvwrapper
mkdir pythonenv没问题下一步：cd ~/，切换到用户家目录；
#找到并打开home目录下的 .zshrc 文件：vim .zshrc，
export WORKON_HOME=~/.environments，
source /usr/local/bin/virtualenvwrapper.sh
```



## Django

```shell
sudo git clone https://gitee.com/shangruobing/nfqa-backend-development.git
sudo pip3.7 install --upgrade pip --user
pip3.7 install -r requirements.txt --user
# 赋予文件操作权限
sudo chown ubuntu  NFQA/
sudo chmod  -R 777 NFQA
pip3.7 install zh_core_web_lg-3.2.0-py3-none-any.whl 

python3 manage.py makemigration
python3 manage.py migrate
python3 manage.py runserver
python3 manage.py collectstatic
```

## 防火墙

```shell
sudo apt install ufw
sudo ufw status verbose

sudo ufw enable
sudo ufw disable
sudo ufw default deny

sudo ufw allow 7474
```

## Pytorch

```shell
pip3.7  install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu
```



## Java

```shell
wget https://repo.huaweicloud.com/java/jdk/8u201-b09/jdk-8u201-linux-x64.tar.gz

tar -zxvf jdk-8u201-linux-x64.tar.gz

sudo vim /etc/profile
#环境变量
export JAVA_HOME=/home/ubuntu/java/jdk1.8.0_211

export JRE_HOME=${JAVA_HOME}/jre

export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib

export PATH=${JAVA_HOME}/bin:$PATH

source /etc/profile
java -version
```



## Neo4j

```shell
sudo curl -O http://dist.neo4j.org/neo4j-community-3.5.5-unix.tar.gz
tar -axvf neo4j-community-4.4.6-unix.tar.gz 

cd /home/ubuntu/NFQA/data/neo4j-community-4.4.6/bin/
sudo vim ../conf/neo4j.conf 

sudo ./neo4j start
sudo ./neo4j console
sudo ./neo4j status

#导入数据
./neo4j-admin  load --from=/home/NFQA/data/graph-dbms-neo4j.dump --database=nfqa

sudo ln -s /home/ubuntu/NFQA/data/neo4j-community-4.4.6/bin/neo4j /usr/bin/neo4j -f 
```



## Redis

```shell
sudo apt search redis
sudo apt-get update
sudo apt-get install redis-server
/usr/bin/redis-server

redis.conf设置守护进程
daemonize yes 
./redis-server &
```



## Linux

```shell
 查找僵尸进程
 ps -A -ostat,ppid,pid,cmd |grep -e '^[Zz]'
```

