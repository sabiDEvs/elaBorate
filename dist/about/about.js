(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("div"),o=document.createElement("a"),a=document.createElement("p");return a.textContent=t,o.appendChild(a),o.href=e,n.appendChild(o),n},t=(e,t="elaBorate")=>{const n=document.createElement("div"),o=document.createElement("img");o.src=e,n.appendChild(o);const a=document.createElement("h1");return a.textContent=t,n.appendChild(a),n},n=t=>{const n=document.createElement("nav"),o=e(t[0],"Home"),a=e(t[2],"About"),i=e(t[1],"Reports"),s=e("mailto:info.sabidevs@gmail.com","Contact Us");return n.appendChild(o),n.appendChild(a),n.appendChild(i),n.appendChild(s),n},o=function(e,t){const n=document.createElement("h2");return e.appendChild(n),n.textContent=t,n},a=function(e,t){const n=document.createElement("p");return e.appendChild(n),n.textContent=t,n},i=function(e){const t=document.createElement("br");e.appendChild(t)},s=document.querySelector("body"),r="../index.html",d="../report/report.html",c="./about.html";((e,o)=>{const a=document.createElement("header"),i=t("../asset/images/89c558426b41fccd73cd.png");i.id="iconDiv";const s=n(o);s.classList.add("nav");const r=document.createElement("div");r.id="searchBox";const d=document.createElement("img");d.src="../asset/images/ecb34bb8fa4ecc3a4316.png";const c=document.createElement("input");c.type="text",c.id="searchInput",r.appendChild(c),r.appendChild(d),a.appendChild(i),a.appendChild(s),a.appendChild(r),(e=>{const t=document.createElement("div");t.classList.add("menu");let n=[];for(let e=0;e<3;e++)n[e]=document.createElement("div"),n[e].classList.add("bars"),t.appendChild(n[e]);t.addEventListener("click",(()=>{document.querySelector(".nav").classList.toggle("active"),"nav active"===document.querySelector(".nav").className?document.querySelector("header").style.marginBottom="20vh":document.querySelector("header").style.marginBottom="0"})),e.appendChild(t)})(a),e.appendChild(a)})(s,[r,d,c]);const l=document.createElement("main");s.appendChild(l);const h=document.createElement("section");l.appendChild(h);const u=document.createElement("div");u.classList.add("container"),u.classList.add("welcome"),h.appendChild(u),function(e,t){const n=document.createElement("h1");e.appendChild(n),n.textContent="Welcome to elaBorate!"}(u),a(u,"Salutations, Dear Reader! We're delighted\nthat you've decided to take this most stately decision in improving \nyour understanding of ELA and writing properly coordinated reports. \nIn this article, we're going to take you on a brief journey, \nelaborating on some key things\nlike our mission statement, and how you shall navigate this\nplatform. But first, we want you to ponder on something..."),i(u),a(u,"The co-founder of Rolls-Royce, Sir Henry Royce, left this world with his\npopular maxim - “Strive for perfection in everything you do. Take\nthe best that exists and make it better. When it does not exist,\ndesign it”. Do keep that quote in mind; it'll come in handy as you\ngo through this article."),i(u),a(u,"You may have wondered, once or twice\nprobably, how you could better understand an experiment, how you\ncould save time especially in writing reports that are definitive\nand are not filled with unimportant stuffs, or how you can write a\nmore presentable experiment report; highlighting the important parts\nand composing a perfectly presentable report all together...\nProbably, you may have wondered how you can have enough resources\nreadily available for every experiment in one place, so you don't\nhave to start browsing the four corners of the web. Well, worry no\nmore, as we hope to help you ease your burden.");const p=document.createElement("section");p.classList.add("section-mission"),p.classList.add("container"),l.appendChild(p);const m=document.createElement("div");m.classList.add("container-mission"),p.appendChild(m);const g=document.createElement("div");g.classList.add("div-text-mission"),m.appendChild(g),o(g,"Our Mission"),a(g," \nWe'll start by outlining why elaBorate exists and what you can\nexpect from this learning platform. With elaBorate, we want to\nhelp young engineers in training, properly understand all that is\ngoing on in their various ELA experiments. Having gone through the system ourselves, \nwe saw how difficult it was for a first year engineering student, \njust starting the Pre-UBITS, to smoothly transition to the rigorous \nand demanding second year ELA practical. \nThere were times we wished we had a proper guide on \nhow to go about the various ELA activities, \nespecially in understanding the experiment to be performed \nand preparing the reports thereafter. Truth be told, it wasn't easy delving into the web, \nsearching for good resources especially on theories and experiment procedures. \nThis is why we've arranged all the resources you would need to elaborately \nperform all the ELA activities, in one place.\nWe believe that by doing so, you can experience minimal to no \ndifficulty in going about your ELA activities, and of course, \neventually ace the course with good grades.");const y=document.createElement("div");y.classList.add("div-img-mission"),m.appendChild(y);const v=document.createElement("img");y.appendChild(v),v.src="../asset/images/ee9f073d24a99867a038.png";const w=document.createElement("section");w.classList.add("section-help"),w.classList.add("container"),l.appendChild(w);const f=document.createElement("div");w.appendChild(f),o(f,"Why allow us help you?"),a(f,"\nCan you recall what we told you to ponder on when we welcomed you? \nIf you reflected on the maxim with the same wavelength as us, \nyou will find that Sir Henry Royce wanted perfection in all he did. \nThis drive as we know it, yielded fruits as we are sure you have; \none way or another, heard about the coveted Rolls-Royce automobile. \nWe also want that for you! - Of course, I'm talking about perfection, \nnot the Rolls-Royce :) - Anyways, having passed through the system ourselves, \nWe believe you want to properly understand your different experiments, \nthat you also want to ace all ELA courses - That my friend, is striving for perfection, \nand like Sir Royce, we shall take the best that exists and make it better!\n");const E=document.createElement("section");E.classList.add("section-achieve"),E.classList.add("container"),l.appendChild(E);const C=document.createElement("div");C.classList.add("container-achieve"),E.appendChild(C);const b=document.createElement("div");b.classList.add("div-img-achieve"),C.appendChild(b);const L=document.createElement("img");b.appendChild(L),L.src="../asset/images/9f85bcb065b488f77419.png";const x=document.createElement("div");x.classList.add("div-text-achieve"),C.appendChild(x),o(x,"What we hope to achieve"),a(x," \nAs a Valet tends to his Master even in the smallest of tasks, and a Maid; \nher Mistress, or as a noble steed journeys with its brave knight through battles unending, \nelaBorate is here to be your guide, helping you as you go through ELA.\nIn all honesty, what we hope to achieve is probably what you want to achieve as you go \nthrough your various ELA experiments. \nAn “A” in all your ELA results? A seamlessly good ELA experience? \nA good idea and understanding of whatever experiment you may perform? \nA well written and elaborated report? Something that facilitates your inquisitiveness \nand point you in the right direction to gather the knowledge you seek? You could name a dozen, really. \nWhatever good thing you wish to achieve as you go about your ELA activities, is what we want for you.\n");const A=document.createElement("section");A.classList.add("section-navigate"),A.classList.add("container"),l.appendChild(A);const S=document.createElement("div");S.classList.add("container-navigate"),A.appendChild(S);const k=document.createElement("div");k.classList.add("div-header-navigate"),S.appendChild(k),o(k,"Navigating elaBorate"),a(S,"\nNow that we have performed the conventional niceties by welcoming you, \nmaking clear our intentions and stating what we hope to achieve, \nwe want to aid your experience when using this platform, \nby showing you how to navigate the various sections.\nThis platform is primarily divided into four sections - Mechanical, \nProduction, Electrical, and Computer ELA section.\nAs you may already know, the Mechanical, Production and \nElectrical ELA Sections are for those in their second year, \nwhile the Computer ELA section is for Computer engineering students in their third year.\n"),function(e,t){const n=document.createElement("ul");e.appendChild(n),[["Mechanical ELA Section","Mechanical ELA focuses on applying theoretical concepts to real-world applications. Students bridge the gap between theory and application by testing mechanical systems through experiments involving Applied Mechanics (AM) and Strength of Materials (SM)."],["Production ELA Section","Production ELA delves into the practicalities of manufacturing. Students explore efficient production techniques through experiments in areas like machining, welding, casting, forming, and bench-fitting, developing a strong foundation for future industrial success."],["Electrical ELA Section","Electrical ELA brings electrical principles to life. Students gain practical experience with circuits, electronics, power systems, and control systems through experiments involving real-world equipment like Transformers, oscilloscopes, and other electrical machines."],["Computer ELA Section","Computer ELA offers hands-on experience with hardware, software and basic engineering concepts, by solidifying theory through building circuits, programming microcontrollers, and exploring computer networks."]].forEach((function(e){const t=document.createElement("li");t.classList.add("first-list-item"),t.textContent=e[0],n.appendChild(t);const o=document.createElement("li");return o.classList.add("second-list-item"),t.appendChild(o),o.textContent=e[1],o}))}(S);const M=document.createElement("section");M.classList.add("section-cta"),M.classList.add("container"),l.appendChild(M);const T=document.createElement("div");T.classList.add("container-cta"),M.appendChild(T);const W=document.createElement("div");W.classList.add("container-cta-header"),T.appendChild(W);const R=document.createElement("div");R.classList.add("container-cta-text"),T.appendChild(R),o(W,"Let's get Started!"),a(R,"\nAlright! That's enough talk, don't you think? Hopefully you're\nraring to go see what we've got in store for you. Without further\nado, let's get you started on your Journey.");const B=document.createElement("div");B.classList.add("container-cover"),T.appendChild(B);const q=document.createElement("div");q.classList.add("container-cta-btn"),B.appendChild(q);const H=document.createElement("a");H.href="../report/report.html",H.classList.add("btn-view-reports"),H.textContent="VIEW REPORTS",q.appendChild(H),((e,o)=>{const a=document.createElement("footer"),i=document.createElement("section"),s=t("../asset/images/89c7f3e4da4391052d31.png",""),r=n(o);r.id="footerNav",i.appendChild(s),i.appendChild(r),i.id="leftFoot",a.appendChild(i);const d=document.createElement("section");d.id="rightFoot";const c=document.createElement("p");c.textContent="Get our latest innovative news";const l=document.createElement("div");l.id="subscribe";const h=document.createElement("input");h.type="email",h.placeholder="Email Address",h.id="subEmail";const u=document.createElement("div");u.textContent="Subscribe",u.id="subButton",l.appendChild(h),l.appendChild(u);const p=document.createElement("div");p.innerHTML=`&#169; Copyright <span>${(new Date).getFullYear()}</span>`;const m=document.createElement("p");m.innerHTML="All rights reserved. A <span>sabi</span>Devs initiative",d.appendChild(c),d.appendChild(l),d.appendChild(p),d.appendChild(m),a.appendChild(d),e.appendChild(a)})(s,[r,d,c])})();