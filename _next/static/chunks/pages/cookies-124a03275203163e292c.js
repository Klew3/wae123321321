(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[900],{3036:function(e,t,n){e.exports=n(5398)},3088:function(e,t,n){e.exports=n(5789)},2816:function(e,t,n){e.exports=n(3221)},5398:function(e,t,n){"use strict";var r=n(5858);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));var o=r=i(i({},r),t);if(o.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(o.suspense)return n(o);r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};l(n(2480));var a=l(n(1654));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},7749:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(2480))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},1654:function(e,t,n){"use strict";var r=n(6949),o=n(9535),i=n(5858);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,d=(s=n(2480))&&s.__esModule?s:{default:s},f=n(9005),p=n(7749);var v=[],m=[],h=!1;function g(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var y=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function b(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=d.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new y(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h&&"function"===typeof n.webpack&&!n.suspense){var i=n.webpack();m.push((function(e){var t,n=u(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(a){n.e(a)}finally{n.f()}}))}var a=n.suspense?function(e,t){return d.default.createElement(n.lazy,l(l({},e),{},{ref:t}))}:function(e,t){o();var i=d.default.useContext(p.LoadableContext),a=f.useSubscription(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return a.preload=function(){return!n.suspense&&o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}(g,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){w(v).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};w(m,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var _=b;t.default=_},9131:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(876),o=n(3036),i=n(3088),a=n(9017),l=n(2816),u=n(4431),c=n(2480),s=n(4439),d=n(7319),f=function(e){var t,n,r,o=e.seoTitle,a=e.seo,l=e.url,c=e.description,s=e.baseUrl,f=(0,u.Z)().t,p=(null===a||void 0===a||null===(t=a.ogImage)||void 0===t?void 0:t.url)||new URL(f("common:seo.ogImageUrl"),null!==s&&void 0!==s?s:"http://localhost").href;return(0,d.BX)(i.default,{children:[(0,d.tZ)("meta",{property:"og:type",content:"website"}),(0,d.tZ)("meta",{property:"og:url",content:l}),(0,d.tZ)("meta",{property:"og:title",content:o}),(0,d.tZ)("meta",{property:"og:description",content:c}),(0,d.tZ)("meta",{property:"og:image",content:p}),(null===a||void 0===a||null===(n=a.ogImage)||void 0===n?void 0:n.width)&&(0,d.tZ)("meta",{property:"og:image:width",content:String(a.ogImage.width)}),(null===a||void 0===a||null===(r=a.ogImage)||void 0===r?void 0:r.height)&&(0,d.tZ)("meta",{property:"og:image:height",content:String(a.ogImage.height)}),(0,d.tZ)("meta",{property:"fb:app_id",content:"247549133538241"})]})},p=function(e){var t,n=e.seo,r=e.seoTitle,o=e.url,a=e.description,l=e.baseUrl,c=(0,u.Z)().t,s=(null===n||void 0===n?void 0:n.twitterCard)||c("common:seo.twitterCard"),f=(null===n||void 0===n||null===(t=n.twitterImage)||void 0===t?void 0:t.url)||new URL(c("common:seo.twitterImageUrl"),l||"http://localhost").href,p=(null===n||void 0===n?void 0:n.twitterAccount)||c("common:seo.twitterAccount");return(0,d.BX)(i.default,{children:[(0,d.tZ)("meta",{property:"twitter:card",content:s}),(0,d.tZ)("meta",{property:"twitter:url",content:o}),(0,d.tZ)("meta",{property:"twitter:title",content:r}),(0,d.tZ)("meta",{property:"twitter:description",content:a}),(0,d.tZ)("meta",{property:"twitter:image",content:f}),(null===p||void 0===p?void 0:p.length)&&(0,d.tZ)("meta",{property:"twitter:site",content:p}),(null===n||void 0===n?void 0:n.twitterCreator)&&(0,d.tZ)("meta",{property:"twitter:creator",content:n.twitterCreator})]})},v="https://".concat("www.playspacepunks.com"),m=function(e,t){var n=[];return e&&n.push("noindex"),t&&n.push("nofollow"),n.join(", ")},h=function(e){var t,n=e.title,r=e.seo,o=(0,u.Z)().t,l=(null===r||void 0===r?void 0:r.description)||o("common:seo.description"),c=(null===r||void 0===r||null===(t=r.keywords)||void 0===t?void 0:t.join(", "))||o("common:seo.keywords"),s=((0,a.useRouter)(),window.location.href);return(0,d.BX)(d.HY,{children:[(0,d.BX)(i.default,{children:[(0,d.tZ)("title",{children:n}),(0,d.tZ)("meta",{name:"description",content:l}),(0,d.tZ)("meta",{name:"keywords",content:c}),(0,d.tZ)("meta",{name:"robots",content:m(null===r||void 0===r?void 0:r.noIndex,null===r||void 0===r?void 0:r.noFollow)})]}),(0,d.tZ)(f,{seo:r,seoTitle:n,description:l,url:s,baseUrl:v}),(0,d.tZ)(p,{seo:r,seoTitle:n,description:l,url:s,baseUrl:v})]})},g=n(134),y=n(7021),b=function(e,t,n){var o,i;return{url:(null===e||void 0===e?void 0:e.url)&&(0,y.IX)(null===e||void 0===e?void 0:e.url)||"",title:null!==(o=null===e||void 0===e?void 0:e.title)&&void 0!==o?o:"",after:(null===e||void 0===e?void 0:e.url)&&(i=e.url,(0,r.isAbsoluteUrl)(i)?"external":void 0)||n,selected:!(t!==(null===e||void 0===e?void 0:e.url))}};var w=function(e){var t,f,p,v,m,w,_,k=(0,a.useRouter)(),O=k.locale,Z=k.asPath,x=(0,u.Z)().t,j=(0,c.useState)(!1)[1],P=e.preview,S=e.children,C=e.header,E=e.footer,D=e.title,I=e.seo,L=e.generatedDate,T=(0,r.useHasMounted)(),A=(null===I||void 0===I?void 0:I.title)||D||x("common:seo.title"),X=[{url:"".concat(Z),title:"English",locale:"en-US"}],B=X.find((function(e){return e.locale===O}))||"en-US",U=(0,o.default)((function(){return n.e(404).then(n.bind(n,3404))}),{loadableGenerated:{webpack:function(){return[3404]},modules:["../components/BaseLayout/BaseLayout.tsx -> ~components/PreviewBanner"]}});return(0,d.BX)(s.kC,{sx:{flexDirection:"column",minHeight:"100vh"},children:[(0,d.BX)(i.default,{children:[(0,d.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,d.tZ)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,d.tZ)("link",{rel:"icon",href:"/favicons/favicon.ico"}),(0,d.tZ)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),(0,d.tZ)("link",{rel:"android-chrome-icon",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),(0,d.tZ)("link",{rel:"android-chrome-icon",sizes:"512x512",href:"/favicons/android-chrome-512x512.png"}),(0,d.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),(0,d.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),(0,d.tZ)("link",{rel:"preconnect",href:"https://vitals.vercel-insights.com"}),(0,d.tZ)("link",{rel:"preconnect",href:"https://consent.cookiebot.com"}),(0,d.tZ)("link",{rel:"preconnect",href:"https://www.youtube.com"}),(0,d.tZ)("link",{rel:"preconnect",href:"https://images.ctfassets.net"}),(0,d.tZ)("link",{rel:"preconnect",href:"https://videos.ctfassets.net"})]}),(0,d.tZ)(l.default,{id:"gtag-defaults",strategy:"afterInteractive","data-cookieconsent":"ignore",dangerouslySetInnerHTML:{__html:'\n              window.dataLayer = window.dataLayer || [];\n              function gtag() {\n                dataLayer.push(arguments);\n              }\n              gtag("consent", "default", {\n                ad_storage: "denied",\n                analytics_storage: "denied",\n                functionality_storage: "denied",\n                personalization_storage: "denied",\n                security_storage: "granted",\n                wait_for_update: 500\n              });\n              gtag("set", "ads_data_redaction", true);\n              '}}),g.Ax&&(0,d.tZ)(l.default,{id:"gtm",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n              'https://www.googletagmanager.com/gtm.js?id='+i+dl+'".concat(g.AG).concat(g.N0,"&gtm_cookies_win=x';\n              f.parentNode.insertBefore(j,f);\n              })(window,document,'script','dataLayer', '").concat(g.Ax,"');\n              ")}}),(0,d.tZ)(h,{seo:I,title:A}),P&&(0,d.tZ)(U,{}),C&&(0,d.tZ)(r.Header,{id:"header",logo:{alt:x("common:skip-to-content")},navigationItems:null!==(t=null===C||void 0===C||null===(f=C.navigationItemsCollection)||void 0===f?void 0:f.items.map((function(e){return b(e,Z)})))&&void 0!==t?t:[],languages:X,selectedLanguage:B,playCopy:null!==(p=null===C||void 0===C?void 0:C.play)&&void 0!==p?p:"Play Early Access",playUrl:(null===C||void 0===C?void 0:C.playUrl)||"",skipToContentCopy:x("common:skip-to-content"),onOpenMenu:function(){return j(!0)}}),S&&(0,d.BX)(s.kC,{as:"main",sx:{position:"relative",flexDirection:"column",alignItems:"center",flex:"1"},id:"main",children:[(0,d.tZ)(s.X6,{as:"h1",sx:{position:"absolute",width:"1px",height:"1px",margin:NaN,border:"0",padding:"0",clip:"rect(0 0 0 0)",overflow:"hidden"},children:A}),S]}),E&&(0,d.tZ)(r.Footer,{id:E.name||"footer",languages:X,selectedLanguage:B,legalNavItems:null!==(v=null===E||void 0===E||null===(m=E.legalNavItemsCollection)||void 0===m?void 0:m.items.map((function(e){return b(e,Z)})))&&void 0!==v?v:[],copyrightLines:(null===E||void 0===E?void 0:E.copyrightLines)||[],socialLinks:null!==(w=null===E||void 0===E||null===(_=E.socialLinksCollection)||void 0===_?void 0:_.items.map((function(e){var t,n;return{url:(null===e||void 0===e?void 0:e.url)&&(0,y.IX)(null===e||void 0===e?void 0:e.url)||"",title:null!==(t=null===e||void 0===e?void 0:e.title)&&void 0!==t?t:"",logo:null!==(n=null===e||void 0===e?void 0:e.logo)&&void 0!==n?n:void 0}})))&&void 0!==w?w:[],socialSectionHeader:(null===E||void 0===E?void 0:E.socialSectionHeader)||void 0}),(0,d.BX)("div",{"aria-hidden":"true",sx:{display:"none"},children:["generated at: ",L]}),(0,d.tZ)("div",{id:"uptime-check-ssg","aria-hidden":"true",sx:{display:"none"},children:"ssg status ok"}),T&&(0,d.tZ)("div",{id:"uptime-check-csr","aria-hidden":"true",sx:{display:"none"},children:"csr status ok"})]})}},7021:function(e,t,n){"use strict";n.d(t,{YU:function(){return o},vV:function(){return i},IX:function(){return a},e5:function(){return l},o2:function(){return c},_:function(){return s}});var r=n(7735),o=function(e){var t=e.src,n=e.width,o=e.quality,i=void 0===o?75:o;if(!t)return r.Tb(new Error("Missing image src in contentful loader")),"#";var a=new URL(t),l=a.searchParams;l.set("q",i.toString());var u=function(e){if(void 0===e||null===e)return null;if("number"===typeof e)return e;if(e instanceof Set){var t=Array.from(e),n=null===t||void 0===t?void 0:t[0];return null!==n&&void 0!==n?n:null}if(Array.isArray(e)){var r=null===e||void 0===e?void 0:e[0];return null!==r&&void 0!==r?r:null}return null}(n);return null!==u&&l.set("w",u.toString()),"".concat(a.origin).concat(a.pathname,"?").concat(l.toString())},i=function(e){return/^(?:[^\s"(),.:;<>@[\]]+(?:\.[^\s"(),.:;<>@[\]]+)*|".+")@(?:[^\s"(),.:;<>@[\]]+\.)+[^\s"(),.:;<>@[\]]{2,}$/.test(String(e).toLowerCase())},a=function(e){return e||""},l=function(e){return null!==e&&void 0!==e},u=function(e){var t;return null===(t=/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\\-]+\?v=|embed\/|v\/)?)([\w\\-]+)(\S+)?$/.exec(e))||void 0===t?void 0:t[5]},c=function(e){var t=u(e);return t?"https://www.youtube.com/embed/".concat(t,"?rel=0&autoplay=1"):e},s=function(e){var t=u(e);return"https://img.youtube.com/vi/".concat(t,"/0.jpg")}},229:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return h}});var r=n(4431),o=n(2480),i=n(2667),a=n(876),l=n(4439),u=n(1126),c=n(7319);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.cookieBotId,n=e.title,i=(0,o.useRef)(null),s=(0,o.useState)(!1),f=s[0],p=s[1],v=(0,r.Z)().t;return(0,u.Z)({id:"CookieDeclaration",url:"https://consent.cookiebot.com/".concat(t,"/cd.js"),appendToElement:i,onFailedToLoad:function(){return p(!0)}}),(0,c.tZ)(l.xu,{sx:{background:a.theme.colors.black,minHeight:"100vh",padding:"".concat(a.theme.space[7],"px 0 ").concat(a.theme.space[5],"px"),width:"100%"},children:(0,c.tZ)(l.rj,{variant:"primary",sx:{gridTemplateRows:"auto",marginX:"auto",maxWidth:a.theme.breakpoints[a.theme.breakpoints.length-1],overflow:"hidden"},children:(0,c.BX)(l.xu,{ref:i,sx:{"*":{maxWidth:"100%"},a:d({},a.theme.links.inline),table:d({},a.theme.tables.table),colgroup:d({},a.theme.tables.colgroup),p:d({},a.theme.text.p),thead:d({},a.theme.tables.thead),tbody:d({},a.theme.tables.tbody),tr:d({},a.theme.tables.tr),th:d({},a.theme.tables.th),td:d({},a.theme.tables.td),color:a.theme.text.p.color,gridColumnStart:[2,null,null,3],gridColumnEnd:[12,null,null,11]},children:[(0,c.tZ)(l.X6,{as:"h1",variant:"h1","aria-hidden":"true",children:n}),(0,c.tZ)("hr",{sx:{margin:"".concat(a.theme.space[5],"px auto ").concat(a.theme.space[6],"px")}}),f&&(0,c.tZ)(l.xv,{children:v("cookies:load-failed")})]})})})},p=n(9131),v="918cbc71-1c03-452f-964a-0a0560f9c749",m=!0;function h(e){var t=(0,r.Z)().t;return(0,c.tZ)(p.Z,{title:t("cookies:seo.title"),generatedDate:e.generatedDate,children:(0,c.tZ)(f,{cookieBotId:v,title:"Cookies Declaration"})})}},7342:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cookies",function(){return n(229)}])}},function(e){e.O(0,[774,888,179],(function(){return t=7342,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=cookies-124a03275203163e292c.js.map