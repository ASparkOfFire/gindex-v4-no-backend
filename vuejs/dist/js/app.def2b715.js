(function(e){function t(t){for(var n,o,r=t[0],s=t[1],u=t[2],d=0,l=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var r=a[o];0!==i[r]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},i={app:0},c=[];function r(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-25148e54":"308ab8a0","chunk-27bf860a":"a49e9e45","chunk-2d0af48a":"6301fae1","chunk-0547c3c8":"4788020f","chunk-2d0b2ee4":"1d3b83d7","chunk-46a74738":"83f86c37","chunk-1e48ff03":"644400cb","chunk-2d0aed92":"fed387c9","chunk-2d0c4c28":"f5b6f93a","chunk-38634842":"3631de5f","chunk-521e562b":"b2574fa5","chunk-6e83591c":"163e5349","chunk-381fa2f5":"7cf51b82","chunk-6f1294e3":"16ce38e3","chunk-74c3c4a6":"e63b3375","chunk-f16f8b2a":"7d8db987"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-25148e54":1,"chunk-27bf860a":1,"chunk-0547c3c8":1,"chunk-1e48ff03":1,"chunk-521e562b":1,"chunk-74c3c4a6":1,"chunk-f16f8b2a":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-25148e54":"ad4fef4a","chunk-27bf860a":"8a35c7a4","chunk-2d0af48a":"31d6cfe0","chunk-0547c3c8":"1bef64fc","chunk-2d0b2ee4":"31d6cfe0","chunk-46a74738":"31d6cfe0","chunk-1e48ff03":"265661d4","chunk-2d0aed92":"31d6cfe0","chunk-2d0c4c28":"31d6cfe0","chunk-38634842":"31d6cfe0","chunk-521e562b":"fe1e6b08","chunk-6e83591c":"31d6cfe0","chunk-381fa2f5":"31d6cfe0","chunk-6f1294e3":"31d6cfe0","chunk-74c3c4a6":"757d3cd3","chunk-f16f8b2a":"7b51c22c"}[e]+".css",i=s.p+n,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var u=c[r],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===i))return t()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){u=l[r],d=u.getAttribute("data-href");if(d===n||d===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],f.parentNode.removeChild(f),a(c)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=r(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/tks18/gindex-v4-no-backend@v7.7.7/vuejs/dist/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2e32":function(e){e.exports=JSON.parse('{"_name":"🇬🇧English","languages":"Languages","index":"Home","folder":"Folder","notify":{"title":"Notify"},"copy":{"success":"Copy successful","error":"Copy failed"},"list":{"view":{"gridMode":"Grid view","listMode":"List view"},"auth":"Directory encryption, please enter password","title":{"file":"File","moditime":"Modified Time","size":"Size","operation":"Actions"},"loading":"Loading...","opt":{"copy":"Copy link","newTab":"Open a new tab","download":"Download"},"total":"Total","item":"item"},"search":{"placeholder":"Search resources..."},"page":{"video":{"play":"Play","download":"Download","link":"Download link"},"text":{"loading":"Loading..."}},"setting":{"clear":{"text":"Clean cache","success":"Cache cleanup successful"}},"checkVersion":{"tips":"New version detected, <a href=\'${url}\'>Go to GitHub</a>"}}')},"3c26":function(e,t,a){"use strict";a.r(t);a("4160"),a("d3b7"),a("159b");t["default"]={namespaced:!0,state:{cancelToken:[]},actions:{push:function(e,t){var a=e.commit;return new Promise((function(e){a("push",t),e()}))},cancel:function(e){var t=e.commit;return new Promise((function(e){t("clear"),e()}))}},mutations:{push:function(e,t){e.cancelToken.push(t)},clear:function(e){e.cancelToken.forEach((function(e){e()})),e.cancelToken=[]}}}},4360:function(e,t,a){"use strict";var n=a("8bbf"),o=a.n(n),i=a("5880"),c=a.n(i),r=(a("4160"),a("d3b7"),a("ac1f"),a("5319"),a("159b"),a("ddb0"),a("a363")),s={};r.keys().forEach((function(e){s[e.replace(/(\.\/|\.js)/g,"")]=r(e).default}));var u={namespaced:!0,modules:s};o.a.use(c.a);t["a"]=new c.a.Store({modules:{acrou:u}})},"49f8":function(e,t,a){var n={"./en.json":"edd4","./zh-chs.json":"2e32","./zh-cht.json":"e862"};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="49f8"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("8bbf"),o=a.n(n),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mx-0 my-0 px-0 py-0",style:e.netflix_black?"background-color: #222222":"background-color: black;",attrs:{id:"app"}},[a("Layout",{ref:"layout"})],1)},c=[],r=(a("ac1f"),a("5319"),a("c276")),s=a("88e9"),u={name:"App",components:{Layout:s["default"]},data:function(){return{github:"https://github.com/tks18/gindex-v4",netflix_black:!1}},watch:{"$i18n.locale":"i18nHandle"},created:function(){this.i18nHandle(this.$i18n.locale)},mounted:function(){this.netflix_black=window.themeOptions.prefer_netflix_black},methods:{i18nHandle:function(e){r["a"].cookies.set("lang",e),document.querySelector("html").setAttribute("lang",e)},checkVersion:function(){var e=window.gdconfig.version,t="7.7.7";e&&t===e||this.$notify({title:this.$t("notify.title"),dangerouslyUseHTMLString:!0,message:this.$t("checkVersion.tips").replace("${url}",this.github),duration:0,type:"success"})}}},d=u,l=a("2877"),f=Object(l["a"])(d,i,c,!1,null,null,null),h=f.exports,p=a("5f72"),v=a.n(p),m=(a("aaa5"),a("46a1"),a("be4f"),a("9bd2")),g=a("a7fe"),b=a.n(g),k=a("a18c"),w=a("4a7a"),y=a.n(w),O=(a("4160"),a("d81d"),a("b64b"),a("d3b7"),a("466d"),a("159b"),a("ddb0"),a("85b3")),x=a.n(O);function _(){var e=a("49f8"),t={};return e.keys().forEach((function(a){var n=a.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var o=n[1];t[o]=e(a)}})),t}o.a.use(x.a);var j=_();o.a.prototype.$languages=Object.keys(j).map((function(e){return{label:j[e]._name,value:e}}));var A=new x.a({locale:r["a"].cookies.get("lang")||window.gdconfig.themeOptions.languages||"zh-chs",fallbackLocale:"en",messages:j}),C=a("afa7"),P=a("4360"),E=a("4eb5"),L=a.n(E),N=a("caf9"),V=a("6944"),D=a.n(V),G=a("cbd9");o.a.component("markdown",(function(){return Promise.all([a.e("chunk-2d0af48a"),a.e("chunk-0547c3c8")]).then(a.bind(null,"b6ba"))}));a("0808"),a("e558");o.a.config.productionTip=!1,o.a.prototype.$cdnpath=G["a"],o.a.use(v.a),o.a.use(b.a,m["a"]),o.a.component("v-select",y.a),o.a.use(a("2ead")),o.a.use(L.a),o.a.use(C["a"],{plyr:{fullscreen:{enabled:!0}}}),o.a.use(N["a"],{loading:Object(G["a"])("images/airplane.gif")}),o.a.use(D.a),new o.a({router:k["a"],store:P["a"],i18n:A,render:function(e){return e(h)},mounted:function(){this.$store.dispatch("acrou/view/load")}}).$mount("#app")},5726:function(e,t){e.exports=low},5880:function(e,t){e.exports=Vuex},"5c1a":function(e,t,a){"use strict";a.r(t);var n=a("a18c"),o=a("60bb"),i=a("95a2");t["default"]={namespaced:!0,actions:{set:function(e,t){var a=t.dbName,n=void 0===a?"database":a,o=t.path,c=void 0===o?"":o,r=t.value,s=void 0===r?"":r,u=t.user,d=void 0!==u&&u;Object(i["c"])({dbName:n,path:c,value:s,user:d})},get:function(e,t){var a=t.dbName,n=void 0===a?"database":a,o=t.path,c=void 0===o?"":o,r=t.defaultValue,s=void 0===r?"":r,u=t.user,d=void 0!==u&&u;return Object(i["b"])({dbName:n,path:c,defaultValue:s,user:d})},database:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.user,n=void 0!==a&&a;return Object(i["a"])({user:n,defaultValue:{}})},databaseClear:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.user,n=void 0!==a&&a;return Object(i["a"])({user:n,validator:function(){return!1},defaultValue:{}})},databasePage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.basis,o=void 0===a?"fullPath":a,c=t.user,r=void 0!==c&&c;return Object(i["a"])({path:"$page.".concat(n["a"].app.$route[o]),user:r,defaultValue:{}})},databasePageClear:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.basis,o=void 0===a?"fullPath":a,c=t.user,r=void 0!==c&&c;return Object(i["a"])({path:"$page.".concat(n["a"].app.$route[o]),user:r,validator:function(){return!1},defaultValue:{}})},pageSet:function(e,t){var a=t.instance,c=t.basis,r=void 0===c?"fullPath":c,s=t.user,u=void 0!==s&&s;return Object(i["a"])({path:"$page.".concat(n["a"].app.$route[r],".$data"),user:u,validator:function(){return!1},defaultValue:Object(o["cloneDeep"])(a.$data)})},pageGet:function(e,t){var a=t.instance,c=t.basis,r=void 0===c?"fullPath":c,s=t.user,u=void 0!==s&&s;return Object(i["b"])({path:"$page.".concat(n["a"].app.$route[r],".$data"),user:u,defaultValue:Object(o["cloneDeep"])(a.$data)})},pageClear:function(e,t){var a=t.basis,o=void 0===a?"fullPath":a,c=t.user,r=void 0!==c&&c;return Object(i["a"])({path:"$page.".concat(n["a"].app.$route[o],".$data"),user:r,validator:function(){return!1},defaultValue:{}})}}}},"5f72":function(e,t){e.exports=ELEMENT},"60bb":function(e,t){e.exports=_},6389:function(e,t){e.exports=VueRouter},"6c69":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar",style:e.netflix_black?"background-color: #222222":"background-color: black;",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"loading"},[a("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(t){e.loading=t}}})],1),a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"navbar-item nav-link"},[a("h3",{staticClass:"title has-text-netflix is-3",on:{click:e.homeroute}},[e._v(" "+e._s(e.siteName)+" ")])]),a("a",{class:"navbar-burger burger "+(e.isActive?"navbar-active":""),staticStyle:{color:"#e50914"},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:e.burgerClick}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{class:"navbar-menu "+(e.isActive?"is-active":""),staticStyle:{"background-color":"inherit"},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[e._l(e.quicklinks.slice(0,3),(function(t,n){return a("a",{key:n,staticClass:"navbar-item",attrs:{title:t.displayname},on:{click:function(a){return e.gotoPage("/"+t.link+"/")}}},[a("span",[e._v(e._s(t.displayname))])])})),a("a",{staticClass:"navbar-item",attrs:{title:"All"},on:{click:function(t){return e.gotoPage("/")}}},[a("span",[e._v("View All")])])],2),a("div",{staticClass:"navbar-end"},[a("div",{class:e.ismobile?e.gddropdown?"navbar-item has-dropdown is-active":"navbar-item has-dropdown":"navbar-item has-dropdown is-hoverable",on:{click:function(t){e.ismobile&&(e.gddropdown=!e.gddropdown)}}},[a("a",{staticClass:"navbar-link",staticStyle:{"background-color":"inherit"}},[e._v("Space")]),a("div",{staticClass:"navbar-dropdown is-boxed"},e._l(e.gds,(function(t,n){return a("a",{key:n,staticClass:"navbar-item",on:{click:function(a){return e.changeItem(t)}}},[e._v(e._s(t.name))])})),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],staticClass:"navbar-item"},[a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control has-icons-right is-dark",staticStyle:{width:"100%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.param,expression:"param"}],staticClass:"input is-rounded search-input",attrs:{type:"search",placeholder:e.$t("search.placeholder")},domProps:{value:e.param},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.query(t)},input:function(t){t.target.composing||(e.param=t.target.value)}}}),e._m(0)])])]),a("a",{class:e.ismobile?"navbar-item":"navbar-item is-hidden",on:{click:function(t){return t.stopPropagation(),e.$refs.viewMode.toggleMode(t)}}},[a("viewMode",{ref:"viewMode"})],1)])])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-right",staticStyle:{padding:"0 5px"}},[a("i",{staticClass:"fas fa-search"})])}],i=(a("4de4"),a("d81d"),a("ac1f"),a("466d"),a("9911"),a("f3f7")),c=a("9062"),r=a.n(c),s={components:{ViewMode:i["a"],Loading:r.a},created:function(){this.active=!1,this.siteName=document.getElementsByTagName("title")[0].innerText,window.gds&&window.gds.length>0&&(this.gds=window.gds.map((function(e,t){return{name:e,id:"/"+t+":",index:t}})),this.chooseGD()),window.MODEL&&(this.param=window.MODEL.q?window.MODEL.q:"")},data:function(){return{siteName:"",active:!1,param:"",currgd:{},loading:!1,netflix_black:!1,mouseover:!1,fullpage:!0,quicklinks:[],gds:[],gdindex:"",gddropdown:!1,isActive:!1,eyes:"data:image/png;base64,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"}},methods:{chooseGD:function(){var e=this.$route.params.id;this.gds&&this.gds.length>=e&&(this.currgd=this.gds[e],this.gdindex=this.gds[e].index)},changeItem:function(e){this.currgd=e,this.$router.push({path:"/"+e.index+":home/"})},query:function(){this.param&&(this.isActive=!this.isActive,this.$router.push({path:this.currgd.id.match("/[0-9]+:")+"search?q="+this.param}))},burgerClick:function(){this.isActive=!this.isActive},hoverclick:function(){this.active=!this.active},homeroute:function(){this.$router.push({path:"/"+this.gdindex+":home/"})},gotoPage:function(e,t){var a=this;this.isActive=!this.isActive,this.loading=!0,t?this.$router.push({path:"/"+this.gdindex+":"+t+e}):this.$router.push({path:"/"+this.gdindex+":"+e}),setTimeout((function(){a.loading=!1}),500)}},computed:{showSearch:function(){return!window.MODEL||window.MODEL.root_type<2},ismobile:function(){var e=window.innerWidth>0?window.innerWidth:screen.width;return!(e>966)}},mounted:function(){var e=this;this.netflix_black=window.themeOptions.prefer_netflix_black,this.quicklinks=window.quickLinks.filter((function(t){return t.root==e.gdindex}))[0].link},watch:{"$route.params.id":"chooseGD"}},u=s,d=a("2877"),l=Object(d["a"])(u,n,o,!1,null,null,null);t["default"]=l.exports},"85b3":function(e,t){e.exports=VueI18n},"88e9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"section mx-0 my-0 px-0 py-0"},[a("Head"),a("feb-alive",[a("router-view")],1),a("Footer")],1)])},o=[],i=a("e0a1"),c=a("a1c2"),r={data:function(){return{showInfo:!0}},components:{Head:i["default"],Footer:c["default"]}},s=r,u=a("2877"),d=Object(u["a"])(s,n,o,!1,null,null,null);t["default"]=d.exports},"8bbf":function(e,t){e.exports=Vue},"95a2":function(e,t,a){"use strict";a.d(t,"c",(function(){return f})),a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return p}));a("99af"),a("d3b7");var n=a("5726"),o=a.n(n),i=a("c758"),c=a.n(i),r=a("c276"),s=a("60bb"),u=new c.a("go2index-".concat("7.7.7")),d=o()(u);function l(e){var t=e.dbName,a=void 0===t?"database":t,n=e.path,o=void 0===n?"":n,i=e.user,c=void 0===i||i,s=e.validator,u=void 0===s?function(){return!0}:s,l=e.defaultValue,f=void 0===l?"":l,h=r["a"].cookies.get("uuid")||"ghost-uuid",p="".concat(a,".").concat(c?"user.".concat(h):"public").concat(o?".".concat(o):""),v=d.get(p).value();return void 0!==v&&u(v)||d.set(p,f).write(),p}function f(e){var t=e.dbName,a=void 0===t?"database":t,n=e.path,o=void 0===n?"":n,i=e.value,c=void 0===i?"":i,r=e.user,s=void 0!==r&&r;d.set(l({dbName:a,path:o,user:s}),c).write()}function h(e){var t=e.dbName,a=void 0===t?"database":t,n=e.path,o=void 0===n?"":n,i=e.defaultValue,c=void 0===i?"":i,r=e.user,u=void 0!==r&&r;return new Promise((function(e){e(Object(s["cloneDeep"])(d.get(l({dbName:a,path:o,user:u,defaultValue:c})).value()))}))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dbName,a=void 0===t?"database":t,n=e.path,o=void 0===n?"":n,i=e.user,c=void 0!==i&&i,r=e.validator,s=void 0===r?function(){return!0}:r,u=e.defaultValue,f=void 0===u?"":u;return new Promise((function(e){e(d.get(l({dbName:a,path:o,user:c,validator:s,defaultValue:f})))}))}d.defaults({sys:{},database:{}}).write(),t["d"]=d},"9bd2":function(e,t,a){"use strict";a("d3b7");var n=a("cebe"),o=a.n(n),i=a("4360"),c=a("a18c"),r=o.a.create({baseURL:Object({NODE_ENV:"production",VUE_APP_CDN_PATH:"https://cdn.jsdelivr.net/gh/tks18/gindex-v4-no-backend@v7.7.7/vuejs/dist/",VUE_APP_G2INDEX_VERSION:"7.7.7",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"zh-chs",VUE_APP_VERSION:"7.7.7",BASE_URL:"https://cdn.jsdelivr.net/gh/tks18/gindex-v4-no-backend@v7.7.7/vuejs/dist/"}).VUE_APP_API?Object({NODE_ENV:"production",VUE_APP_CDN_PATH:"https://cdn.jsdelivr.net/gh/tks18/gindex-v4-no-backend@v7.7.7/vuejs/dist/",VUE_APP_G2INDEX_VERSION:"7.7.7",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"zh-chs",VUE_APP_VERSION:"7.7.7",BASE_URL:"https://cdn.jsdelivr.net/gh/tks18/gindex-v4-no-backend@v7.7.7/vuejs/dist/"}).VUE_APP_API:""});r.interceptors.request.use((function(e){return e.cancelToken=new o.a.CancelToken((function(e){i["a"].dispatch("acrou/cancelToken/push",e)})),e}),(function(e){return console.log(e),Promise.reject(e)})),r.interceptors.response.use((function(e){return e}),(function(e){if(e&&e.response)switch(e.response.status){case 401:e.message="You Don't Deserve this Glory!! 😝";break;default:break}return console.log(e),c["a"].app.$router.go(-1),Promise.reject(e)})),t["a"]=r},"9dac":function(e,t,a){var n={"./Layout":["88e9"],"./Layout.vue":["88e9"],"./common/BreadCrumb":["2db9","chunk-46a74738","chunk-1e48ff03"],"./common/BreadCrumb.vue":["2db9","chunk-46a74738","chunk-1e48ff03"],"./common/Footer":["a1c2"],"./common/Footer.vue":["a1c2"],"./common/Head":["e0a1"],"./common/Head.vue":["e0a1"],"./common/Markdown":["3bcf","chunk-46a74738","chunk-2d0af48a","chunk-2d0c4c28"],"./common/Markdown.vue":["3bcf","chunk-46a74738","chunk-2d0af48a","chunk-2d0c4c28"],"./common/Navbar":["6c69"],"./common/Navbar.vue":["6c69"],"./page/GoAudio":["f9b3","chunk-46a74738","chunk-38634842","chunk-6e83591c","chunk-6f1294e3"],"./page/GoAudio.vue":["f9b3","chunk-46a74738","chunk-38634842","chunk-6e83591c","chunk-6f1294e3"],"./page/GoImg":["0c8a","chunk-46a74738","chunk-2d0aed92"],"./page/GoImg.vue":["0c8a","chunk-46a74738","chunk-2d0aed92"],"./page/GoList":["e65d","chunk-46a74738","chunk-2d0af48a","chunk-38634842","chunk-521e562b"],"./page/GoList.vue":["e65d","chunk-46a74738","chunk-2d0af48a","chunk-38634842","chunk-521e562b"],"./page/GoPdf":["fe7f","chunk-46a74738","chunk-74c3c4a6"],"./page/GoPdf.vue":["fe7f","chunk-46a74738","chunk-74c3c4a6"],"./page/GoText":["c556","chunk-46a74738","chunk-f16f8b2a"],"./page/GoText.vue":["c556","chunk-46a74738","chunk-f16f8b2a"],"./page/GoVideo":["0262","chunk-46a74738","chunk-38634842","chunk-6e83591c","chunk-381fa2f5"],"./page/GoVideo.vue":["0262","chunk-46a74738","chunk-38634842","chunk-6e83591c","chunk-381fa2f5"],"./page/components/grid":["2a7a","chunk-27bf860a"],"./page/components/grid/":["2a7a","chunk-27bf860a"],"./page/components/grid/index":["2a7a","chunk-27bf860a"],"./page/components/grid/index.vue":["2a7a","chunk-27bf860a"],"./page/components/list":["25e0","chunk-2d0b2ee4"],"./page/components/list/":["25e0","chunk-2d0b2ee4"],"./page/components/list/index":["25e0","chunk-2d0b2ee4"],"./page/components/list/index.vue":["25e0","chunk-2d0b2ee4"],"./page/static/Home":["d748","chunk-25148e54"],"./page/static/Home.vue":["d748","chunk-25148e54"]};function o(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(o)}))}o.keys=function(){return Object.keys(n)},o.id="9dac",e.exports=o},a18c:function(e,t,a){"use strict";a("45fc"),a("ac1f"),a("5319");var n=a("8bbf"),o=a.n(n),i=a("0499"),c=a("6389"),r=a.n(c),s=a("5530"),u=a("e36f"),d={disableCache:!1},l=[{path:"/:id(\\d)::cmd(text)/:path",name:"text",component:u("page/GoText"),meta:Object(s["a"])(Object(s["a"])({},d),{},{view:"text"})},{path:"/:id(\\d)::cmd(pdf)/:path",name:"pdf",component:u("page/GoPdf"),meta:Object(s["a"])(Object(s["a"])({},d),{},{view:"pdf"})},{path:"/",name:"base",component:u("page/GoList"),meta:Object(s["a"])(Object(s["a"])({},d),{},{redirect:!0})},{path:"/:id(\\d)::cmd(video)/:path",name:"video",component:u("page/GoVideo"),meta:Object(s["a"])(Object(s["a"])({},d),{},{view:"video"})},{path:"/:id(\\d)::cmd(audio)/:path",name:"audio",component:u("page/GoAudio"),meta:Object(s["a"])(Object(s["a"])({},d),{},{view:"audio"})},{path:"/:id(\\d)::cmd(image)/:path",name:"image",component:u("page/GoImg"),meta:Object(s["a"])(Object(s["a"])({},d),{},{view:"image"})},{path:"/:id(\\d)::cmd(search)(/?q=)*",name:"search",component:u("page/GoList"),meta:Object(s["a"])(Object(s["a"])({},d),{},{view:"list"})},{path:"/:id(\\d):/:path*",name:"files",component:u("page/GoList"),meta:Object(s["a"])(Object(s["a"])({},d),{},{view:"list"})},{path:"/:id(\\d)::cmd(home)/",name:"home",component:u("page/static/Home"),meta:Object(s["a"])({},d)}],f=l,h=a("4360");i["a"].resetHistory();var p=r.a.prototype.push;r.a.prototype.push=function(e){return p.call(this,e).catch((function(e){return e}))};var v=r.a.prototype.replace;r.a.prototype.replace=function(e){return v.call(this,e).catch((function(e){return e}))},o.a.use(r.a);var m=new r.a({mode:"history",scrollBehavior:function(e,t,a){return a||{x:0,y:0}},routes:f});o.a.use(i["a"],{router:m}),m.beforeEach((function(e,t,a){h["a"].dispatch("acrou/cancelToken/cancel"),e.matched.some((function(e){return e.meta.redirect}))?a({path:"/0:home/"}):a()}));t["a"]=m},a1c2:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer pb-5"},[a("div",{staticClass:"content has-text-centered"},[e.disclaimer?a("div",{staticClass:"footpad footer-disclaimer"},[a("span",{staticClass:"disclaimer-head"},[e._v("Disclaimer:")]),e._v(" Our resources are only for learning and communication, not for any commercial use. Please abide by the laws and regulations of your country, and any illegal behavior shall be borne by the user himself. ")]):e._e(),e.footerLogo?a("div",{staticClass:"footpad footimage"},[a("img",{staticClass:"gloryimage",attrs:{width:"150",height:"75",src:e.footerLogoLink}})]):e._e(),e._m(0),e.copyright?a("div",{staticClass:"footpad footer-copyright"},[e._v(" Copyright "),a("i",{staticClass:"fas fa-copyright"}),e._v(" "+e._s(e._f("moment")(Date.now(),"YYYY"))+" | "+e._s(e.sitename)+" ")]):e._e(),e.license?a("div",{staticClass:"footpad footer-policy"},[e._v(" Licensed under FrontEnd - "),a("a",{attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/LICENSE",target:"_blank"}},[e._v(" GPL 3.0 ")]),e._v(" | Backend - "),a("a",{attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/vuejs/LICENSE",target:"_blank"}},[e._v("MIT")])]):e._e(),e.codeofconduct?a("div",{staticClass:"footpad footer-code"},[e._v(" Please Read our "),a("a",{attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[e._v("Code of Conduct")]),e._v(" | "),a("a",{attrs:{href:"https://raw.githubusercontent.com/tks18/gindex-v4/dark-mode-0-1/CONTRIBUTING.md",target:"_blank"}},[e._v("Community Guidelines")])]):e._e()])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footpad footicons"},[e._v(" Github - "),a("a",{staticClass:"icon-tag",attrs:{href:"https://github.com/tks18/gindex-v4"}},[e._v("Shan.tk")]),e._v(" | Support Me! ")])}],i={props:{},data:function(){return{content:"",sitename:"",disclaimer:"",copyright:"",license:"",codeofconduct:"",footerLogo:!1,footerLogoLink:""}},components:{},methods:{},beforeMount:function(){this.sitename=document.getElementsByTagName("title")[0].innerText},mounted:function(){this.copyright=window.themeOptions.footer_data.copyright,this.disclaimer=window.themeOptions.footer_data.disclaimer,this.license=window.themeOptions.footer_data.license,this.codeofconduct=window.themeOptions.footer_data.license,this.footerLogo=window.themeOptions.footer_data.footer_logo,this.footerLogo?this.footerLogoLink=window.themeOptions.footer_data.footer_logo_link:this.footerLogoLink=""}},c=i,r=a("2877"),s=Object(r["a"])(c,n,o,!1,null,null,null);t["default"]=s.exports},a363:function(e,t,a){var n={"./cancelToken.js":"3c26","./db.js":"5c1a","./view.js":"d6c0"};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id="a363"},be65:function(e,t){e.exports=Cookies},c276:function(e,t,a){"use strict";a("99af");var n=a("be65"),o=a.n(n),i={set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={expires:1};Object.assign(n,a),o.a.set("go2index-".concat("7.7.7","-").concat(e),t,n)},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return o.a.get("go2index-".concat("7.7.7","-").concat(e))},getAll:function(){return o.a.get()},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return o.a.remove("go2index-".concat("7.7.7","-").concat(e))}},c=i,r=a("95a2"),s={cookies:c,db:r["d"],title:function(e){var t=Object({NODE_ENV:"production",VUE_APP_CDN_PATH:"https://cdn.jsdelivr.net/gh/tks18/gindex-v4-no-backend@v7.7.7/vuejs/dist/",VUE_APP_G2INDEX_VERSION:"7.7.7",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"zh-chs",VUE_APP_VERSION:"7.7.7",BASE_URL:"https://cdn.jsdelivr.net/gh/tks18/gindex-v4-no-backend@v7.7.7/vuejs/dist/"}).VUE_APP_TITLE||"GoIndex";window.document.title="".concat(t).concat(e?" | ".concat(e):"")},open:function(e){var t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("target","_blank"),t.setAttribute("id","d2admin-link-temp"),document.body.appendChild(t),t.click(),document.body.removeChild(document.getElementById("d2admin-link-temp"))}};t["a"]=s},c758:function(e,t){e.exports=LocalStorage},cbd9:function(e,t,a){"use strict";function n(e){var t="https://cdn.jsdelivr.net/gh/tks18/gindex-v4-no-backend@v7.7.7/vuejs/dist/";return t+e}a.d(t,"a",(function(){return n}))},cebe:function(e,t){e.exports=axios},d6c0:function(e,t,a){"use strict";a.r(t);a("d3b7"),a("96cf");var n=a("1da1");t["default"]={namespaced:!0,state:{mode:"list"},actions:{load:function(e){var t=e.state,a=e.dispatch,o=e.commit;return new Promise(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a("acrou/db/get",{dbName:"sys",path:"view.mode.value",defaultValue:"list",user:!0},{root:!0});case 2:t.mode=e.sent,o("set",t.mode),n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},toggle:function(e,t){var a=e.state,o=e.dispatch,i=e.commit;return new Promise(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.mode=t||"list",e.next=3,o("acrou/db/set",{dbName:"sys",path:"view.mode.value",value:a.mode,user:!0},{root:!0});case 3:i("set",a.mode),n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},mutations:{set:function(e,t){e.mode=t}}}},e0a1:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Navbar",{ref:"navbar"})],1)},o=[],i=a("6c69"),c={data:function(){return{}},methods:{},components:{Navbar:i["default"]}},r=c,s=a("2877"),u=Object(s["a"])(r,n,o,!1,null,null,null);t["default"]=u.exports},e36f:function(e,t,a){a("d3b7"),e.exports=function(e){return function(){return a("9dac")("./"+e)}}},e558:function(e,t,a){},e862:function(e){e.exports=JSON.parse('{"_name":"🇬🇧English","languages":"Languages","index":"Home","folder":"Folder","notify":{"title":"Notify"},"copy":{"success":"Copy successful","error":"Copy failed"},"list":{"view":{"gridMode":"Grid view","listMode":"List view"},"auth":"Directory encryption, please enter password","title":{"file":"File","moditime":"Modified Time","size":"Size","operation":"Actions"},"loading":"Loading...","opt":{"copy":"Copy link","newTab":"Open a new tab","download":"Download"},"total":"Total","item":"item"},"search":{"placeholder":"Search resources..."},"page":{"video":{"play":"Play","download":"Download","link":"Download link"},"text":{"loading":"Loading..."}},"setting":{"clear":{"text":"Clean cache","success":"Cache cleanup successful"}},"checkVersion":{"tips":"New version detected, <a href=\'${url}\'>Go to GitHub</a>"}}')},edd4:function(e){e.exports=JSON.parse('{"_name":"🇬🇧English","languages":"Languages","index":"Home","folder":"Folder","notify":{"title":"Notify"},"copy":{"success":"Copy successful","error":"Copy failed"},"list":{"view":{"gridMode":"Grid view","listMode":"List view"},"auth":"Directory encryption, please enter password","title":{"file":"File","moditime":"Modified Time","size":"Size","operation":"Actions"},"loading":"Loading...","opt":{"copy":"Copy link","newTab":"Open a new tab","download":"Download"},"total":"Total","item":"item"},"search":{"placeholder":"Search resources..."},"page":{"video":{"play":"Play","download":"Download","link":"Download link"},"text":{"loading":"Loading..."}},"setting":{"clear":{"text":"Clean cache","success":"Cache cleanup successful"}},"checkVersion":{"tips":"New version detected, <a href=\'${url}\'>Go to GitHub</a>"}}')},f3f7:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{directives:[{name:"show",rawName:"v-show",value:"list"===e.$route.meta.view,expression:"$route.meta.view === 'list'"}],staticClass:"icon",staticStyle:{color:"#E50914"},attrs:{title:"list"===e.mode?e.$t("list.view.gridMode"):e.$t("list.view.listMode")},on:{click:e.toggleMode}},[a("i",{class:"fa"+("list"===e.mode?" fa-th":" fa-th-list"),attrs:{"aria-hidden":"true"}})])},o=[],i=a("5530"),c=a("5880"),r={data:function(){return{}},computed:Object(i["a"])({},Object(c["mapState"])("acrou/view",["mode"])),methods:Object(i["a"])(Object(i["a"])({},Object(c["mapActions"])("acrou/view",["toggle"])),{},{toggleMode:function(){this.toggle("list"===this.mode?"grid":"list")}})},s=r,u=a("2877"),d=Object(u["a"])(s,n,o,!1,null,null,null);t["a"]=d.exports}});