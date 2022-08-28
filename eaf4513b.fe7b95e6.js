(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(92));const o={id:"modes",title:"Modes in Ultroid",sidebar_label:"About Modes",slug:"/modes"},i={unversionedId:"ultroid/modes",id:"ultroid/modes",isDocsHomePage:!1,title:"Modes in Ultroid",description:"Dual Mode",source:"@site/docs/ultroid/modes.md",slug:"/modes",permalink:"/Ultroid-Docs/docs/modes",version:"current",sidebar_label:"About Modes"},l=[{value:"Dual Mode",id:"dual-mode",children:[]},{value:"Manager",id:"manager",children:[]}],c={toc:l};function b(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"dual-mode"},"Dual Mode"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Dual Mode, enables you to use your assistant bot same as your UserBot.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Your Assistant bot and Userbot will both take your commands and will work similarly..")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To Enable Dual Mode : ",Object(a.b)("inlineCode",{parentName:"p"},".setdb DUAL_MODE True"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("h4",{parentName:"li",id:"about-dual_hndlr"},"About DUAL_HNDLR"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"You can Customise the Assistant Handler of Dual Mode."),Object(a.b)("li",{parentName:"ul"},"By : ",Object(a.b)("inlineCode",{parentName:"li"},".setdb DUAL_HNDLR <any symbol>")),Object(a.b)("li",{parentName:"ul"},"Default Value : ",Object(a.b)("inlineCode",{parentName:"li"},"/"))))),Object(a.b)("h3",{id:"manager"},"Manager"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"After setting this, you can use your Assistant bot as Group Management Bot.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To Set this : ",Object(a.b)("inlineCode",{parentName:"p"},".setdb MANAGER True"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"After Adding Redis Var, Restart Your Bot.."))),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},'After setting this, send "/help" to your assistant bot to know about Manager Commands.')))))}b.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,m=s["".concat(i,".").concat(p)]||s[p]||d[p]||o;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);