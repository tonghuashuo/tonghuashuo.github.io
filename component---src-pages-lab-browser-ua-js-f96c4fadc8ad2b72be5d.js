(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(e,t,r){"use strict";r.r(t),r.d(t,"query",function(){return c});var n=r(87),i=r(0),a=r.n(i),s=r(86),d=r(211),o=r(209);r(222),r(219);t.default=function(e){var t=Object(i.useState)(""),r=Object(n.a)(t,2),c=r[0],m=r[1],l=Object(i.useState)(""),u=Object(n.a)(l,2),b=u[0],f=u[1],h=Object(i.useState)(""),w=Object(n.a)(h,2),x=w[0],O=w[1],p=Object(i.useState)(""),g=Object(n.a)(p,2),E=g[0],v=g[1],B=Object(i.useState)(""),k=Object(n.a)(B,2),y=k[0],C=k[1],S=function(e,t){var r="";if(e.indexOf("qqbrowser")>-1&&(r=e.match(/qqbrowser\/\d+(.\d+)+/)[0].substr(10),e.indexOf("mobile")>-1&&(r+="(mobile)"),t="QQ Browser "+r+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("micromessenger")>-1&&(t="WeiXin "+e.match(/micromessenger\/\d+(.\d+)+/)[0].substr(15)+" / wekit "+e.match(/webkit\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("qq/")>-1&&(t="QQ "+e.match(/qq\/\d+(.\d+)+/)[0].substr(3)+" / wekit "+e.match(/webkit\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("miui")>-1&&(t="XiaoMi MIUI Browser "+r+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("ucbrowser")>-1||e.indexOf(" ubrowser")>-1)if(r=e.match(/browser\/\d+(.\d+)+/)[0].substr(8),e.indexOf("mobile")>-1){r+=" (mobile)";var n=e.match(/u\d\/\d+(.\d+)+/),i="";n&&(i=n[0].substr(1).replace("/"," ")),t="UC Browser "+r+" / U"+i}else e.indexOf("chrome")>-1?t="UC Browser "+r+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7):e.indexOf("edge")>-1?t="UC Browser "+r+" / edge "+e.match(/edge\/\d+(.\d+)+/)[0].substr(5):e.indexOf("msie")>-1?t="UC Browser "+r+" / IE "+e.match(/msie\s\d+/)[0].substr(5):e.indexOf("trident")>-1&&(t="UC Browser "+r+" / IE 11");return(e.indexOf("sogou")>-1||e.indexOf(" se ")>-1)&&(e.indexOf("mobile")>-1?(r=e.match(/browser\/\d+(.\d+)+/)[0].substr(8),t="Sogou Browser "+(r+=" (mobile)")+" / Webkit "+e.match(/webkit\/\d+(.\d+)+/)[0].substr(7)):e.indexOf("chrome")>-1?t="Sogou Browser / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7):e.indexOf("edge")>-1?t="Sogou Browser / edge "+e.match(/edge\/\d+(.\d+)+/)[0].substr(5):e.indexOf("msie")>-1?t="Sogou Browser / IE "+e.match(/msie\s\d+/)[0].substr(5):e.indexOf("trident")>-1&&(t="Sogou Browser / IE 11")),e.indexOf("360 aphone browser")>-1&&(r=e.match(/browser\s\(\d+(.\d+)+\)/)[0].toString().slice(9,-1),e.indexOf("mobile")>-1&&(r+=" (mobile)"),t="360 Browser "+r+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("lbbrowser")>-1&&(t="LieBao Browser / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("liebao")>-1&&(r=e.match(/liebaofast\/\d+(.\d+)+/)[0].substr(10),e.indexOf("mobile")>-1&&(r+=" (mobile)"),t="LieBao Fast Browser "+r+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("bidu")>-1&&(e.indexOf("chrome")>-1?t="Baidu Browser "+(r=e.match(/browser\/\d+(.\d+)+/)[0].substr(8))+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7):e.indexOf("edge")>-1?t="Baidu Browser "+(r=e.match(/browser\s\d+(.\d+)+/)[0].substr(8))+" / edge "+e.match(/edge\/\d+(.\d+)+/)[0].substr(5):e.indexOf("msie")>-1?t="Baidu Browser "+(r=e.match(/browser\s\d+(.\d+)+/)[0].substr(8))+" / IE "+e.match(/msie\s\d+/)[0].substr(5):e.indexOf("trident")>-1&&(t="Baidu Browser "+(r=e.match(/browser\s\d+(.\d+)+/)[0].substr(8))+" / IE 11")),e.indexOf("baidu")>-1&&(r=e.match(/browser\/\d+(.\d+)+/)[0].substr(8),e.indexOf("mobile")>-1&&(r+=" (mobile)"),t="Baidu Browser "+r+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("maxthon")>-1&&(r=e.match(/maxthon\/\d+(.\d+)+/)[0].substr(8),e.indexOf("mobile")>-1&&(r+=" (mobile)"),t="Maxthon "+r+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("mxbrowser")>-1&&(r=e.match(/mxbrowser\/\d+(.\d+)+/)[0].substr(10),e.indexOf("mobile")>-1&&(r+=" (mobile)"),t="Maxthon "+r+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("dolphin")>-1&&(t="Dolphin Browser "+(r=e.match(/dolphinbrowsercn\/\d+(.\d+)+/)[0].substr(17))+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("theworld")>-1&&(r=e.match(/theworld\s\d+/)[0].substr(8),e.indexOf("mobile")>-1&&(r+=" (mobile)"),t="The World "+r+" / wekit "+e.match(/webkit\/\d+(.\d+)+/)[0].substr(7)),t};return Object(i.useEffect)(function(){if(window.navigator){var e=window.navigator,t=e.userAgent,r=e.platform;try{m((n=t.toLowerCase(),i="Unknown",a="",n.indexOf("edge")>-1?i="Microsoft Edge "+(a=n.match(/edge\/\d+(.\d+)+/)[0].substr(5)):n.indexOf("edgios")>-1?i="Edge for iOS "+n.match(/edgios\/\d+(.\d+)+/)[0].substr(7):n.indexOf("msie")>-1?i="IE "+(a=n.match(/msie\s\d+/)[0].substr(5)):n.indexOf("trident")>-1?i="IE 11":n.indexOf("firefox")>-1?(a=n.match(/firefox\/\d+(.\d+)+/)[0].substr(8),n.indexOf("mobile")>-1&&(a+=" (mobile)"),i="Firefox "+a):n.indexOf("opera")>-1?(a=n.match(/opera\/\d+(.\d+)+/)[0].substr(6),Number(a)>=9.8&&(a=n.match(/version\/\d+(.\d+)+/)[0].substr(8)),n.indexOf("mini")>-1&&(a="mini "+n.match(/mini\/\d+(.\d+)+/)[0].substr(5)),i="Opera "+a):n.indexOf("opr")>-1?(a=n.match(/opr\/\d+(.\d+)+/)[0].substr(4),n.indexOf("dev")>-1?a+=" (edition developer)":n.indexOf("beta")>-1&&(a+=" (edition beta)"),n.indexOf("mobile")>-1&&(a+=" (mobile)"),i="Opera "+a):n.indexOf("chrome")>-1?(a=n.match(/chrome\/\d+(.\d+)+/)[0].substr(7),n.indexOf("mobile")>-1&&(a+=" (mobile)"),i="Chrome "+a):n.indexOf("safari")>-1&&(i=n.indexOf("blackberry")>-1||n.indexOf("bb10")>-1||n.indexOf("playbook")>-1?"BlackBerry built-in / Webkit "+n.match(/webkit\/\d+(.\d+)+/)[0].substr(7):"Safari "+(a=n.match(/safari\/\d+(.\d+)+/)[0].substr(7))),i=S(n,i))),f(function(e,t){var r="Unknown OS",n="Win32"===t||"Windows"===t,i="Mac68K"===t||"MacPPC"===t||"Macintosh"===t||"MacIntel"===t,a="X11"===t&&!n&&!i,s=t.toLowerCase().indexOf("linux")>-1||e.indexOf("linux")>-1,d=e.indexOf("android")>-1,o=e.indexOf("iphone")>-1,c=e.indexOf("ipod")>-1,m=e.indexOf("ipad")>-1,l=o||m||c,u=e.indexOf("windows phone")>-1,b=e.indexOf("xbox")>-1,f=e.indexOf("blackberry")>-1||e.indexOf("bb10")>-1||e.indexOf("playbook")>-1,h=e.indexOf("meego")>-1,w=e.indexOf("symbian")>-1;if(i){r="Mac";var x=e.match(/mac\sos\sx\s[0-9]{1,2}(_[0-9]{1,2})+/);return x&&x.length&&(r=r+" "+x[0].replace(/mac\sos\sx\s/,"").replace(/_/g,".")),r}if(a)return r="Unix";if(s&&!d)return r="Linux",e.indexOf("kf")>-1&&(r+="/Amazon Kindle"),r;if(n)return r="Windows",e.indexOf("windows nt 5.0")>-1||e.indexOf("windows 2000")>-1?r="Windows 2000":e.indexOf("windows nt 5.1")>-1||e.indexOf("windows xp")>-1?r="Windows XP":e.indexOf("windows nt 5.2")>-1||e.indexOf("windows 2003")>-1?r="Windows 2003":e.indexOf("windows nt 6.0")>-1||e.indexOf("windows Vista")>-1?r="Windows Vista":e.indexOf("windows nt 6.1")>-1||e.indexOf("windows 7")>-1?r="Windows 7":e.indexOf("windows nt 6.2")>-1||e.indexOf("Windows 8")>-1?r="Windows 8":e.indexOf("windows nt 6.3")>-1||e.indexOf("windows 8.1")>-1?r="Windows 8.1":(e.indexOf("windows nt 6.4")>-1||e.indexOf("windows nt 10.0")>-1||e.indexOf("windows 10")>-1)&&(r="Windows 10"),r;if(d){r="Android";var O=e.match(/android\s[\.\d]+/)[0].substr(8);return O&&(r=r+" "+O),r}if(l){var p="";if(o){var g=e.match(/cpu\siphone\sos\s\d+(_\d+)+/);g[0].length&&(p=g[0].substr(14).replace(/_/g,".")),r="iOS "+p+" / iPhone"}else if(m){var E=e.match(/cpu\sos\s\d+(_\d+)+/);E[0].length&&(p=E[0].substr(6).replace(/_/g,".")),r="iOS "+p+" / iPad"}else if(c){var v=e.match(/cpu\siphone\sos\s\d+(_\d+)+/);v[0].length&&(p=v[0].substr(6).replace(/_/g,".")),r="iOS "+p+" / iPod"}else r="iOS";return r}if(u){var B=e.substr(e.indexOf("windows phone")+14,7);return r="Windows Phone "+/\d+(.\d)+/.exec(B)[0]}return w?r="Symbian S"+e.match(/series\d+/)[0].toString().substr(6):f?(r="BlackBerry",e.indexOf("playbook")>-1?r+=" / PlayBook":e.indexOf("bb10")>-1&&(r+=" / BB10"),r):b?(r="XBox",e.indexOf("xbox one")>-1?r+=" One":r+=" 360",r):h?r="MeeGo":r}(t.toLowerCase(),r)),O(t),v(r)}catch(s){console.error("Caught Error",s)}}else C("Browser info not detected.");var n,i,a},[]),a.a.createElement(d.a,null,a.a.createElement(o.a,{title:"User Agent | 实验室",keywords:e.data.site.siteMetadata.keywords}),a.a.createElement("div",{className:"mf-content lab-item"},a.a.createElement("article",null,a.a.createElement(s.Link,{to:"/lab",className:"back"},"« Back"),a.a.createElement("h1",null,"UserAgent"),a.a.createElement("p",null,"Browser: ",a.a.createElement("span",{id:"browser"},c||"Detecting ...")),a.a.createElement("p",null,"OS: ",a.a.createElement("span",{id:"os"},b||"Detecting ...")),a.a.createElement("p",null,"UA: ",a.a.createElement("span",{id:"ua"},x||"Detecting ...")),a.a.createElement("p",null,"Platform: ",a.a.createElement("span",{id:"platform"},E||"Detecting ...")),a.a.createElement("p",{id:"error"},y))))};var c="1448345702"},206:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=!0},207:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},208:function(e,t,r){e.exports=r.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},209:function(e,t,r){"use strict";var n=r(210),i=r(0),a=r.n(i),s=r(217),d=r.n(s),o=r(86);t.a=function(e){var t=e.description,r=void 0===t?"":t,i=e.lang,s=void 0===i?"zh":i,m=e.meta,l=void 0===m?[]:m,u=e.keywords,b=void 0===u?[]:u,f=e.title,h=void 0===f?"":f,w=e.exactTitle,x=void 0!==w&&w;return a.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=r||e.site.siteMetadata.description;return a.a.createElement(d.a,{htmlAttributes:{lang:s},title:h,titleTemplate:x?"":"%s | ".concat(e.site.siteMetadata.title),meta:[{name:"description",content:t},{property:"og:title",content:h},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:h},{name:"twitter:description",content:t}].concat(b.length>0?{name:"keywords",content:b.join(",")}:[]).concat(l)})},data:n})};var c="1025518380"},210:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},211:function(e,t,r){"use strict";var n=r(207),i=r(0),a=r.n(i),s=r(86),d=r(278),o=(r(214),r(215),r(87)),c=r(208),m=r.n(c),l=(r(216),[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}]),u=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),r=t[0],n=t[1];function d(e){e&&e.stopPropagation(),n(!1)}function c(e){return e.isPartiallyCurrent?{className:"menu-link active"}:{className:"menu-link"}}return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{id:"mf-header"},a.a.createElement("div",{className:"mf-header-wrapper"},a.a.createElement(s.Link,{to:"/",className:"logo"},a.a.createElement("img",{src:m.a,alt:""}),a.a.createElement("span",null,"童话说")),a.a.createElement("div",{className:"hamberger"+(r?" open":""),onClick:function(e){e&&e.stopPropagation(),n(!r)}},a.a.createElement("div",{className:"bar"}),a.a.createElement("div",{className:"bar"}),a.a.createElement("div",{className:"bar"})),a.a.createElement("nav",{className:"nav-menu"+(r?" open":"")},a.a.createElement("ul",{className:"menus"},l.map(function(e){return a.a.createElement("li",{className:"menu",key:e.to},a.a.createElement(s.Link,{to:e.to,getProps:c,onClick:d},e.text))}))))),a.a.createElement("section",{id:"mf-header-placeholder"}))};r(206).a&&d.a({dsn:"https://9638de4372be4acebf892d0732a86a4a@sentry.io/1450204"});t.a=function(e){var t=e.children;return a.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null),a.a.createElement("main",null,t))},data:n})}},219:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-lab-browser-ua-js-f96c4fadc8ad2b72be5d.js.map