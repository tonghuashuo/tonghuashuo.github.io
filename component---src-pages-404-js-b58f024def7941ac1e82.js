(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{154:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),i=n(176),c=n(174);n(194);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"404"}),r.a.createElement("div",{className:"mf-content",id:"page-not-found"},r.a.createElement("h1",null,"404"),r.a.createElement("pre",null,r.a.createElement("code",{dangerouslySetInnerHTML:{__html:"(function whatJustHappened () {\n  return `\n    Whatever you are looking for.\n    It's not here.\n    (any more)\n  `\n})()\n"}})),r.a.createElement(o.Link,{className:"btn-back",to:"/"},"returnToBase()")))}},169:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},170:function(e,t,n){e.exports=n.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){"use strict";var a=n(175),r=n(0),o=n.n(r),i=n(1),c=n.n(i),s=n(179),l=n.n(s),u=n(36);function m(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"zh",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var p="1025518380"},175:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},176:function(e,t,n){"use strict";var a=n(169),r=n(0),o=n.n(r),i=n(1),c=n.n(i),s=n(36),l=n(8),u=n.n(l),m=n(170),p=n.n(m),d=(n(171),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).menus=[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}],t.state={navMenuOpen:!1},t.toggle=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!t.state.navMenuOpen})},t.close=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!1})},t.isMenuActive=function(e){return e.isPartiallyCurrent?{className:"menu active"}:{className:"menu"}},t}return u()(t,e),t.prototype.render=function(){var e=this,t=this.state.navMenuOpen;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{id:"mf-header"},o.a.createElement("div",{className:"mf-header-wrapper"},o.a.createElement(s.Link,{to:"/",className:"logo"},o.a.createElement("img",{src:p.a,alt:""}),o.a.createElement("span",null,"童话说")),o.a.createElement("div",{className:"hamberger"+(t?" open":""),onClick:this.toggle},o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"bar"})),o.a.createElement("nav",{className:"nav-menu"+(t?" open":"")},o.a.createElement("div",{className:"menus"},this.menus.map(function(t){return o.a.createElement(s.Link,{key:t.to,to:t.to,getProps:e.isMenuActive,onClick:e.close},t.text)}))))),o.a.createElement("section",{id:"mf-header-placeholder"}))},t}(r.PureComponent)),f=(n(177),n(178),n(172),n(173),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement("main",null,t))},data:a})});f.propTypes={children:c.a.node.isRequired};t.a=f},194:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-404-js-b58f024def7941ac1e82.js.map