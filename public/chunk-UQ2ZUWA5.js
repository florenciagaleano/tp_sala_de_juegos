import{Da as K,Ea as v,T as R,U as p,X as b,Z as u,a as D,aa as m,b as F,ga as B,gb as Z,hb as N,ib as z,jb as Y,kb as h,mb as G,oa as A,qb as q,ra as V,sa as O,sb as P,ta as $,tb as W,ua as y,wa as I,za as g}from"./chunk-QGH44FHM.js";var k=class extends Y{constructor(){super(...arguments),this.supportsDOMEvents=!0}},_=class s extends k{static makeCurrent(){z(new s)}onAndCancel(e,r,t){return e.addEventListener(r,t),()=>{e.removeEventListener(r,t)}}dispatchEvent(e,r){e.dispatchEvent(r)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,r){return r=r||this.getDefaultDocument(),r.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,r){return r==="window"?window:r==="document"?e:r==="body"?e.body:null}getBaseHref(e){let r=se();return r==null?null:ie(r)}resetBaseElement(){E=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return G(document.cookie,e)}},E=null;function se(){return E=E||document.querySelector("base"),E?E.getAttribute("href"):null}function ie(s){return new URL(s,document.baseURI).pathname}var ae=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),j=new b(""),ee=(()=>{let e=class e{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,o){return this._findPluginFor(n).addEventListener(t,n,o)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new R(5101,!1);return this._eventNameToPlugin.set(t,n),n}};e.\u0275fac=function(n){return new(n||e)(u(j),u(v))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),T=class{constructor(e){this._doc=e}},L="ng-app-id",te=(()=>{let e=class e{constructor(t,n,o,i={}){this.doc=t,this.appId=n,this.nonce=o,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=P(i),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(o=>o.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${L}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(o=>{o.textContent!=null&&n.set(o.textContent,o)}),n}return null}changeUsageCount(t,n){let o=this.styleRef;if(o.has(t)){let i=o.get(t);return i.usage+=n,i.usage}return o.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let o=this.styleNodesInDOM,i=o?.get(n);if(i?.parentNode===t)return o.delete(n),i.removeAttribute(L),i;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=n,this.platformIsServer&&a.setAttribute(L,this.appId),t.appendChild(a),a}}addStyleToHost(t,n){let o=this.getStyleElement(t,n),i=this.styleRef,a=i.get(n)?.elements;a?a.push(o):i.set(n,{elements:[o],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(n){return new(n||e)(u(h),u(O),u(I,8),u(y))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),H={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},U=/%COMP%/g,ne="%COMP%",ce=`_nghost-${ne}`,ue=`_ngcontent-${ne}`,de=!0,le=new b("",{providedIn:"root",factory:()=>de});function fe(s){return ue.replace(U,s)}function he(s){return ce.replace(U,s)}function re(s,e){return e.map(r=>r.replace(U,s))}var X=(()=>{let e=class e{constructor(t,n,o,i,a,c,d,l=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=c,this.ngZone=d,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=P(c),this.defaultRenderer=new S(t,a,d,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===m.ShadowDom&&(n=F(D({},n),{encapsulation:m.Emulated}));let o=this.getOrCreateRenderer(t,n);return o instanceof M?o.applyToHost(t):o instanceof w&&o.applyStyles(),o}getOrCreateRenderer(t,n){let o=this.rendererByCompId,i=o.get(n.id);if(!i){let a=this.doc,c=this.ngZone,d=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,C=this.platformIsServer;switch(n.encapsulation){case m.Emulated:i=new M(d,l,n,this.appId,f,a,c,C);break;case m.ShadowDom:return new x(d,l,t,n,a,c,this.nonce,C);default:i=new w(d,l,n,f,a,c,C);break}o.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(n){return new(n||e)(u(ee),u(te),u(O),u(le),u(h),u(y),u(v),u(I))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),S=class{constructor(e,r,t,n){this.eventManager=e,this.doc=r,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,r){return r?this.doc.createElementNS(H[r]||r,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,r){(J(e)?e.content:e).appendChild(r)}insertBefore(e,r,t){e&&(J(e)?e.content:e).insertBefore(r,t)}removeChild(e,r){e&&e.removeChild(r)}selectRootElement(e,r){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new R(-5104,!1);return r||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,r,t,n){if(n){r=n+":"+r;let o=H[n];o?e.setAttributeNS(o,r,t):e.setAttribute(r,t)}else e.setAttribute(r,t)}removeAttribute(e,r,t){if(t){let n=H[t];n?e.removeAttributeNS(n,r):e.removeAttribute(`${t}:${r}`)}else e.removeAttribute(r)}addClass(e,r){e.classList.add(r)}removeClass(e,r){e.classList.remove(r)}setStyle(e,r,t,n){n&(g.DashCase|g.Important)?e.style.setProperty(r,t,n&g.Important?"important":""):e.style[r]=t}removeStyle(e,r,t){t&g.DashCase?e.style.removeProperty(r):e.style[r]=""}setProperty(e,r,t){e!=null&&(e[r]=t)}setValue(e,r){e.nodeValue=r}listen(e,r,t){if(typeof e=="string"&&(e=N().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${r}`);return this.eventManager.addEventListener(e,r,this.decoratePreventDefault(t))}decoratePreventDefault(e){return r=>{if(r==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(r)):e(r))===!1&&r.preventDefault()}}};function J(s){return s.tagName==="TEMPLATE"&&s.content!==void 0}var x=class extends S{constructor(e,r,t,n,o,i,a,c){super(e,o,i,c),this.sharedStylesHost=r,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=re(n.id,n.styles);for(let l of d){let f=document.createElement("style");a&&f.setAttribute("nonce",a),f.textContent=l,this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,r){return super.appendChild(this.nodeOrShadowRoot(e),r)}insertBefore(e,r,t){return super.insertBefore(this.nodeOrShadowRoot(e),r,t)}removeChild(e,r){return super.removeChild(this.nodeOrShadowRoot(e),r)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},w=class extends S{constructor(e,r,t,n,o,i,a,c){super(e,o,i,a),this.sharedStylesHost=r,this.removeStylesOnCompDestroy=n,this.styles=c?re(c,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},M=class extends w{constructor(e,r,t,n,o,i,a,c){let d=n+"-"+t.id;super(e,r,t,o,i,a,c,d),this.contentAttr=fe(d),this.hostAttr=he(d)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,r){let t=super.createElement(e,r);return super.setAttribute(t,this.contentAttr,""),t}},pe=(()=>{let e=class e extends T{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,o){return t.addEventListener(n,o,!1),()=>this.removeEventListener(t,n,o)}removeEventListener(t,n,o){return t.removeEventListener(n,o)}};e.\u0275fac=function(n){return new(n||e)(u(h))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})(),Q=["alt","control","meta","shift"],me={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ye={alt:s=>s.altKey,control:s=>s.ctrlKey,meta:s=>s.metaKey,shift:s=>s.shiftKey},ge=(()=>{let e=class e extends T{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,o){let i=e.parseEventName(n),a=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>N().onAndCancel(t,i.domEventName,a))}static parseEventName(t){let n=t.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(n.pop()),a="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),a="code."),Q.forEach(l=>{let f=n.indexOf(l);f>-1&&(n.splice(f,1),a+=l+".")}),a+=i,n.length!=0||i.length===0)return null;let d={};return d.domEventName=o,d.fullKey=a,d}static matchEventFullKeyCode(t,n){let o=me[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(o=t.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Q.forEach(a=>{if(a!==o){let c=ye[a];c(t)&&(i+=a+".")}}),i+=o,i===n)}static eventCallback(t,n,o){return i=>{e.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>n(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(n){return new(n||e)(u(h))},e.\u0275prov=p({token:e,factory:e.\u0275fac});let s=e;return s})();function dt(s,e){return Z(D({rootComponent:s},ve(e)))}function ve(s){return{appProviders:[...Me,...s?.providers??[]],platformProviders:Te}}function Ee(){_.makeCurrent()}function Se(){return new A}function we(){return V(document),document}var Te=[{provide:y,useValue:q},{provide:$,useValue:Ee,multi:!0},{provide:h,useFactory:we,deps:[]}];var Me=[{provide:B,useValue:"root"},{provide:A,useFactory:Se,deps:[]},{provide:j,useClass:pe,multi:!0,deps:[h,v,y]},{provide:j,useClass:ge,multi:!0,deps:[h]},X,te,ee,{provide:K,useExisting:X},{provide:W,useClass:ae,deps:[]},[]];var lt=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(n){return new(n||e)(u(h))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{dt as a,lt as b};