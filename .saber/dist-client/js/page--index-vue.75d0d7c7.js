(window.webpackJsonp=window.webpackJsonp||[]).push([[2],Array(19).concat([function(t,e,n){var i=n(28);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(24).default)("44a9069e",i,!1,{sourceMap:!1})},function(t,e,n){var i=n(30);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(24).default)("52251a2e",i,!1,{sourceMap:!1})},function(t,e,n){t.exports=n.p+"images/icon-download-dark.30062107.svg"},function(t,e,n){t.exports=n.p+"images/icon-code-fork-light.3abaa4e9.svg"},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var a=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),o=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(o).concat([a]).join("\n")}var r;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(a=0;a<t.length;a++){var r=t[a];null!=r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var o=e[a],r=o[0],s={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};i[r]?i[r].parts.push(s):n.push(i[r]={id:r,parts:[s]})}return n}n.r(e),n.d(e,"default",(function(){return f}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},r=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,d=!1,l=function(){},p=null,u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,n,a){d=n,p=a||{};var r=i(t,e);return h(r),function(e){for(var n=[],a=0;a<r.length;a++){var s=r[a];(c=o[s.id]).refs--,n.push(c)}e?h(r=i(t,e)):r=[];for(a=0;a<n.length;a++){var c;if(0===(c=n[a]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete o[c.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(g(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(a=0;a<n.parts.length;a++)r.push(g(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:r}}}}function m(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function g(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(d)return l;i.parentNode.removeChild(i)}if(u){var a=c++;i=s||(s=m()),e=v.bind(null,i,a,!1),n=v.bind(null,i,a,!0)}else i=m(),e=w.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var x,b=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function v(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,a);else{var o=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function w(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),p.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},function(t,e,n){t.exports=n.p+"images/example.1f095613.gif"},function(t,e,n){t.exports=n.p+"images/icon-biscuits.9810fc19.svg"},function(t,e,n){"use strict";var i=n(19);n.n(i).a},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,".main-header[data-v-b86c55f0]{position:fixed;top:0;left:0;right:0;display:flex;padding:16px;flex-direction:row;justify-content:space-between;align-items:center;background:#52280b;height:84px}.main-header .title[data-v-b86c55f0]{color:#ffdead;margin:0;padding:0;display:inline-flex;align-items:center}.main-header .title .icon-wrapper[data-v-b86c55f0]{border-radius:100px;background:#ffdead;width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;padding-top:6px;margin-right:8px}.main-header .title .icon-wrapper img[data-v-b86c55f0]{width:auto;height:100%}.main-header .cta-buttons[data-v-b86c55f0]{display:flex;justify-content:center;align-items:center;position:absolute;top:400px;right:calc(50vw - 70px);transition:all .3s}@media(min-width:720px){.main-header .cta-buttons[data-v-b86c55f0]{right:calc(50vw - 120px)}}.main-header.scrolled .cta-buttons[data-v-b86c55f0]{top:16px;right:16px}",""])},function(t,e,n){"use strict";var i=n(20);n.n(i).a},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"body,html{margin:0;padding:0;background:#ffdead;min-height:100vh}*{box-sizing:border-box}h1,h2,h3,h4,h5,h6{text-shadow:1px 1px 1px #000}.outer-page-wrapper{padding-top:84px}.hero{height:400px;background:#52280b;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:24px}.hero .hero-title{font-size:42px;color:#ffdead;font-weight:700;margin:0}.hero p{color:#ffdead;margin-bottom:100px;max-width:420px}.example-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:42px}.example-wrapper h2{font-size:32px;color:#52280b;font-weight:700;margin-top:0;text-shadow:1px 1px 1px #ffdead}.example-wrapper img{border-radius:16px;max-width:100%;height:auto;margin:0 -42px;min-width:100%;max-width:150%}@media(min-width:720px){.example-wrapper img{margin:0;min-width:auto;max-width:100%}}.downloads-wrapper{background:#7b3d11;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:42px}.downloads-wrapper h2{font-size:32px;color:#ffdead;font-weight:700}.downloads{margin:0;padding:24px}.downloads .download{box-shadow:0 8px 6px -6px rgba(0,0,0,.4);border-radius:42px;border:2px solid #ffdead;display:flex;align-items:center;flex-direction:row;justify-content:space-between;padding:14px 20px;margin-bottom:24px;background:#52280b;width:620px;max-width:calc(100vw - 48px)}.downloads .download h3{font-size:28px;color:#ffdead;margin:0}.main-footer{padding:142px 42px 42px;display:flex;flex-direction:column}.main-footer,.marketplace-button{align-items:center;justify-content:center}.marketplace-button{box-shadow:0 8px 6px -6px rgba(0,0,0,.4);display:inline-flex;border-radius:42px;padding:14px 20px;text-decoration:none;font-weight:700;outline:none;background-color:#ffdead;border:2px solid #ffdead;color:#52280b;transition:all .3s;margin-right:8px}.marketplace-button:focus,.marketplace-button:hover{box-shadow:0 14px 10px -6px rgba(0,0,0,.4)}.marketplace-button:active{box-shadow:0 4px 2px -3px rgba(0,0,0,.4)}.marketplace-button .icon{width:20px;height:auto;margin-right:0}@media(min-width:720px){.marketplace-button .icon{margin-right:8px}}.marketplace-button .text{font-size:0}@media(min-width:720px){.marketplace-button .text{font-size:20px}}.marketplace-button:focus,.marketplace-button:hover{background-color:#fff3e0;border-color:#fff3e0}.marketplace-button:active{background-color:#ffc97a;border-color:#ffc97a}.github-button{box-shadow:0 8px 6px -6px rgba(0,0,0,.4);display:inline-flex;border-radius:42px;padding:14px 20px;text-decoration:none;font-weight:700;outline:none;align-items:center;justify-content:center;background-color:#52280b;border:2px solid #ffdead;color:#ffdead;transition:all .3s}.github-button:active{box-shadow:0 4px 2px -3px rgba(0,0,0,.4)}.github-button .icon{width:20px;height:auto;margin-right:0}@media(min-width:720px){.github-button .icon{margin-right:8px}}.github-button .text{font-size:0}@media(min-width:720px){.github-button .text{font-size:20px}}.github-button:focus,.github-button:hover{box-shadow:0 14px 10px -6px rgba(0,0,0,.4);background-color:#fff3e0;border-color:#fff3e0;color:#52280b}.github-button:active{box-shadow:0 14px 10px -6px rgba(0,0,0,.4);background-color:#ffc97a;border-color:#ffc97a}",""])},function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer-page-wrapper"},[i("Header"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"downloads-wrapper"},[i("h2",[t._v("Downloads")]),t._v(" "),i("ul",{staticClass:"downloads"},[i("li",{staticClass:"download"},[i("h3",[t._v("HTML Biscuits")]),t._v(" "),i("div",{staticClass:"buttons"},[i("saber-link",{staticClass:"marketplace-button",attrs:{to:"https://marketplace.visualstudio.com/items?itemName=CodeBiscuits.html-biscuits"}},[i("img",{staticClass:"icon",attrs:{src:n(21)}}),t._v(" "),i("span",{staticClass:"text"},[t._v("Marketplace")])]),t._v(" "),i("saber-link",{staticClass:"github-button",attrs:{to:"https://github.com/code-biscuits/html-biscuits"}},[i("img",{staticClass:"icon",attrs:{src:n(22)}}),t._v(" "),i("span",{staticClass:"text"},[t._v("Github")])])],1)]),t._v(" "),t._m(2)])]),t._v(" "),t._m(3)],1)},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("h2",{staticClass:"hero-title"},[this._v("Delicious Code Editor Extensions")]),this._v(" "),e("p",[this._v("\n      Every dev needs something sweet sometimes. Code Biscuits are in-editor\n      annotations usually at the end of a closing tag/bracket/parenthisis/etc.\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example-wrapper"},[e("h2",[this._v("See it in action. Watch the end tags.")]),this._v(" "),e("img",{attrs:{src:n(25)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"download"},[e("h3",[this._v("More coming soon...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"main-footer"},[e("div",[this._v("\n      Icons used:\n      "),e("ul",[e("li",[this._v("biscuit by Bartama Graphic from the Noun Project")]),this._v(" "),e("li",[this._v("Download by IconMark from the Noun Project")]),this._v(" "),e("li",[this._v("Code Fork by shashank singh from the Noun Project")])])]),this._v("\n    Made with Biscuits. 2020\n  ")])}];i._withStripped=!0;var o=n(0),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"main-header",class:{scrolled:t.scrolled}},[t._m(0),t._v(" "),i("div",{staticClass:"cta-buttons"},[i("saber-link",{staticClass:"marketplace-button",attrs:{to:"https://marketplace.visualstudio.com/publishers/CodeBiscuits"}},[i("img",{staticClass:"icon",attrs:{src:n(21)}}),t._v(" "),i("span",{staticClass:"text"},[t._v("Marketplace")])]),t._v(" "),i("saber-link",{staticClass:"github-button",attrs:{to:"https://github.com/code-biscuits"}},[i("img",{staticClass:"icon",attrs:{src:n(22)}}),t._v(" "),i("span",{staticClass:"text"},[t._v("Github")])])],1)])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title"},[e("span",{staticClass:"icon-wrapper"},[e("img",{staticClass:"icon",attrs:{src:n(26)}})]),this._v("\n    Code Biscuits\n  ")])}];r._withStripped=!0;var c=o.a.extend({components:{},mounted(){document.addEventListener("scroll",this.handleScroll),this.handleScroll(window.scrollY)},destroyed(){document.removeEventListener("scroll",this.handleScroll)},data:function(){return{scrolled:!1}},methods:{handleScroll(t){this.scrolled=window.scrollY>70}}}),d=(n(27),n(3)),l=Object(d.a)(c,r,s,!1,null,"b86c55f0",null);l.options.__file="components/header.vue";var p=l.exports,u=o.a.extend({components:{Header:p}}),f=(n(29),Object(d.a)(u,i,a,!1,null,null,null));f.options.__file="pages/index.vue";var h=f.exports,m={render:function(t){return t("layout-manager",{scopedSlots:{component:function(e){return t(h,{props:e})}}})}},g=function(t){var e,n,i=(n=void 0,(e={}).type="page",e.internal=n,e.contentType="vue",e.slug="index",e.content=n,e.createdAt=new Date(1601339155427),e.updatedAt=new Date(1601517675683),e.permalink="/",e.assets={},e.attributes=e,e),a=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=i}].concat(a);["layout","transition"].forEach((function(e){var n=t.options.PageComponent;n&&(t.options[e]=n[e]),void 0===t.options[e]&&(t.options[e]=i[e])})),i.slug&&(t.options.name="page-wrapper-"+i.slug.replace(/[^0-9a-z\-]/gi,"-"))},x=Object(d.a)(m,void 0,void 0,!1,null,null,null);"function"==typeof g&&g(x),x.options.__file="pages/index.vue";e.default=x.exports}])]);