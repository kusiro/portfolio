(function(e){function t(t){for(var r,a,i=t[0],l=t[1],u=t[2],s=0,f=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-f88b53c8":"a61073b6","chunk-1f47a4bd":"677b640d","chunk-3c8f4157":"ec2b5c79","chunk-c3bec298":"9a4aab84"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-f88b53c8":1,"chunk-1f47a4bd":1,"chunk-3c8f4157":1,"chunk-c3bec298":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-f88b53c8":"f0222215","chunk-1f47a4bd":"c19e3927","chunk-3c8f4157":"e99da186","chunk-c3bec298":"1e0ea4ac"}[e]+".css",o=l.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],s=u.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/portfolio/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"4f80":function(e,t,n){"use strict";n("a6f2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"display-3 v-heading mb-3 font-weight-light"},[e._t("default")],2)},o=[],c={name:"BaseHeading",props:{tag:{type:String,default:"h1"}}},i=c,l=(n("4f80"),n("2877")),u=Object(l["a"])(i,a,o,!1,null,null,null),s=u.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"display-1 v-heading mb-3 font-weight-light"},[e._t("default")],2)},p=[],d={name:"BaseSubheading",props:{tag:{type:String,default:"h1"}}},h=d,b=Object(l["a"])(h,f,p,!1,null,null,null),m=b.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title font-weight-light",staticStyle:{"line-height":"1.7 !important"}},[e._t("default")],2)},g=[],w={name:"BaseText"},k=w,y=Object(l["a"])(k,v,g,!1,null,null,null),_=y.exports;r["a"].component("BaseHeading",s),r["a"].component("BaseSubheading",m),r["a"].component("BaseText",_);var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{theme:"",id:"app"}},[n("v-main",[n("core-app-nav"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},x=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}],attrs:{id:"nav",color:e.isScrolling?"#f1f4f6":"transparent",fixed:"",flat:""}},[n("v-slide-x-transition",[n("v-toolbar-title",[n("router-link",{attrs:{to:"/"}},[e._v("Soon Chun")])],1)],1),n("v-spacer"),n("ul",{staticClass:"bar-item"},[n("li",{staticClass:"enable"},[n("router-link",{attrs:{to:"/About"}},[e._v("About")])],1),n("li",{staticClass:"enable"},[n("router-link",{attrs:{to:"/Projects"}},[e._v("Project")])],1),n("li",{staticClass:"enable"},[n("router-link",{attrs:{to:"Work-Experience"}},[e._v("Experience")])],1)]),n("v-app-bar-nav-icon",{staticClass:"draw-icon",on:{click:function(t){e.drawer=!0}}})],1),n("v-navigation-drawer",{attrs:{fixed:"",temporary:"",right:"",height:"100vh"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("ul",{staticClass:"bar-item draw-bar"},[n("li",{staticClass:"enable"},[n("router-link",{attrs:{to:"/About"}},[e._v("About")])],1),n("li",{staticClass:"enable"},[n("router-link",{attrs:{to:"/Projects"}},[e._v("Project")])],1),n("li",{staticClass:"disable"},[e._v("Experience")])])])],1)},C=[],P={name:"CoreAppBar",data:function(){return{showLogo:!1,isScrolling:!1,drawer:!1,group:null}},methods:{onScroll:function(){var e=document.querySelector(".draw-icon"),t=document.querySelector(".bar-item"),n=window.pageYOffset;this.isScrolling=n>50,this.showLogo=n>200,this.isScrolling?(e.classList.add("draw-icon-show"),t.classList.add("bar-item-hidden")):(e.classList.remove("draw-icon-show"),t.classList.remove("bar-item-hidden"))}}},A=P,E=(n("774e"),n("6544")),O=n.n(E),T=n("40dc"),B=n("5bc1"),L=n("f774"),N=n("0789"),V=n("2fa4"),$=n("2a7f"),M=n("269a"),q=n.n(M),D=n("f977"),H=Object(l["a"])(A,j,C,!1,null,"5f6a07c6",null),W=H.exports;O()(H,{VAppBar:T["a"],VAppBarNavIcon:B["a"],VNavigationDrawer:L["a"],VSlideXTransition:N["a"],VSpacer:V["a"],VToolbarTitle:$["a"]}),q()(H,{Scroll:D["b"]});var I={name:"App",components:{CoreAppNav:W}},J=I,F=(n("034f"),n("7496")),K=n("f6c4"),U=Object(l["a"])(J,S,x,!1,null,null,null),X=U.exports;O()(U,{VApp:F["a"],VMain:K["a"]});n("fb98");var Y=n("f309");r["a"].use(Y["a"]);var z=new Y["a"]({}),G=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(G["a"]);var Q=[{path:"/",name:"About",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-1f47a4bd")]).then(n.bind(null,"7dd8"))}},{path:"/About",name:"About",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-1f47a4bd")]).then(n.bind(null,"7dd8"))}},{path:"/Projects",name:"Projects",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-c3bec298")]).then(n.bind(null,"e00e1"))}},{path:"/Work-Experience",name:"Work-Experience",component:function(){return Promise.all([n.e("chunk-f88b53c8"),n.e("chunk-3c8f4157")]).then(n.bind(null,"3334"))}}],R=new G["a"]({mode:"history",base:"/portfolio/",routes:Q}),Z=R;r["a"].config.productionTip=!1,new r["a"]({vuetify:z,router:Z,render:function(e){return e(X)}}).$mount("#app")},"774e":function(e,t,n){"use strict";n("c218")},"85ec":function(e,t,n){},a6f2:function(e,t,n){},c218:function(e,t,n){},fb98:function(e,t,n){}});
//# sourceMappingURL=app.f8e39273.js.map