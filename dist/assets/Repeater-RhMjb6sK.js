var Ce=Object.defineProperty;var $e=(t,e,n)=>e in t?Ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var W=(t,e,n)=>($e(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function C(){}function ve(t){return t()}function Z(){return Object.create(null)}function z(t){t.forEach(ve)}function G(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Le(t,e){return t===e?!0:(R||(R=document.createElement("a")),R.href=e,t===R.href)}function Ae(t){return Object.keys(t).length===0}function ee(t){return t??""}function Ee(t){return t&&G(t.destroy)?t.destroy:C}function h(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function I(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function b(){return j(" ")}function Q(){return j("")}function q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Se(t){return Array.from(t.childNodes)}function we(t,e){e=""+e,t.data!==e&&(t.data=e)}function Je(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let T;function je(){if(T===void 0){T=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{T=!0}}return T}function Xe(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=_("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const l=je();let s;return l?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=q(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{s=q(i.contentWindow,"resize",e),e()}),h(t,i),()=>{(l||s&&i.contentWindow)&&s(),v(i)}}function M(t,e,n){t.classList.toggle(e,!!n)}function te(t,e){return new t(e)}let J;function O(t){J=t}const E=[],ne=[];let N=[];const le=[],Ne=Promise.resolve();let F=!1;function Pe(){F||(F=!0,Ne.then(be))}function H(t){N.push(t)}const x=new Set;let A=0;function be(){if(A!==0)return;const t=J;do{try{for(;A<E.length;){const e=E[A];A++,O(e),ze(e.$$)}}catch(e){throw E.length=0,A=0,e}for(O(null),E.length=0,A=0;ne.length;)ne.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];x.has(n)||(x.add(n),n())}N.length=0}while(E.length);for(;le.length;)le.pop()();F=!1,x.clear(),O(t)}function ze(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}function Oe(t){const e=[],n=[];N.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),N=e}const B=new Set;let L;function ke(){L={r:0,c:[],p:L}}function ye(){L.r||z(L.c),L=L.p}function P(t,e){t&&t.i&&(B.delete(t),t.i(e))}function V(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),L.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function $(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ie(t){t&&t.c()}function D(t,e,n){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),H(()=>{const s=t.$$.on_mount.map(ve).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...s):z(s),t.$$.on_mount=[]}),l.forEach(H)}function U(t,e){const n=t.$$;n.fragment!==null&&(Oe(n.after_update),z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(t,e){t.$$.dirty[0]===-1&&(E.push(t),Pe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,i,l,s,r=null,a=[-1]){const f=J;O(t);const o=t.$$={fragment:null,ctx:[],props:s,update:C,not_equal:l,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Z(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};r&&r(o.root);let d=!1;if(o.ctx=n?n(t,e.props||{},(u,m,...p)=>{const y=p.length?p[0]:m;return o.ctx&&l(o.ctx[u],o.ctx[u]=y)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](y),d&&qe(t,u)),m}):[],o.update(),d=!0,z(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){const u=Se(e.target);o.fragment&&o.fragment.l(u),u.forEach(v)}else o.fragment&&o.fragment.c();e.intro&&P(t.$$.fragment),D(t,e.target,e.anchor),be()}O(f)}class Y{constructor(){W(this,"$$");W(this,"$$set")}$destroy(){U(this,1),this.$destroy=C}$on(e,n){if(!G(n))return C;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);function Re(t){const e=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&t.dispatchEvent(new CustomEvent("click_outside",t))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function re(t,e,n){const i=t.slice();return i[13]=e[n],i}function se(t,e,n){const i=t.slice();return i[21]=e[n],i}function oe(t,e,n){const i=t.slice();return i[13]=e[n],i}function ce(t,e,n){const i=t.slice();return i[16]=e[n],i}function Te(t){let e,n,i,l,s,r,a,f,o,d=t[1]&&fe(t);return{c(){e=_("div"),n=S("svg"),i=S("path"),l=S("path"),s=S("path"),a=b(),d&&d.c(),c(i,"d","M20 7L4 7"),c(i,"stroke","white"),c(i,"stroke-width","1.5"),c(i,"stroke-linecap","round"),c(l,"d","M20 12L4 12"),c(l,"stroke","white"),c(l,"stroke-width","1.5"),c(l,"stroke-linecap","round"),c(s,"d","M20 17L4 17"),c(s,"stroke","white"),c(s,"stroke-width","1.5"),c(s,"stroke-linecap","round"),c(n,"id","hamburger"),c(n,"viewBox","0 0 24 24"),c(n,"fill","none"),c(n,"xmlns","http://www.w3.org/2000/svg"),c(n,"transform",r="rotate("+(t[1]?"90":"0")+")"),c(n,"class","svelte-11m9m01")},m(u,m){w(u,e,m),h(e,n),h(n,i),h(n,l),h(n,s),h(e,a),d&&d.m(e,null),f||(o=[q(n,"click",t[7]),Ee(Re.call(null,e)),q(e,"click_outside",t[8])],f=!0)},p(u,m){m&2&&r!==(r="rotate("+(u[1]?"90":"0")+")")&&c(n,"transform",r),u[1]?d?d.p(u,m):(d=fe(u),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},d(u){u&&v(e),d&&d.d(),f=!1,z(o)}}}function Be(t){let e,n=$(t[5]),i=[];for(let l=0;l<n.length;l+=1)i[l]=he(oe(t,n,l));return{c(){e=_("div");for(let l=0;l<i.length;l+=1)i[l].c();c(e,"class","inRow")},m(l,s){w(l,e,s);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(e,null)},p(l,s){if(s&32){n=$(l[5]);let r;for(r=0;r<n.length;r+=1){const a=oe(l,n,r);i[r]?i[r].p(a,s):(i[r]=he(a),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(l){l&&v(e),I(i,l)}}}function fe(t){let e,n=$(t[5]),i=[];for(let l=0;l<n.length;l+=1)i[l]=ue(re(t,n,l));return{c(){e=_("div");for(let l=0;l<i.length;l+=1)i[l].c();c(e,"class","inColumn")},m(l,s){w(l,e,s);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(e,null)},p(l,s){if(s&32){n=$(l[5]);let r;for(r=0;r<n.length;r+=1){const a=re(l,n,r);i[r]?i[r].p(a,s):(i[r]=ue(a),i[r].c(),i[r].m(e,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(l){l&&v(e),I(i,l)}}}function Me(t){let e,n,i;return{c(){e=_("a"),n=_("div"),n.textContent=`${t[13].name}`,i=b(),c(n,"class","link svelte-11m9m01"),c(e,"id","horizontalLinkContainer"),c(e,"href",t[13].href),c(e,"class","svelte-11m9m01")},m(l,s){w(l,e,s),h(e,n),h(e,i)},p:C,d(l){l&&v(e)}}}function He(t){let e,n,i,l,s=$(t[13].children),r=[];for(let a=0;a<s.length;a+=1)r[a]=ae(se(t,s,a));return{c(){e=_("a"),n=_("div"),n.textContent=`${t[13].name}`,i=b();for(let a=0;a<r.length;a+=1)r[a].c();l=Q(),c(n,"class","link svelte-11m9m01"),c(e,"id","horizontalLinkContainer"),c(e,"href",t[13].href),c(e,"class","svelte-11m9m01")},m(a,f){w(a,e,f),h(e,n),w(a,i,f);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(a,f);w(a,l,f)},p(a,f){if(f&32){s=$(a[13].children);let o;for(o=0;o<s.length;o+=1){const d=se(a,s,o);r[o]?r[o].p(d,f):(r[o]=ae(d),r[o].c(),r[o].m(l.parentNode,l))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}},d(a){a&&(v(e),v(i),v(l)),I(r,a)}}}function ae(t){let e,n,i,l;return{c(){e=_("a"),n=_("div"),i=_("div"),i.textContent=`| ${t[21].name}`,l=b(),c(i,"class","link svelte-11m9m01"),c(n,"id","horizontalChildClickable"),c(n,"class","svelte-11m9m01"),c(e,"id","horizontalLinkContainerChild"),c(e,"href",t[21].href),c(e,"class","svelte-11m9m01")},m(s,r){w(s,e,r),h(e,n),h(n,i),h(e,l)},p:C,d(s){s&&v(e)}}}function ue(t){let e;function n(s,r){return s[13].children.length>0?He:Me}let l=n(t)(t);return{c(){l.c(),e=Q()},m(s,r){l.m(s,r),w(s,e,r)},p(s,r){l.p(s,r)},d(s){s&&v(e),l.d(s)}}}function Ve(t){let e,n,i;return{c(){e=_("a"),n=_("div"),n.textContent=`${t[13].name}`,i=b(),c(n,"class","link svelte-11m9m01"),c(e,"class","linkContainer svelte-11m9m01"),c(e,"href",t[13].href)},m(l,s){w(l,e,s),h(e,n),h(e,i)},p:C,d(l){l&&v(e)}}}function We(t){let e,n,i,l,s,r,a,f,o,d,u=$(t[13].children),m=[];for(let p=0;p<u.length;p+=1)m[p]=de(ce(t,u,p));return{c(){e=_("div"),n=_("div"),i=_("div"),i.textContent=`${t[13].name}`,l=b(),s=S("svg"),r=S("path"),a=b(),f=_("div"),o=_("div");for(let p=0;p<m.length;p+=1)m[p].c();d=b(),c(i,"id","linkTitle"),c(i,"class","svelte-11m9m01"),c(r,"d","M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"),c(s,"id","downIcon"),c(s,"fill","white"),c(s,"viewBox","0 0 24 24"),c(s,"xmlns","http://www.w3.org/2000/svg"),c(s,"class","svelte-11m9m01"),c(n,"class","inRow"),c(o,"id","dropdownContent"),c(o,"class","svelte-11m9m01"),c(f,"id","dropdown"),c(f,"class","svelte-11m9m01"),c(e,"class","linkContainer svelte-11m9m01"),c(e,"id","dropdownParent")},m(p,y){w(p,e,y),h(e,n),h(n,i),h(n,l),h(n,s),h(s,r),h(e,a),h(e,f),h(f,o);for(let g=0;g<m.length;g+=1)m[g]&&m[g].m(o,null);h(e,d)},p(p,y){if(y&32){u=$(p[13].children);let g;for(g=0;g<u.length;g+=1){const k=ce(p,u,g);m[g]?m[g].p(k,y):(m[g]=de(k),m[g].c(),m[g].m(o,null))}for(;g<m.length;g+=1)m[g].d(1);m.length=u.length}},d(p){p&&v(e),I(m,p)}}}function de(t){let e,n,i;return{c(){e=_("a"),n=_("div"),n.textContent=`${t[16].name}`,i=b(),c(n,"id","dropdownLinkTitle"),c(n,"class","svelte-11m9m01"),c(e,"id","dropdownLinkContainer"),c(e,"href",t[16].href),c(e,"class","svelte-11m9m01")},m(l,s){w(l,e,s),h(e,n),h(e,i)},p:C,d(l){l&&v(e)}}}function he(t){let e;function n(s,r){return s[13].children.length>0?We:Ve}let l=n(t)(t);return{c(){l.c(),e=Q()},m(s,r){l.m(s,r),w(s,e,r)},p(s,r){l.p(s,r)},d(s){s&&v(e),l.d(s)}}}function me(t){let e,n,i,l,s,r,a,f,o,d,u,m,p,y;return{c(){e=_("div"),n=_("img"),l=b(),s=_("div"),r=_("div"),r.textContent="ThinkNeuro,",a=b(),f=_("div"),o=_("div"),d=j("Think "),u=j(t[2]),m=b(),p=_("div"),y=j("|"),c(n,"id","logo"),Le(n.src,i="assets/logo.png")||c(n,"src",i),c(n,"alt","logo"),c(n,"class","svelte-11m9m01"),c(r,"class","title svelte-11m9m01"),c(o,"class","title svelte-11m9m01"),c(p,"class","title svelte-11m9m01"),c(p,"id",t[3]),c(f,"class","inRow"),c(s,"id","titleHolder"),c(s,"class","inColumn"),c(e,"id","header"),c(e,"class","svelte-11m9m01")},m(g,k){w(g,e,k),h(e,n),h(e,l),h(e,s),h(s,r),h(s,a),h(s,f),h(f,o),h(o,d),h(o,u),h(f,m),h(f,p),h(p,y)},p(g,k){k&4&&we(u,g[2]),k&8&&c(p,"id",g[3])},d(g){g&&v(e)}}}function xe(t){let e,n,i,l,s;H(t[6]);function r(d,u){return d[4]>=500?Be:Te}let a=r(t),f=a(t),o=t[0]&&me(t);return{c(){e=_("main"),n=_("div"),f.c(),i=b(),o&&o.c(),c(n,"id","navbar"),c(n,"class","svelte-11m9m01")},m(d,u){w(d,e,u),h(e,n),f.m(n,null),h(e,i),o&&o.m(e,null),l||(s=q(window,"resize",t[6]),l=!0)},p(d,[u]){a===(a=r(d))&&f?f.p(d,u):(f.d(1),f=a(d),f&&(f.c(),f.m(n,null))),d[0]?o?o.p(d,u):(o=me(d),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:C,o:C,d(d){d&&v(e),f.d(),o&&o.d(),l=!1,s()}}}function Fe(t,e,n){let i,{headbar:l=!0}=e,s=!1,r=["Research","Policy","Computer Science","Advocacy","Service"],a="",f="typeCursorVisible",o="typing",d=0;function u(){let k=d%r.length;o=="typing"?(n(3,f="typeCursorVisible"),r[k].length!=a.length?n(2,a=r[k].slice(0,a.length+1)):o="waitDown"):o=="waitDown"?(n(3,f="typeCursorInvisible"),o="waitUp"):o=="waitUp"?(n(3,f="typeCursorVisible"),o="delete"):o=="delete"&&(a.length>=1?(n(2,a=a.slice(0,-1)),n(3,f=a.length==0?"typeCursorInvisible":"typeCursorVisible")):(o="typing",d++))}setInterval(u,200);let m=[{name:"Home",href:"/index",children:[]},{name:"About",href:"/about",children:[]},{name:"Programs",href:"#",children:[{name:"Volunteer",href:"/volunteer"},{name:"Internships",href:"/internship"},{name:"Research",href:"/research"}]},{name:"Articles",href:"#",children:[{name:"Newsletter",href:"/newsletter"},{name:"Resources",href:"https://think-neuro.ck.page/profile"}]},{name:"FAQs",href:"/faq",children:[]}];function p(){n(4,i=window.innerWidth)}const y=()=>{n(1,s=!s)},g=()=>{n(1,s=!1)};return t.$$set=k=>{"headbar"in k&&n(0,l=k.headbar)},n(4,i=0),[l,s,a,f,i,m,p,y,g]}class Ye extends Y{constructor(e){super(),X(this,e,Fe,xe,K,{headbar:0})}}function De(t){let e,n;return{c(){e=_("main"),n=_("div"),n.innerHTML='<div id="item" class="svelte-13xsjgr">© ThinkNeuro 2024-2025</div> <a id="item" href="privacy.pdf" class="svelte-13xsjgr">Privacy</a> <a id="item" href="tos.pdf" class="svelte-13xsjgr">Terms of Service</a>',c(n,"id","footer"),c(n,"class","svelte-13xsjgr"),M(n,"fixed",t[0])},m(i,l){w(i,e,l),h(e,n)},p(i,[l]){l&1&&M(n,"fixed",i[0])},i:C,o:C,d(i){i&&v(e)}}}function Ue(t,e,n){let{locked:i=!1}=e;return t.$$set=l=>{"locked"in l&&n(0,i=l.locked)},[i]}class Ze extends Y{constructor(e){super(),X(this,e,Ue,De,K,{locked:0})}}function _e(t,e,n){const i=t.slice();return i[3]=e[n],i[5]=n,i}function pe(t){let e,n=t[3].title+"",i,l;return{c(){e=_("div"),i=j(n),c(e,"id","title"),c(e,"class",l=ee(t[3].orientation)+" svelte-l25jq7")},m(s,r){w(s,e,r),h(e,i)},p(s,r){r&1&&n!==(n=s[3].title+"")&&we(i,n),r&1&&l!==(l=ee(s[3].orientation)+" svelte-l25jq7")&&c(e,"class",l)},d(s){s&&v(e)}}}function ge(t){let e,n,i,l,s,r,a,f=(!t[1]||!t[2])&&pe(t);var o=t[3].component;function d(u,m){return{props:{prop:u[3].prop}}}return o&&(l=te(o,d(t))),{c(){e=_("div"),n=_("div"),f&&f.c(),i=b(),l&&ie(l.$$.fragment),s=b(),c(n,"id","content"),c(n,"class","svelte-l25jq7"),c(e,"id",r=t[2]?"unSpacedBG":"background"),c(e,"class","svelte-l25jq7"),M(e,"grey",t[5]%2==1||t[1])},m(u,m){w(u,e,m),h(e,n),f&&f.m(n,null),h(n,i),l&&D(l,n,null),h(e,s),a=!0},p(u,m){if(!u[1]||!u[2]?f?f.p(u,m):(f=pe(u),f.c(),f.m(n,i)):f&&(f.d(1),f=null),m&1&&o!==(o=u[3].component)){if(l){ke();const p=l;V(p.$$.fragment,1,0,()=>{U(p,1)}),ye()}o?(l=te(o,d(u)),ie(l.$$.fragment),P(l.$$.fragment,1),D(l,n,null)):l=null}else if(o){const p={};m&1&&(p.prop=u[3].prop),l.$set(p)}(!a||m&4&&r!==(r=u[2]?"unSpacedBG":"background"))&&c(e,"id",r),(!a||m&2)&&M(e,"grey",u[5]%2==1||u[1])},i(u){a||(l&&P(l.$$.fragment,u),a=!0)},o(u){l&&V(l.$$.fragment,u),a=!1},d(u){u&&v(e),f&&f.d(),l&&U(l)}}}function Ge(t){let e,n,i=$(t[0]),l=[];for(let r=0;r<i.length;r+=1)l[r]=ge(_e(t,i,r));const s=r=>V(l[r],1,1,()=>{l[r]=null});return{c(){e=_("main");for(let r=0;r<l.length;r+=1)l[r].c()},m(r,a){w(r,e,a);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null);n=!0},p(r,[a]){if(a&7){i=$(r[0]);let f;for(f=0;f<i.length;f+=1){const o=_e(r,i,f);l[f]?(l[f].p(o,a),P(l[f],1)):(l[f]=ge(o),l[f].c(),P(l[f],1),l[f].m(e,null))}for(ke(),f=i.length;f<l.length;f+=1)s(f);ye()}},i(r){if(!n){for(let a=0;a<i.length;a+=1)P(l[a]);n=!0}},o(r){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)V(l[a]);n=!1},d(r){r&&v(e),I(l,r)}}}function Ke(t,e,n){let{children:i}=e,{noAlternate:l=!1}=e,{noSpacing:s=!1}=e;return t.$$set=r=>{"children"in r&&n(0,i=r.children),"noAlternate"in r&&n(1,l=r.noAlternate),"noSpacing"in r&&n(2,s=r.noSpacing)},[i,l,s]}class et extends Y{constructor(e){super(),X(this,e,Ke,Ge,K,{children:0,noAlternate:1,noSpacing:2})}}export{S as A,z as B,ke as C,ye as D,te as E,Ze as F,Ye as H,et as R,Y as S,b as a,w as b,ie as c,V as d,v as e,U as f,H as g,$ as h,X as i,_ as j,I as k,q as l,D as m,C as n,j as o,Q as p,c as q,h as r,K as s,P as t,we as u,Le as v,ee as w,Je as x,Xe as y,ne as z};