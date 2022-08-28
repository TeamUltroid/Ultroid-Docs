(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),a=(r(0),r(92));const i={},o={unversionedId:"pyUltroid/pyUltroid",id:"pyUltroid/pyUltroid",isDocsHomePage:!1,title:"pyUltroid",description:"py-Ultroid Library",source:"@site/docs/pyUltroid/pyUltroid.md",slug:"/pyUltroid/pyUltroid",permalink:"/Ultroid-Docs/docs/pyUltroid/pyUltroid",version:"current",sidebar:"sidebar",previous:{title:"Guides",permalink:"/Ultroid-Docs/docs/guides"},next:{title:"VC Bot",permalink:"/Ultroid-Docs/docs/vcbot"}},l=[{value:"Creating plugins",id:"creating-plugins",children:[]}],p={toc:l};function c(e){let{components:t,...r}=e;return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"py-ultroid-library"},"py-Ultroid Library"),Object(a.b)("p",null,"Core library of ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TeamUltroid/pyUltroid"},"The Ultroid"),", a python based telegram userbot."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.codefactor.io/repository/github/teamultroid/pyultroid"},Object(a.b)("img",{parentName:"a",src:"https://www.codefactor.io/repository/github/teamultroid/pyultroid/badge",alt:"CodeFactor"})),"\n",Object(a.b)("a",{parentName:"p",href:"https://pypi.org/project/py-Ultroid"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/py-Ultroid?style=round",alt:"PyPI - Version"})),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",{parentName:"p",href:"https://pypi.org/project/py-Ultroid"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/py-Ultroid?label=DOWNLOADS&style=round",alt:"PyPI - Downloads"})),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/TeamUltroid/Ultroid/graphs/commit-activity"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Maintained%3F-yes-green.svg",alt:"Maintenance"})),"\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/TeamUltroid/Ultroid"},Object(a.b)("img",{parentName:"a",src:"https://badges.frapsoft.com/os/v2/open-source.svg?v=103",alt:"Open Source Love svg2"})),"\n",Object(a.b)("a",{parentName:"p",href:"https://makeapullrequest.com"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square",alt:"PRs Welcome"}))),Object(a.b)("h1",{id:"installation"},"Installation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"pip3 install -U py-Ultroid\n")),Object(a.b)("h1",{id:"documentation"},"Documentation"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://ultroid.tech/"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Documentation-Ultroid-blue",alt:"Documentation"}))),Object(a.b)("h1",{id:"usage"},"Usage"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create folders named ",Object(a.b)("inlineCode",{parentName:"li"},"plugins"),", ",Object(a.b)("inlineCode",{parentName:"li"},"addons"),", ",Object(a.b)("inlineCode",{parentName:"li"},"assistant")," and ",Object(a.b)("inlineCode",{parentName:"li"},"resources"),".   "),Object(a.b)("li",{parentName:"ul"},"Add your plugins in the ",Object(a.b)("inlineCode",{parentName:"li"},"plugins")," folder and others accordingly.   "),Object(a.b)("li",{parentName:"ul"},"Create a ",Object(a.b)("inlineCode",{parentName:"li"},".env")," file with following mandatory Environment Variables",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"API_ID\nAPI_HASH\nSESSION\nREDIS_URI\nREDIS_PASSWORD\n"))),Object(a.b)("li",{parentName:"ul"},"Check\n",Object(a.b)("a",{parentName:"li",href:"https://github.com/TeamUltroid/Ultroid/blob/main/.env.sample"},Object(a.b)("inlineCode",{parentName:"a"},".env.sample"))," for more details.   "),Object(a.b)("li",{parentName:"ul"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"python3 -m pyUltroid")," to start the bot.   ")),Object(a.b)("h2",{id:"creating-plugins"},"Creating plugins"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("h3",{parentName:"li",id:"to-work-everywhere"},"To work everywhere"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'@ultroid_cmd(\n    pattern="start"\n)   \nasync def _(e):   \n    await eor(e, "Ultroid Started.")   \n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("h3",{parentName:"li",id:"to-work-only-in-groups"},"To work only in groups"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'@ultroid_cmd(\n    pattern="start",\n    groups_only=True,\n)   \nasync def _(e):   \n    await eor(e, "Ultroid Started.")   \n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("h3",{parentName:"li",id:"assistant-plugins-"},"Assistant Plugins \ud83d\udc47"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'@asst_cmd("start")   \nasync def _(e):   \n    await e.reply("Ultroid Started.")   \n')),Object(a.b)("p",null,"See more working plugins on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/TeamUltroid/Ultroid"},"the offical repository"),"!"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Made with \ud83d\udc95 by ",Object(a.b)("a",{parentName:"p",href:"https://t.me/TeamUltroid"},"@TeamUltroid"),".    ")),Object(a.b)("h1",{id:"license"},"License"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/TeamUltroid/pyUltroid/blob/main/LICENSE"},Object(a.b)("img",{parentName:"a",src:"https://www.gnu.org/graphics/agplv3-155x51.png",alt:"License"})),Object(a.b)("br",{parentName:"p"}),"\n","Ultroid is licensed under ",Object(a.b)("a",{parentName:"p",href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"GNU Affero General Public License")," v3 or later."),Object(a.b)("h1",{id:"credits"},"Credits"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://t.me/UltroidDevs"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=TeamUltroid&message=devs&color=critical",alt:"TeamUltroid-Devs"}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/Lonami"},"Lonami")," for ",Object(a.b)("a",{parentName:"li",href:"https://github.com/LonamiWebs/Telethon"},"Telethon"))))}c.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return r?a.a.createElement(u,l(l({ref:t},c),{},{components:r})):a.a.createElement(u,l({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);