(()=>{"use strict";var n={407:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".menu-container {\n    background-color: var(--bg-color-secondary);\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    gap: 2rem;\n    padding: 1.3rem;\n    height: 100%;\n    height: 100vh;\n    /* height: calc(100vh - 50px);\n    height: calc(100vh - env(safe-area-inset-bottom));\n    padding-bottom: env(safe-area-inset-bottom); */\n}\n\n.menu-top {\n    display: grid;\n    gap: 1rem;\n}\n\n.menu-body {\n    overflow: auto;\n    /* background-color: red; */\n}\n\n.menu-top .one {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 1.7rem;\n    /* font-weight: bolder; */\n    font-family: 'Lexend Deca bold';\n}\n\n.menu-top .one svg {\n    width: 20px;\n    font-size: 1rem;\n}\n\n.menu-top .two {\n    border: 1px solid #e7e5e5;\n    border-radius: 10px;\n    display: flex;\n    height: 2.5rem;\n    gap: .8rem;\n    align-items: center;\n    padding-left: 1rem;\n}\n\n.menu-top .two svg,\n.section-list svg {\n    width: 16px; \n    height: 16px; \n    overflow: visible; \n    opacity: 1; \n    z-index: 1; \n}\n\n\n.menu-top .two input {\n    width: 100%;\n    height: 100%;\n    font-size: 16px;\n}\n\n.menu-top .two input::placeholder {\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n.menu-top .two input:focus {\n    border: none;\n    outline: none;\n}\n\n.section-head {\n    font-size: var(--font-medium);\n    text-transform: uppercase;\n    font-weight: 600;\n    padding: .4rem .6rem;\n}\n\n.section-list {\n    display: grid;\n\n}\n\n.section-list button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: .6rem 1rem;\n    border-radius: 10px;\n}\n\n.section-list button div,\n.menu-bottom button {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    font-size: .9rem;\n    font-weight: 600;\n    color: var(--font-heavy-color);\n}\n\n.list-color {\n    width: 16px;\n    height: 16px;\n    background-color: red;\n    border-radius: 3px;\n}\n\n.section-list-count {\n    font-weight: bold;\n    background-color: var(--bg-color-tetiary);\n    width: 2rem;\n    height: 1.2rem;\n    display: flex;\n    justify-content: flex-end;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Lexend Deca regular';\n}\n\nsvg.add-icon {\n    stroke: var(--font-light-color);\n    stroke-width: 40px;   \n}\n\n.menu-tags button {\n    background: none;\n    display: flex;\n    padding: .6rem;\n    border-radius: 6px;\n    border: none;\n    background-color: palevioletred;\n    font-family: 'Lexend Deca regular';\n}\n\n.tag-controls {\n    /* display: flex;\n    flex-wrap: wrap; */\n    column-gap: 1rem;\n    gap: .4rem;\n}\n\n.menu-bottom {\n    margin-top: auto;\n    display: grid;\n    justify-content: left;\n    gap: 1rem;\n    padding: .5rem 0;\n}\n\n.menu-bottom button {\n    display: none;\n}",""]);const s=a},919:(n,e,t)=>{t.d(e,{A:()=>_});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),s=t(417),c=t.n(s),l=new URL(t(523),t.b),d=new URL(t(331),t.b),f=new URL(t(150),t.b),p=new URL(t(476),t.b),u=new URL(t(534),t.b),m=new URL(t(300),t.b),h=a()(r()),g=c()(l),b=c()(d),y=c()(f),v=c()(p),w=c()(u),x=c()(m);h.push([n.id,`@font-face {\n    font-family: 'Lexend Deca bold';\n    src: url(${g}) format('woff2'),\n        url(${b}) format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Lexend Deca regular';\n    src: url(${y}) format('woff2'),\n        url(${v}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Lexend Deca light';\n    src: url(${w}) format('woff2'),\n        url(${x}) format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    font-size: 16px;\n    font-family: 'Lexend Deca regular';\n    \n    --bg-color-primary: #fafafa;\n    --bg-color-secondary: #f4f4f4;\n    --bg-color-tetiary: #ebebeb;\n\n    --font-heavy-color: #212529;\n    --font-light-color: #7c7c7c;\n\n    --font-medium: .8rem;\n    height: 100%;\n}\n\nsvg {\n    fill: var(--font-light-color);\n    /* stroke: var(--font-light-color);\n    stroke-width: 20px;    */\n}\n\nbutton, input {\n    border: none;\n    background: none;\n    font-family: 'Lexend Deca light';\n}\n\nbody {\n    height: 100%;\n    display: grid;\n    overflow: hidden;\n}`,""]);const _=h},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,f="".concat(l," ").concat(d);i[l]=d+1;var p=t(f),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=r(u,o);o.byIndex=s,e.splice(s,0,{identifier:f,updater:m,references:1})}a.push(f)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},331:(n,e,t)=>{n.exports=t.p+"8d5b8c186d8489fd1468.woff"},523:(n,e,t)=>{n.exports=t.p+"89410c919a940ab27ca0.woff2"},300:(n,e,t)=>{n.exports=t.p+"cb9e767eb4409d41d4b4.woff"},534:(n,e,t)=>{n.exports=t.p+"cea119418444c4ba5d3a.woff2"},476:(n,e,t)=>{n.exports=t.p+"af9fac4774846a1dc464.woff"},150:(n,e,t)=>{n.exports=t.p+"e9b6da901dfcc796f61d.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),s=t(659),c=t.n(s),l=t(56),d=t.n(l),f=t(540),p=t.n(f),u=t(113),m=t.n(u),h=t(919),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;var b=t(407),y={};y.styleTagTransform=m(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),r()(b.A,y),b.A&&b.A.locals&&b.A.locals;const v=new class{constructor(n,e,t,o){this._id=crypto.randomUUID(),this._title=n,this._desc=e,this._dueDate=t,this._priority,this._completed=!1}get id(){return this._id}set title(n){this._title=n}get title(){return this._title}set desc(n){this._desc=n}get desc(){return this._desc}set dueDate(n){this._dueDate=n}get dueDate(){return this._dueDate}set priority(n){this._priority=n}get priority(){return this._priority}set completed(n){this._completed=n}get completed(){return this._completed}}("title","some odd description",new Date);console.log(v),console.info("this is an info message"),console.warn("this is a warning message"),console.error("this is an error message"),console.log(`${v.title} was deleted successfully`)})();