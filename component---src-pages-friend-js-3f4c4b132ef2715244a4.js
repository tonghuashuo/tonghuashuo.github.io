(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return E});var n=a(0),r=a.n(n),l=a(175),i=a(173),c=(a(210),a(211)),s=a.n(c),o=a(212),m=a.n(o),u=a(213),d=a.n(u),p=a(214),f=a.n(p);t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"朋友",keywords:t.site.siteMetadata.keywords}),r.a.createElement("div",{className:"mf-content",id:"friends"},r.a.createElement("h1",{className:"title"},"未来，就在这里"),r.a.createElement("div",{className:"friends"},r.a.createElement("a",{className:"friend",id:"friend__lucode",target:"_blank",href:"http://www.lucode.net"},r.a.createElement("div",{className:"cover fix-ratio ratio-16-9"},r.a.createElement("img",{src:s.a,alt:""})),r.a.createElement("div",{className:"intro"},r.a.createElement("h2",null,"LuCode"),r.a.createElement("ul",null,r.a.createElement("li",null,"CodeSun，中科大研究生"),r.a.createElement("li",null,"主攻编译技术、形式化验证"),r.a.createElement("li",null,"服务器资深玩家")))),r.a.createElement("a",{className:"friend",id:"friend__infinite-script",target:"_blank",href:"https://infinitescript.com/"},r.a.createElement("div",{className:"cover fix-ratio ratio-16-9"},r.a.createElement("img",{src:m.a,alt:""})),r.a.createElement("div",{className:"intro"},r.a.createElement("h2",null,"InfiniteScript"),r.a.createElement("ul",null,r.a.createElement("li",null,"Dr.Xie，哈工大博士"),r.a.createElement("li",null,"主攻计算机视觉、机器学习"),r.a.createElement("li",null,"Github 老司机")))),r.a.createElement("a",{className:"friend",id:"friend__everain",target:"_blank",href:"https://everain.me/"},r.a.createElement("div",{className:"cover fix-ratio ratio-16-9"},r.a.createElement("img",{src:d.a,alt:""})),r.a.createElement("div",{className:"intro"},r.a.createElement("h2",null,"Everain"),r.a.createElement("ul",null,r.a.createElement("li",null,"Everain，网易前端开发"),r.a.createElement("li",null,"主攻 JavaScript 大前端生态"),r.a.createElement("li",null,"猪厂大前端接班人")))),r.a.createElement("a",{className:"friend",id:"friend__silvermac",target:"_blank",href:"https://silvermac.io/"},r.a.createElement("div",{className:"cover fix-ratio ratio-16-9"},r.a.createElement("img",{src:f.a,alt:""})),r.a.createElement("div",{className:"intro"},r.a.createElement("h2",null,"Silvermac"),r.a.createElement("ul",null,r.a.createElement("li",null,"Sam，Autodesk 研发大佬"),r.a.createElement("li",null,"主攻各种我听不懂的黑科技"),r.a.createElement("li",null,"各大厂抢着要的香饽饽")))))))};var E="3336653186"},171:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},172:function(e,t,a){e.exports=a.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},173:function(e,t,a){"use strict";var n=a(174),r=a(0),l=a.n(r),i=a(1),c=a.n(i),s=a(181),o=a.n(s),m=a(56);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,s=e.exactTitle;return l.a.createElement(m.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:s?"":"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"zh",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var d="1025518380"},174:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},175:function(e,t,a){"use strict";var n=a(171),r=a(0),l=a.n(r),i=a(1),c=a.n(i),s=a(56),o=a(235),m=(a(178),a(179),a(9)),u=a.n(m),d=a(172),p=a.n(d),f=(a(180),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).menus=[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}],t.state={navMenuOpen:!1},t.toggle=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!t.state.navMenuOpen})},t.close=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!1})},t.isMenuActive=function(e){return e.isPartiallyCurrent?{className:"menu-link active"}:{className:"menu-link"}},t}return u()(t,e),t.prototype.render=function(){var e=this,t=this.state.navMenuOpen;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"mf-header"},l.a.createElement("div",{className:"mf-header-wrapper"},l.a.createElement(s.Link,{to:"/",className:"logo"},l.a.createElement("img",{src:p.a,alt:""}),l.a.createElement("span",null,"童话说")),l.a.createElement("div",{className:"hamberger"+(t?" open":""),onClick:this.toggle},l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"bar"})),l.a.createElement("nav",{className:"nav-menu"+(t?" open":"")},l.a.createElement("ul",{className:"menus"},this.menus.map(function(t){return l.a.createElement("li",{className:"menu",key:t.to},l.a.createElement(s.Link,{to:t.to,getProps:e.isMenuActive,onClick:e.close},t.text))}))))),l.a.createElement("section",{id:"mf-header-placeholder"}))},t}(r.PureComponent));o.a({dsn:"https://9638de4372be4acebf892d0732a86a4a@sentry.io/1450204"});var E=function(e){var t=e.children;return l.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement("main",null,t))},data:n})};E.propTypes={children:c.a.node.isRequired};t.a=E},211:function(e,t,a){e.exports=a.p+"static/lucode-e50e71e8fc5159d4e778450ef8fa9587.jpg"},212:function(e,t,a){e.exports=a.p+"static/infinite-script-db738904a4645afa4e66e39eb035745e.jpg"},213:function(e,t,a){e.exports=a.p+"static/everain-b0357834ff85d4e7ca795016e7281d9e.jpg"},214:function(e,t,a){e.exports=a.p+"static/silvermac-4da8b87e6388f6ed9e694eaf40dc5055.jpg"}}]);
//# sourceMappingURL=component---src-pages-friend-js-3f4c4b132ef2715244a4.js.map