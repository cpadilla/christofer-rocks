(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{327:function(t,n,e){},352:function(t,n,e){"use strict";e(327)},370:function(t,n,e){"use strict";e.r(n);e(116);var s={computed:{tags(){let t={};for(let n of this.$site.pages)for(let e in n.frontmatter.tags){const s=n.frontmatter.tags[e];s in t?t[s].push(n):t[s]=[n]}return t}},methods:{safeLink:t=>t.replace(/\s/g,"-").replace(/["']/g,"-")}},r=(e(352),e(25)),a=Object(r.a)(s,(function(){var t=this,n=t._self._c;return n("div",t._l(Object.keys(t.tags),(function(e){return n("span",[n("h2",{attrs:{id:t.safeLink(e)}},[n("router-link",{staticClass:"header-anchor",attrs:{to:{path:"#"+t.safeLink(e)},"aria-hidden":"true"}},[t._v("#")]),t._v("\n      "+t._s(e)+"\n    ")],1),t._v(" "),n("ul",t._l(t.tags[e],(function(e){return n("li",[n("router-link",{attrs:{to:{path:e.path}}},[t._v(t._s(e.title))])],1)})),0)])})),0)}),[],!1,null,null,null);n.default=a.exports}}]);