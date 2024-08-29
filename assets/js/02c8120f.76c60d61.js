"use strict";(self.webpackChunkrahulsrma_26_github_io=self.webpackChunkrahulsrma_26_github_io||[]).push([[7763],{852:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(4848),o=s(8453);const r={title:"Creating mirrored zfs on Debian",comments:!0,date:new Date("2024-08-04T00:00:00.000Z"),tags:["linux","filesystem","ai-assisted"],description:"Learn how to create a mirrored ZFS pool on Debian or Ubuntu using SATA SSDs with this step-by-step guide. The article covers installation, pool creation, TRIM, SCRUB operations, and performance optimization, ensuring robust data integrity and reliability for your storage needs.",keywords:["ZFS mirror setup Debian","Create mirrored ZFS pool","ZFS on Ubuntu tutorial","Debian ZFS installation","ZFS data integrity guide","Mirror ZFS pool Linux","ZFS pool configuration","ZFS SSD performance","ZFS TRIM and SCRUB","ZFS filesystem management"]},t=void 0,a={id:"linux/zfs-mirror/index",title:"Creating mirrored zfs on Debian",description:"Learn how to create a mirrored ZFS pool on Debian or Ubuntu using SATA SSDs with this step-by-step guide. The article covers installation, pool creation, TRIM, SCRUB operations, and performance optimization, ensuring robust data integrity and reliability for your storage needs.",source:"@site/docs/linux/03-zfs-mirror/index.md",sourceDirName:"linux/03-zfs-mirror",slug:"/linux/zfs-mirror/",permalink:"/docs/linux/zfs-mirror/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"linux",permalink:"/docs/tags/linux"},{inline:!0,label:"filesystem",permalink:"/docs/tags/filesystem"},{inline:!0,label:"ai-assisted",permalink:"/docs/tags/ai-assisted"}],version:"current",lastUpdatedAt:172496739e4,frontMatter:{title:"Creating mirrored zfs on Debian",comments:!0,date:"2024-08-04T00:00:00.000Z",tags:["linux","filesystem","ai-assisted"],description:"Learn how to create a mirrored ZFS pool on Debian or Ubuntu using SATA SSDs with this step-by-step guide. The article covers installation, pool creation, TRIM, SCRUB operations, and performance optimization, ensuring robust data integrity and reliability for your storage needs.",keywords:["ZFS mirror setup Debian","Create mirrored ZFS pool","ZFS on Ubuntu tutorial","Debian ZFS installation","ZFS data integrity guide","Mirror ZFS pool Linux","ZFS pool configuration","ZFS SSD performance","ZFS TRIM and SCRUB","ZFS filesystem management"]},sidebar:"docsSidebar",previous:{title:"Mounting SMB share on Debian",permalink:"/docs/linux/smb-mount/"}},l={},d=[{value:"Advantages of ZFS",id:"advantages-of-zfs",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Install ZFS Utilities",id:"step-1-install-zfs-utilities",level:2},{value:"Step 2: Prepare the SATA SSDs",id:"step-2-prepare-the-sata-ssds",level:2},{value:"Step 3: Create the ZFS Pool",id:"step-3-create-the-zfs-pool",level:2},{value:"Step 4: Verify the Pool",id:"step-4-verify-the-pool",level:2},{value:"Step 5: Create a ZFS Filesystem",id:"step-5-create-a-zfs-filesystem",level:2},{value:"Step 6: Mount the Filesystem",id:"step-6-mount-the-filesystem",level:2},{value:"Step 7: Check Space Usage",id:"step-7-check-space-usage",level:2},{value:"Things to keep in mind",id:"things-to-keep-in-mind",level:2},{value:"1. User Access",id:"1-user-access",level:3},{value:"2. Monitoring and Maintenance",id:"2-monitoring-and-maintenance",level:3},{value:"2.1. Running TRIM",id:"21-running-trim",level:3},{value:"<strong>Why TRIM?</strong>",id:"why-trim",level:4},{value:"<strong>How to Enable and Run TRIM:</strong>",id:"how-to-enable-and-run-trim",level:4},{value:"2.2. Running SCRUB",id:"22-running-scrub",level:3},{value:"<strong>Why SCRUB?</strong>",id:"why-scrub",level:4},{value:"<strong>How to Perform a SCRUB:</strong>",id:"how-to-perform-a-scrub",level:4},{value:"3. Limiting RAM usage",id:"3-limiting-ram-usage",level:3},{value:"4. Properly Shut Down the PC",id:"4-properly-shut-down-the-pc",level:3},{value:"5. Unmount the ZFS Filesystem (Optional)",id:"5-unmount-the-zfs-filesystem-optional",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"ZFS is a powerful filesystem that combines the functionality of a volume manager with a filesystem. One of its key features is the ability to create mirrored storage pools for redundancy and increased reliability. This guide will walk you through the process of creating a mirrored ZFS pool on Debian (Ubuntu/Mint etc) using SATA SSDs."}),"\n",(0,i.jsxs)(n.p,{children:["I recently acquired two high-endurance Intel SATA SSDs: the ",(0,i.jsx)(n.a,{href:"https://www.intel.com/content/dam/www/public/us/en/documents/product-specifications/ssd-dc-s3710-spec.pdf",children:"Intel DC S3710"})," and ",(0,i.jsx)(n.a,{href:"https://www.intel.com/content/dam/www/public/us/en/documents/product-specifications/ssd-dc-s3700-spec.pdf",children:"Intel DC S3700"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"advantages-of-zfs",children:"Advantages of ZFS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pooled Storage"}),": Combine multiple drives into a single storage pool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Copy-on-Write"}),": Ensures data is never overwritten in place, enhancing data integrity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Snapshots"}),": Create point-in-time copies of your data for easy recovery."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Integrity Verification and Automatic Repair"}),": Detects and corrects data corruption automatically."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RAID-Z"}),": Provides RAID-like redundancy with the benefits of ZFS."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"I primarily use ZFS for mirroring (RAID-Z) and data integrity. Since both SSDs are enterprise-grade drives previously used in servers, my goal is to create a mirrored pool to ensure data redundancy and reliability."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before you begin, ensure you have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Using debian flavor OS on a separate boot drive (my case NVME SSD)."}),"\n",(0,i.jsx)(n.li,{children:"Two extra SATA SSDs to create the mirrored ZFS pool."}),"\n",(0,i.jsx)(n.li,{children:"Basic knowledge of command-line operations."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-install-zfs-utilities",children:"Step 1: Install ZFS Utilities"}),"\n",(0,i.jsx)(n.p,{children:"First, you need to install the ZFS utilities. Open a terminal and run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install zfsutils-linux\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-prepare-the-sata-ssds",children:"Step 2: Prepare the SATA SSDs"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Identify the Disks"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"lsblk"})," or ",(0,i.jsx)(n.code,{children:"fdisk -l"})," command to identify your SATA SSDs. Assume they are ",(0,i.jsx)(n.code,{children:"/dev/sdb"})," and ",(0,i.jsx)(n.code,{children:"/dev/sdc"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"lsblk"})," should output something like this"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nsda           8:0    0   1.8T  0 disk\nsdb           8:16   0 372.6G  0 disk\nsdc           8:32   0 372.6G  0 disk\nnvme0n1     259:0    0 931.5G  0 disk\n\u251c\u2500nvme0n1p1 259:1    0   524M  0 part /boot/efi\n\u251c\u2500nvme0n1p2 259:2    0 465.2G  0 part /\n\u2514\u2500nvme0n1p3 259:3    0 465.8G  0 part\n"})}),"\n",(0,i.jsxs)(n.p,{children:["or ",(0,i.jsx)(n.code,{children:"fdisk -l"})," should have something like this"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Disk /dev/nvme0n1: 931.51 GiB, 1000204886016 bytes, 1953525168 sectors\nDisk model: CT1000P3SSD8\n...\n...\nDisk /dev/sdb: 372.61 GiB, 400088457216 bytes, 781422768 sectors\nDisk model: INTEL SSDSC2BA40\n...\n...\nDisk /dev/sdc: 372.61 GiB, 400088457216 bytes, 781422768 sectors\nDisk model: INTEL SSDSC2BA40\n...\n...\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Partition the Disks (Optional)"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to create partitions, use ",(0,i.jsx)(n.code,{children:"fdisk"})," or ",(0,i.jsx)(n.code,{children:"parted"}),". For simplicity, we will use the entire disks."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-3-create-the-zfs-pool",children:"Step 3: Create the ZFS Pool"}),"\n",(0,i.jsxs)(n.p,{children:["To create a mirrored ZFS pool, use the ",(0,i.jsx)(n.code,{children:"zpool create"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool create mypool mirror /dev/sdb /dev/sdc\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this command:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mypool"})," is the name of your ZFS pool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mirror"})," specifies that the disks will be mirrored."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/dev/sdb"})," and ",(0,i.jsx)(n.code,{children:"/dev/sdc"})," are the SATA SSDs."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-4-verify-the-pool",children:"Step 4: Verify the Pool"}),"\n",(0,i.jsx)(n.p,{children:"Check the status of your ZFS pool to ensure it's created correctly:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool status\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You should see output indicating that the pool ",(0,i.jsx)(n.code,{children:"mypool"})," is created and the disks are mirrored."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  pool: mypool\n state: ONLINE\nconfig:\n\n    NAME      STATE     READ WRITE CKSUM\n     mypool   ONLINE       0     0     0\n    mirror-0  ONLINE       0     0     0\n      sdb     ONLINE       0     0     0\n      sdc     ONLINE       0     0     0\n\nerrors: No known data errors\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-5-create-a-zfs-filesystem",children:"Step 5: Create a ZFS Filesystem"}),"\n",(0,i.jsx)(n.p,{children:"Create a ZFS filesystem within your pool:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zfs create mypool/mydataset\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"mypool/mydataset"})," with your preferred dataset name."]}),"\n",(0,i.jsx)(n.h2,{id:"step-6-mount-the-filesystem",children:"Step 6: Mount the Filesystem"}),"\n",(0,i.jsx)(n.p,{children:"ZFS filesystems are mounted automatically by default. You can check the mount point with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zfs get mountpoint mypool/mydataset\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"NAME              PROPERTY    VALUE              SOURCE\nmypool/mydataset  mountpoint  /mypool/mydataset  default\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you need to change the mount point, use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zfs set mountpoint=/path/to/mount mypool/mydataset\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"/path/to/mount"})," with your desired directory."]}),"\n",(0,i.jsx)(n.h2,{id:"step-7-check-space-usage",children:"Step 7: Check Space Usage"}),"\n",(0,i.jsx)(n.p,{children:"To check the free space available on your ZFS pool, use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool list\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command provides an overview of the pool\u2019s capacity, including the total space, used space, and free space."}),"\n",(0,i.jsx)(n.p,{children:"Example Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"NAME    SIZE  ALLOC   FREE    CAP  DEDUP  HEALTH  ALTROOT\nmypool  1.00T  200G   800G    20%  1.00x  ONLINE  -\n"})}),"\n",(0,i.jsx)(n.p,{children:"In this example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SIZE"})," is the total size of the pool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ALLOC"})," is the amount of space currently allocated."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FREE"})," is the amount of free space available."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CAP"})," is the percentage of space used."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To see space usage for a specific ZFS filesystem or dataset, use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zfs list\n"})}),"\n",(0,i.jsx)(n.p,{children:"To get detailed information about a dataset, use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zfs get all mypool/mydataset\n"})}),"\n",(0,i.jsx)(n.h2,{id:"things-to-keep-in-mind",children:"Things to keep in mind"}),"\n",(0,i.jsx)(n.h3,{id:"1-user-access",children:"1. User Access"}),"\n",(0,i.jsxs)(n.p,{children:["Since we are running almost all of the commands as ",(0,i.jsx)(n.code,{children:"sudo"})," local user won;t have access to newly created mount. We can use ",(0,i.jsx)(n.code,{children:"chown"})," command to give access to current user."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo chown -R $USER /mypool/mydataset\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-monitoring-and-maintenance",children:"2. Monitoring and Maintenance"}),"\n",(0,i.jsx)(n.p,{children:"Proper maintenance of your ZFS pool is crucial for ensuring long-term performance and data integrity. Two important maintenance tasks are running TRIM and SCRUB operations. Here\u2019s a guide on how to perform these tasks:"}),"\n",(0,i.jsx)(n.h3,{id:"21-running-trim",children:"2.1. Running TRIM"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TRIM"})," is a command used to inform the SSD that certain blocks of data are no longer in use and can be cleaned up. This helps in maintaining SSD performance and prolonging the lifespan of the drives."]}),"\n",(0,i.jsx)(n.h4,{id:"why-trim",children:(0,i.jsx)(n.strong,{children:"Why TRIM?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Performance:"})," Helps SSDs maintain their performance by freeing up unused blocks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lifespan:"})," Reduces unnecessary write operations, which can extend the lifespan of the SSD."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"how-to-enable-and-run-trim",children:(0,i.jsx)(n.strong,{children:"How to Enable and Run TRIM:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check if TRIM is Enabled:"})}),"\n",(0,i.jsxs)(n.p,{children:["To ensure TRIM is enabled on your ZFS pool, check the ",(0,i.jsx)(n.code,{children:"autotrim"})," property:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool get autotrim mypool\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"autotrim"})," is set to ",(0,i.jsx)(n.code,{children:"off"}),", you should enable it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Enable TRIM:"})}),"\n",(0,i.jsx)(n.p,{children:"Enable TRIM on your ZFS pool with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool set autotrim=on mypool\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will ensure that TRIM operations are automatically performed on your pool as needed."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Manual TRIM (Optional):"})}),"\n",(0,i.jsx)(n.p,{children:"If you want to manually trigger a TRIM operation, use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool trim -a\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command will run TRIM on all datasets in your pool. Depending on the size of your pool and the amount of data, this operation may take some time."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"22-running-scrub",children:"2.2. Running SCRUB"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SCRUB"})," is a maintenance operation that checks the integrity of your ZFS pool\u2019s data. It scans the pool for errors, verifies checksums, and attempts to correct any detected issues."]}),"\n",(0,i.jsx)(n.h4,{id:"why-scrub",children:(0,i.jsx)(n.strong,{children:"Why SCRUB?"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Integrity:"})," Ensures that all data is accurate and free from corruption."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Error Detection:"})," Identifies and repairs silent data corruption before it becomes a problem."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"how-to-perform-a-scrub",children:(0,i.jsx)(n.strong,{children:"How to Perform a SCRUB:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Start a SCRUB Operation:"})}),"\n",(0,i.jsx)(n.p,{children:"Initiate a SCRUB on your ZFS pool with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool scrub mypool\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command starts the SCRUB process, which may take some time depending on the size and health of the pool."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Monitor SCRUB Progress:"})}),"\n",(0,i.jsx)(n.p,{children:"To check the status and progress of the SCRUB operation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool status\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command will show you detailed information about the SCRUB, including the progress and any errors detected."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Review Results:"})}),"\n",(0,i.jsxs)(n.p,{children:["After the SCRUB is complete, review the output of the ",(0,i.jsx)(n.code,{children:"zpool status"})," command. It will show if any errors were found and if they were repaired. Regularly reviewing these results helps ensure the ongoing health of your ZFS pool."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:" ~ sudo zpool status -t mypool\n pool: mypool\n state: ONLINE\n scan: scrub repaired 0B in 00:06:06 with 0 errors on Tue Aug 6 20:58:36 2024\n config:\n\n     NAME      STATE     READ WRITE CKSUM\n       mypool  ONLINE       0     0     0\n     mirror-0  ONLINE       0     0     0\n       sdb     ONLINE       0     0     0  (100% trimmed, completed at Tue 06 Aug 2024 20:51:02)\n       sdc     ONLINE       0     0     0  (100% trimmed, completed at Tue 06 Aug 2024 20:51:02)\n\n errors: No known data errors\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By regularly running TRIM and SCRUB operations, you ensure that your ZFS pool remains in optimal condition, providing reliable performance and data integrity for your storage needs."}),"\n",(0,i.jsx)(n.h3,{id:"3-limiting-ram-usage",children:"3. Limiting RAM usage"}),"\n",(0,i.jsx)(n.p,{children:"Managing RAM usage in ZFS is essential for systems with limited memory resources. ZFS utilizes a caching mechanism known as the Adaptive Replacement Cache (ARC) to keep frequently accessed data in RAM, enhancing access speed. By default, ZFS can use up to 50% of the system's memory for ARC. If the system requires additional memory for other tasks, ZFS will automatically release some of the ARC's memory to accommodate those needs, returning it to the pool of available memory. This behavior ensures efficient memory usage while maintaining ZFS performance."}),"\n",(0,i.jsxs)(n.p,{children:["You can check how much arc is using by running ",(0,i.jsx)(n.code,{children:"arc_summary"})," command. Which will show minimum and maximum amount of memory that will be used for caching:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-code",children:"...\nARC size (current):                                     1.4 %   56.3 MiB\n        Target size (adaptive):                        25.0 %    1.0 GiB\n        Min size (hard limit):                         25.0 %    1.0 GiB\n        Max size (high water):                           16:1   16.0 GiB\n...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A good rule of thumb will be setting up a minimum of ",(0,i.jsx)(n.code,{children:"1GB"})," and maximum as:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",children:"1GB + [1 GB/TB of storage] + [5GB/TB for Dedupe]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Which in my case will approximates to 3.4GB. Since I've plenty of RAM I will be rounding this up to 4GB."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'sudo echo "options zfs zfs_arc_max=4294967296" >> /etc/modprobe.d/zfs.conf\n'})}),"\n",(0,i.jsxs)(n.p,{children:["After this we need to either ",(0,i.jsx)(n.code,{children:"reboot"})," the system or reload the zfs module."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sudo modprobe -r zfs\nsudo modprobe zfs\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After ",(0,i.jsx)(n.code,{children:"reboot"})," and rerunning ",(0,i.jsx)(n.code,{children:"arc_summary"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-code",children:"        Max size (high water):                            4:1    4.0 GiB\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4-properly-shut-down-the-pc",children:"4. Properly Shut Down the PC"}),"\n",(0,i.jsx)(n.p,{children:"Before shutting down, ensure that all data has been correctly copied and that there are no ongoing write operations. You can verify the pool\u2019s status:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zpool status\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.code,{children:"zfs"})," has COW (Copy-On-Write) it should be fine even if you have a powerloss. In my case both of the disk also has enhanced power-loss data protection feature."]}),"\n",(0,i.jsx)(n.h3,{id:"5-unmount-the-zfs-filesystem-optional",children:"5. Unmount the ZFS Filesystem (Optional)"}),"\n",(0,i.jsx)(n.p,{children:"While ZFS usually handles unmounting automatically, you can manually unmount the filesystem if needed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zfs unmount mypool/mydataset\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you have multiple datasets, you might need to unmount them individually or use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo zfs unmount -a\n"})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"By following these steps, you can create a mirrored ZFS pool on Ubuntu or Linux Mint using SATA SSDs. ZFS offers robust data protection features, and a mirrored setup ensures that your data is duplicated across multiple drives for enhanced reliability."}),"\n",(0,i.jsx)(n.p,{children:"Always back up important data. Remember the old saying:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://www.raidisnotabackup.com/",children:"RAID is NOT a backup!"})})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Feel free to explore further ZFS features and configurations to optimize your setup based on your specific needs."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(6540);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);