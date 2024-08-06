---
title: Creating mirrored zfs on Debian
description: ZFS is a powerful filesystem that combines the functionality of a volume manager with a filesystem. One of its key features is the ability to create mirrored storage pools for redundancy and increased reliability. This guide will walk you through the process of creating a mirrored ZFS pool on Debian (Ubuntu/Mint etc) using SATA SSDs.
image: preview.jpg
author: rahulsharma
date: 2024-08-04
template: article
tags:
    - linux
    - shell
    - filesystem
    - ai-assisted-blog
---

I recently acquired two high-endurance Intel SATA SSDs: the [Intel DC S3710](https://www.intel.com/content/dam/www/public/us/en/documents/product-specifications/ssd-dc-s3710-spec.pdf) and [Intel DC S3700](https://www.intel.com/content/dam/www/public/us/en/documents/product-specifications/ssd-dc-s3700-spec.pdf).

### Advantages of ZFS:

- **Pooled Storage**: Combine multiple drives into a single storage pool.
- **Copy-on-Write**: Ensures data is never overwritten in place, enhancing data integrity.
- **Snapshots**: Create point-in-time copies of your data for easy recovery.
- **Data Integrity Verification and Automatic Repair**: Detects and corrects data corruption automatically.
- **RAID-Z**: Provides RAID-like redundancy with the benefits of ZFS.

I primarily use ZFS for mirroring (RAID-Z) and data integrity. Since both SSDs are enterprise-grade drives previously used in servers, my goal is to create a mirrored pool to ensure data redundancy and reliability.

## Prerequisites

Before you begin, ensure you have:

- Using debian flavor OS on a separate boot drive (my case NVME SSD).
- Two extra SATA SSDs to create the mirrored ZFS pool.
- Basic knowledge of command-line operations.

## Step 1: Install ZFS Utilities

First, you need to install the ZFS utilities. Open a terminal and run:

```bash
sudo apt update
sudo apt install zfsutils-linux
```

## Step 2: Prepare the SATA SSDs

1. **Identify the Disks**

   Use the `lsblk` or `fdisk -l` command to identify your SATA SSDs. Assume they are `/dev/sdb` and `/dev/sdc`.

    `lsblk` should output something like this
    ```bash
    NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
    sda           8:0    0   1.8T  0 disk 
    sdb           8:16   0 372.6G  0 disk 
    sdc           8:32   0 372.6G  0 disk 
    nvme0n1     259:0    0 931.5G  0 disk 
    ├─nvme0n1p1 259:1    0   524M  0 part /boot/efi
    ├─nvme0n1p2 259:2    0 465.2G  0 part /
    └─nvme0n1p3 259:3    0 465.8G  0 part
    ```

    or `fdisk -l` should have something like this
    ```bash
    Disk /dev/nvme0n1: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors
    Disk model: CT1000P3SSD8                            
    ...
    ...
    Disk /dev/sdb: 372.61 GiB, 400088457216 bytes, 781422768 sectors
    Disk model: INTEL SSDSC2BA40
    ...
    ...
    Disk /dev/sdc: 372.61 GiB, 400088457216 bytes, 781422768 sectors
    Disk model: INTEL SSDSC2BA40
    ...
    ...
    ```

2. **Partition the Disks (Optional)**

   If you want to create partitions, use `fdisk` or `parted`. For simplicity, we will use the entire disks.

## Step 3: Create the ZFS Pool

To create a mirrored ZFS pool, use the `zpool create` command:

```bash
sudo zpool create mypool mirror /dev/sdb /dev/sdc
```

In this command:
- `mypool` is the name of your ZFS pool.
- `mirror` specifies that the disks will be mirrored.
- `/dev/sdb` and `/dev/sdc` are the SATA SSDs.

## Step 4: Verify the Pool

Check the status of your ZFS pool to ensure it's created correctly:

```bash
sudo zpool status
```

You should see output indicating that the pool `mypool` is created and the disks are mirrored.

```bash
  pool: mypool
 state: ONLINE
config:

	NAME      STATE     READ WRITE CKSUM
	 mypool   ONLINE       0     0     0
	mirror-0  ONLINE       0     0     0
      sdb     ONLINE       0     0     0
	  sdc     ONLINE       0     0     0

errors: No known data errors
```

## Step 5: Create a ZFS Filesystem

Create a ZFS filesystem within your pool:

```bash
sudo zfs create mypool/mydataset
```

Replace `mypool/mydataset` with your preferred dataset name.

## Step 6: Mount the Filesystem

ZFS filesystems are mounted automatically by default. You can check the mount point with:

```bash
sudo zfs get mountpoint mypool/mydataset
```

```bash
NAME              PROPERTY    VALUE              SOURCE
mypool/mydataset  mountpoint  /mypool/mydataset  default
```

If you need to change the mount point, use:

```bash
sudo zfs set mountpoint=/path/to/mount mypool/mydataset
```

Replace `/path/to/mount` with your desired directory.

## Step 7: Check Space Usage

To check the free space available on your ZFS pool, use:

```bash
sudo zpool list
```

This command provides an overview of the pool’s capacity, including the total space, used space, and free space.

Example Output:
```bash
NAME    SIZE  ALLOC   FREE    CAP  DEDUP  HEALTH  ALTROOT
mypool  1.00T  200G   800G    20%  1.00x  ONLINE  -
```
In this example:

* `SIZE` is the total size of the pool.
* `ALLOC` is the amount of space currently allocated.
* `FREE` is the amount of free space available.
* `CAP` is the percentage of space used.

To see space usage for a specific ZFS filesystem or dataset, use:
```bash
sudo zfs list
```

To get detailed information about a dataset, use:

```bash
sudo zfs get all mypool/mydataset
```

## Things to keep in mind

### 1. User Access

Since we are running almost all of the commands as `sudo` local user won;t have access to newly created mount. We can use `chown` command to give access to current user.

```bash
sudo chown -R $USER /mypool/mydataset
```

### 2. Monitoring and Maintenance

Regularly check the health of your ZFS pool using `zpool status` and `zpool scrub` to maintain data integrity.

### 3. Properly Shut Down the PC

Before shutting down, ensure that all data has been correctly copied and that there are no ongoing write operations. You can verify the pool’s status:

```bash
sudo zpool status
```

Since `zfs` has COW (Copy-On-Write) it should be fine even if you have a powerloss. In my case both of the disk has enhanced power-loss data protection feature.

### 4. Unmount the ZFS Filesystem (Optional)

While ZFS usually handles unmounting automatically, you can manually unmount the filesystem if needed:

```bash
sudo zfs unmount mypool/mydataset
```

If you have multiple datasets, you might need to unmount them individually or use:

```bash
sudo zfs unmount -a
```

## Conclusion

By following these steps, you can create a mirrored ZFS pool on Ubuntu or Linux Mint using SATA SSDs. ZFS offers robust data protection features, and a mirrored setup ensures that your data is duplicated across multiple drives for enhanced reliability.

Always back up important data. Remember the old saying [RAID is NOT a backup!](https://www.raidisnotabackup.com/).

Feel free to explore further ZFS features and configurations to optimize your setup based on your specific needs.
