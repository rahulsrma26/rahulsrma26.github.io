---
title: Mounting SMB share on Debian
comments: true
tags: [linux, network]
description: Learn how to mount and auto-mount SMB shares on Ubuntu or Linux Mint with this step-by-step guide. The tutorial covers everything from installing necessary packages to configuring auto-mounting using CIFS utilities, making it easy to access network drives on your Linux system.
keywords:
  - Mount SMB share Ubuntu
  - Auto-mount CIFS Ubuntu
  - Mount network drive Linux
  - Samba share Linux setup
  - CIFS utils Ubuntu tutorial
  - SMB share auto mount
  - Ubuntu mount Windows share
  - Linux Samba client setup
  - Network share Ubuntu
  - Ubuntu Mint SMB mount
---

You might be running a NAS sever on your local network or sharing some drive on different windows PC that you want to access on your linux server/desktop.  In this post, we will learn how to auto mount on your machine with different access level.

Server Message Block (SMB) is a communication protocol originally developed in 1983 by Barry A. Feigenbaum at IBM. SMB enables file sharing, printer sharing, network browsing, and inter-process communication (through named pipes) over a computer network. SMB serves as the basis for Microsoft's Distributed File System implementation. SMB relies on the TCP and IP protocols for transport. This combination allows file sharing over complex, interconnected networks, including the public Internet.

## Step-1: Cifs-utils Package installation

Insall Samba and CIFS utils.

```sh
sudo apt update
sudo apt install smbclient cifs-utils
```

## Step-2: Check servers and mounts

For this article we will assume that server ip is `192.168.123.456`.

```sh
smbclient -L //192.168.123.456
```

This should list all the visible servers and shares.

```sh
$ smbclient -L //192.168.123.456
Password for [WORKGROUP\username]:

    Sharename       Type      Comment
    ---------       ----      -------
    data            Disk      data and downloads
    home            Disk      Home directory of username
SMB1 disabled -- no workgroup available
```

## Step-3: Creating Directory

We will now create directory for mounting the shared drive:

```sh
sudo mkdir /media/share
```

Or if we want to mount for the current user only:

```sh
sudo mkdir ~/share
```

## Step-4: Creating Credentials file

Instead of putting our username and password everywhere we will create a credentials file. In this example we will use `nano` editor but you can use any editor.

```sh
sudo nano /root/.servercred
```

Now we will enter username as password. You can also give domain like `WORKGROUP` but usually it's optional.

```txt
username=<server-username>
password=<server-password>
domain=value (optional)
```

Press `CTRL+S` to save the file and `CTRL+X` to exit from the nano editor.

```sh
sudo chmod 400 /root/.servercred
```

## Step-5: Mounting share

In this step we will assume that server ip is `192.168.123.456`.

```sh
sudo mount -t cifs -o rw,vers=3.0,credentials=/root/.servercred //192.168.123.456/sharedDir /media/share
```

Above command gives only `root` to read and write. But if we want to give the write access to local user then we need to provide `uid`.

```sh
sudo mount -t cifs -o rw,vers=3.0,credentials=/root/.servercred,uid=12345 //192.168.123.456/sharedDir /media/share
```

To unmount we can use:

```sh
sudo unmount -l /media/share
```

## Step-6: Auto Mounting

For this to automatically mount we need to update `fstab`.

```sh
sudo nano /etc/fstab
```

Append the config in the file, save and exit.

```sh
//192.168.123.456/sharedDir /media/share cifs rw,vers=3.0,credentials=/root/.servercred
```

---

First published on 2023-05-16
