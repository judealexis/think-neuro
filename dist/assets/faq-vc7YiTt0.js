import{S as D,i as R,s as z,h as E,j as h,b as l,n as w,e as c,k as Q,o as g,a as k,q as p,r as _,l as U,u as L,H as Y,R as B,F as G,c as T,m as N,t as O,d as S,f as H}from"./Repeater-D3WpoXFL.js";function I(i,t,n){const e=i.slice();return e[2]=t[n],e[3]=t,e[4]=n,e}function K(i){let t;return{c(){t=h("div"),t.innerHTML='<svg id="downIcon" fill="#444" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svelte-7xvgrq"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>',p(t,"id","iconWrapper"),p(t,"class","svelte-7xvgrq")},m(n,e){l(n,t,e)},d(n){n&&c(t)}}}function Z(i){let t;return{c(){t=h("div"),t.innerHTML='<svg id="downIcon" fill="#444" viewBox="0 0 24 24" style="transform: rotate(180deg)" xmlns="http://www.w3.org/2000/svg" class="svelte-7xvgrq"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>',p(t,"id","iconWrapper"),p(t,"class","svelte-7xvgrq")},m(n,e){l(n,t,e)},d(n){n&&c(t)}}}function j(i){let t=i[2].answer+"",n;return{c(){n=g(t)},m(e,r){l(e,n,r)},p(e,r){r&1&&t!==(t=e[2].answer+"")&&L(n,t)},d(e){e&&c(n)}}}function V(i){let t,n,e;return{c(){t=g(`Internship applications are open and accessible twice a year in the
            Fall and Spring. Clinical research applications are open and
            accessible twice a year in the Winter and Summer. Medical Hackathon
            applications are live in November. You can view interns who've
            participated in our hackathons `),n=h("a"),n.textContent="here",e=g(`, all of whom are legally listed as inventors on the provisional
            patents that ThinkNeuro files.`),p(n,"href","https://www.instagram.com/p/C0-mmZgrmcZ/?img_index=1")},m(r,o){l(r,t,o),l(r,n,o),l(r,e,o)},p:w,d(r){r&&(c(t),c(n),c(e))}}}function J(i){let t,n;return{c(){t=g(`At ThinkNeuro, we care about the experiences of our interns to the
            greatest extent. We are transparent about past incidents where there
            may have been a lot of unwanted commotion on our Slack or other
            social media platforms that have disrupted the experiences of our
            interns. For the full incidence report, please refer to this
            `),n=h("a"),n.textContent="archive",p(n,"href","https://drive.google.com/drive/u/1/folders/122rV8GdpaCIKa15QDeqUnGS2S-vENPED")},m(e,r){l(e,t,r),l(e,n,r)},p:w,d(e){e&&(c(t),c(n))}}}function X(i){let t,n;return{c(){t=g(`You can find past oral and posters presented at the ThinkNeuro
            Research Symposium under the “Programs” section of our website. For
            research and scholarship testimonials, please follow our social
            media
            `),n=h("a"),n.textContent="@thinkneuro",p(n,"href","http://instagram.com/thinkneuro")},m(e,r){l(e,t,r),l(e,n,r)},p:w,d(e){e&&(c(t),c(n))}}}function ee(i){let t,n;return{c(){t=g(`All applications are reviewed periodically. We typically have two
            review rounds and encourage early submissions. To gauge
            competitiveness of previous cohorts, please review our `),n=h("a"),n.textContent="Fall 2024 Internship Admission Statistics.",p(n,"href","https://www.instagram.com/p/DAhkf9rukpv/?img_index=1")},m(e,r){l(e,t,r),l(e,n,r)},p:w,d(e){e&&(c(t),c(n))}}}function M(i){let t,n,e,r=i[2].question+"",o,a,s,u,b,y,A,x,F;function W(f,v){return f[2].isOpen?Z:K}let q=W(i),m=q(i);function P(){return i[1](i[2],i[3],i[4])}function C(f,v){return f[2].answer=="αβγ"?ee:f[2].answer=="αβδ"?X:f[2].answer=="αβε"?J:f[2].answer=="αβζ"?V:j}let $=C(i),d=$(i);return{c(){t=h("div"),n=h("button"),e=h("div"),o=g(r),a=k(),m.c(),s=k(),u=h("div"),b=h("p"),d.c(),A=k(),p(e,"id","btnTxt"),p(e,"class","svelte-7xvgrq"),p(n,"class","accordion-header svelte-7xvgrq"),p(u,"style",y=i[2].isOpen?"height: fit-content;":"height: 0px;"),p(u,"class","accordion-content svelte-7xvgrq"),p(t,"class","accordion")},m(f,v){l(f,t,v),_(t,n),_(n,e),_(e,o),_(n,a),m.m(n,null),_(t,s),_(t,u),_(u,b),d.m(b,null),_(t,A),x||(F=U(n,"click",P),x=!0)},p(f,v){i=f,v&1&&r!==(r=i[2].question+"")&&L(o,r),q!==(q=W(i))&&(m.d(1),m=q(i),m&&(m.c(),m.m(n,null))),$===($=C(i))&&d?d.p(i,v):(d.d(1),d=$(i),d&&(d.c(),d.m(b,null))),v&1&&y!==(y=i[2].isOpen?"height: fit-content;":"height: 0px;")&&p(u,"style",y)},d(f){f&&c(t),m.d(),d.d(),x=!1,F()}}}function te(i){let t,n=E(i[0]),e=[];for(let r=0;r<n.length;r+=1)e[r]=M(I(i,n,r));return{c(){t=h("main");for(let r=0;r<e.length;r+=1)e[r].c()},m(r,o){l(r,t,o);for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(t,null)},p(r,[o]){if(o&1){n=E(r[0]);let a;for(a=0;a<n.length;a+=1){const s=I(r,n,a);e[a]?e[a].p(s,o):(e[a]=M(s),e[a].c(),e[a].m(t,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=n.length}},i:w,o:w,d(r){r&&c(t),Q(e,r)}}}function ne(i,t,n){let{prop:e}=t;const r=(o,a,s)=>{n(0,a[s].isOpen=!o.isOpen,e)};return i.$$set=o=>{"prop"in o&&n(0,e=o.prop)},[e,r]}class re extends D{constructor(t){super(),R(this,t,ne,te,z,{prop:0})}}function ie(i){let t,n,e,r,o,a;return t=new Y({}),e=new B({props:{children:[{title:"FREQUENTLY ASKED QUESTIONS",orientation:"left",component:re,prop:[{question:"What differentiates ThinkNeuro’s pre-health opportunities?",answer:"The main perks of participation in ThinkNeuro’s programs include authorship on scholarly publications from research-based internships and academic scholarships from Medical Hackathon participation. For more information, please refer to the “Programs” section of our website.",isOpen:!1},{question:"When does ThinkNeuro open applications for all programs?",answer:"αβζ",isOpen:!1},{question:"Who can participate in the internship program?",answer:"Ambitious high school students and undergraduates are eligible to apply for the internship.",isOpen:!1},{question:"How are applications reviewed for the internship program? How competitive are admissions?",answer:"αβγ",isOpen:!1},{question:"What are past examples of ThinkNeuro research and internship cohorts?",answer:"αβδ",isOpen:!1},{question:"How does ThinkNeuro value the integrity of our organization and the experiences of our interns?",answer:"αβε",isOpen:!1}]}]}}),o=new G({props:{locked:!0}}),{c(){T(t.$$.fragment),n=k(),T(e.$$.fragment),r=k(),T(o.$$.fragment)},m(s,u){N(t,s,u),l(s,n,u),N(e,s,u),l(s,r,u),N(o,s,u),a=!0},p:w,i(s){a||(O(t.$$.fragment,s),O(e.$$.fragment,s),O(o.$$.fragment,s),a=!0)},o(s){S(t.$$.fragment,s),S(e.$$.fragment,s),S(o.$$.fragment,s),a=!1},d(s){s&&(c(n),c(r)),H(t,s),H(e,s),H(o,s)}}}class ae extends D{constructor(t){super(),R(this,t,null,ie,z,{})}}new ae({target:document.body,props:{name:"world"}});