(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{84:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return b})),i.d(t,"default",(function(){return c}));var n=i(3),a=(i(0),i(92));const r={id:"redis_vars",title:"Redis Variables used By Ultroid",sidebar_label:"Redis Variables"},l={unversionedId:"variables/redis_vars",id:"variables/redis_vars",isDocsHomePage:!1,title:"Redis Variables used By Ultroid",description:"Ultroid stores most of the Variables in Redis database. You can play with Redis DB with the redis plugin available in Ultroid Plugins.",source:"@site/docs/variables/redis_vars.md",slug:"/variables/redis_vars",permalink:"/Ultroid-Docs/docs/variables/redis_vars",version:"current",sidebar_label:"Redis Variables",sidebar:"sidebar",previous:{title:"Environmental Variables to run Ultroid.",permalink:"/Ultroid-Docs/docs/variables/env_variables"},next:{title:"Guides",permalink:"/Ultroid-Docs/docs/guides"}},b=[{value:"ALIVE_PIC",id:"alive_pic",children:[]},{value:"ALIVE_TEXT",id:"alive_text",children:[]},{value:"AUTOAPPROVE",id:"autoapprove",children:[]},{value:"BOT_USERS",id:"bot_users",children:[]},{value:"BROADCAST",id:"broadcast",children:[]},{value:"EMOJI_IN_HELP",id:"emoji_in_help",children:[]},{value:"HNDLR",id:"hndlr",children:[]},{value:"I_DEV",id:"i_dev",children:[]},{value:"OWNER",id:"owner",children:[]},{value:"PMSETTING",id:"pmsetting",children:[]},{value:"PMPIC",id:"pmpic",children:[]},{value:"PMPERMIT",id:"pmpermit",children:[]},{value:"INLINE_PM",id:"inline_pm",children:[]},{value:"RMBG_API",id:"rmbg_api",children:[]},{value:"SUDO_HNDLR",id:"sudo_hndlr",children:[]},{value:"SUDOS",id:"sudos",children:[]},{value:"VC_SUDOS",id:"vc_sudos",children:[]},{value:"VC_SESSION",id:"vc_session",children:[]},{value:"language",id:"language",children:[]}],o={toc:b};function c(e){let{components:t,...i}=e;return Object(a.b)("wrapper",Object(n.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ultroid stores most of the Variables in Redis database. You can play with Redis DB with the redis plugin available in Ultroid Plugins."),Object(a.b)("h3",{id:"alive_pic"},"ALIVE_PIC"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This Variable used to store ",Object(a.b)("inlineCode",{parentName:"li"},"alive")," message media , You can set ",Object(a.b)("inlineCode",{parentName:"li"},"direct url")," or ",Object(a.b)("inlineCode",{parentName:"li"},"bot file api id"))),Object(a.b)("h3",{id:"alive_text"},"ALIVE_TEXT"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Stores text to show in ",Object(a.b)("inlineCode",{parentName:"li"},"alive")," command")),Object(a.b)("h3",{id:"autoapprove"},"AUTOAPPROVE"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Value Type : ",Object(a.b)("inlineCode",{parentName:"li"},"Boolean")),Object(a.b)("li",{parentName:"ul"},"If ",Object(a.b)("inlineCode",{parentName:"li"},"AUTOAPPROVE")," is set to ",Object(a.b)("inlineCode",{parentName:"li"},"True")," then it will automatically approve users in PM if you send any msg to user . Else if set ",Object(a.b)("inlineCode",{parentName:"li"},"False")," , you need to approve user manually")),Object(a.b)("h3",{id:"bot_users"},"BOT_USERS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"List of users who sent ",Object(a.b)("inlineCode",{parentName:"li"},"/start")," your assitant bot")),Object(a.b)("h3",{id:"broadcast"},"BROADCAST"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"List of chats for broadcast feature")),Object(a.b)("h3",{id:"emoji_in_help"},"EMOJI_IN_HELP"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In the inline help menu, every button text is wrapped inside an emoji . To change the default one , set this variable with your desired Emoji/Text/ASCII Icon.")),Object(a.b)("h3",{id:"hndlr"},"HNDLR"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Default : ",Object(a.b)("inlineCode",{parentName:"p"},"."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You can change command handler prefix using this variable."))),Object(a.b)("h3",{id:"i_dev"},"I_DEV"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"By default Ultroid users can't use commands like ",Object(a.b)("inlineCode",{parentName:"li"},"bash")," & ",Object(a.b)("inlineCode",{parentName:"li"},"eval")," . If you wan't to use these commands then set value ",Object(a.b)("inlineCode",{parentName:"li"},"True"))),Object(a.b)("h3",{id:"owner"},"OWNER"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Stores Ultroid users telegram user id")),Object(a.b)("h3",{id:"pmsetting"},"PMSETTING"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Default : ",Object(a.b)("inlineCode",{parentName:"p"},"False"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This variable is used to toggle ",Object(a.b)("inlineCode",{parentName:"p"},"PMPERMIT")," . PM PERMIT is on when value is set to ",Object(a.b)("inlineCode",{parentName:"p"},"True")))),Object(a.b)("h3",{id:"pmpic"},"PMPIC"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can customize PM Permit default media using this variable . You can store direct links or file id to customize media.")),Object(a.b)("h3",{id:"pmpermit"},"PMPERMIT"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It stores the list of approved users of PM Permit")),Object(a.b)("h3",{id:"inline_pm"},"INLINE_PM"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Default : ",Object(a.b)("inlineCode",{parentName:"p"},"True"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Whether PmPermit should be send by Inline. Set to ",Object(a.b)("inlineCode",{parentName:"p"},"False")," to use Static One."))),Object(a.b)("h3",{id:"rmbg_api"},"RMBG_API"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Stores API key of remove.bg")),Object(a.b)("h3",{id:"sudo_hndlr"},"SUDO_HNDLR"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default : ",Object(a.b)("inlineCode",{parentName:"li"},"same as UserBot HNDLR")),Object(a.b)("li",{parentName:"ul"},"Handler for Sudo Users.")),Object(a.b)("h3",{id:"sudos"},"SUDOS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This variable stores the list of SUDO User's ids")),Object(a.b)("h3",{id:"vc_sudos"},"VC_SUDOS"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Used to store User with Vc Access, for VC Bot")),Object(a.b)("h3",{id:"vc_session"},"VC_SESSION"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Stores the Telethon ",Object(a.b)("inlineCode",{parentName:"li"},"session")," of the VC Bot. If not set, UserBot account will be used for Vc.")),Object(a.b)("h3",{id:"language"},"language"),Object(a.b)("p",null,"Stores the default language for Ultroid."))}c.isMDXComponent=!0},92:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return O}));var n=i(0),a=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):b(b({},t),e)),i},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(i),p=n,O=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return i?a.a.createElement(O,b(b({ref:t},c),{},{components:i})):a.a.createElement(O,b({ref:t},c))}));function O(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=p;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var c=2;c<r;c++)l[c]=i[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);