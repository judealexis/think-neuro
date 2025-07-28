import{S as q,i as B,s as x,g as G,h as P,j as f,b as D,l as M,t as b,k as U,o as z,d as w,e as k,p as F,x as H,q as K,a as E,c as _,u,y as R,A as O,v as h,B as W,m as I,w as Q,f as C,C as J,H as X,R as Y,F as V,n as Z}from"./SmartText-CJq4Eywl.js";import{T as ee}from"./TextButton-frcb696F.js";import{C as ie}from"./Carousel-bVcCU8ly.js";/* empty css                                               */function A(s,t,a){const r=s.slice();return r[7]=t[a],r}function $(s){let t,a,r=s[7].title+"",d,l,i,c,e,o,n,T,N,m,v,S,p;return v=new H({props:{text:s[7].body}}),{c(){t=f("div"),a=f("div"),d=K(r),l=E(),i=f("div"),c=f("div"),e=f("img"),N=E(),m=f("div"),_(v.$$.fragment),S=E(),u(a,"id","header"),u(a,"class","svelte-1qbi7g"),u(e,"id","cardImage"),R(e.src,o=(s[3]>500?"assets/projects/":"assets/projects/stretched/")+s[7].image)||u(e,"src",o),u(e,"alt",n=s[7].title),u(e,"class","svelte-1qbi7g"),u(c,"id","imageWrapper"),u(c,"class","svelte-1qbi7g"),G(()=>s[5].call(c)),u(m,"id","textDisc"),u(m,"class","inColumn svelte-1qbi7g"),O(m,"max-height",s[1]+"px"),u(i,"id","holder"),u(i,"class","inRow svelte-1qbi7g"),u(t,"id","card"),u(t,"class","inColumn svelte-1qbi7g")},m(g,y){D(g,t,y),h(t,a),h(a,d),h(t,l),h(t,i),h(i,c),h(c,e),T=W(c,s[5].bind(c)),h(i,N),h(i,m),I(v,m,null),s[6](m),h(t,S),p=!0},p(g,y){(!p||y&1)&&r!==(r=g[7].title+"")&&Q(d,r),(!p||y&9&&!R(e.src,o=(g[3]>500?"assets/projects/":"assets/projects/stretched/")+g[7].image))&&u(e,"src",o),(!p||y&1&&n!==(n=g[7].title))&&u(e,"alt",n);const j={};y&1&&(j.text=g[7].body),v.$set(j),(!p||y&2)&&O(m,"max-height",g[1]+"px")},i(g){p||(b(v.$$.fragment,g),p=!0)},o(g){w(v.$$.fragment,g),p=!1},d(g){g&&k(t),T(),C(v),s[6](null)}}}function te(s){let t,a,r,d;G(s[4]);let l=P(s[0]),i=[];for(let e=0;e<l.length;e+=1)i[e]=$(A(s,l,e));const c=e=>w(i[e],1,1,()=>{i[e]=null});return{c(){t=f("main");for(let e=0;e<i.length;e+=1)i[e].c()},m(e,o){D(e,t,o);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(t,null);a=!0,r||(d=M(window,"resize",s[4]),r=!0)},p(e,[o]){if(o&15){l=P(e[0]);let n;for(n=0;n<l.length;n+=1){const T=A(e,l,n);i[n]?(i[n].p(T,o),b(i[n],1)):(i[n]=$(T),i[n].c(),b(i[n],1),i[n].m(t,null))}for(U(),n=l.length;n<i.length;n+=1)c(n);z()}},i(e){if(!a){for(let o=0;o<l.length;o+=1)b(i[o]);a=!0}},o(e){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)w(i[o]);a=!1},d(e){e&&k(t),F(i,e),r=!1,d()}}}function ne(s,t,a){let r,{prop:d=[]}=t,l,i;function c(){a(3,r=window.innerWidth)}function e(){l=this.clientHeight,a(1,l)}function o(n){J[n?"unshift":"push"](()=>{i=n,a(2,i)})}return s.$$set=n=>{"prop"in n&&a(0,d=n.prop)},a(3,r=0),[d,l,i,r,c,e,o]}class L extends q{constructor(t){super(),B(this,t,ne,te,x,{prop:0})}}function ae(s){let t,a,r,d,l,i,c;return a=new X({}),d=new Y({props:{children:[{title:"PROJECTS",orientation:"left",component:ee,prop:[`
          Note: Application to our special project tracks (including the Opioid Technology Initiative, Medical Second Language Exchange, 
          and Children’s Health & Literature Fellowship) are εpaused for the Fall 2025 cycleΕ. These projects will resume in εSpring 2026Ε, 
          and at this time, εno new applicants will be acceptedΕ for these programs during the fall. ρ Ρ ρ Ρ

          Only current interns who began these projects in previous cycles will continue working on them throughout Fall 2025. ρ Ρ ρ Ρ

          If you’re interested in joining a special project in the future, we recommend applying to the Fall 2025 Bibliometrics 
          Research Internship (BRI) or another ThinkNeuro program first. When reviewing applicants for these selective interdisciplinary 
          tracks, we give priority to returning interns who have shown strong engagement and long-term interest in our mission.
          `,!0,"clickDisabled","Apply","https://docs.google.com/forms/d/e/1FAIpQLSfaGQGwgbRma6smf8XtuUar6PQIvSa9xd2zKc3uz2E1s5u1gg/viewform"]},{title:"CURRENT OPPORTUNITIES",orientation:"left",component:L,prop:s[0]},{title:"COMPLETED PROJECTS",orientation:"left",component:L,prop:s[1]},{title:"STUDENT TESTIMONIALS",orientation:"center",component:ie,prop:[4,"assets/testimonials/internship/"]}]}}),i=new V({}),{c(){t=f("main"),_(a.$$.fragment),r=E(),_(d.$$.fragment),l=E(),_(i.$$.fragment)},m(e,o){D(e,t,o),I(a,t,null),h(t,r),I(d,t,null),h(t,l),I(i,t,null),c=!0},p:Z,i(e){c||(b(a.$$.fragment,e),b(d.$$.fragment,e),b(i.$$.fragment,e),c=!0)},o(e){w(a.$$.fragment,e),w(d.$$.fragment,e),w(i.$$.fragment,e),c=!1},d(e){e&&k(t),C(a),C(d),C(i)}}}function se(s){return[[{image:"inter.jpg",title:"Digital Intervention Platform for Opioid Addiction",body:`
      τBACKGROUNDΤ
      In response to the pressing challenges of opioid addiction, particularly in unhoused 
      and uninsured communities, there is a need for innovative, tech-enabled solutions to aid in the recovery 
      process. The impact of addiction extends across diverse socioeconomic backgrounds, making it imperative to 
      address these challenges with a focus on inclusivity. Through the development of a supportive platform, this 
      initiative strives to provide continuous assistance, resources, and a sense of community for individuals in 
      recovery. ρ Ρ 
      
      τDESCRIPTIONΤ Interns will be instrumental in developing a comprehensive digital intervention 
      platform focused on aiding individuals in their recovery from opioid addiction. The platform will serve as a 
      user-friendly, accessible resource offering various features, including:

      λ 
      πεEducation Modules:Ε Interactive modules providing information on the science of addiction, the impact on 
      the brain, and strategies for recovery.Π
      πεProgress Tracking:Ε Tools to track and celebrate milestones in recovery, encouraging ongoing engagement.Π 
      πεResource Hub:Ε Access to local treatment centers, support services, and mental health resources.Π 
      Λ

      τINTERN ENGAGEMENTΤ
      λ 
      πεDesigning the platform:Ε Contributing to the user interface and experience design to ensure accessibility and engagement.Π
      πεCreating content:Ε Developing informative and engaging content for the education modules and resource hub.Π 
      πεTesting usability:Ε Conducting thorough testing to ensure the platform is user-friendly and meets the diverse needs of its audienceΠ
      πεDevising and implementing effective outreach strategies:Ε promoting the platform within the affected communities, ensuring maximum 
      impact and utilization.Π 
      Λ`},{image:"lit.jpg",title:"Children’s Neurologic Literature",body:`
      τBACKGROUNDΤ 
      Address barriers to accessing addiction treatment by expanding telehealth services, especially in rural or 
      underserved areas. ρ Ρ 
      
      τDESCRIPTIONΤ 
      Construct and create empathetic and educational children’s books tailored towards those facing various neurodegenerative diseases 
      including ADHD, dyslexia, and epilepsy. With a team of other interns, you will collaborate on various literary projects with the 
      overarching goals of: 
      λ 
      πεEmpathy and Understanding:ΕFoster empathy and understanding towards children dealing with neurodegenerative disease and their families.Π
      πεAwareness and Education:ΕRaise awareness about various neurological diseases and the specific needs of affected individuals while advocating 
      for inclusivity and support within communities and healthcare systems.Π 
      πεPositive Emotional Impact:ΕBring joy, comfort, and moments of happiness to youth facing challenging circumstances through uplifting and 
      inspiring stories.Π
      Λ
      Note for Spring 2024, the Children’s Neurologic Literature Project is only accepting novel illustrations from the new cohort.
      `},{image:"lang.jpg",title:"Second Medical Language Exchange",body:`
      τBACKGROUNDΤ
      Within the landscape of healthcare, a significant impediment to equitable access and quality of care is the 
      documented dearth of educational materials available in languages diverse from the predominant ones. This discrepancy serves as a 
      formidable barrier, perpetuating disparities across chronic health management, treatments, and overall healthcare outcomes. The 
      challenges are profound: language disparities, cultural sensitivity, impact on health outcomes, and age and cultural considerations. 
      ρ Ρ 
      
      τDESCRIPTIONΤ 
      This initiative aims to bridge the existing gap between medical professionals and Limited English Proficiency (LEP) populations by 
      creating culturally sensitive and linguistically tailored educational materials. The project's objectives extend beyond merely generating 
      new materials; it aspires to enhance existing resources and investigate how these improvements can positively impact healthcare outcomes 
      for LEP populations. The key objectives include: 
      λ 
      πεMaterial Development:ΕCraft educational materials that resonate with diverse linguistic and cultural backgrounds. These materials 
      will not only address current gaps but will also be designed to improve understanding and engagement between medical professionals 
      and LEP populations.Π
      πεOutcome Evaluation:ΕConduct a comprehensive study to assess how the improved and new educational materials contribute to enhanced 
      healthcare outcomes for LEP populations. This evaluation will provide valuable insights into the efficacy of culturally sensitive 
      resources.Π 
      πεCultural and Age Considerations:ΕExplore the nuanced dynamics of culture and age in educational material effectiveness. This 
      involves understanding how different cultural contexts and age groups respond to healthcare information, enabling the establishment 
      of general guidelines for creating universally effective educational materials.Π
      πεGuideline Establishment:ΕBased on the study's findings, establish general guidelines for creating educational materials that are 
      optimally effective for both medical professionals and LEP populations. These guidelines will serve as a resource for future initiatives 
      aimed at promoting healthcare equity and access.Π
      Λ`},{image:"edu.jpg",title:"Digital Health Science",body:`
      τBACKGROUNDΤ
       Many elementary and middle school students—especially those from under-resourced or historically marginalized communities—lack access 
       to high-quality, engaging health science education. These early disparities in exposure can limit future interest and confidence in 
       pursuing careers in medicine and public health. ρ Ρ 
      
      τDESCRIPTIONΤ 
      The Digital Health Science Education project addresses these gaps by developing interactive, age-appropriate lessons and hands-on activity 
      kits focused on human body systems. Interns work in small teams to create engaging STEM learning materials for K–8 students, which are 
      later distributed as part of ThinkNeuro’s Doctor Discovery Program (DDP). These materials are designed to be accessible for at-home use, 
      with lessons modeled after real medical cases and tailored for visual and tactile learners. ρ Ρ

      τINTERN ENGAGEMENTΤ 
      λ 
      πεLesson Development:ΕCreate informative, standards-aligned curriculum modules focused on topics like the respiratory, digestive, 
      or nervous systems.Π
      πεActivity Kits:ΕDesign DIY science kits using household materials to reinforce key concepts through tactile learning.Π 
      πεEquity-Driven Design:ΕEnsure all materials are culturally relevant and inclusive, especially for students underrepresented in the sciences.Π
      πεAuthorship Opportunity:ΕInterns may be credited as co-authors on a future community case study publication evaluating the educational 
      impact of DDP content.Π
      Λ`}],[{image:"opioid.jpg",title:"Opioid Education Outreach in San Bernardino",body:`
      τBACKGROUNDΤ
      The ongoing opioid epidemic presents considerable challenges in communities
      like San Bernardino, particularly impacting those with limited English proficiency, non-native
      English speakers, and individuals for whom English is a second language. Addressing barriers to
      accurate information access is vital to empower these populations, enhance education about opioids,
      and ultimately reduce misuse while improving patient outcomes. ρ Ρ 
      
      τDESCRIPTIONΤ 
      Interns will play a crucial role in conducting community outreach, developing educational materials, and 
      administering surveys to gather baseline data, contributing to a comprehensive project aimed at raising 
      awareness of opioid use and abuse in San Bernardino.

      λ 
      πεInnovative Educational Materials:Ε The interns will be actively involved in creating 
      impactful educational materials, such as infographics, short papers, or videos, specifically designed to 
      engage individuals struggling with opioid addiction.Π
      πεCommunity Outreach and Surveys:Ε The intern cohort will play a pivotal role in conducting community 
      outreach, distributing the educational materials, and administering initial surveys to gather baseline 
      data on substance abuse within the targeted populations.Π 
      πεProject Timeline and Follow-up:Ε The project will unfold in phases, starting with outreach to identify 
      educational needs, followed by material development, and concluding with dispersal efforts. The interns 
      will also engage in follow-up outreach to study participants, measuring quantitative improvements for 
      statistical significance.Π 
      Λ`}]]}class oe extends q{constructor(t){super(),B(this,t,se,ae,x,{})}}new oe({target:document.body,props:{name:"world"}});
