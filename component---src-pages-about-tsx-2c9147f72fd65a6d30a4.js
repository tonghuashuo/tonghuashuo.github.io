(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{121:function(e,t,a){e.exports=a.p+"static/brain-7dc10532e2058d66744cd1398811518d.png"},122:function(e,t,a){e.exports=a.p+"static/wechat-8207e67d2601330e08faf6542a6e44d1.png"},85:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(0),c=a.n(r),l=a(91),i=a(89),o=(a(120),a(121)),u=a.n(o),m=a(122),s=a.n(m);a.d(t,"query",function(){return p});var d=new Date(2016,2,1,10,0,0),p=(t.default=function(e){var t,a,o,m=e.data,p=Object(r.useState)(""),f=Object(n.a)(p,2),E=f[0],h=f[1],b=function(){var e=((new Date).getTime()-d.getTime())/1e3,t=e/60/60/24,a=Math.floor(t/365),n=Math.floor(t/(365/12)%12),r=Math.floor(t%(365/12)),c=Math.floor(e/60/60%24),l=Math.floor(e/60%60),i=Math.floor(e%60);h("（工作经验：".concat(a," 年 ").concat(n," 个月 ").concat(r," 天 ").concat(c," 小时 ").concat(l," 分钟 ").concat(i," 秒）"))};return Object(r.useEffect)(function(){b()},[]),t=b,a=1e3,o=Object(r.useRef)(function(){}),Object(r.useEffect)(function(){o.current=t}),Object(r.useEffect)(function(){if(null!==a){var e=setInterval(function(){o.current()},a);return function(){return clearInterval(e)}}},[a]),c.a.createElement(l.a,null,c.a.createElement(i.a,{title:"我",keywords:m.site.siteMetadata.keywords}),c.a.createElement("div",{className:"mf-content",id:"about"},c.a.createElement("article",null,c.a.createElement("h1",null,"我"),c.a.createElement("img",{src:u.a,alt:"Code in my left brain. Color in my right brain."}),c.a.createElement("p",null,"JavaScript 开发者一枚",c.a.createElement("span",{id:"experience"},E)),c.a.createElement("p",null,"左脑代码，右脑色彩，游走于“懂设计的开发者”和“懂开发的设计师”之间"),c.a.createElement("p",null,"大前端信徒，坚信 JavaScript 才是未来，致力于为更美好的 Web 贡献自己的力量"),c.a.createElement("p",null,"摄影爱好者 / 半拉设计师 / Adobe 死忠 / 谷粉 / 小米脑残粉 / 乌克丽丽噪音专家"),c.a.createElement("p",null,"欢迎来 Github 上关注我：",c.a.createElement("a",{target:"_blank",href:"http://github.com/tonghuashuo"},"@tonghuashuo")),c.a.createElement("p",null,"或给我来信：",c.a.createElement("a",{target:"_blank",href:"mailto:ideal19920402@gmail.com"},"ideal19920402@gmail.com")),c.a.createElement("p",null,"或微信上撩我："),c.a.createElement("img",{src:s.a,width:"320",alt:"扫一扫加我微信"}),c.a.createElement("h1",null,"为什么写博客"),c.a.createElement("ul",null,c.a.createElement("li",null,"把“以为懂了”的东西讲给别人听，以此验证是否真的懂了，顺带加深记忆。"),c.a.createElement("li",null,"Review 自己的代码，看有哪些是可以优化的，哪些甚至是解释不通的。"),c.a.createElement("li",null,"锻炼自己的表达能力，让自己懂和让别人懂是两个境界。"),c.a.createElement("li",null,"如果可能的话，为社区贡献一点有价值的内容。"),c.a.createElement("li",null,"装逼这事儿没什么说不出口的。")))))},"3336653186")},86:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=!0},87:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},88:function(e,t,a){e.exports=a.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},89:function(e,t,a){"use strict";var n=a(90),r=a(0),c=a.n(r),l=a(97),i=a.n(l),o=a(25);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,l=void 0===r?"zh":r,m=e.meta,s=void 0===m?[]:m,d=e.keywords,p=void 0===d?[]:d,f=e.title,E=void 0===f?"":f,h=e.exactTitle,b=void 0!==h&&h;return c.a.createElement(o.StaticQuery,{query:u,render:function(e){var t=a||e.site.siteMetadata.description;return c.a.createElement(i.a,{htmlAttributes:{lang:l},title:E,titleTemplate:b?"":"%s | ".concat(e.site.siteMetadata.title),meta:[{name:"description",content:t},{property:"og:title",content:E},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:E},{name:"twitter:description",content:t}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(s)})},data:n})};var u="1025518380"},90:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},91:function(e,t,a){"use strict";var n=a(87),r=a(0),c=a.n(r),l=a(25),i=a(141),o=(a(94),a(95),a(15)),u=a(88),m=a.n(u),s=(a(96),[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}]),d=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];function i(e){e&&e.stopPropagation(),n(!1)}function u(e){return e.isPartiallyCurrent?{className:"menu-link active"}:{className:"menu-link"}}return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{id:"mf-header"},c.a.createElement("div",{className:"mf-header-wrapper"},c.a.createElement(l.Link,{to:"/",className:"logo"},c.a.createElement("img",{src:m.a,alt:""}),c.a.createElement("span",null,"童话说")),c.a.createElement("div",{className:"hamberger"+(a?" open":""),onClick:function(e){e&&e.stopPropagation(),n(!a)}},c.a.createElement("div",{className:"bar"}),c.a.createElement("div",{className:"bar"}),c.a.createElement("div",{className:"bar"})),c.a.createElement("nav",{className:"nav-menu"+(a?" open":"")},c.a.createElement("ul",{className:"menus"},s.map(function(e){return c.a.createElement("li",{className:"menu",key:e.to},c.a.createElement(l.Link,{to:e.to,getProps:u,onClick:i},e.text))}))))),c.a.createElement("section",{id:"mf-header-placeholder"}))};a(86).a&&i.a({dsn:"https://9638de4372be4acebf892d0732a86a4a@sentry.io/1450204"});t.a=function(e){var t=e.children;return c.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement("main",null,t))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-2c9147f72fd65a6d30a4.js.map