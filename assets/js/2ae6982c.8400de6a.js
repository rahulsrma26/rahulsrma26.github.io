"use strict";(self.webpackChunkrahulsrma_26_github_io=self.webpackChunkrahulsrma_26_github_io||[]).push([[7143],{4232:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var t=s(4848),i=s(8453);const r={title:"Mounting SMB share on Debian",comments:!0,date:new Date("2023-05-16T00:00:00.000Z"),tags:["linux","network"],description:"Learn how to mount and auto-mount SMB shares on Ubuntu or Linux Mint with this step-by-step guide. The tutorial covers everything from installing necessary packages to configuring auto-mounting using CIFS utilities, making it easy to access network drives on your Linux system.",keywords:["Mount SMB share Ubuntu","Auto-mount CIFS Ubuntu","Mount network drive Linux","Samba share Linux setup","CIFS utils Ubuntu tutorial","SMB share auto mount","Ubuntu mount Windows share","Linux Samba client setup","Network share Ubuntu","Ubuntu Mint SMB mount"]},o=void 0,a={id:"linux/smb-mount/index",title:"Mounting SMB share on Debian",description:"Learn how to mount and auto-mount SMB shares on Ubuntu or Linux Mint with this step-by-step guide. The tutorial covers everything from installing necessary packages to configuring auto-mounting using CIFS utilities, making it easy to access network drives on your Linux system.",source:"@site/docs/linux/02-smb-mount/index.md",sourceDirName:"linux/02-smb-mount",slug:"/linux/smb-mount/",permalink:"/docs/linux/smb-mount/",draft:!1,unlisted:!1,tags:[{inline:!0,label:"linux",permalink:"/docs/tags/linux"},{inline:!0,label:"network",permalink:"/docs/tags/network"}],version:"current",lastUpdatedAt:172496739e4,frontMatter:{title:"Mounting SMB share on Debian",comments:!0,date:"2023-05-16T00:00:00.000Z",tags:["linux","network"],description:"Learn how to mount and auto-mount SMB shares on Ubuntu or Linux Mint with this step-by-step guide. The tutorial covers everything from installing necessary packages to configuring auto-mounting using CIFS utilities, making it easy to access network drives on your Linux system.",keywords:["Mount SMB share Ubuntu","Auto-mount CIFS Ubuntu","Mount network drive Linux","Samba share Linux setup","CIFS utils Ubuntu tutorial","SMB share auto mount","Ubuntu mount Windows share","Linux Samba client setup","Network share Ubuntu","Ubuntu Mint SMB mount"]},sidebar:"docsSidebar",previous:{title:"Passwordless SSH and Jump servers",permalink:"/docs/linux/ssh-jump/"},next:{title:"Creating mirrored zfs on Debian",permalink:"/docs/linux/zfs-mirror/"}},l={},u=[{value:"Step-1: Cifs-utils Package installation",id:"step-1-cifs-utils-package-installation",level:2},{value:"Step-2: Check servers and mounts",id:"step-2-check-servers-and-mounts",level:2},{value:"Step-3: Creating Directory",id:"step-3-creating-directory",level:2},{value:"Step-4: Creating Credentials file",id:"step-4-creating-credentials-file",level:2},{value:"Step-5: Mounting share",id:"step-5-mounting-share",level:2},{value:"Step-6: Auto Mounting",id:"step-6-auto-mounting",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You might be running a NAS sever on your local network or sharing some drive on different windows PC that you want to access on your linux server/desktop.  In this post, we will learn how to auto mount on your machine with different access level."}),"\n",(0,t.jsx)(n.p,{children:"Server Message Block (SMB) is a communication protocol originally developed in 1983 by Barry A. Feigenbaum at IBM. SMB enables file sharing, printer sharing, network browsing, and inter-process communication (through named pipes) over a computer network. SMB serves as the basis for Microsoft's Distributed File System implementation. SMB relies on the TCP and IP protocols for transport. This combination allows file sharing over complex, interconnected networks, including the public Internet."}),"\n",(0,t.jsx)(n.h2,{id:"step-1-cifs-utils-package-installation",children:"Step-1: Cifs-utils Package installation"}),"\n",(0,t.jsx)(n.p,{children:"Insall Samba and CIFS utils."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo apt update\nsudo apt install smbclient cifs-utils\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-2-check-servers-and-mounts",children:"Step-2: Check servers and mounts"}),"\n",(0,t.jsxs)(n.p,{children:["For this article we will assume that server ip is ",(0,t.jsx)(n.code,{children:"192.168.123.456"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"smbclient -L //192.168.123.456\n"})}),"\n",(0,t.jsx)(n.p,{children:"This should list all the visible servers and shares."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ smbclient -L //192.168.123.456\nPassword for [WORKGROUP\\username]:\n\n    Sharename       Type      Comment\n    ---------       ----      -------\n    data            Disk      data and downloads\n    home            Disk      Home directory of username\nSMB1 disabled -- no workgroup available\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-3-creating-directory",children:"Step-3: Creating Directory"}),"\n",(0,t.jsx)(n.p,{children:"We will now create directory for mounting the shared drive:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo mkdir /media/share\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or if we want to mount for the current user only:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo mkdir ~/share\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-4-creating-credentials-file",children:"Step-4: Creating Credentials file"}),"\n",(0,t.jsxs)(n.p,{children:["Instead of putting our username and password everywhere we will create a credentials file. In this example we will use ",(0,t.jsx)(n.code,{children:"nano"})," editor but you can use any editor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo nano /root/.servercred\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now we will enter username as password. You can also give domain like ",(0,t.jsx)(n.code,{children:"WORKGROUP"})," but usually it's optional."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"username=<server-username>\npassword=<server-password>\ndomain=value (optional)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Press ",(0,t.jsx)(n.code,{children:"CTRL+S"})," to save the file and ",(0,t.jsx)(n.code,{children:"CTRL+X"})," to exit from the nano editor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo chmod 400 /root/.servercred\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-5-mounting-share",children:"Step-5: Mounting share"}),"\n",(0,t.jsxs)(n.p,{children:["In this step we will assume that server ip is ",(0,t.jsx)(n.code,{children:"192.168.123.456"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo mount -t cifs -o rw,vers=3.0,credentials=/root/.servercred //192.168.123.456/sharedDir /media/share\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Above command gives only ",(0,t.jsx)(n.code,{children:"root"})," to read and write. But if we want to give the write access to local user then we need to provide ",(0,t.jsx)(n.code,{children:"uid"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo mount -t cifs -o rw,vers=3.0,credentials=/root/.servercred,uid=12345 //192.168.123.456/sharedDir /media/share\n"})}),"\n",(0,t.jsx)(n.p,{children:"To unmount we can use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo unmount -l /media/share\n"})}),"\n",(0,t.jsx)(n.h2,{id:"step-6-auto-mounting",children:"Step-6: Auto Mounting"}),"\n",(0,t.jsxs)(n.p,{children:["For this to automatically mount we need to update ",(0,t.jsx)(n.code,{children:"fstab"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"sudo nano /etc/fstab\n"})}),"\n",(0,t.jsx)(n.p,{children:"Append the config in the file, save and exit."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"//192.168.123.456/sharedDir /media/share cifs rw,vers=3.0,credentials=/root/.servercred\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);