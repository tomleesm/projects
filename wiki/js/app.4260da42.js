(function(t){function e(e){for(var r,o,a=e[0],l=e[1],u=e[2],f=0,b=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);s&&s(e);while(b.length)b.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=Object(r["g"])(" | ");function i(t,e,n,i,o,a){var l=Object(r["u"])("Edit"),u=Object(r["u"])("Read");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("a",{href:"#read",onClick:e[0]||(e[0]=Object(r["B"])((function(t){return o.edit=!1}),["prevent"]))},"Read"),c,Object(r["f"])("a",{href:"#edit",onClick:e[1]||(e[1]=Object(r["B"])((function(t){return o.edit=!0}),["prevent"]))},"Edit"),o.edit?(Object(r["q"])(),Object(r["d"])(l,{key:0,article:o.article,onSaveContent:a.saveContent,onShowRead:e[2]||(e[2]=function(t){return o.edit=!1})},null,8,["article","onSaveContent"])):(Object(r["q"])(),Object(r["d"])(u,{key:1,article:o.article},null,8,["article"]))],64)}n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0");var o=["innerHTML"];function a(t,e,n,c,i,a){return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h1",null,Object(r["w"])(n.article.title),1),Object(r["f"])("div",{class:"read content",innerHTML:a.html},null,8,o)],64)}var l={props:["article"],computed:{html:function(){var t=n("1d8f")({makeAllLinksAbsolute:!0,baseURL:"/#/articles/",uriSuffix:"",htmlAttributes:{target:"_blank"}}),e=n("d4cd")({html:!1,linkify:!0,typographer:!0}).use(t);return e.render(this.article.content)}}};l.render=a;var u=l,s=Object(r["g"])(" | "),f=["innerHTML"],b={key:1};function p(t,e,n,c,i,o){return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("h1",null,Object(r["w"])(n.article.title),1),Object(r["f"])("a",{href:"#edit",onClick:e[0]||(e[0]=Object(r["B"])((function(t){return i.preview=!1}),["prevent"]))},"Edit"),s,Object(r["f"])("a",{href:"#preview",onClick:e[1]||(e[1]=Object(r["B"])((function(t){return i.preview=!0}),["prevent"]))},"Preview"),i.preview?(Object(r["q"])(),Object(r["e"])("div",{key:0,class:"preview",innerHTML:o.html},null,8,f)):(Object(r["q"])(),Object(r["e"])("div",b,[Object(r["A"])(Object(r["f"])("textarea",{class:"form-control",rows:"20","onUpdate:modelValue":e[2]||(e[2]=function(t){return i.content=t})},null,512),[[r["y"],i.content]])])),Object(r["f"])("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=function(){return o.saveContent&&o.saveContent.apply(o,arguments)})},"OK"),Object(r["f"])("button",{type:"button",class:"btn btn-light",onClick:e[4]||(e[4]=function(){return o.cancel&&o.cancel.apply(o,arguments)})},"Cancel")],64)}var d={props:["article"],emits:["saveContent","showRead"],computed:{html:function(){var t=n("1d8f")({makeAllLinksAbsolute:!0,baseURL:"/#/articles/",uriSuffix:""}),e=n("d4cd")({html:!1,linkify:!0,typographer:!0}).use(t);return e.render(this.content)}},data:function(){return{content:this.article.content,preview:!1}},methods:{saveContent:function(){this.$emit("saveContent",this.content),this.$emit("showRead")},cancel:function(){this.$emit("showRead")}}};d.render=p;var h=d,O={components:{Read:u,Edit:h},props:{title:{type:String,required:!0}},data:function(){return{articles:new Map,article:{title:this.title,content:""},edit:!1}},beforeRouteEnter:function(t,e,n){n((function(e){e.setArticleContent(t.params.title)}))},beforeRouteUpdate:function(t,e){this.setArticleContent(t.params.title)},methods:{setArticleContent:function(t){this.articles.has(t)?this.article.content=this.articles.get(t):this.articles.set(t,"")},saveContent:function(t){this.articles.set(this.article.title,t),this.article.content=t}}};O.render=i;var j=O,v=n("6c02"),m=[{path:"/articles/:title",component:j,name:"articles",props:!0},{path:"/",redirect:"/articles/home"}],y=Object(v["a"])({history:Object(v["b"])(),routes:m}),w=y,k=Object(r["f"])("h1",null,"Wiki",-1);function g(t,e){var n=Object(r["u"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[k,Object(r["h"])(n)],64)}const C={};C.render=g;var R=C;n("ab8b"),n("7b17");Object(r["c"])(R).use(w).mount("#app")}});
//# sourceMappingURL=app.4260da42.js.map