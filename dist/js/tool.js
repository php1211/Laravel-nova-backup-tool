(()=>{var e={757:(e,t,n)=>{e.exports=n(666)},51:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".is-deleting td[data-v-1491b1d4]{color:var(--60)}",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new D(r||[]);return a._invoke=function(e,t,n){var r=d;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw a;return S()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=E(i,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",v={};function m(){}function g(){}function k(){}var y={};c(y,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(C([])));w&&w!==n&&r.call(w,a)&&(y=w);var N=k.prototype=m.prototype=Object.create(y);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function V(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function B(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(V,this),this.reset(!0)}function C(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return g.prototype=k,c(N,"constructor",k),c(k,"constructor",g),g.displayName=c(k,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,c(e,l,"GeneratorFunction")),e.prototype=Object.create(N),e},e.awrap=function(e){return{__await:e}},x(_.prototype),c(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new _(s(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},x(N),c(N,l,"Generator"),c(N,a,(function(){return this})),c(N,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(B),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return l.type="throw",l.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),B(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;B(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},379:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function l(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var d=l(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:m(p,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,t){var n,r,o;if(t.singleton){var a=v++;n=h||(h=s(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=s(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);i[o].references--}for(var a=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}},870:(e,t,n)=>{"use strict";n.d(t,{Z:()=>te});const r=Vue;var o={class:"flex mb-6 items-center justify-between"},a={class:"rounded active:outline-none active:ring focus:outline-none focus:ring"},i={class:"list-reset"};var l=n(757),c=n.n(l);const s=function(){return Nova.request().get("/nova-vendor/spatie/backup-tool/backup-statuses").then((function(e){return e.data}))},u=function(e){return Nova.request().get("/nova-vendor/spatie/backup-tool/backups?disk=".concat(e)).then((function(e){return e.data}))},d=function(){return Nova.request().post("/nova-vendor/spatie/backup-tool/backups")},p=function(e){return Nova.request().post("/nova-vendor/spatie/backup-tool/backups",{option:e})},f=function(e){var t=e.disk,n=e.path;return Nova.request().delete("/nova-vendor/spatie/backup-tool/backups",{params:{disk:t,path:n}})};var h={key:0,class:"p-3 flex items-center border-b border-50"},v=["value"],m=["value"],g={cellpadding:"0",cellspacing:"0",class:"table-default w-full"},k={class:"text-left"},y={class:"text-left"},b={class:"text-left"},w=(0,r.createElementVNode)("th",null,null,-1),N={key:0},x={class:"text-center",colspan:"4"},_={class:"p-8"},E={class:"text-80 leading-normal"};var V={class:"text-right"},B=["href","title"],D=["title","disabled"];const C={props:{date:{required:!0},path:{required:!0},size:{required:!0},disk:{required:!0},deletable:{required:!0},deleting:{required:!0}},computed:{downloadUrl:function(){return"".concat("/nova-vendor/spatie/backup-tool/download-backup","?disk=").concat(this.disk,"&path=").concat(this.path)}}};var S=n(379),L=n.n(S),M=n(51),O={insert:"head",singleton:!1};L()(M.Z,O);M.Z.locals;var j=n(744);const T={emits:["setModalVisibility","delete"],props:{disks:{required:!0,type:Array},activeDisk:{required:!0,type:String},backups:{required:!0,type:Array}},data:function(){return{deletingBackup:null,deleteModalOpen:!1}},components:{Backup:(0,j.Z)(C,[["render",function(e,t,n,o,a,i){var l=(0,r.resolveComponent)("icon");return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{class:(0,r.normalizeClass)({"is-deleting":n.deleting})},[(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(n.path),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(n.date),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(n.size),1),(0,r.createElementVNode)("td",V,[(0,r.createElementVNode)("a",{href:i.downloadUrl,target:"_blank",rel:"noopener nofollow",title:e.__("Download"),class:"appearance-none cursor-pointer text-70 hover:text-primary mr-3"},[(0,r.createVNode)(l,{type:"download","view-box":"0 0 24 24",width:"20",height:"20"})],8,B),(0,r.createElementVNode)("button",{title:e.__("Delete"),class:(0,r.normalizeClass)(["appearance-none mr-3",n.deletable?"text-70 hover:text-primary":"cursor-default text-40"]),disabled:!n.deletable,onClick:t[0]||(t[0]=(0,r.withModifiers)((function(t){return e.$emit("delete")}),["prevent"]))},[(0,r.createVNode)(l,{type:"delete"})],10,D)])],2)}],["__scopeId","data-v-1491b1d4"]])},methods:{openDeleteModal:function(e){this.$emit("setModalVisibility",!0),this.deleteModalOpen=!0,this.deletingBackup=e},closeDeleteModal:function(){this.$emit("setModalVisibility",!1),this.deleteModalOpen=!1,this.deletingBackup=null},confirmDelete:function(){this.$emit("setModalVisibility",!1),this.deleteModalOpen=!1,this.$emit("delete",{disk:this.activeDisk,path:this.deletingBackup.path})}}},A=(0,j.Z)(T,[["render",function(e,t,n,o,a,i){var l=(0,r.resolveComponent)("backup"),c=(0,r.resolveComponent)("heading"),s=(0,r.resolveComponent)("delete-resource-modal"),u=(0,r.resolveComponent)("portal");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[n.disks.length>1?((0,r.openBlock)(),(0,r.createElementBlock)("div",h,[(0,r.createElementVNode)("select",{class:"form-control form-select",value:n.activeDisk,onInput:t[0]||(t[0]=function(t){return e.$emit("update:activeDisk",t.target.value)})},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.disks,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{key:e,value:e},(0,r.toDisplayString)(e),9,m)})),128))],40,v)])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("table",g,[(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[(0,r.createElementVNode)("th",k,(0,r.toDisplayString)(e.__("Path")),1),(0,r.createElementVNode)("th",y,(0,r.toDisplayString)(e.__("Created at")),1),(0,r.createElementVNode)("th",b,(0,r.toDisplayString)(e.__("Size")),1),w])]),(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.backups,(function(e){return(0,r.openBlock)(),(0,r.createBlock)(l,(0,r.mergeProps)(e,{disk:n.activeDisk,deletable:n.backups.length>1,deleting:!a.deleteModalOpen&&a.deletingBackup&&e.path===a.deletingBackup.path,key:e.id,onDelete:function(t){return i.openDeleteModal(e)}}),null,16,["disk","deletable","deleting","onDelete"])})),128)),0===n.backups.length?((0,r.openBlock)(),(0,r.createElementBlock)("tr",N,[(0,r.createElementVNode)("td",x,(0,r.toDisplayString)(e.__("No backups present")),1)])):(0,r.createCommentVNode)("",!0)])]),(0,r.createVNode)(u,{to:"modals"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(r.Transition,{name:"fade"},{default:(0,r.withCtx)((function(){return[a.deleteModalOpen?((0,r.openBlock)(),(0,r.createBlock)(s,{key:0,onConfirm:i.confirmDelete,onClose:i.closeDeleteModal,mode:"delete"},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",_,[(0,r.createVNode)(c,{level:2,class:"mb-6"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.__("Delete backup")),1)]})),_:1}),(0,r.createElementVNode)("p",E,(0,r.toDisplayString)(e.__("Are you sure you want to delete the backup created at :date ?",{date:a.deletingBackup.date})),1)])]})),_:1},8,["onConfirm","onClose"])):(0,r.createCommentVNode)("",!0)]})),_:1})]})),_:1})])}]]);var P={cellpadding:"0",cellspacing:"0",class:"table-default w-full"},q={class:"text-left rounded-tl"},Z={class:"text-left rounded-tl"},z={class:"text-left"},F={class:"text-left"},I={class:"text-left"},$={class:"text-left rounded-tr"},G=["is"];var H={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},U=[(0,r.createElementVNode)("path",{d:"M2.93 17.07A10 10 0 1 0 17.07 2.93 10 10 0 0 0 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM4 10l2-2 3 3 5-5 2 2-7 7-5-5z",fill:"var(--success)","fill-rule":"evenodd"},null,-1)];const R={},Y=(0,j.Z)(R,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",H,U)}]]);var J={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},K=[(0,r.createElementVNode)("path",{d:"M11.41 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10zm-8.48 7.07A10 10 0 1 0 17.07 2.93 10 10 0 0 0 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66z",fill:"var(--danger)","fill-rule":"evenodd"},null,-1)];const Q={},W={props:{backupStatuses:{required:!0,type:Array}},components:{IconHealthy:Y,IconUnhealthy:(0,j.Z)(Q,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",J,K)}]])}};function X(e,t,n,r,o,a,i){try{var l=e[a](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,o)}const ee={inheritAttrs:!1,components:{Backups:A,BackupStatuses:(0,j.Z)(W,[["render",function(e,t,n,o,a,i){return(0,r.openBlock)(),(0,r.createElementBlock)("table",P,[(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[(0,r.createElementVNode)("th",q,(0,r.toDisplayString)(e.__("Name")),1),(0,r.createElementVNode)("th",Z,(0,r.toDisplayString)(e.__("Disk")),1),(0,r.createElementVNode)("th",z,(0,r.toDisplayString)(e.__("Healthy")),1),(0,r.createElementVNode)("th",F,(0,r.toDisplayString)(e.__("Amount of backups")),1),(0,r.createElementVNode)("th",I,(0,r.toDisplayString)(e.__("Newest backup")),1),(0,r.createElementVNode)("th",$,(0,r.toDisplayString)(e.__("Used Storage")),1)])]),(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.backupStatuses,(function(t){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:t.disk},[(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.__(t.name)),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(e.__(t.disk)),1),(0,r.createElementVNode)("td",null,[((0,r.openBlock)(),(0,r.createElementBlock)("svg",{is:t.healthy?"icon-healthy":"icon-unhealthy",height:"24px"},null,8,G))]),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.amount),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.newest),1),(0,r.createElementVNode)("td",null,(0,r.toDisplayString)(t.usedStorage),1)])})),128))])])}]])},computed:{disks:function(){return this.backupStatuses.map((function(e){return e.disk}))}},data:function(){return{activeDisk:null,activeDiskBackups:[],backupStatuses:[],initialLoading:!0,modalVisibility:!1,loading:!0}},created:function(){var e,t=this;return(e=c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.initialLoading=!1,e.next=3,t.updateBackupStatuses();case 3:return e.next=5,t.updateActiveDiskBackups();case 5:t.loading=!1,t.startPolling();case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){X(a,r,o,i,l,"next",e)}function l(e){X(a,r,o,i,l,"throw",e)}i(void 0)}))})()},methods:{updateBackupStatuses:function(){var e=this;return s().then((function(t){e.backupStatuses=t,e.activeDisk||(e.activeDisk=t[0].disk)}))},updateActiveDiskBackups:function(){var e=this;if(this.activeDisk)return u(this.activeDisk).then((function(t){e.activeDiskBackups=t}))},createBackup:function(){return this.$toasted.show(this.__("Creating a new backup in the background..."),{type:"success"}),d()},createPartialBackup:function(e){return this.$toasted.show(this.__("Creating a new backup in the background...")+" ("+e+")",{type:"success"}),this.$refs.backupDropdownMenu.toggle(),p(e)},deleteBackup:function(e){var t=e.disk,n=e.path;return f({disk:t,path:n})},startPolling:function(){var e=this;if(Nova.config("nova_backup_tool").polling)window.setInterval((function(){e.modalVisibility||(e.updateBackupStatuses(),e.updateActiveDiskBackups())}),1e3*Nova.config("nova_backup_tool").polling_interval)},setModalVisibility:function(e){this.modalVisibility=e}}},te=(0,j.Z)(ee,[["render",function(e,t,n,l,c,s){var u=(0,r.resolveComponent)("Head"),d=(0,r.resolveComponent)("Heading"),p=(0,r.resolveComponent)("DefaultButton"),f=(0,r.resolveComponent)("icon"),h=(0,r.resolveComponent)("DropdownTrigger"),v=(0,r.resolveComponent)("DropdownMenu"),m=(0,r.resolveComponent)("Dropdown"),g=(0,r.resolveComponent)("backup-statuses"),k=(0,r.resolveComponent)("LoadingCard"),y=(0,r.resolveComponent)("backups"),b=(0,r.resolveComponent)("LoadingView");return(0,r.openBlock)(),(0,r.createBlock)(b,{loading:e.initialLoading},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(u,{title:e.__("Backups")},null,8,["title"]),(0,r.createElementVNode)("div",o,[(0,r.createVNode)(d,null,{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.__("Backups")),1)]})),_:1}),(0,r.createVNode)(p,{onClick:s.createBackup},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.__("Create Backup")),1)]})),_:1},8,["onClick"]),(0,r.createVNode)(m,{dusk:"select-all-dropdown",ref:"backupDropdownMenu"},{menu:(0,r.withCtx)((function(){return[(0,r.createVNode)(v,{slot:"menu",direction:"rtl",width:"250"},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("ul",i,[(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("a",{class:"block p-3 text-90 hover:bg-30 cursor-pointer",onClick:t[0]||(t[0]=(0,r.withModifiers)((function(e){return s.createPartialBackup("only-db")}),["prevent"]))},(0,r.toDisplayString)(e.__("Create database backup")),1)]),(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("a",{class:"block p-3 text-90 hover:bg-30 cursor-pointer",onClick:t[1]||(t[1]=(0,r.withModifiers)((function(e){return s.createPartialBackup("only-files")}),["prevent"]))},(0,r.toDisplayString)(e.__("Create files backup")),1)])])]})),_:1})]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)(h,{"slot-scope":"{ toggle }","show-arrow":!1,handleClick:e.toggle,class:"mr-3"},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("button",a,[(0,r.createVNode)(f,{type:"menu","view-box":"0 0 24 24",width:"20",height:"20"})])]})),_:1},8,["handleClick"])]})),_:1},512)]),(0,r.createVNode)(k,{loading:e.loading,class:"mb-6"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(g,{"backup-statuses":e.backupStatuses},null,8,["backup-statuses"])]})),_:1},8,["loading"]),(0,r.createVNode)(k,{loading:e.loading},{default:(0,r.withCtx)((function(){return[e.activeDisk?((0,r.openBlock)(),(0,r.createBlock)(y,{key:0,disks:s.disks,backups:e.activeDiskBackups,"active-disk":e.activeDisk,onDelete:s.deleteBackup,onSetModalVisibility:s.setModalVisibility},null,8,["disks","backups","active-disk","onDelete","onSetModalVisibility"])):(0,r.createCommentVNode)("",!0)]})),_:1},8,["loading"])]})),_:1},8,["loading"])}]])}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Nova.booting((function(e){Nova.inertia("BackupTool",n(870).Z)}))})();