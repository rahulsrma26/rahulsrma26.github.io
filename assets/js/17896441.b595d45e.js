"use strict";(self.webpackChunkrahulsrma_26_github_io=self.webpackChunkrahulsrma_26_github_io||[]).push([[8401],{2234:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(4084),i=n(7559),o=n(7293),l=n(4848);function r(e){let{className:t}=e;return(0,l.jsx)(o.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(r,{...e})]})}},1689:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(4164),s=n(4084),i=n(7559),o=n(7293),l=n(4848);function r(e){let{className:t}=e;return(0,l.jsx)(o.A,{type:"caution",title:(0,l.jsx)(s.Yh,{}),className:(0,a.A)(t,i.G.common.draftBanner),children:(0,l.jsx)(s.TT,{})})}var c=n(2234);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(r,{})]})}},2022:(e,t,n)=>{n.r(t),n.d(t,{default:()=>oe});var a=n(6540),s=n(1213),i=n(9532),o=n(4848);const l=a.createContext(null);function r(e){let{children:t,content:n}=e;const s=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:s,children:t})}function c(){const e=(0,a.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(4164),m=n(4581),h=n(1312),v=n(9022);function g(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(v.A,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(v.A,{...n,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,o.jsx)(g,{previous:e.previous,next:e.next})}var b=n(4586),p=n(8774),f=n(4070),j=n(7559),A=n(3886),N=n(3025);const _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=_[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:a}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(p.A,{to:n,onClick:a,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,b.A)(),{pluginId:s}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(s),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,f.HW)(s),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(C,{siteTitle:a,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(L,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,N.r)();return n.banner?(0,o.jsx)(k,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,N.r)();return n.badge?(0,o.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var M=n(2053),y=n(4336);function I(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,tags:s}=e,i=s.length>0,l=!!(t||n||a);return i||l?(0,o.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(M.A,{tags:s})})}),l&&(0,o.jsx)(y.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a})]}):null}var E=n(330);function w(e){const{metadata:t}=c(),{comments:n=!1}=t.frontMatter;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(I,{...e}),n&&(0,o.jsx)(E.A,{})]})}var B=n(1422),V=n(5195);const O={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function G(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",O.tocCollapsibleButton,!t&&O.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const R={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function P(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:s}=e;const{collapsed:i,toggleCollapsed:l}=(0,B.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(R.tocCollapsible,!i&&R.tocCollapsibleExpanded,n),children:[(0,o.jsx)(G,{collapsed:i,onClick:l}),(0,o.jsx)(B.N,{lazy:!0,className:R.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(V.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:s})})]})}const S={tocMobile:"tocMobile_ITEo"};function D(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(P,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,S.tocMobile)})}var F=n(7763);function U(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(F.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var z=n(1107),$=n(5533);function W(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(z.A,{as:"h1",children:n})}),(0,o.jsx)($.A,{children:t})]})}var q=n(6972),Y=n(9169),Q=n(6025);function X(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const J={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function Z(){const e=(0,Q.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(X,{className:J.breadcrumbHomeIcon})})})}const K={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ee(e){let{children:t,href:n,isLast:a}=e;const s="breadcrumbs__link";return a?(0,o.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,o.jsx)(p.A,{className:s,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:s,children:t})}function te(e){let{children:t,active:n,index:a,addMicrodata:s}=e;return(0,o.jsxs)("li",{...s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function ne(){const e=(0,q.OF)(),t=(0,Y.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,K.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(Z,{}),e.map(((t,n)=>{const a=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(te,{active:a,index:n,addMicrodata:!!s,children:(0,o.jsx)(ee,{href:s,isLast:a,children:t.label})},n)}))]})}):null}var ae=n(1689);const se={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ie(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),a=e.hide_table_of_contents,s=!a&&t.length>0;return{hidden:a,mobile:s?(0,o.jsx)(D,{}):void 0,desktop:!s||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(U,{})}}(),{metadata:a}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&se.docItemCol),children:[(0,o.jsx)(ae.A,{metadata:a}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:se.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ne,{}),(0,o.jsx)(H,{}),n.mobile,(0,o.jsx)(W,{children:t}),(0,o.jsx)(w,{})]}),(0,o.jsx)(x,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function oe(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(s.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(ie,{children:(0,o.jsx)(n,{})})]})})}},9022:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164),s=n(8774),i=n(4848);function o(e){const{permalink:t,title:n,subLabel:o,isNext:l}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=n(4848);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(s.A,{...n,linkClassName:l,linkActiveClassName:r})})}},5195:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(6540),s=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(8774),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const v=a.memo(h);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const g=(0,s.p)(),x=c??g.tableOfContents.minHeadingLevel,b=u??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:x,maxHeadingLevel:b});return d((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:b}}),[l,r,x,b])),(0,m.jsx)(v,{toc:p,className:n,linkClassName:l,...h})}},6133:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(8774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=n(4848);function l(e){let{permalink:t,label:n,count:l,description:r}=e;return(0,o.jsxs)(s.A,{href:t,title:r,className:(0,a.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,o.jsx)("span",{children:l})]})}},2053:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4164),s=n(1312),i=n(6133);const o={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(4848);function r(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.A)(o.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:o.tag,children:(0,l.jsx)(i.A,{...e})},e.permalink)))})]})}},4084:(e,t,n)=>{n.d(t,{AE:()=>r,Rc:()=>o,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var a=n(1312),s=n(5260),i=n(4848);function o(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},330:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6540),s=n(4848);function i({id:e,host:t,repo:i,repoId:o,category:l,categoryId:r,mapping:c,term:d,strict:u,reactionsEnabled:m,emitMetadata:h,inputPosition:v,theme:g,lang:x,loading:b}){const[p,f]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{p||(n.e(1135).then(n.bind(n,1135)),f(!0))}),[]),p?(0,s.jsx)("giscus-widget",{id:e,host:t,repo:i,repoid:o,category:l,categoryid:r,mapping:c,term:d,strict:u,reactionsenabled:m,emitmetadata:h,inputposition:v,theme:g,lang:x,loading:b}):null}var o=n(5293),l=n(4586);function r(){const{siteConfig:e}=(0,l.A)(),{colorMode:t}=(0,o.G)(),n=`${e.organizationName}/${e.projectName}`;return(0,s.jsx)("div",{children:(0,s.jsx)(i,{id:"comments",repo:n,repoId:"MDEwOlJlcG9zaXRvcnkxMDkxMTk2NzQ=",category:"General",categoryId:"DIC_kwDOBoEIus4Ch3Bm",mapping:"pathname",strict:"1",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"dark"===t?"dark_tritanopia":"light_tritanopia",lang:"en",loading:"lazy"})})}}}]);