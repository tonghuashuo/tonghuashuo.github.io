(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{76:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return m});var n=a(15),r=a(0),c=a.n(r),i=a(25),o=a(91),l=a(89),s=(a(101),a(99),void 0);t.default=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),m=a[0],u=a[1],d=Object(r.useState)(""),p=Object(n.a)(d,2),f=p[0],E=p[1],b=Object(r.useState)(""),g=Object(n.a)(b,2),v=g[0],w=g[1],h=Object(r.useState)(""),y=Object(n.a)(h,2),k=y[0],j=y[1],O=Object(r.useState)(""),N=Object(n.a)(O,2),x=N[0],S=N[1];return Object(r.useEffect)(function(){if(window.navigator){var e=window.navigator,t=e.userAgent;e.platform,u(s.getBrowser(t.toLowerCase())),E(s.getOS(t.toLowerCase(),_platform)),w(t),j(_platform)}else S("Browser info not detected.")},[]),c.a.createElement(o.a,null,c.a.createElement(l.a,{title:"User Agent | 实验室",keywords:e.data.site.siteMetadata.keywords}),c.a.createElement("div",{className:"mf-content lab-item"},c.a.createElement("article",null,c.a.createElement(i.Link,{to:"/lab",className:"back"},"« Back"),c.a.createElement("h1",null,"UserAgent"),c.a.createElement("p",null,"Browser: ",c.a.createElement("span",{id:"browser"},m||"Detecting ...")),c.a.createElement("p",null,"OS: ",c.a.createElement("span",{id:"os"},f||"Detecting ...")),c.a.createElement("p",null,"UA: ",c.a.createElement("span",{id:"ua"},v||"Detecting ...")),c.a.createElement("p",null,"Platform: ",c.a.createElement("span",{id:"platform"},k||"Detecting ...")),c.a.createElement("p",{id:"error"},x))))};var m="1448345702"},86:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=!0},87:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},88:function(e,t,a){e.exports=a.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},89:function(e,t,a){"use strict";var n=a(90),r=a(0),c=a.n(r),i=a(97),o=a.n(i),l=a(25);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,i=void 0===r?"zh":r,m=e.meta,u=void 0===m?[]:m,d=e.keywords,p=void 0===d?[]:d,f=e.title,E=void 0===f?"":f,b=e.exactTitle,g=void 0!==b&&b;return c.a.createElement(l.StaticQuery,{query:s,render:function(e){var t=a||e.site.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:i},title:E,titleTemplate:g?"":"%s | ".concat(e.site.siteMetadata.title),meta:[{name:"description",content:t},{property:"og:title",content:E},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:E},{name:"twitter:description",content:t}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(u)})},data:n})};var s="1025518380"},90:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},91:function(e,t,a){"use strict";var n=a(87),r=a(0),c=a.n(r),i=a(25),o=a(141),l=(a(94),a(95),a(15)),s=a(88),m=a.n(s),u=(a(96),[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}]),d=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1];function o(e){e&&e.stopPropagation(),n(!1)}function s(e){return e.isPartiallyCurrent?{className:"menu-link active"}:{className:"menu-link"}}return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{id:"mf-header"},c.a.createElement("div",{className:"mf-header-wrapper"},c.a.createElement(i.Link,{to:"/",className:"logo"},c.a.createElement("img",{src:m.a,alt:""}),c.a.createElement("span",null,"童话说")),c.a.createElement("div",{className:"hamberger"+(a?" open":""),onClick:function(e){e&&e.stopPropagation(),n(!a)}},c.a.createElement("div",{className:"bar"}),c.a.createElement("div",{className:"bar"}),c.a.createElement("div",{className:"bar"})),c.a.createElement("nav",{className:"nav-menu"+(a?" open":"")},c.a.createElement("ul",{className:"menus"},u.map(function(e){return c.a.createElement("li",{className:"menu",key:e.to},c.a.createElement(i.Link,{to:e.to,getProps:s,onClick:o},e.text))}))))),c.a.createElement("section",{id:"mf-header-placeholder"}))};a(86).a&&o.a({dsn:"https://9638de4372be4acebf892d0732a86a4a@sentry.io/1450204"});t.a=function(e){var t=e.children;return c.a.createElement(i.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement("main",null,t))},data:n})}},99:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-lab-browser-ua-js-668f8a2fb38f86a374d1.js.map