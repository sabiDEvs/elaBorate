(()=>{"use strict";const e=(e,t)=>{const n=document.createElement("div"),a=document.createElement("a"),i=document.createElement("p");return i.textContent=t,a.appendChild(i),a.href=e,n.appendChild(a),n},t=(e,t="elaBorate")=>{const n=document.createElement("div"),a=document.createElement("img");a.src=e,n.appendChild(a);const i=document.createElement("h1");return i.textContent=t,n.appendChild(i),n},n=t=>{const n=document.createElement("nav"),a=e(t[0],"Home"),i=e(t[2],"About"),s=e(t[1],"Reports"),d=e("mailto:info.sabidevs@gmail.com","Contact Us");return n.appendChild(a),n.appendChild(i),n.appendChild(s),n.appendChild(d),n},a=(e,t,n,a,i,s,d)=>{const o=document.createElement("div");o.classList.add("card");const c=document.createElement("h5");c.classList.add("deptTitle"),c.textContent=t;const l=document.createElement("img");l.classList.add("deptImage"),l.src=e;const r=document.createElement("div");r.classList.add("details");const m=document.createElement("p");m.classList.add("deptDescription"),m.textContent=n;const p=document.createElement("p");p.classList.add("deptTime"),p.textContent=`Submission Deadline: ${a}`;const h=document.createElement("div");h.classList.add("levels"),i.forEach((e=>{const t=document.createElement("a");t.href=`./${d}.html`,t.textContent=`${e}L REPORT`,t.classList.add("levelLink"),h.appendChild(t)}));const u=document.createElement("p");return u.classList.add("tip"),u.textContent=` ELA Tips:  ${s}`,r.appendChild(m),r.appendChild(p),r.appendChild(u),r.appendChild(h),o.appendChild(c),o.appendChild(l),o.appendChild(r),o},i=document.createElement("div");function s(){i.style.display="none"}i.id="sectionModal";const d="../asset/images/8a754a85cf1f6b0dfbc9.png",o=document.querySelector('link[sizes="any"]'),c=document.querySelector('link[type="image/svg+xml"]');o.href=d,c.href=d;const l="../index.html",r="./report.html",m="../about/about.html",p=document.querySelector("body");((e,a)=>{const i=document.createElement("header"),s=t("../asset/images/89c558426b41fccd73cd.png");s.id="iconDiv";const d=n(a);d.classList.add("nav");const o=document.createElement("div");o.id="searchBox";const c=document.createElement("img");c.src="../asset/images/ecb34bb8fa4ecc3a4316.png";const l=document.createElement("input");l.type="text",l.id="searchInput",o.appendChild(l),o.appendChild(c),i.appendChild(s),i.appendChild(d),i.appendChild(o),(e=>{const t=document.createElement("div");t.classList.add("menu");let n=[];for(let e=0;e<3;e++)n[e]=document.createElement("div"),n[e].classList.add("bars"),t.appendChild(n[e]);t.addEventListener("click",(()=>{document.querySelector(".nav").classList.toggle("active"),"nav active"===document.querySelector(".nav").className?document.querySelector("header").style.marginBottom="20vh":document.querySelector("header").style.marginBottom="0"})),e.appendChild(t)})(i),e.appendChild(i)})(p,[l,r,m]);const h=document.createElement("div");h.id="wrapper",p.append(h),(e=>{const t=document.createElement("div");t.classList.add("modal_bg");const n=document.createElement("div");n.classList.add("modal_loader_bg");const a=document.createElement("div");a.classList.add("modal_loader"),n.appendChild(a);const d=document.createElement("div");d.classList.add("modal_content"),t.appendChild(d);const o=document.createElement("div");o.classList.add("modal_image");const c=document.createElement("img");c.classList.add("image_modal"),c.src="../asset/images/588c0db71967388ac52a.png",o.appendChild(c),d.appendChild(o);const l=document.createElement("div");l.classList.add("modal_texts");const r=document.createElement("p");r.classList.add("modal_main_text"),r.textContent="Tailor Your Experience Today!",l.appendChild(r),d.appendChild(l);const m=document.createElement("div");m.classList.add("modal_form");const p=document.createElement("form");p.classList.add("formitself");const h=document.createElement("select");document.createElement("label").textContent="Choose Your Level",h.name="Level";const u=document.createElement("div");u.classList.add("level_select_div"),u.appendChild(h),p.appendChild(u),["Select your Level","200Level","300Level","400Level"].forEach((e=>{const t=document.createElement("option");t.textContent=e,t.value=e,h.appendChild(t)}));const g=document.createElement("select");document.createElement("label").textContent="Select Department",g.name="Department";const E=document.createElement("div");E.classList.add("level_select_div"),E.appendChild(g),p.appendChild(E),["Select your Department","CPE","PRE","EEE","AGE","CVE","STE","PEE","MRE","MTE","IND","CHE","MEE"].forEach((e=>{const t=document.createElement("option");t.textContent=e,t.value=e,g.appendChild(t)}));const f=document.createElement("input");f.type="email",f.name="Email",f.required=!0;const v=f.value;f.placeholder="Enter Email",f.classList.add("formField"),p.id="emailForm";const b=document.createElement("button");b.type="submit",b.textContent="Submit",b.disabled=!0,b.classList.add("formSubmit"),f.addEventListener("input",(function(){const e=f.value.trim(),t=f.checkValidity();b.disabled=!t||""===e,t&&b.classList.add("enabled")})),p.appendChild(f),p.appendChild(b),p.addEventListener("submit",(e=>{e.preventDefault(),b.disabled=!0,n.style.display="flex";let t=new FormData(p);fetch("https://script.google.com/macros/s/AKfycbyBQAC94J4esheTEGTTmc7vD44Gl8TsxtptLOU7Xnsx87IIvUjVGiHlgtHDmExvj0BV8Q/exec",{method:"POST",body:t}).then((e=>{if(!e.ok)throw new Error("Network response was not ok.");s(),localStorage.setItem("Subscribed","true"),localStorage.setItem("User",`${v}`),b.disabled=!1})).catch((e=>{console.error("Error:",e),alert("Error! Please try again later."),b.disabled=!1}))})),m.appendChild(p),d.appendChild(m),d.appendChild(n);const C=document.createElement("div");C.classList.add("modal_safety");const y=document.createElement("p");y.textContent="Enter your email, select your level and department to unlock personalized features and receive exclusive newsletters.",y.classList.add("modal_safety_text"),C.appendChild(y),d.appendChild(C),i.appendChild(t),i.classList.add("modal"),i.classList.add("hidden"),e.appendChild(i)})(p);const u=document.createElement("div");u.id="section1",h.append(u);const g=document.createElement("h4");g.classList.add("mainText"),h.append(g),g.innerHTML="Browse Available";const E=document.createElement("h4");E.classList.add("mainText2"),h.append(E),E.innerHTML="Reports";const f=document.createElement("img");f.src="../asset/images/d495606c317c3752a89a.png",f.alt="reportimg";const v=a("../asset/images/319be09755f101e8ab7f.png","COMPUTER ENGINEERING","Beyond theoretical knowledge, the computer engineering laboratory is the cornerstone of practical learning in the field. This specialized space hums with activity, equipped with high-performance computers, specialized software, and electronic components. Here, students bridge the gap between theory and application, building circuits, programming microcontrollers, and testing hardware functionalities. Experiments in networking, digital logic design, and computer architecture solidify classroom concepts, fostering a deeper understanding of how computers operate at their core. The lab fosters collaboration, as students tackle projects together, troubleshooting challenges and refining their problem-solving skills. This hands-on environment empowers future computer engineers, shaping them into innovators who can design and build the technological advancements of tomorrow.","TO BE DECIDED( Usually 1 week after experiment)",[300,400],"Be there 5mins before the time, Ensure to understand the basic concept","cpe/cpe"),b=a("../asset/images/0320e70b1866ddf255f7.png","MECHANICAL ENGINEERING","Beyond the theoretical realm, the mechanical engineering laboratory hums with the whir of machinery and the clink of tools. This space is a playground for innovation, filled with lathes, mills, 3D printers, and testing equipment. Here, students transform abstract concepts into tangible realities. They design and build mechanisms, analyze material properties, and test the strength of structures. Experiments in thermodynamics, fluid mechanics, and robotics bridge the gap between theory and application, solidifying knowledge and fostering problem-solving skills. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future mechanical engineers, equipping them with the practical skills to build the machines and structures that shape our world","4pm same day",[200],"Be there 5mins before the time, Dress Appropriately","mee/mee"),C=a("../asset/images/e0dfe5db36a25c00d4dd.png","ELECTRICAL ENGINEERING","The electrical engineering lab is a vibrant hub where theory meets tangible results. This space hums with the energy of experiments, filled with oscilloscopes, power supplies, and intricate circuits. Here, students bridge the gap between theoretical concepts and practical applications. They analyze electrical phenomena, design circuits, and build electronic devices, testing their functionality in real-time. Experiments in electromagnetism, power systems, and control systems solidify classroom knowledge, fostering a deeper understanding of how electricity behaves and powers our world. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future electrical engineers, equipping them with the practical skills to design and build the technological advancements that power our lives.","10AM Next day",[200,300],"Be there 5mins before the time, Dress Appropriately, Listen attentively and ensure Active Participation","eee/eee"),y=a("../asset/images/a3336edbfca541f2bf0e.png","PRODUCTION ENGINEERING","The production engineering lab is a dynamic space where theory is transformed into optimized manufacturing processes. This hands-on environment hums with the activity of machinery and the methodical planning of production lines. Students experiment with various manufacturing techniques, including machining, welding, assembly, and quality control procedures. They analyze production data, optimize workflows, and apply lean manufacturing principles to achieve efficiency. Experiments in automation, robotics, and computer-aided manufacturing solidify classroom knowledge, fostering a deeper understanding of how products are created at scale. The lab fosters collaboration, as students work together on projects, simulating real-world production scenarios and refining their problem-solving skills. This hands-on environment empowers future production engineers, equipping them with the practical knowledge to design, implement, and optimize efficient manufacturing systems that drive productivity and innovation","TO BE DECIDED during Experiment",[200],"Dress Appropriately, ensure Active Participation","pre/pre");h.appendChild(v),h.appendChild(C),h.appendChild(b),h.appendChild(y),((e,a)=>{const i=document.createElement("footer"),s=document.createElement("section"),d=t("../asset/images/89c7f3e4da4391052d31.png",""),o=n(a);o.id="footerNav",s.appendChild(d),s.appendChild(o),s.id="leftFoot",i.appendChild(s);const c=document.createElement("section");c.id="rightFoot";const l=document.createElement("p");l.textContent="Get our latest innovative news";const r=document.createElement("div");r.id="subscribe";const m=document.createElement("input");m.type="email",m.placeholder="Email Address",m.id="subEmail";const p=document.createElement("div");p.textContent="Subscribe",p.id="subButton",r.appendChild(m),r.appendChild(p);const h=document.createElement("div");h.innerHTML=`&#169; Copyright <span>${(new Date).getFullYear()}</span>`;const u=document.createElement("p");u.innerHTML="All rights reserved. A <span>sabi</span>Devs initiative",c.appendChild(l),c.appendChild(r),c.appendChild(h),c.appendChild(u),i.appendChild(c),e.appendChild(i)})(p,[l,r,m]),window.onload=function(){localStorage.getItem("Subscribed")?s():setTimeout((()=>{i.style.display="block"}),12e5)}})();