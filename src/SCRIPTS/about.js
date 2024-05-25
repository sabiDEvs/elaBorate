import { renderHeader } from "./modules/header.js";
import { renderFooter } from "./modules/footer";

import missionImg from "../RESOURCES/images/mission.png";
import achieveImg from "../RESOURCES/images/achieve.png";
import navigateImg from "../RESOURCES/images/navigate.png";

import {
  createContent,
  createHeaderPrimary,
  createHeaderSecondary,
  createListText,
  lineBreak,
} from "./modules/aboutPage";

import "../CSS/about.css";
import "../CSS/style.css";

// Selecting body element
const body = document.querySelector("body");

//specify nav path
const hme = "../index.html";
const rpt = "../report/report.html";
const abt = "./about.html";

//call header function
renderHeader(body, [hme, rpt, abt]);

// Adding main element
const main = document.createElement("main");
body.appendChild(main);

//////////////////////////////////////////////////////////

// Welcome section
const welcomeHeader = `Welcome to elaBorate!`;

const welcomeText1 = `Salutations, Dear Reader! We're delighted
that you've decided to take this most stately decision in improving 
your understanding of ELA and writing properly coordinated reports. 
In this article, we're going to take you on a brief journey, 
elaborating on some key things
like our mission statement, and how you shall navigate this
platform. But first, we want you to ponder on something...`;

const welcomeText2 = `The co-founder of Rolls-Royce, Sir Henry Royce, left this world with his
popular maxim - “Strive for perfection in everything you do. Take
the best that exists and make it better. When it does not exist,
design it”. Do keep that quote in mind; it'll come in handy as you
go through this article.`;

const welcomeText3 = `You may have wondered, once or twice
probably, how you could better understand an experiment, how you
could save time especially in writing reports that are definitive
and are not filled with unimportant stuffs, or how you can write a
more presentable experiment report; highlighting the important parts
and composing a perfectly presentable report all together...
Probably, you may have wondered how you can have enough resources
readily available for every experiment in one place, so you don't
have to start browsing the four corners of the web. Well, worry no
more, as we hope to help you ease your burden.`;

// Adding section element
const sectionWelcome = document.createElement("section");
main.appendChild(sectionWelcome);

// Adding a div element
const containerWelcome = document.createElement("div");
containerWelcome.classList.add("container");
containerWelcome.classList.add("welcome");
sectionWelcome.appendChild(containerWelcome);

// Creating main header
createHeaderPrimary(containerWelcome, welcomeHeader);

createContent(containerWelcome, welcomeText1);
lineBreak(containerWelcome);
createContent(containerWelcome, welcomeText2);
lineBreak(containerWelcome);
createContent(containerWelcome, welcomeText3);

///////////////////////////////////////////////////////
// Mission section

const missionHeader = `Our Mission`;

const missionText = ` 
We'll start by outlining why elaBorate exists and what you can
expect from this learning platform. With elaBorate, we want to
help young engineers in training, properly understand all that is
going on in their various ELA experiments. Having gone through the system ourselves, 
we saw how difficult it was for a first year engineering student, 
just starting the Pre-UBITS, to smoothly transition to the rigorous 
and demanding second year ELA practical. 
There were times we wished we had a proper guide on 
how to go about the various ELA activities, 
especially in understanding the experiment to be performed 
and preparing the reports thereafter. Truth be told, it wasn't easy delving into the web, 
searching for good resources especially on theories and experiment procedures. 
This is why we've arranged all the resources you would need to elaborately 
perform all the ELA activities, in one place.
We believe that by doing so, you can experience minimal to no 
difficulty in going about your ELA activities, and of course, 
eventually ace the course with good grades.`;

const sectionMission = document.createElement("section");
sectionMission.classList.add("section-mission");
sectionMission.classList.add("container");
main.appendChild(sectionMission);

const containerMission = document.createElement("div");
containerMission.classList.add("container-mission");
sectionMission.appendChild(containerMission);

const divTextMission = document.createElement("div");
divTextMission.classList.add("div-text-mission");
containerMission.appendChild(divTextMission);
createHeaderSecondary(divTextMission, missionHeader);
createContent(divTextMission, missionText);

const divImgMission = document.createElement("div");
divImgMission.classList.add("div-img-mission");
containerMission.appendChild(divImgMission);

const imgMission = document.createElement("img");
divImgMission.appendChild(imgMission);
imgMission.src = missionImg;

////////////////////////////////////////////////////////
// Why allow us help you section section

const helpHeader = `Why allow us help you?`;

const helpText = `
Can you recall what we told you to ponder on when we welcomed you? 
If you reflected on the maxim with the same wavelength as us, 
you will find that Sir Henry Royce wanted perfection in all he did. 
This drive as we know it, yielded fruits as we are sure you have; 
one way or another, heard about the coveted Rolls-Royce automobile. 
We also want that for you! - Of course, I'm talking about perfection, 
not the Rolls-Royce :) - Anyways, having passed through the system ourselves, 
We believe you want to properly understand your different experiments, 
that you also want to ace all ELA courses - That my friend, is striving for perfection, 
and like Sir Royce, we shall take the best that exists and make it better!
`;

const sectionHelp = document.createElement("section");
sectionHelp.classList.add("section-help");
sectionHelp.classList.add("container");
main.appendChild(sectionHelp);

const containerHelp = document.createElement("div");
sectionHelp.appendChild(containerHelp);

createHeaderSecondary(containerHelp, helpHeader);
createContent(containerHelp, helpText);

/////////////////////////////////////////////////////////
// What we hope to achieve section

const achieveHeader = `What we hope to achieve`;

const achieveText = ` 
As a Valet tends to his Master even in the smallest of tasks, and a Maid; 
her Mistress, or as a noble steed journeys with its brave knight through battles unending, 
elaBorate is here to be your guide, helping you as you go through ELA.
In all honesty, what we hope to achieve is probably what you want to achieve as you go 
through your various ELA experiments. 
An “A” in all your ELA results? A seamlessly good ELA experience? 
A good idea and understanding of whatever experiment you may perform? 
A well written and elaborated report? Something that facilitates your inquisitiveness 
and point you in the right direction to gather the knowledge you seek? You could name a dozen, really. 
Whatever good thing you wish to achieve as you go about your ELA activities, is what we want for you.
`;

const sectionAchieve = document.createElement("section");
sectionAchieve.classList.add("section-achieve");
sectionAchieve.classList.add("container");
main.appendChild(sectionAchieve);

const containerAchieve = document.createElement("div");
containerAchieve.classList.add("container-achieve");
sectionAchieve.appendChild(containerAchieve);

const divImgAchieve = document.createElement("div");
divImgAchieve.classList.add("div-img-achieve");
containerAchieve.appendChild(divImgAchieve);

const imgAchieve = document.createElement("img");
divImgAchieve.appendChild(imgAchieve);
imgAchieve.src = achieveImg;

const divTextAchieve = document.createElement("div");
divTextAchieve.classList.add("div-text-achieve");
containerAchieve.appendChild(divTextAchieve);
createHeaderSecondary(divTextAchieve, achieveHeader);
createContent(divTextAchieve, achieveText);

//////////////////////////////////////////////////////////
// Navigating the platform section

const navigateHeader = `Navigating elaBorate`;

const navigateTextMain = `
Now that we have performed the conventional niceties by welcoming you, 
making clear our intentions and stating what we hope to achieve, 
we want to aid your experience when using this platform, 
by showing you how to navigate the various sections.
This platform is primarily divided into four sections - Mechanical, 
Production, Electrical, and Computer ELA section.
As you may already know, the Mechanical, Production and 
Electrical ELA Sections are for those in their second year, 
while the Computer ELA section is for Computer engineering students in their third year.
`;

const textArr = [
  [
    "Mechanical ELA Section",
    "Mechanical ELA focuses on applying theoretical concepts to real-world applications. Students bridge the gap between theory and application by testing mechanical systems through experiments involving Applied Mechanics (AM) and Strength of Materials (SM).",
  ],
  [
    "Production ELA Section",
    "Production ELA delves into the practicalities of manufacturing. Students explore efficient production techniques through experiments in areas like machining, welding, casting, forming, and bench-fitting, developing a strong foundation for future industrial success.",
  ],
  [
    "Electrical ELA Section",
    "Electrical ELA brings electrical principles to life. Students gain practical experience with circuits, electronics, power systems, and control systems through experiments involving real-world equipment like Transformers, oscilloscopes, and other electrical machines.",
  ],
  [
    "Computer ELA Section",
    "Computer ELA offers hands-on experience with hardware, software and basic engineering concepts, by solidifying theory through building circuits, programming microcontrollers, and exploring computer networks.",
  ],
];

const sectionNavigate = document.createElement("section");
sectionNavigate.classList.add("section-navigate");
sectionNavigate.classList.add("container");
main.appendChild(sectionNavigate);

const containerNavigate = document.createElement("div");
containerNavigate.classList.add("container-navigate");
sectionNavigate.appendChild(containerNavigate);

const divHeaderNavigate = document.createElement("div");
divHeaderNavigate.classList.add("div-header-navigate");
containerNavigate.appendChild(divHeaderNavigate);

createHeaderSecondary(divHeaderNavigate, navigateHeader);
createContent(containerNavigate, navigateTextMain);

createListText(containerNavigate, textArr);

////////////////////////////////////////////////////////
// CTA section

const ctaHeader = `Let's get Started!`;

const ctaText = `
Alright! That's enough talk, don't you think? Hopefully you're
raring to go see what we've got in store for you. Without further
ado, let's get you started on your Journey.`;

const sectionCTA = document.createElement("section");
sectionCTA.classList.add("section-cta");
sectionCTA.classList.add("container");
main.appendChild(sectionCTA);

const containerCTA = document.createElement("div");
containerCTA.classList.add("container-cta");
sectionCTA.appendChild(containerCTA);

const containerCtaHeader = document.createElement("div");
containerCtaHeader.classList.add("container-cta-header");
containerCTA.appendChild(containerCtaHeader);

const containerCtaText = document.createElement("div");
containerCtaText.classList.add("container-cta-text");
containerCTA.appendChild(containerCtaText);

createHeaderSecondary(containerCtaHeader, ctaHeader);
createContent(containerCtaText, ctaText);

const containerCover = document.createElement("div");
containerCover.classList.add("container-cover");
containerCTA.appendChild(containerCover);

const containerCtaBtn = document.createElement("div");
containerCtaBtn.classList.add("container-cta-btn");
containerCover.appendChild(containerCtaBtn);

const link = document.createElement("a");
link.href = "../report/report.html";
link.classList.add("btn-view-reports");
link.textContent = "VIEW REPORTS";
containerCtaBtn.appendChild(link);

//display footer
renderFooter(body, [hme, rpt, abt]);
