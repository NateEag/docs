if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const a=s=>l(s,n),u={module:{uri:n},exports:t,require:a};e[n]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(r(...s),t)))}}define(["./workbox-bd9393cf"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"af8caaaa37069e51ba5cd0c51c6e2062"},{url:"annotations.html",revision:"3ac2f27681029b983ce6cc216f534f1a"},{url:"assets/404.34651de9.js",revision:null},{url:"assets/404.html.0f07aaf0.js",revision:null},{url:"assets/404.html.37b0c78d.js",revision:null},{url:"assets/annotations.html.84bdd4d2.js",revision:null},{url:"assets/annotations.html.9cbd9cbf.js",revision:null},{url:"assets/app.c3fa13a7.js",revision:null},{url:"assets/authentication.html.4c67702c.js",revision:null},{url:"assets/authentication.html.f80eede5.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/decorators.html.57094df6.js",revision:null},{url:"assets/decorators.html.f49b308d.js",revision:null},{url:"assets/descriptions.html.17a3cd78.js",revision:null},{url:"assets/descriptions.html.40971fc5.js",revision:null},{url:"assets/di.html.e0671bdb.js",revision:null},{url:"assets/di.html.ffc7f935.js",revision:null},{url:"assets/err-422-swui.25b6edbd.png",revision:null},{url:"assets/error-handling.html.c774ee0f.js",revision:null},{url:"assets/error-handling.html.e5e07e0b.js",revision:null},{url:"assets/errors-client.e871ae56.png",revision:null},{url:"assets/errors-json-client.a72b4976.png",revision:null},{url:"assets/errors-json-server.58dc84b1.png",revision:null},{url:"assets/errors-server.06a3af98.png",revision:null},{url:"assets/examples.html.3f4e57dd.js",revision:null},{url:"assets/examples.html.c588d5c7.js",revision:null},{url:"assets/faq.html.0fb28e97.js",revision:null},{url:"assets/faq.html.fb9153b0.js",revision:null},{url:"assets/file-upload.html.800968d1.js",revision:null},{url:"assets/file-upload.html.c651ef42.js",revision:null},{url:"assets/generating.html.4653cc01.js",revision:null},{url:"assets/generating.html.d6a962e6.js",revision:null},{url:"assets/getting-started.html.1378187c.js",revision:null},{url:"assets/getting-started.html.f30824a8.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.197785bd.js",revision:null},{url:"assets/index.html.ab6d15db.js",revision:null},{url:"assets/introduction.html.bdaf2f71.js",revision:null},{url:"assets/introduction.html.eaf1befa.js",revision:null},{url:"assets/jsdoc-alias.5462ac6e.png",revision:null},{url:"assets/jsdoc-method.2c3ab8e4.png",revision:null},{url:"assets/Layout.bfe0a41a.js",revision:null},{url:"assets/live-reloading.html.ad4e1eef.js",revision:null},{url:"assets/live-reloading.html.df670577.js",revision:null},{url:"assets/path-mapping.html.6ac5dcda.js",revision:null},{url:"assets/path-mapping.html.fa388de1.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/routes.html.6bf6ec85.js",revision:null},{url:"assets/routes.html.d83911c5.js",revision:null},{url:"assets/style.c3febf96.css",revision:null},{url:"assets/SwaggerUI.32dd25e5.png",revision:null},{url:"assets/swui-alias.650ebd8a.png",revision:null},{url:"assets/swui-endpoint-description.897bce30.png",revision:null},{url:"assets/SwUi-Response.53baa0c7.png",revision:null},{url:"assets/templates.html.819aa29c.js",revision:null},{url:"assets/templates.html.9b5256c6.js",revision:null},{url:"assets/upgrading.html.3a4f3249.js",revision:null},{url:"assets/upgrading.html.e24aa759.js",revision:null},{url:"authentication.html",revision:"849dee07eed3ef04fb1383f0bcf6f802"},{url:"decorators.html",revision:"9bcd16ed288981085b88c2aa2cfa89ce"},{url:"descriptions.html",revision:"2dda17b334e7e16be002dd8c8082b534"},{url:"di.html",revision:"3a780264c1122191e3518a9a736486f4"},{url:"error-handling.html",revision:"2909bd5d904779fea1c7ebf803b4b0ab"},{url:"examples.html",revision:"a05852fd5fa0e4b495598b779c92a64d"},{url:"faq.html",revision:"23bf4f62071e3c0b6901f5bcfe5b61c2"},{url:"file-upload.html",revision:"22ac80d662c1ff062f598e2fa25adcdb"},{url:"generating.html",revision:"59fa586b797e63c47dbea878c8afb9a0"},{url:"getting-started.html",revision:"f5ac44271ff1a25acc17547222d7abfe"},{url:"index.html",revision:"6fd7df4b49a638ed0cb39cb117432c4d"},{url:"introduction.html",revision:"14843d873a98c28f265ac678203d9ebe"},{url:"live-reloading.html",revision:"6823774d1f7cf9b7c970d873a0ae5c9b"},{url:"path-mapping.html",revision:"d5db9aea924817b158c24827fd5cf617"},{url:"routes.html",revision:"735de32deaef5e97eb0446e5c2c4d077"},{url:"templates.html",revision:"80c8c6e617796fe94d3afd3570c3e60b"},{url:"upgrading.html",revision:"6ca5a2940445620cd2b1ca268059cf5d"}],{})}));
