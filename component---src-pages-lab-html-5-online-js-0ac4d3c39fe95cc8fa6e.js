(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"query",function(){return m});var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(55),c=n(174),l=n(172),u=(n(179),n(217),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={status:""},t.updateStatus=function(e){var n=navigator.onLine?"online":"offline";t.setState({status:n})},t}r()(t,e);var n=t.prototype;return n.render=function(){var e=this.state.status;return o.a.createElement(c.a,null,o.a.createElement(l.a,{title:"Input Type | 实验室",keywords:this.props.data.site.siteMetadata.keywords}),o.a.createElement("div",{className:"mf-content lab-item",id:"lab-html5-online"},o.a.createElement("article",null,o.a.createElement(s.Link,{to:"/lab",className:"back"},"« Back"),o.a.createElement("h1",null,"Online"),o.a.createElement("p",null,"Status: ",o.a.createElement("span",{id:"status",className:e},e)))))},n.componentDidMount=function(){this.updateStatus(),window.addEventListener("online",this.updateStatus),window.addEventListener("offline",this.updateStatus)},n.componentWillUnmount=function(){window.removeEventListener("online",this.updateStatus),window.removeEventListener("offline",this.updateStatus)},t}(i.PureComponent)),m="3336653186"},170:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},171:function(e,t,n){e.exports=n.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},172:function(e,t,n){"use strict";var a=n(173),r=n(0),i=n.n(r),o=n(1),s=n.n(o),c=n(178),l=n.n(c),u=n(55);function m(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title,c=e.exactTitle;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:c?"":"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"zh",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m;var p="1025518380"},173:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},174:function(e,t,n){"use strict";var a=n(170),r=n(0),i=n.n(r),o=n(1),s=n.n(o),c=n(55),l=n(8),u=n.n(l),m=n(171),p=n.n(m),d=(n(175),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).menus=[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}],t.state={navMenuOpen:!1},t.toggle=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!t.state.navMenuOpen})},t.close=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!1})},t.isMenuActive=function(e){return e.isPartiallyCurrent?{className:"menu active"}:{className:"menu"}},t}return u()(t,e),t.prototype.render=function(){var e=this,t=this.state.navMenuOpen;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"mf-header"},i.a.createElement("div",{className:"mf-header-wrapper"},i.a.createElement(c.Link,{to:"/",className:"logo"},i.a.createElement("img",{src:p.a,alt:""}),i.a.createElement("span",null,"童话说")),i.a.createElement("div",{className:"hamberger"+(t?" open":""),onClick:this.toggle},i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"})),i.a.createElement("nav",{className:"nav-menu"+(t?" open":"")},i.a.createElement("div",{className:"menus"},this.menus.map(function(t){return i.a.createElement(c.Link,{key:t.to,to:t.to,getProps:e.isMenuActive,onClick:e.close},t.text)}))))),i.a.createElement("section",{id:"mf-header-placeholder"}))},t}(r.PureComponent)),f=(n(176),n(177),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement("main",null,t))},data:a})});f.propTypes={children:s.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-lab-html-5-online-js-0ac4d3c39fe95cc8fa6e.js.map