(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("sSEp"),l=n("c7ue"),c=n("vOnD"),m=n("GfX5"),s=c.b.div.withConfig({displayName:"intro__IntroStyle",componentId:"sc-1vcm3zu-0"})([".intro{animation:"," 1s;height:100vh;display:flex;flex-direction:column;justify-content:center;margin:0 auto 0;.headline{color:",";}.double_down_arrow{transform:rotate(90deg);display:block;color:",";font-size:5em;}.scroller{margin-top:1em;align-items:center;display:flex;justify-content:center;a{text-decoration:none;position:relative;z-index:1;transition:",";color:",";background-color:",";border:none;outline:none;border-radius:50%;width:2em;div{width:100%;transition:",";animation-duration:2s;animation-name:buttonIconMove;animation-iteration-count:infinite;}@keyframes buttonIconMove{0%{transform:rotate(90deg) translateX(-.1em);opacity:0;}50%{transform:rotate(90deg) translateX(.1em);opacity:1;}100%{transform:rotate(90deg) translateX(-.1em);opacity:0;}}}a:hover{position:relative;z-index:1;cursor:pointer;svg{animation-name:none;}}}}"],m.b,(function(e){return e.theme.textColor}),(function(e){return e.theme.textAccent}),(function(e){return e.theme.transition}),(function(e){return e.theme.textAccent}),(function(e){return e.theme.bgColor}),(function(e){return e.theme.transition})),u=n("qmxP");function d(){var e=Object(o.c)("2835659500");return r.a.createElement(i.a,null,r.a.createElement(s,null,r.a.createElement("div",{className:"intro"},r.a.createElement("h1",{className:"headline"},"Hi! I'm ",r.a.createElement("b",{className:"addAccentColor"},"Rahul"),",",r.a.createElement("br",null),"An Enthusiastic",r.a.createElement("br",null),"Data Scientist",r.a.createElement("br",null),"& Developer"),r.a.createElement(l.a,{size:"2x"}),r.a.createElement("div",{className:"scroller"},r.a.createElement("a",{href:"#introContents"},r.a.createElement("div",{className:"double_down_arrow"},"»"))))),r.a.createElement("h2",{id:"introContents"},"Recent Articles"),r.a.createElement("div",{className:"blogList"},e.allMarkdownRemark.nodes.map((function(e){return r.a.createElement(u.a,{key:e.id,data:e})}))))}},c7ue:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("8tEE"),i=n("vOnD"),l=i.b.div.withConfig({displayName:"style__SocialBarStyle",componentId:"sc-1ryaocj-0"})(["width:100%;ul{margin:0;display:flex;flex-direction:row;justify-content:space-between;list-style-type:none;padding:0px;li{margin:0;list-style-type:none;}li:hover{transform:translateY(-0.5em);}}"]),c=i.b.div.withConfig({displayName:"style__SocialLinkStyle",componentId:"sc-6noq63-0"})(["svg{color:",";}"],(function(e){return e.theme.textAccent})),m=n("IP2g"),s=function(e){var t=e.to,n=e.icon,a=e.size;return r.a.createElement(c,null,r.a.createElement("a",{target:"_blank",href:t,rel:"noreferrer"},r.a.createElement(m.a,{icon:n,size:a})))};t.a=function(e){var t=e.size;return r.a.createElement(l,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s,{icon:o.d,to:"https://www.linkedin.com/in/rahulsrma26/",size:t})),r.a.createElement("li",null,r.a.createElement(s,{icon:o.f,to:"https://www.youtube.com/channel/UCVJCd0uYPk6o7ZEkPNc3aAw",size:t})),r.a.createElement("li",null,r.a.createElement(s,{icon:o.b,to:"https://github.com/rahulsrma26/",size:t})),r.a.createElement("li",null,r.a.createElement(s,{icon:o.c,to:"https://www.instagram.com/welcometors/",size:t})),r.a.createElement("li",null,r.a.createElement(s,{icon:o.a,to:"https://www.deviantart.com/rahulsrma26",size:t})),r.a.createElement("li",null,r.a.createElement(s,{icon:o.e,to:"https://steamcommunity.com/id/rahulsrma26/",size:t}))))}},qmxP:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("k7N+"),i=n.n(o),l=n("Wbzz"),c=n("vOnD").b.div.withConfig({displayName:"style__BlogPreviewStyle",componentId:"sc-8poonp-0"})(["border-top:0.1em dotted ",";@media (orientation:landscape){flex-basis:47%;}@media (orientation:portrait){width:100%;}a{text-decoration:none;}h3{margin-top:0.7em;margin-bottom:0.5em;}p{margin-top:0.5em;margin-bottom:0.5em;}ul{padding:0;margin 0;display:flex;flex-direction:row;list-style-type:none;li{padding:0.1em;margin-right:1em;color:",";border-radius:10%;}li:hover{color:",";background-color:",";}}.tag{font-size:0.8em;}.date{margin-top:-0.7em;text-align:center;font-size:0.7em;span{padding:0.1em 0.5em 0.1em;background-color:",";}}.description{margin-top:1em;font-size:0.8em;line-height:1.5;}.preview{margin-top:1em;img{width:100%;}}.readMore{padding:0.4em 0.6em 0.4em;font-size:0.8em;font-weight:600;color:",";background-color:",";}.links{margin-top:1em;margin-bottom:0.5em;display:flex;flex-direction:row;justify-content:space-between;}"],(function(e){return e.theme.textColor}),(function(e){return e.theme.textAccent}),(function(e){return e.theme.textColor}),(function(e){return e.theme.bgAccent}),(function(e){return e.theme.bgColor}),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textAccent})),m=n("LFbH");t.a=function(e){var t=e.data,n="/"+t.fields.postType+"/"+t.fields.slug+"/";return r.a.createElement(c,null,r.a.createElement(l.a,{to:n},r.a.createElement("div",{className:"date"},r.a.createElement("span",null,r.a.createElement(i.a,{date:t.frontmatter.date,format:"MMMM DD, YYYY"}))),r.a.createElement("div",{className:"preview"},r.a.createElement("img",{src:t.frontmatter.image.publicURL})),r.a.createElement("h3",null,t.frontmatter.title),r.a.createElement("ul",null,t.frontmatter.tags.map((function(e){return r.a.createElement("li",{key:e,className:"tag"},e)}))),r.a.createElement("p",{className:"description"},t.frontmatter.description),r.a.createElement("div",{className:"links"},r.a.createElement("button",{className:"accentBtn readMore"},"Read More →"),r.a.createElement(m.a,{url:n,title:t.frontmatter.title,countOnly:!0}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-de0922ab49fdbb69cf6f.js.map