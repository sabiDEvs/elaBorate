"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["about/about"],{

/***/ "./src/CSS/about.css":
/*!***************************!*\
  !*** ./src/CSS/about.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/SCRIPTS/about.js":
/*!******************************!*\
  !*** ./src/SCRIPTS/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header.js */ "./src/SCRIPTS/modules/header.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/footer */ "./src/SCRIPTS/modules/footer.js");
/* harmony import */ var _RESOURCES_images_mission_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RESOURCES/images/mission.png */ "./src/RESOURCES/images/mission.png");
/* harmony import */ var _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RESOURCES/images/achieve.png */ "./src/RESOURCES/images/achieve.png");
/* harmony import */ var _RESOURCES_images_navigate_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RESOURCES/images/navigate.png */ "./src/RESOURCES/images/navigate.png");
/* harmony import */ var _modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/aboutPage */ "./src/SCRIPTS/modules/aboutPage.js");
/* harmony import */ var _CSS_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CSS/about.css */ "./src/CSS/about.css");
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CSS/style.css */ "./src/CSS/style.css");












// Selecting body element
const body = document.querySelector("body");

//specify nav path
const hme = "../index.html";
const rpt = "../report/report.html";
const abt = "./about.html";

//call header function
(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_0__.renderHeader)(body, [hme, rpt, abt]);

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
containerWelcome.classList.add("container-welcome");
containerWelcome.classList.add("welcome");
sectionWelcome.appendChild(containerWelcome);

// Creating main header
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createHeaderPrimary)(containerWelcome, welcomeHeader);

(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createContent)(containerWelcome, welcomeText1);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.lineBreak)(containerWelcome);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createContent)(containerWelcome, welcomeText2);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.lineBreak)(containerWelcome);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createContent)(containerWelcome, welcomeText3);

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
sectionMission.classList.add("container-welcome");
main.appendChild(sectionMission);

const containerMission = document.createElement("div");
containerMission.classList.add("container-mission");
sectionMission.appendChild(containerMission);

const divTextMission = document.createElement("div");
divTextMission.classList.add("div-text-mission");
containerMission.appendChild(divTextMission);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createHeaderSecondary)(divTextMission, missionHeader);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createContent)(divTextMission, missionText);

const divImgMission = document.createElement("div");
divImgMission.classList.add("div-img-mission");
containerMission.appendChild(divImgMission);

const imgMission = document.createElement("img");
divImgMission.appendChild(imgMission);
imgMission.src = _RESOURCES_images_mission_png__WEBPACK_IMPORTED_MODULE_2__;

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
sectionHelp.classList.add("container-welcome");
main.appendChild(sectionHelp);

const containerHelp = document.createElement("div");
sectionHelp.appendChild(containerHelp);

(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createHeaderSecondary)(containerHelp, helpHeader);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createContent)(containerHelp, helpText);

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
sectionAchieve.classList.add("container-welcome");
main.appendChild(sectionAchieve);

const containerAchieve = document.createElement("div");
containerAchieve.classList.add("container-achieve");
sectionAchieve.appendChild(containerAchieve);

const divImgAchieve = document.createElement("div");
divImgAchieve.classList.add("div-img-achieve");
containerAchieve.appendChild(divImgAchieve);

const imgAchieve = document.createElement("img");
divImgAchieve.appendChild(imgAchieve);
imgAchieve.src = _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_3__;

const divTextAchieve = document.createElement("div");
divTextAchieve.classList.add("div-text-achieve");
containerAchieve.appendChild(divTextAchieve);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createHeaderSecondary)(divTextAchieve, achieveHeader);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createContent)(divTextAchieve, achieveText);

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
sectionNavigate.classList.add("container-welcome");
main.appendChild(sectionNavigate);

const containerNavigate = document.createElement("div");
containerNavigate.classList.add("container-navigate");
sectionNavigate.appendChild(containerNavigate);

const divHeaderNavigate = document.createElement("div");
divHeaderNavigate.classList.add("div-header-navigate");
containerNavigate.appendChild(divHeaderNavigate);

(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createHeaderSecondary)(divHeaderNavigate, navigateHeader);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createContent)(containerNavigate, navigateTextMain);

(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createListText)(containerNavigate, textArr);

////////////////////////////////////////////////////////
// CTA section

const ctaHeader = `Let's get Started!`;

const ctaText = `
Alright! That's enough talk, don't you think? Hopefully you're
raring to go see what we've got in store for you. Without further
ado, let's get you started on your Journey.`;

const sectionCTA = document.createElement("section");
sectionCTA.classList.add("section-cta");
sectionCTA.classList.add("container-welcome");
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

(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createHeaderSecondary)(containerCtaHeader, ctaHeader);
(0,_modules_aboutPage__WEBPACK_IMPORTED_MODULE_5__.createContent)(containerCtaText, ctaText);

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
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_1__.renderFooter)(body, [hme, rpt, abt]);


/***/ }),

/***/ "./src/SCRIPTS/modules/aboutPage.js":
/*!******************************************!*\
  !*** ./src/SCRIPTS/modules/aboutPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContent: () => (/* binding */ createContent),
/* harmony export */   createHeaderPrimary: () => (/* binding */ createHeaderPrimary),
/* harmony export */   createHeaderSecondary: () => (/* binding */ createHeaderSecondary),
/* harmony export */   createListText: () => (/* binding */ createListText),
/* harmony export */   lineBreak: () => (/* binding */ lineBreak)
/* harmony export */ });
const createHeaderPrimary = function (element, text) {
  const header = document.createElement("h2");
  header.classList.add("main-header");
  element.appendChild(header);

  header.textContent = text;
  return header;
};

const createHeaderSecondary = function (element, text) {
  const header = document.createElement("h2");
  element.appendChild(header);

  header.textContent = text;
  return header;
};

const createContent = function (element, content) {
  const paragraph = document.createElement("p");
  element.appendChild(paragraph);

  paragraph.textContent = content;
  return paragraph;
};

const lineBreak = function (element) {
  const enterNextLine = document.createElement("br");
  element.appendChild(enterNextLine);
};

const createListText = function (element, array) {
  const unorderedList = document.createElement("ul");
  element.appendChild(unorderedList);

  array.forEach(function (arr) {
    const firstItem = document.createElement("li");
    firstItem.classList.add("first-list-item");
    firstItem.textContent = arr[0];
    unorderedList.appendChild(firstItem);
    const secondItem = document.createElement("li");
    secondItem.classList.add("second-list-item");
    firstItem.appendChild(secondItem);
    secondItem.textContent = arr[1];
    return secondItem;
  });
};


/***/ }),

/***/ "./src/RESOURCES/images/achieve.png":
/*!******************************************!*\
  !*** ./src/RESOURCES/images/achieve.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/9f85bcb065b488f77419.png";

/***/ }),

/***/ "./src/RESOURCES/images/mission.png":
/*!******************************************!*\
  !*** ./src/RESOURCES/images/mission.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/ee9f073d24a99867a038.png";

/***/ }),

/***/ "./src/RESOURCES/images/navigate.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/navigate.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/dce8420c37e53fbe5a17.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/about.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7QUFDSDs7QUFFUztBQUNBO0FBQ0U7O0FBUTlCOztBQUVIO0FBQ0E7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFQUFtQjs7QUFFbkIsaUVBQWE7QUFDYiw2REFBUztBQUNULGlFQUFhO0FBQ2IsNkRBQVM7QUFDVCxpRUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUVBQXFCO0FBQ3JCLGlFQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFVOztBQUUzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlFQUFxQjtBQUNyQixpRUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQVU7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLHlFQUFxQjtBQUNyQixpRUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXFCO0FBQ3JCLGlFQUFhOztBQUViLGtFQUFjOztBQUVkO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXFCO0FBQ3JCLGlFQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVNMO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL0NTUy9hYm91dC5jc3M/NjAwOSIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3N0eWxlLmNzcz83NjdjIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL2Fib3V0LmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvYWJvdXRQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gXCIuL21vZHVsZXMvaGVhZGVyLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2Zvb3RlclwiO1xuXG5pbXBvcnQgbWlzc2lvbkltZyBmcm9tIFwiLi4vUkVTT1VSQ0VTL2ltYWdlcy9taXNzaW9uLnBuZ1wiO1xuaW1wb3J0IGFjaGlldmVJbWcgZnJvbSBcIi4uL1JFU09VUkNFUy9pbWFnZXMvYWNoaWV2ZS5wbmdcIjtcbmltcG9ydCBuYXZpZ2F0ZUltZyBmcm9tIFwiLi4vUkVTT1VSQ0VTL2ltYWdlcy9uYXZpZ2F0ZS5wbmdcIjtcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ29udGVudCxcbiAgY3JlYXRlSGVhZGVyUHJpbWFyeSxcbiAgY3JlYXRlSGVhZGVyU2Vjb25kYXJ5LFxuICBjcmVhdGVMaXN0VGV4dCxcbiAgbGluZUJyZWFrLFxufSBmcm9tIFwiLi9tb2R1bGVzL2Fib3V0UGFnZVwiO1xuXG5pbXBvcnQgXCIuLi9DU1MvYWJvdXQuY3NzXCI7XG5pbXBvcnQgXCIuLi9DU1Mvc3R5bGUuY3NzXCI7XG5cbi8vIFNlbGVjdGluZyBib2R5IGVsZW1lbnRcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuLy9zcGVjaWZ5IG5hdiBwYXRoXG5jb25zdCBobWUgPSBcIi4uL2luZGV4Lmh0bWxcIjtcbmNvbnN0IHJwdCA9IFwiLi4vcmVwb3J0L3JlcG9ydC5odG1sXCI7XG5jb25zdCBhYnQgPSBcIi4vYWJvdXQuaHRtbFwiO1xuXG4vL2NhbGwgaGVhZGVyIGZ1bmN0aW9uXG5yZW5kZXJIZWFkZXIoYm9keSwgW2htZSwgcnB0LCBhYnRdKTtcblxuLy8gQWRkaW5nIG1haW4gZWxlbWVudFxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBXZWxjb21lIHNlY3Rpb25cbmNvbnN0IHdlbGNvbWVIZWFkZXIgPSBgV2VsY29tZSB0byBlbGFCb3JhdGUhYDtcblxuY29uc3Qgd2VsY29tZVRleHQxID0gYFNhbHV0YXRpb25zLCBEZWFyIFJlYWRlciEgV2UncmUgZGVsaWdodGVkXG50aGF0IHlvdSd2ZSBkZWNpZGVkIHRvIHRha2UgdGhpcyBtb3N0IHN0YXRlbHkgZGVjaXNpb24gaW4gaW1wcm92aW5nIFxueW91ciB1bmRlcnN0YW5kaW5nIG9mIEVMQSBhbmQgd3JpdGluZyBwcm9wZXJseSBjb29yZGluYXRlZCByZXBvcnRzLiBcbkluIHRoaXMgYXJ0aWNsZSwgd2UncmUgZ29pbmcgdG8gdGFrZSB5b3Ugb24gYSBicmllZiBqb3VybmV5LCBcbmVsYWJvcmF0aW5nIG9uIHNvbWUga2V5IHRoaW5nc1xubGlrZSBvdXIgbWlzc2lvbiBzdGF0ZW1lbnQsIGFuZCBob3cgeW91IHNoYWxsIG5hdmlnYXRlIHRoaXNcbnBsYXRmb3JtLiBCdXQgZmlyc3QsIHdlIHdhbnQgeW91IHRvIHBvbmRlciBvbiBzb21ldGhpbmcuLi5gO1xuXG5jb25zdCB3ZWxjb21lVGV4dDIgPSBgVGhlIGNvLWZvdW5kZXIgb2YgUm9sbHMtUm95Y2UsIFNpciBIZW5yeSBSb3ljZSwgbGVmdCB0aGlzIHdvcmxkIHdpdGggaGlzXG5wb3B1bGFyIG1heGltIC0g4oCcU3RyaXZlIGZvciBwZXJmZWN0aW9uIGluIGV2ZXJ5dGhpbmcgeW91IGRvLiBUYWtlXG50aGUgYmVzdCB0aGF0IGV4aXN0cyBhbmQgbWFrZSBpdCBiZXR0ZXIuIFdoZW4gaXQgZG9lcyBub3QgZXhpc3QsXG5kZXNpZ24gaXTigJ0uIERvIGtlZXAgdGhhdCBxdW90ZSBpbiBtaW5kOyBpdCdsbCBjb21lIGluIGhhbmR5IGFzIHlvdVxuZ28gdGhyb3VnaCB0aGlzIGFydGljbGUuYDtcblxuY29uc3Qgd2VsY29tZVRleHQzID0gYFlvdSBtYXkgaGF2ZSB3b25kZXJlZCwgb25jZSBvciB0d2ljZVxucHJvYmFibHksIGhvdyB5b3UgY291bGQgYmV0dGVyIHVuZGVyc3RhbmQgYW4gZXhwZXJpbWVudCwgaG93IHlvdVxuY291bGQgc2F2ZSB0aW1lIGVzcGVjaWFsbHkgaW4gd3JpdGluZyByZXBvcnRzIHRoYXQgYXJlIGRlZmluaXRpdmVcbmFuZCBhcmUgbm90IGZpbGxlZCB3aXRoIHVuaW1wb3J0YW50IHN0dWZmcywgb3IgaG93IHlvdSBjYW4gd3JpdGUgYVxubW9yZSBwcmVzZW50YWJsZSBleHBlcmltZW50IHJlcG9ydDsgaGlnaGxpZ2h0aW5nIHRoZSBpbXBvcnRhbnQgcGFydHNcbmFuZCBjb21wb3NpbmcgYSBwZXJmZWN0bHkgcHJlc2VudGFibGUgcmVwb3J0IGFsbCB0b2dldGhlci4uLlxuUHJvYmFibHksIHlvdSBtYXkgaGF2ZSB3b25kZXJlZCBob3cgeW91IGNhbiBoYXZlIGVub3VnaCByZXNvdXJjZXNcbnJlYWRpbHkgYXZhaWxhYmxlIGZvciBldmVyeSBleHBlcmltZW50IGluIG9uZSBwbGFjZSwgc28geW91IGRvbid0XG5oYXZlIHRvIHN0YXJ0IGJyb3dzaW5nIHRoZSBmb3VyIGNvcm5lcnMgb2YgdGhlIHdlYi4gV2VsbCwgd29ycnkgbm9cbm1vcmUsIGFzIHdlIGhvcGUgdG8gaGVscCB5b3UgZWFzZSB5b3VyIGJ1cmRlbi5gO1xuXG4vLyBBZGRpbmcgc2VjdGlvbiBlbGVtZW50XG5jb25zdCBzZWN0aW9uV2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xubWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uV2VsY29tZSk7XG5cbi8vIEFkZGluZyBhIGRpdiBlbGVtZW50XG5jb25zdCBjb250YWluZXJXZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lcldlbGNvbWUuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci13ZWxjb21lXCIpO1xuY29udGFpbmVyV2VsY29tZS5jbGFzc0xpc3QuYWRkKFwid2VsY29tZVwiKTtcbnNlY3Rpb25XZWxjb21lLmFwcGVuZENoaWxkKGNvbnRhaW5lcldlbGNvbWUpO1xuXG4vLyBDcmVhdGluZyBtYWluIGhlYWRlclxuY3JlYXRlSGVhZGVyUHJpbWFyeShjb250YWluZXJXZWxjb21lLCB3ZWxjb21lSGVhZGVyKTtcblxuY3JlYXRlQ29udGVudChjb250YWluZXJXZWxjb21lLCB3ZWxjb21lVGV4dDEpO1xubGluZUJyZWFrKGNvbnRhaW5lcldlbGNvbWUpO1xuY3JlYXRlQ29udGVudChjb250YWluZXJXZWxjb21lLCB3ZWxjb21lVGV4dDIpO1xubGluZUJyZWFrKGNvbnRhaW5lcldlbGNvbWUpO1xuY3JlYXRlQ29udGVudChjb250YWluZXJXZWxjb21lLCB3ZWxjb21lVGV4dDMpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNaXNzaW9uIHNlY3Rpb25cblxuY29uc3QgbWlzc2lvbkhlYWRlciA9IGBPdXIgTWlzc2lvbmA7XG5cbmNvbnN0IG1pc3Npb25UZXh0ID0gYCBcbldlJ2xsIHN0YXJ0IGJ5IG91dGxpbmluZyB3aHkgZWxhQm9yYXRlIGV4aXN0cyBhbmQgd2hhdCB5b3UgY2FuXG5leHBlY3QgZnJvbSB0aGlzIGxlYXJuaW5nIHBsYXRmb3JtLiBXaXRoIGVsYUJvcmF0ZSwgd2Ugd2FudCB0b1xuaGVscCB5b3VuZyBlbmdpbmVlcnMgaW4gdHJhaW5pbmcsIHByb3Blcmx5IHVuZGVyc3RhbmQgYWxsIHRoYXQgaXNcbmdvaW5nIG9uIGluIHRoZWlyIHZhcmlvdXMgRUxBIGV4cGVyaW1lbnRzLiBIYXZpbmcgZ29uZSB0aHJvdWdoIHRoZSBzeXN0ZW0gb3Vyc2VsdmVzLCBcbndlIHNhdyBob3cgZGlmZmljdWx0IGl0IHdhcyBmb3IgYSBmaXJzdCB5ZWFyIGVuZ2luZWVyaW5nIHN0dWRlbnQsIFxuanVzdCBzdGFydGluZyB0aGUgUHJlLVVCSVRTLCB0byBzbW9vdGhseSB0cmFuc2l0aW9uIHRvIHRoZSByaWdvcm91cyBcbmFuZCBkZW1hbmRpbmcgc2Vjb25kIHllYXIgRUxBIHByYWN0aWNhbC4gXG5UaGVyZSB3ZXJlIHRpbWVzIHdlIHdpc2hlZCB3ZSBoYWQgYSBwcm9wZXIgZ3VpZGUgb24gXG5ob3cgdG8gZ28gYWJvdXQgdGhlIHZhcmlvdXMgRUxBIGFjdGl2aXRpZXMsIFxuZXNwZWNpYWxseSBpbiB1bmRlcnN0YW5kaW5nIHRoZSBleHBlcmltZW50IHRvIGJlIHBlcmZvcm1lZCBcbmFuZCBwcmVwYXJpbmcgdGhlIHJlcG9ydHMgdGhlcmVhZnRlci4gVHJ1dGggYmUgdG9sZCwgaXQgd2Fzbid0IGVhc3kgZGVsdmluZyBpbnRvIHRoZSB3ZWIsIFxuc2VhcmNoaW5nIGZvciBnb29kIHJlc291cmNlcyBlc3BlY2lhbGx5IG9uIHRoZW9yaWVzIGFuZCBleHBlcmltZW50IHByb2NlZHVyZXMuIFxuVGhpcyBpcyB3aHkgd2UndmUgYXJyYW5nZWQgYWxsIHRoZSByZXNvdXJjZXMgeW91IHdvdWxkIG5lZWQgdG8gZWxhYm9yYXRlbHkgXG5wZXJmb3JtIGFsbCB0aGUgRUxBIGFjdGl2aXRpZXMsIGluIG9uZSBwbGFjZS5cbldlIGJlbGlldmUgdGhhdCBieSBkb2luZyBzbywgeW91IGNhbiBleHBlcmllbmNlIG1pbmltYWwgdG8gbm8gXG5kaWZmaWN1bHR5IGluIGdvaW5nIGFib3V0IHlvdXIgRUxBIGFjdGl2aXRpZXMsIGFuZCBvZiBjb3Vyc2UsIFxuZXZlbnR1YWxseSBhY2UgdGhlIGNvdXJzZSB3aXRoIGdvb2QgZ3JhZGVzLmA7XG5cbmNvbnN0IHNlY3Rpb25NaXNzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5zZWN0aW9uTWlzc2lvbi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1taXNzaW9uXCIpO1xuc2VjdGlvbk1pc3Npb24uY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci13ZWxjb21lXCIpO1xubWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uTWlzc2lvbik7XG5cbmNvbnN0IGNvbnRhaW5lck1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyTWlzc2lvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLW1pc3Npb25cIik7XG5zZWN0aW9uTWlzc2lvbi5hcHBlbmRDaGlsZChjb250YWluZXJNaXNzaW9uKTtcblxuY29uc3QgZGl2VGV4dE1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGl2VGV4dE1pc3Npb24uY2xhc3NMaXN0LmFkZChcImRpdi10ZXh0LW1pc3Npb25cIik7XG5jb250YWluZXJNaXNzaW9uLmFwcGVuZENoaWxkKGRpdlRleHRNaXNzaW9uKTtcbmNyZWF0ZUhlYWRlclNlY29uZGFyeShkaXZUZXh0TWlzc2lvbiwgbWlzc2lvbkhlYWRlcik7XG5jcmVhdGVDb250ZW50KGRpdlRleHRNaXNzaW9uLCBtaXNzaW9uVGV4dCk7XG5cbmNvbnN0IGRpdkltZ01pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGl2SW1nTWlzc2lvbi5jbGFzc0xpc3QuYWRkKFwiZGl2LWltZy1taXNzaW9uXCIpO1xuY29udGFpbmVyTWlzc2lvbi5hcHBlbmRDaGlsZChkaXZJbWdNaXNzaW9uKTtcblxuY29uc3QgaW1nTWlzc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5kaXZJbWdNaXNzaW9uLmFwcGVuZENoaWxkKGltZ01pc3Npb24pO1xuaW1nTWlzc2lvbi5zcmMgPSBtaXNzaW9uSW1nO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV2h5IGFsbG93IHVzIGhlbHAgeW91IHNlY3Rpb24gc2VjdGlvblxuXG5jb25zdCBoZWxwSGVhZGVyID0gYFdoeSBhbGxvdyB1cyBoZWxwIHlvdT9gO1xuXG5jb25zdCBoZWxwVGV4dCA9IGBcbkNhbiB5b3UgcmVjYWxsIHdoYXQgd2UgdG9sZCB5b3UgdG8gcG9uZGVyIG9uIHdoZW4gd2Ugd2VsY29tZWQgeW91PyBcbklmIHlvdSByZWZsZWN0ZWQgb24gdGhlIG1heGltIHdpdGggdGhlIHNhbWUgd2F2ZWxlbmd0aCBhcyB1cywgXG55b3Ugd2lsbCBmaW5kIHRoYXQgU2lyIEhlbnJ5IFJveWNlIHdhbnRlZCBwZXJmZWN0aW9uIGluIGFsbCBoZSBkaWQuIFxuVGhpcyBkcml2ZSBhcyB3ZSBrbm93IGl0LCB5aWVsZGVkIGZydWl0cyBhcyB3ZSBhcmUgc3VyZSB5b3UgaGF2ZTsgXG5vbmUgd2F5IG9yIGFub3RoZXIsIGhlYXJkIGFib3V0IHRoZSBjb3ZldGVkIFJvbGxzLVJveWNlIGF1dG9tb2JpbGUuIFxuV2UgYWxzbyB3YW50IHRoYXQgZm9yIHlvdSEgLSBPZiBjb3Vyc2UsIEknbSB0YWxraW5nIGFib3V0IHBlcmZlY3Rpb24sIFxubm90IHRoZSBSb2xscy1Sb3ljZSA6KSAtIEFueXdheXMsIGhhdmluZyBwYXNzZWQgdGhyb3VnaCB0aGUgc3lzdGVtIG91cnNlbHZlcywgXG5XZSBiZWxpZXZlIHlvdSB3YW50IHRvIHByb3Blcmx5IHVuZGVyc3RhbmQgeW91ciBkaWZmZXJlbnQgZXhwZXJpbWVudHMsIFxudGhhdCB5b3UgYWxzbyB3YW50IHRvIGFjZSBhbGwgRUxBIGNvdXJzZXMgLSBUaGF0IG15IGZyaWVuZCwgaXMgc3RyaXZpbmcgZm9yIHBlcmZlY3Rpb24sIFxuYW5kIGxpa2UgU2lyIFJveWNlLCB3ZSBzaGFsbCB0YWtlIHRoZSBiZXN0IHRoYXQgZXhpc3RzIGFuZCBtYWtlIGl0IGJldHRlciFcbmA7XG5cbmNvbnN0IHNlY3Rpb25IZWxwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5zZWN0aW9uSGVscC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1oZWxwXCIpO1xuc2VjdGlvbkhlbHAuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci13ZWxjb21lXCIpO1xubWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVscCk7XG5cbmNvbnN0IGNvbnRhaW5lckhlbHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuc2VjdGlvbkhlbHAuYXBwZW5kQ2hpbGQoY29udGFpbmVySGVscCk7XG5cbmNyZWF0ZUhlYWRlclNlY29uZGFyeShjb250YWluZXJIZWxwLCBoZWxwSGVhZGVyKTtcbmNyZWF0ZUNvbnRlbnQoY29udGFpbmVySGVscCwgaGVscFRleHQpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdoYXQgd2UgaG9wZSB0byBhY2hpZXZlIHNlY3Rpb25cblxuY29uc3QgYWNoaWV2ZUhlYWRlciA9IGBXaGF0IHdlIGhvcGUgdG8gYWNoaWV2ZWA7XG5cbmNvbnN0IGFjaGlldmVUZXh0ID0gYCBcbkFzIGEgVmFsZXQgdGVuZHMgdG8gaGlzIE1hc3RlciBldmVuIGluIHRoZSBzbWFsbGVzdCBvZiB0YXNrcywgYW5kIGEgTWFpZDsgXG5oZXIgTWlzdHJlc3MsIG9yIGFzIGEgbm9ibGUgc3RlZWQgam91cm5leXMgd2l0aCBpdHMgYnJhdmUga25pZ2h0IHRocm91Z2ggYmF0dGxlcyB1bmVuZGluZywgXG5lbGFCb3JhdGUgaXMgaGVyZSB0byBiZSB5b3VyIGd1aWRlLCBoZWxwaW5nIHlvdSBhcyB5b3UgZ28gdGhyb3VnaCBFTEEuXG5JbiBhbGwgaG9uZXN0eSwgd2hhdCB3ZSBob3BlIHRvIGFjaGlldmUgaXMgcHJvYmFibHkgd2hhdCB5b3Ugd2FudCB0byBhY2hpZXZlIGFzIHlvdSBnbyBcbnRocm91Z2ggeW91ciB2YXJpb3VzIEVMQSBleHBlcmltZW50cy4gXG5BbiDigJxB4oCdIGluIGFsbCB5b3VyIEVMQSByZXN1bHRzPyBBIHNlYW1sZXNzbHkgZ29vZCBFTEEgZXhwZXJpZW5jZT8gXG5BIGdvb2QgaWRlYSBhbmQgdW5kZXJzdGFuZGluZyBvZiB3aGF0ZXZlciBleHBlcmltZW50IHlvdSBtYXkgcGVyZm9ybT8gXG5BIHdlbGwgd3JpdHRlbiBhbmQgZWxhYm9yYXRlZCByZXBvcnQ/IFNvbWV0aGluZyB0aGF0IGZhY2lsaXRhdGVzIHlvdXIgaW5xdWlzaXRpdmVuZXNzIFxuYW5kIHBvaW50IHlvdSBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uIHRvIGdhdGhlciB0aGUga25vd2xlZGdlIHlvdSBzZWVrPyBZb3UgY291bGQgbmFtZSBhIGRvemVuLCByZWFsbHkuIFxuV2hhdGV2ZXIgZ29vZCB0aGluZyB5b3Ugd2lzaCB0byBhY2hpZXZlIGFzIHlvdSBnbyBhYm91dCB5b3VyIEVMQSBhY3Rpdml0aWVzLCBpcyB3aGF0IHdlIHdhbnQgZm9yIHlvdS5cbmA7XG5cbmNvbnN0IHNlY3Rpb25BY2hpZXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5zZWN0aW9uQWNoaWV2ZS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1hY2hpZXZlXCIpO1xuc2VjdGlvbkFjaGlldmUuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci13ZWxjb21lXCIpO1xubWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uQWNoaWV2ZSk7XG5cbmNvbnN0IGNvbnRhaW5lckFjaGlldmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyQWNoaWV2ZS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWFjaGlldmVcIik7XG5zZWN0aW9uQWNoaWV2ZS5hcHBlbmRDaGlsZChjb250YWluZXJBY2hpZXZlKTtcblxuY29uc3QgZGl2SW1nQWNoaWV2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXZJbWdBY2hpZXZlLmNsYXNzTGlzdC5hZGQoXCJkaXYtaW1nLWFjaGlldmVcIik7XG5jb250YWluZXJBY2hpZXZlLmFwcGVuZENoaWxkKGRpdkltZ0FjaGlldmUpO1xuXG5jb25zdCBpbWdBY2hpZXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmRpdkltZ0FjaGlldmUuYXBwZW5kQ2hpbGQoaW1nQWNoaWV2ZSk7XG5pbWdBY2hpZXZlLnNyYyA9IGFjaGlldmVJbWc7XG5cbmNvbnN0IGRpdlRleHRBY2hpZXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpdlRleHRBY2hpZXZlLmNsYXNzTGlzdC5hZGQoXCJkaXYtdGV4dC1hY2hpZXZlXCIpO1xuY29udGFpbmVyQWNoaWV2ZS5hcHBlbmRDaGlsZChkaXZUZXh0QWNoaWV2ZSk7XG5jcmVhdGVIZWFkZXJTZWNvbmRhcnkoZGl2VGV4dEFjaGlldmUsIGFjaGlldmVIZWFkZXIpO1xuY3JlYXRlQ29udGVudChkaXZUZXh0QWNoaWV2ZSwgYWNoaWV2ZVRleHQpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBOYXZpZ2F0aW5nIHRoZSBwbGF0Zm9ybSBzZWN0aW9uXG5cbmNvbnN0IG5hdmlnYXRlSGVhZGVyID0gYE5hdmlnYXRpbmcgZWxhQm9yYXRlYDtcblxuY29uc3QgbmF2aWdhdGVUZXh0TWFpbiA9IGBcbk5vdyB0aGF0IHdlIGhhdmUgcGVyZm9ybWVkIHRoZSBjb252ZW50aW9uYWwgbmljZXRpZXMgYnkgd2VsY29taW5nIHlvdSwgXG5tYWtpbmcgY2xlYXIgb3VyIGludGVudGlvbnMgYW5kIHN0YXRpbmcgd2hhdCB3ZSBob3BlIHRvIGFjaGlldmUsIFxud2Ugd2FudCB0byBhaWQgeW91ciBleHBlcmllbmNlIHdoZW4gdXNpbmcgdGhpcyBwbGF0Zm9ybSwgXG5ieSBzaG93aW5nIHlvdSBob3cgdG8gbmF2aWdhdGUgdGhlIHZhcmlvdXMgc2VjdGlvbnMuXG5UaGlzIHBsYXRmb3JtIGlzIHByaW1hcmlseSBkaXZpZGVkIGludG8gZm91ciBzZWN0aW9ucyAtIE1lY2hhbmljYWwsIFxuUHJvZHVjdGlvbiwgRWxlY3RyaWNhbCwgYW5kIENvbXB1dGVyIEVMQSBzZWN0aW9uLlxuQXMgeW91IG1heSBhbHJlYWR5IGtub3csIHRoZSBNZWNoYW5pY2FsLCBQcm9kdWN0aW9uIGFuZCBcbkVsZWN0cmljYWwgRUxBIFNlY3Rpb25zIGFyZSBmb3IgdGhvc2UgaW4gdGhlaXIgc2Vjb25kIHllYXIsIFxud2hpbGUgdGhlIENvbXB1dGVyIEVMQSBzZWN0aW9uIGlzIGZvciBDb21wdXRlciBlbmdpbmVlcmluZyBzdHVkZW50cyBpbiB0aGVpciB0aGlyZCB5ZWFyLlxuYDtcblxuY29uc3QgdGV4dEFyciA9IFtcbiAgW1xuICAgIFwiTWVjaGFuaWNhbCBFTEEgU2VjdGlvblwiLFxuICAgIFwiTWVjaGFuaWNhbCBFTEEgZm9jdXNlcyBvbiBhcHBseWluZyB0aGVvcmV0aWNhbCBjb25jZXB0cyB0byByZWFsLXdvcmxkIGFwcGxpY2F0aW9ucy4gU3R1ZGVudHMgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcnkgYW5kIGFwcGxpY2F0aW9uIGJ5IHRlc3RpbmcgbWVjaGFuaWNhbCBzeXN0ZW1zIHRocm91Z2ggZXhwZXJpbWVudHMgaW52b2x2aW5nIEFwcGxpZWQgTWVjaGFuaWNzIChBTSkgYW5kIFN0cmVuZ3RoIG9mIE1hdGVyaWFscyAoU00pLlwiLFxuICBdLFxuICBbXG4gICAgXCJQcm9kdWN0aW9uIEVMQSBTZWN0aW9uXCIsXG4gICAgXCJQcm9kdWN0aW9uIEVMQSBkZWx2ZXMgaW50byB0aGUgcHJhY3RpY2FsaXRpZXMgb2YgbWFudWZhY3R1cmluZy4gU3R1ZGVudHMgZXhwbG9yZSBlZmZpY2llbnQgcHJvZHVjdGlvbiB0ZWNobmlxdWVzIHRocm91Z2ggZXhwZXJpbWVudHMgaW4gYXJlYXMgbGlrZSBtYWNoaW5pbmcsIHdlbGRpbmcsIGNhc3RpbmcsIGZvcm1pbmcsIGFuZCBiZW5jaC1maXR0aW5nLCBkZXZlbG9waW5nIGEgc3Ryb25nIGZvdW5kYXRpb24gZm9yIGZ1dHVyZSBpbmR1c3RyaWFsIHN1Y2Nlc3MuXCIsXG4gIF0sXG4gIFtcbiAgICBcIkVsZWN0cmljYWwgRUxBIFNlY3Rpb25cIixcbiAgICBcIkVsZWN0cmljYWwgRUxBIGJyaW5ncyBlbGVjdHJpY2FsIHByaW5jaXBsZXMgdG8gbGlmZS4gU3R1ZGVudHMgZ2FpbiBwcmFjdGljYWwgZXhwZXJpZW5jZSB3aXRoIGNpcmN1aXRzLCBlbGVjdHJvbmljcywgcG93ZXIgc3lzdGVtcywgYW5kIGNvbnRyb2wgc3lzdGVtcyB0aHJvdWdoIGV4cGVyaW1lbnRzIGludm9sdmluZyByZWFsLXdvcmxkIGVxdWlwbWVudCBsaWtlIFRyYW5zZm9ybWVycywgb3NjaWxsb3Njb3BlcywgYW5kIG90aGVyIGVsZWN0cmljYWwgbWFjaGluZXMuXCIsXG4gIF0sXG4gIFtcbiAgICBcIkNvbXB1dGVyIEVMQSBTZWN0aW9uXCIsXG4gICAgXCJDb21wdXRlciBFTEEgb2ZmZXJzIGhhbmRzLW9uIGV4cGVyaWVuY2Ugd2l0aCBoYXJkd2FyZSwgc29mdHdhcmUgYW5kIGJhc2ljIGVuZ2luZWVyaW5nIGNvbmNlcHRzLCBieSBzb2xpZGlmeWluZyB0aGVvcnkgdGhyb3VnaCBidWlsZGluZyBjaXJjdWl0cywgcHJvZ3JhbW1pbmcgbWljcm9jb250cm9sbGVycywgYW5kIGV4cGxvcmluZyBjb21wdXRlciBuZXR3b3Jrcy5cIixcbiAgXSxcbl07XG5cbmNvbnN0IHNlY3Rpb25OYXZpZ2F0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuc2VjdGlvbk5hdmlnYXRlLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLW5hdmlnYXRlXCIpO1xuc2VjdGlvbk5hdmlnYXRlLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItd2VsY29tZVwiKTtcbm1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbk5hdmlnYXRlKTtcblxuY29uc3QgY29udGFpbmVyTmF2aWdhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyTmF2aWdhdGUuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1uYXZpZ2F0ZVwiKTtcbnNlY3Rpb25OYXZpZ2F0ZS5hcHBlbmRDaGlsZChjb250YWluZXJOYXZpZ2F0ZSk7XG5cbmNvbnN0IGRpdkhlYWRlck5hdmlnYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpdkhlYWRlck5hdmlnYXRlLmNsYXNzTGlzdC5hZGQoXCJkaXYtaGVhZGVyLW5hdmlnYXRlXCIpO1xuY29udGFpbmVyTmF2aWdhdGUuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyTmF2aWdhdGUpO1xuXG5jcmVhdGVIZWFkZXJTZWNvbmRhcnkoZGl2SGVhZGVyTmF2aWdhdGUsIG5hdmlnYXRlSGVhZGVyKTtcbmNyZWF0ZUNvbnRlbnQoY29udGFpbmVyTmF2aWdhdGUsIG5hdmlnYXRlVGV4dE1haW4pO1xuXG5jcmVhdGVMaXN0VGV4dChjb250YWluZXJOYXZpZ2F0ZSwgdGV4dEFycik7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDVEEgc2VjdGlvblxuXG5jb25zdCBjdGFIZWFkZXIgPSBgTGV0J3MgZ2V0IFN0YXJ0ZWQhYDtcblxuY29uc3QgY3RhVGV4dCA9IGBcbkFscmlnaHQhIFRoYXQncyBlbm91Z2ggdGFsaywgZG9uJ3QgeW91IHRoaW5rPyBIb3BlZnVsbHkgeW91J3JlXG5yYXJpbmcgdG8gZ28gc2VlIHdoYXQgd2UndmUgZ290IGluIHN0b3JlIGZvciB5b3UuIFdpdGhvdXQgZnVydGhlclxuYWRvLCBsZXQncyBnZXQgeW91IHN0YXJ0ZWQgb24geW91ciBKb3VybmV5LmA7XG5cbmNvbnN0IHNlY3Rpb25DVEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnNlY3Rpb25DVEEuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tY3RhXCIpO1xuc2VjdGlvbkNUQS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLXdlbGNvbWVcIik7XG5tYWluLmFwcGVuZENoaWxkKHNlY3Rpb25DVEEpO1xuXG5jb25zdCBjb250YWluZXJDVEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyQ1RBLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItY3RhXCIpO1xuc2VjdGlvbkNUQS5hcHBlbmRDaGlsZChjb250YWluZXJDVEEpO1xuXG5jb25zdCBjb250YWluZXJDdGFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyQ3RhSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItY3RhLWhlYWRlclwiKTtcbmNvbnRhaW5lckNUQS5hcHBlbmRDaGlsZChjb250YWluZXJDdGFIZWFkZXIpO1xuXG5jb25zdCBjb250YWluZXJDdGFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lckN0YVRleHQuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1jdGEtdGV4dFwiKTtcbmNvbnRhaW5lckNUQS5hcHBlbmRDaGlsZChjb250YWluZXJDdGFUZXh0KTtcblxuY3JlYXRlSGVhZGVyU2Vjb25kYXJ5KGNvbnRhaW5lckN0YUhlYWRlciwgY3RhSGVhZGVyKTtcbmNyZWF0ZUNvbnRlbnQoY29udGFpbmVyQ3RhVGV4dCwgY3RhVGV4dCk7XG5cbmNvbnN0IGNvbnRhaW5lckNvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lckNvdmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItY292ZXJcIik7XG5jb250YWluZXJDVEEuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ292ZXIpO1xuXG5jb25zdCBjb250YWluZXJDdGFCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyQ3RhQnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItY3RhLWJ0blwiKTtcbmNvbnRhaW5lckNvdmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckN0YUJ0bik7XG5cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbmxpbmsuaHJlZiA9IFwiLi4vcmVwb3J0L3JlcG9ydC5odG1sXCI7XG5saW5rLmNsYXNzTGlzdC5hZGQoXCJidG4tdmlldy1yZXBvcnRzXCIpO1xubGluay50ZXh0Q29udGVudCA9IFwiVklFVyBSRVBPUlRTXCI7XG5jb250YWluZXJDdGFCdG4uYXBwZW5kQ2hpbGQobGluayk7XG5cbi8vZGlzcGxheSBmb290ZXJcbnJlbmRlckZvb3Rlcihib2R5LCBbaG1lLCBycHQsIGFidF0pO1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUhlYWRlclByaW1hcnkgPSBmdW5jdGlvbiAoZWxlbWVudCwgdGV4dCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1oZWFkZXJcIik7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUhlYWRlclNlY29uZGFyeSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0ZXh0KSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBjb250ZW50KSB7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5lQnJlYWsgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBjb25zdCBlbnRlck5leHRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGVudGVyTmV4dExpbmUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUxpc3RUZXh0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGFycmF5KSB7XG4gIGNvbnN0IHVub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodW5vcmRlcmVkTGlzdCk7XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoYXJyKSB7XG4gICAgY29uc3QgZmlyc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGZpcnN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtbGlzdC1pdGVtXCIpO1xuICAgIGZpcnN0SXRlbS50ZXh0Q29udGVudCA9IGFyclswXTtcbiAgICB1bm9yZGVyZWRMaXN0LmFwcGVuZENoaWxkKGZpcnN0SXRlbSk7XG4gICAgY29uc3Qgc2Vjb25kSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzZWNvbmRJdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtbGlzdC1pdGVtXCIpO1xuICAgIGZpcnN0SXRlbS5hcHBlbmRDaGlsZChzZWNvbmRJdGVtKTtcbiAgICBzZWNvbmRJdGVtLnRleHRDb250ZW50ID0gYXJyWzFdO1xuICAgIHJldHVybiBzZWNvbmRJdGVtO1xuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=