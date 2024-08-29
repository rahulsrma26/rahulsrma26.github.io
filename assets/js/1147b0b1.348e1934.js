"use strict";(self.webpackChunkrahulsrma_26_github_io=self.webpackChunkrahulsrma_26_github_io||[]).push([[7239],{8041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(4848),i=r(8453);const n={slug:"representing-matrix-in-cpp",title:"Representing Matrix in C++",comments:!0,tags:["cpp","coding"],image:"./preview.png",description:"Learn how to represent and manipulate matrices in C++ with this comprehensive guide. The article covers matrix creation, initialization, and operations using 2D arrays and dynamic memory, complete with examples and code snippets for better understanding",keywords:["Matrix in C++ tutorial","C++ 2D array matrix","Matrix operations C++ code","C++ dynamic matrix","Matrix programming C++ examples","Initialize matrix in C++","Matrix representation tutorial","C style Matrix","Matrix from vector of vectors"]},o=void 0,s={permalink:"/articles/representing-matrix-in-cpp",source:"@site/articles/2017-11-11-representing-matrix-in-cpp/index.md",title:"Representing Matrix in C++",description:"Learn how to represent and manipulate matrices in C++ with this comprehensive guide. The article covers matrix creation, initialization, and operations using 2D arrays and dynamic memory, complete with examples and code snippets for better understanding",date:"2017-11-11T00:00:00.000Z",tags:[{inline:!0,label:"cpp",permalink:"/articles/tags/cpp"},{inline:!0,label:"coding",permalink:"/articles/tags/coding"}],readingTime:5.25,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"representing-matrix-in-cpp",title:"Representing Matrix in C++",comments:!0,tags:["cpp","coding"],image:"./preview.png",description:"Learn how to represent and manipulate matrices in C++ with this comprehensive guide. The article covers matrix creation, initialization, and operations using 2D arrays and dynamic memory, complete with examples and code snippets for better understanding",keywords:["Matrix in C++ tutorial","C++ 2D array matrix","Matrix operations C++ code","C++ dynamic matrix","Matrix programming C++ examples","Initialize matrix in C++","Matrix representation tutorial","C style Matrix","Matrix from vector of vectors"]},unlisted:!1,prevItem:{title:"Pride & Patience (dragonball z painting)",permalink:"/articles/pride-and-patience"},nextItem:{title:"Animation using HTML5 and javascript",permalink:"/articles/falling-matrix"}},m={image:r(9893).A,authorsImageUrls:[]},c=[];function p(e){const t={img:"img",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Preview",src:r(6708).A+"#reverse-invertable",width:"680",height:"168"})}),"\n",(0,a.jsx)(t.p,{children:"Usually, we access elements of a 2D array, that is saved in a continuous memory like array[row*N+column]. Which is not as readable as array[row][column]. But a vector of vector has performance issues. This article shows an object-oriented way of representing a matrix as a C++ class without losing performance."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9893:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/preview-305a4b4207ef83245b755e6271fccdaa.png"},6708:(e,t,r)=>{r.d(t,{A:()=>a});const a="data:image/png;base64,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"},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var a=r(6540);const i={},n=a.createContext(i);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);