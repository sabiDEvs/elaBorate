"use strict";(self.webpackChunkelaborate=self.webpackChunkelaborate||[]).push([[57],{807:()=>{const e=(e,t)=>{const n=document.createElement("div"),a=document.createElement("a"),d=document.createElement("p");return d.textContent=t,a.appendChild(d),a.href=e,n.appendChild(a),n},t=(e,t="elaBorate")=>{const n=document.createElement("div"),a=document.createElement("img");a.src=e,n.appendChild(a);const d=document.createElement("h1");return d.textContent=t,n.appendChild(d),n},n=t=>{const n=document.createElement("nav"),a=e(t[0],"Home"),d=e(t[2],"About"),i=e(t[1],"Reports"),c=e("mailto:info.sabidevs@gmail.com","Contact Us");return n.appendChild(a),n.appendChild(d),n.appendChild(i),n.appendChild(c),n},a=(e,t,n,a)=>{const d=document.createElement("div");d.classList.add("deptBox");const i=document.createElement("img");i.src=e;const c=document.createElement("div");c.classList.add("deptText");const s=document.createElement("h5");s.textContent=t;const o=document.createElement("article");o.textContent=n;const l=document.createElement("div");return l.textContent="Level(s) covered: "+a.toString(),d.appendChild(i),c.appendChild(s),c.appendChild(o),c.appendChild(l),d.appendChild(c),d},d=(e,t,n)=>{const a=document.createElement("div"),d=document.createElement("h5");d.textContent=e;const i=document.createElement("article");i.textContent=t;const c=document.createElement("div");return c.classList.add("serveButton"),c.textContent=n,a.appendChild(d),a.appendChild(i),a.appendChild(c),a},i=(e,t,n)=>{const a=document.createElement("div"),d=document.createElement("p"),i=document.createElement("div"),c=document.createElement("div");i.addEventListener("click",(()=>{document.querySelector("#chatGPT").style.display="none",document.querySelector("#geminiAI").style.display="none"})),d.textContent="AI pop-up modal",d.classList.add("aiText"),i.textContent="x",i.classList.add("close");const s=document.createElement("iframe");return s.src=e,s.name=t,s.id=n,a.id=t,c.classList.add("frameBox"),c.appendChild(s),a.appendChild(d),a.appendChild(i),a.appendChild(c),a},c="./index.html",s="./report/report.html",o="./about/about.html",l=document.querySelector("body");((e,a)=>{const d=document.createElement("header"),i=t("./asset/images/89c558426b41fccd73cd.png");i.id="iconDiv";const c=n(a);c.classList.add("nav");const s=document.createElement("div");s.id="searchBox";const o=document.createElement("img");o.src="./asset/images/ecb34bb8fa4ecc3a4316.png";const l=document.createElement("input");l.type="text",l.id="searchInput",s.appendChild(l),s.appendChild(o),d.appendChild(i),d.appendChild(c),d.appendChild(s),(e=>{const t=document.createElement("div");t.classList.add("menu");let n=[];for(let e=0;e<3;e++)n[e]=document.createElement("div"),n[e].classList.add("bars"),t.appendChild(n[e]);t.addEventListener("click",(()=>{document.querySelector(".nav").classList.toggle("active"),"nav active"===document.querySelector(".nav").className?document.querySelector("header").style.marginBottom="20vh":document.querySelector("header").style.marginBottom="0"})),e.appendChild(t)})(d),e.appendChild(d)})(l,[c,s,o]);const r=document.createElement("main"),p=document.createElement("section");(e=>{const t=[{text:"ELA made",word:"Easy!!!",image:"./asset/images/9dfe16325ed6898b3799.jpg",class:"group",inner:"#14213d",outer:"#fca311",call:"GET STARTED"},{text:"Lab Days?",word:"A Breeze!!!",image:"./asset/images/911581982d5099bbd728.jpg",class:"group",inner:"#000000",outer:"#fca311",call:"CHOOSE US"},{text:"Engineering Labs,",word:"Simplified!!!",image:"./asset/images/a2e6def33c12927585f1.jpg",class:"group",inner:"#000000",outer:"#14213d",call:"TAP IN"},{text:"Don't Wing It,",word:"Elaborate It!!!",image:"./asset/images/a70d6a4b8b304ef985e6.jpg",class:"group",inner:"#000000",outer:"#e5e5e5",call:"UNLEASH  POTENTIAL"},{text:"Unlock Lab Secrets with,",word:"Elaborate!!!",image:"./asset/images/d0370f308500f6ec534a.jpg",class:"group",inner:"#14213d",outer:"#e5e5e5",call:"START NOW"},{text:"Grades Soaring, Elaborate",word:"Thank You!!!",image:"./asset/images/42b2d9844f6b2f4f1d16.jpg",class:"group",inner:"#14213d",outer:"#000000",call:"DIVE IN"}];for(let n=0;n<t.length;n++){const a=document.createElement("div"),d=document.createElement("div");d.classList.add("container");const i=document.createElement("div");i.classList.add("textDiv");const c=document.createElement("div");c.classList.add("heroText");const s=document.createElement("div");s.classList.add("span");const o=document.createElement("img");o.classList.add(`${t[n].class}`);const l=document.createElement("div");l.classList.add("innerCircle");const r=document.createElement("div");r.classList.add("outerCircle");const p=document.createElement("div");p.classList.add("callAction"),c.textContent=t[n].text,s.textContent=t[n].word,o.src=t[n].image,l.style.background=t[n].inner,r.style.background=t[n].outer,p.textContent=t[n].call,p.style.background=t[n].inner,p.style.boxShadow=`5px 5px 1.5px 1px ${t[n].outer}`,i.appendChild(c),i.appendChild(s),d.appendChild(i),d.appendChild(p),a.appendChild(d),a.appendChild(o),a.appendChild(l),a.appendChild(r),a.classList.toggle("heroSlide"),e.appendChild(a)}})(p),p.id="hero",r.appendChild(p);const m=document.createElement("section");m.id="dept";const u=document.createElement("h3");u.textContent="Departments We Cover";const h=document.createElement("div");h.id="group";const g=a("./asset/images/4c0593225e4235ce4f99.png","COMPUTER ENGINEERING","Computer ELA offers hands-on experience with hardware, software and basic engineering concepts, by solidifying theory through building circuits, programming microcontrollers, and exploring computer networks",[300,400]),C=a("./asset/images/64aeffb2733ab0bdedda.png","ELECTRICAL ENGINEERING","Electrical ELA brings electrical principles to life. Students gain practical experience with circuits, electronics, power systems, and control systems through experiments involving real-world equipment like Transformers, oscilloscopes, and other electrical machines",[200,300]),E=a("./asset/images/5f89313ddb5c3d488187.png","MECHANICAL ENGINEERING","Mechanical ELA focuses on applying theoretical concepts to real-world applications. Students bridge the gap between theory and application by testing mechanical systems through experiments involving Applied Mechanics (AM) and Strength of Materials (SM)",[200]),f=a("./asset/images/2faf76535355f39d1270.png","PRODUCTION ENGINEERING","Production ELA delves into the practicalities of manufacturing. Students explore efficient production techniques through experiments in areas like machining, welding, casting, forming, and bench-fitting, developing a strong foundation for future industrial success",[200]);h.appendChild(g),h.appendChild(C),h.appendChild(E),h.appendChild(f),m.appendChild(u),m.appendChild(h),r.appendChild(m);const v=document.createElement("section");v.id="service";const b=document.createElement("h3");b.textContent="Services We Offer";const y=document.createElement("div");y.id="offers";const x=d("Grade-A Reports","Stop wasting time on information overload. Elaborate equips you with the essential resources and expert tips to craft concise, impactful reports that showcase your understanding. Plus, with our seamless PDF download feature, you can effortlessly save your reports for future reference or easy sharing with instructors.","Learn more");x.classList.add("serve");const L=d("Gain insightful knowledge","Don't just memorize, truly understand. Elaborate equips you with interactive learning tools and expert insights, transforming passive data into a rich understanding of engineering concepts. This deeper knowledge empowers you to excel in your exams and future endeavors.","Learn more");L.classList.add("serve"),x.id="middle";const w=d("Lab Mastery Made Easy","Elaborate sheds light on even the most complex experiments, transforming you from bewildered beginner to confident expert. This newfound understanding empowers you to tackle your ELAs with a winning strategy.","Learn more");w.classList.add("serve"),y.appendChild(L),y.appendChild(x),y.appendChild(w);const S=document.createElement("div");S.textContent="GET STARTED",S.id="serveAction",v.appendChild(b),v.appendChild(y),v.appendChild(S),r.appendChild(v);const A=document.createElement("section");A.id="aboutSection";const T=document.createElement("div");T.id="whyUs";const N=document.createElement("img");N.src="./asset/images/5f6e43892875c978630f.png";const I=document.createElement("h2");I.textContent="WHY US?",T.appendChild(N),T.appendChild(I);const k=document.createElement("div");k.id="about";const G=document.createElement("p");G.textContent='"We understand the struggle.\n Juggling complex engineering\n concepts, conducting intricate\n experiments, and then facing\n the daunting task of writing a\n clear and concise lab report\n can leave even the brightest\n student feeling overwhelmed.\n That\'s where we come in."',k.appendChild(G),A.appendChild(T),A.appendChild(k),r.appendChild(A);const D=document.createElement("section");D.id="contact";const q=document.createElement("h2");q.textContent="CONTACT US";const M=document.createElement("form"),B=document.createElement("input");B.type="text",B.placeholder="Name",B.id="userName",B.classList.toggle("input");const P=document.createElement("input");P.type="email",P.placeholder="Email",P.id="userEmail",P.classList.toggle("input");const R=document.createElement("input");R.placeholder="Phone Number",R.type="number",R.id="userPhone",R.classList.toggle("input");const U=document.createElement("textarea");U.placeholder="Enter Message",U.id="userMessage",R.classList.toggle("input");const O=document.createElement("input");O.type="submit",O.textContent="SUBMIT",O.id="userSubmit",M.appendChild(B),M.appendChild(P),M.appendChild(R),M.appendChild(U),M.appendChild(O),D.appendChild(q),D.appendChild(M),r.appendChild(D),l.appendChild(r),(()=>{let e=0;const t=()=>{let n=document.getElementsByClassName("heroSlide");for(let e=0;e<n.length;e++)n[e].style.display="none";e++,e>n.length&&(e=1),n[e-1].style.display="grid",setTimeout(t,5e3)};t()})(),((e,a)=>{const d=document.createElement("footer"),i=document.createElement("section"),c=t("./asset/images/89c7f3e4da4391052d31.png",""),s=n(a);s.id="footerNav",i.appendChild(c),i.appendChild(s),i.id="leftFoot",d.appendChild(i);const o=document.createElement("section");o.id="rightFoot";const l=document.createElement("p");l.textContent="Get our latest innovative news";const r=document.createElement("div");r.id="subscribe";const p=document.createElement("input");p.type="email",p.placeholder="Email Address",p.id="subEmail";const m=document.createElement("div");m.textContent="Subscribe",m.id="subButton",r.appendChild(p),r.appendChild(m);const u=document.createElement("div");u.innerHTML=`&#169; Copyright <span>${(new Date).getFullYear()}</span>`;const h=document.createElement("p");h.innerHTML="All rights reserved. A <span>sabi</span>Devs initiative",o.appendChild(l),o.appendChild(r),o.appendChild(u),o.appendChild(h),d.appendChild(o),e.appendChild(d)})(l,[c,s,o]),(e=>{const t=document.createElement("div"),n=document.createElement("div");n.classList.add("aiDiv"),n.classList.add("popUp"),n.addEventListener("click",(()=>{document.querySelector("#chatGPT").style.display="block",document.querySelector("#geminiAI").style.display="none"}));const a=document.createElement("img");a.src="./asset/images/341f0bd1a4f93bae12e2.png",n.appendChild(a);const d=document.createElement("div");d.classList.add("aiDiv"),d.addEventListener("click",(()=>{n.classList.toggle("active"),c.classList.toggle("active")}));const i=document.createElement("img");i.src="./asset/images/0bda107bba626fb52b21.png",d.appendChild(i);const c=document.createElement("div");c.classList.add("aiDiv"),c.classList.add("popUp"),c.addEventListener("click",(()=>{document.querySelector("#chatGPT").style.display="none",document.querySelector("#geminiAI").style.display="block"}));const s=document.createElement("img");s.src="./asset/images/05509233feb57da9851f.png",c.appendChild(s),t.id="ai",t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t)})(l),(e=>{const t=i("https://bot.orimon.ai/?tenantId=5b8a360c-710a-44f2-87bc-5f91fc211911&fullScreenBot=true","geminiAI","gemini");e.appendChild(t)})(l),(e=>{const t=i("https://www.chatbase.co/chatbot-iframe/MAsS7vd8yhlz4-rkhASBL","chatGPT","chatgpt");e.appendChild(t)})(l)}},e=>{e(e.s=807)}]);
//# sourceMappingURL=index.js.map