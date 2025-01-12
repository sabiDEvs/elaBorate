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

module.exports = "./asset/images/9f85bcb065b488f77419.png";

/***/ }),

/***/ "./src/RESOURCES/images/mission.png":
/*!******************************************!*\
  !*** ./src/RESOURCES/images/mission.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "./asset/images/ee9f073d24a99867a038.png";

/***/ }),

/***/ "./src/RESOURCES/images/navigate.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/navigate.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "./asset/images/dce8420c37e53fbe5a17.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/about.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7QUFDSDtBQUNoRDtBQUN5RDtBQUNBO0FBQ0U7QUFDM0Q7QUFPNkI7QUFDN0I7QUFDMEI7QUFDQTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQW1CO0FBQ25CO0FBQ0EsaUVBQWE7QUFDYiw2REFBUztBQUNULGlFQUFhO0FBQ2IsNkRBQVM7QUFDVCxpRUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXFCO0FBQ3JCLGlFQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXFCO0FBQ3JCLGlFQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBcUI7QUFDckIsaUVBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXFCO0FBQ3JCLGlFQUFhO0FBQ2I7QUFDQSxrRUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXFCO0FBQ3JCLGlFQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFTTDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL0NTUy9hYm91dC5jc3M/NjAwOSIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3N0eWxlLmNzcz83NjdjIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL2Fib3V0LmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvYWJvdXRQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gXCIuL21vZHVsZXMvaGVhZGVyLmpzXCI7XHJcbmltcG9ydCB7IHJlbmRlckZvb3RlciB9IGZyb20gXCIuL21vZHVsZXMvZm9vdGVyXCI7XHJcblxyXG5pbXBvcnQgbWlzc2lvbkltZyBmcm9tIFwiLi4vUkVTT1VSQ0VTL2ltYWdlcy9taXNzaW9uLnBuZ1wiO1xyXG5pbXBvcnQgYWNoaWV2ZUltZyBmcm9tIFwiLi4vUkVTT1VSQ0VTL2ltYWdlcy9hY2hpZXZlLnBuZ1wiO1xyXG5pbXBvcnQgbmF2aWdhdGVJbWcgZnJvbSBcIi4uL1JFU09VUkNFUy9pbWFnZXMvbmF2aWdhdGUucG5nXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUNvbnRlbnQsXHJcbiAgY3JlYXRlSGVhZGVyUHJpbWFyeSxcclxuICBjcmVhdGVIZWFkZXJTZWNvbmRhcnksXHJcbiAgY3JlYXRlTGlzdFRleHQsXHJcbiAgbGluZUJyZWFrLFxyXG59IGZyb20gXCIuL21vZHVsZXMvYWJvdXRQYWdlXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9DU1MvYWJvdXQuY3NzXCI7XHJcbmltcG9ydCBcIi4uL0NTUy9zdHlsZS5jc3NcIjtcclxuXHJcbi8vIFNlbGVjdGluZyBib2R5IGVsZW1lbnRcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuLy9zcGVjaWZ5IG5hdiBwYXRoXHJcbmNvbnN0IGhtZSA9IFwiLi4vaW5kZXguaHRtbFwiO1xyXG5jb25zdCBycHQgPSBcIi4uL3JlcG9ydC9yZXBvcnQuaHRtbFwiO1xyXG5jb25zdCBhYnQgPSBcIi4vYWJvdXQuaHRtbFwiO1xyXG5cclxuLy9jYWxsIGhlYWRlciBmdW5jdGlvblxyXG5yZW5kZXJIZWFkZXIoYm9keSwgW2htZSwgcnB0LCBhYnRdKTtcclxuXHJcbi8vIEFkZGluZyBtYWluIGVsZW1lbnRcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gV2VsY29tZSBzZWN0aW9uXHJcbmNvbnN0IHdlbGNvbWVIZWFkZXIgPSBgV2VsY29tZSB0byBlbGFCb3JhdGUhYDtcclxuXHJcbmNvbnN0IHdlbGNvbWVUZXh0MSA9IGBTYWx1dGF0aW9ucywgRGVhciBSZWFkZXIhIFdlJ3JlIGRlbGlnaHRlZFxyXG50aGF0IHlvdSd2ZSBkZWNpZGVkIHRvIHRha2UgdGhpcyBtb3N0IHN0YXRlbHkgZGVjaXNpb24gaW4gaW1wcm92aW5nIFxyXG55b3VyIHVuZGVyc3RhbmRpbmcgb2YgRUxBIGFuZCB3cml0aW5nIHByb3Blcmx5IGNvb3JkaW5hdGVkIHJlcG9ydHMuIFxyXG5JbiB0aGlzIGFydGljbGUsIHdlJ3JlIGdvaW5nIHRvIHRha2UgeW91IG9uIGEgYnJpZWYgam91cm5leSwgXHJcbmVsYWJvcmF0aW5nIG9uIHNvbWUga2V5IHRoaW5nc1xyXG5saWtlIG91ciBtaXNzaW9uIHN0YXRlbWVudCwgYW5kIGhvdyB5b3Ugc2hhbGwgbmF2aWdhdGUgdGhpc1xyXG5wbGF0Zm9ybS4gQnV0IGZpcnN0LCB3ZSB3YW50IHlvdSB0byBwb25kZXIgb24gc29tZXRoaW5nLi4uYDtcclxuXHJcbmNvbnN0IHdlbGNvbWVUZXh0MiA9IGBUaGUgY28tZm91bmRlciBvZiBSb2xscy1Sb3ljZSwgU2lyIEhlbnJ5IFJveWNlLCBsZWZ0IHRoaXMgd29ybGQgd2l0aCBoaXNcclxucG9wdWxhciBtYXhpbSAtIOKAnFN0cml2ZSBmb3IgcGVyZmVjdGlvbiBpbiBldmVyeXRoaW5nIHlvdSBkby4gVGFrZVxyXG50aGUgYmVzdCB0aGF0IGV4aXN0cyBhbmQgbWFrZSBpdCBiZXR0ZXIuIFdoZW4gaXQgZG9lcyBub3QgZXhpc3QsXHJcbmRlc2lnbiBpdOKAnS4gRG8ga2VlcCB0aGF0IHF1b3RlIGluIG1pbmQ7IGl0J2xsIGNvbWUgaW4gaGFuZHkgYXMgeW91XHJcbmdvIHRocm91Z2ggdGhpcyBhcnRpY2xlLmA7XHJcblxyXG5jb25zdCB3ZWxjb21lVGV4dDMgPSBgWW91IG1heSBoYXZlIHdvbmRlcmVkLCBvbmNlIG9yIHR3aWNlXHJcbnByb2JhYmx5LCBob3cgeW91IGNvdWxkIGJldHRlciB1bmRlcnN0YW5kIGFuIGV4cGVyaW1lbnQsIGhvdyB5b3VcclxuY291bGQgc2F2ZSB0aW1lIGVzcGVjaWFsbHkgaW4gd3JpdGluZyByZXBvcnRzIHRoYXQgYXJlIGRlZmluaXRpdmVcclxuYW5kIGFyZSBub3QgZmlsbGVkIHdpdGggdW5pbXBvcnRhbnQgc3R1ZmZzLCBvciBob3cgeW91IGNhbiB3cml0ZSBhXHJcbm1vcmUgcHJlc2VudGFibGUgZXhwZXJpbWVudCByZXBvcnQ7IGhpZ2hsaWdodGluZyB0aGUgaW1wb3J0YW50IHBhcnRzXHJcbmFuZCBjb21wb3NpbmcgYSBwZXJmZWN0bHkgcHJlc2VudGFibGUgcmVwb3J0IGFsbCB0b2dldGhlci4uLlxyXG5Qcm9iYWJseSwgeW91IG1heSBoYXZlIHdvbmRlcmVkIGhvdyB5b3UgY2FuIGhhdmUgZW5vdWdoIHJlc291cmNlc1xyXG5yZWFkaWx5IGF2YWlsYWJsZSBmb3IgZXZlcnkgZXhwZXJpbWVudCBpbiBvbmUgcGxhY2UsIHNvIHlvdSBkb24ndFxyXG5oYXZlIHRvIHN0YXJ0IGJyb3dzaW5nIHRoZSBmb3VyIGNvcm5lcnMgb2YgdGhlIHdlYi4gV2VsbCwgd29ycnkgbm9cclxubW9yZSwgYXMgd2UgaG9wZSB0byBoZWxwIHlvdSBlYXNlIHlvdXIgYnVyZGVuLmA7XHJcblxyXG4vLyBBZGRpbmcgc2VjdGlvbiBlbGVtZW50XHJcbmNvbnN0IHNlY3Rpb25XZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbm1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbldlbGNvbWUpO1xyXG5cclxuLy8gQWRkaW5nIGEgZGl2IGVsZW1lbnRcclxuY29uc3QgY29udGFpbmVyV2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhaW5lcldlbGNvbWUuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci13ZWxjb21lXCIpO1xyXG5jb250YWluZXJXZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lXCIpO1xyXG5zZWN0aW9uV2VsY29tZS5hcHBlbmRDaGlsZChjb250YWluZXJXZWxjb21lKTtcclxuXHJcbi8vIENyZWF0aW5nIG1haW4gaGVhZGVyXHJcbmNyZWF0ZUhlYWRlclByaW1hcnkoY29udGFpbmVyV2VsY29tZSwgd2VsY29tZUhlYWRlcik7XHJcblxyXG5jcmVhdGVDb250ZW50KGNvbnRhaW5lcldlbGNvbWUsIHdlbGNvbWVUZXh0MSk7XHJcbmxpbmVCcmVhayhjb250YWluZXJXZWxjb21lKTtcclxuY3JlYXRlQ29udGVudChjb250YWluZXJXZWxjb21lLCB3ZWxjb21lVGV4dDIpO1xyXG5saW5lQnJlYWsoY29udGFpbmVyV2VsY29tZSk7XHJcbmNyZWF0ZUNvbnRlbnQoY29udGFpbmVyV2VsY29tZSwgd2VsY29tZVRleHQzKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gTWlzc2lvbiBzZWN0aW9uXHJcblxyXG5jb25zdCBtaXNzaW9uSGVhZGVyID0gYE91ciBNaXNzaW9uYDtcclxuXHJcbmNvbnN0IG1pc3Npb25UZXh0ID0gYCBcclxuV2UnbGwgc3RhcnQgYnkgb3V0bGluaW5nIHdoeSBlbGFCb3JhdGUgZXhpc3RzIGFuZCB3aGF0IHlvdSBjYW5cclxuZXhwZWN0IGZyb20gdGhpcyBsZWFybmluZyBwbGF0Zm9ybS4gV2l0aCBlbGFCb3JhdGUsIHdlIHdhbnQgdG9cclxuaGVscCB5b3VuZyBlbmdpbmVlcnMgaW4gdHJhaW5pbmcsIHByb3Blcmx5IHVuZGVyc3RhbmQgYWxsIHRoYXQgaXNcclxuZ29pbmcgb24gaW4gdGhlaXIgdmFyaW91cyBFTEEgZXhwZXJpbWVudHMuIEhhdmluZyBnb25lIHRocm91Z2ggdGhlIHN5c3RlbSBvdXJzZWx2ZXMsIFxyXG53ZSBzYXcgaG93IGRpZmZpY3VsdCBpdCB3YXMgZm9yIGEgZmlyc3QgeWVhciBlbmdpbmVlcmluZyBzdHVkZW50LCBcclxuanVzdCBzdGFydGluZyB0aGUgUHJlLVVCSVRTLCB0byBzbW9vdGhseSB0cmFuc2l0aW9uIHRvIHRoZSByaWdvcm91cyBcclxuYW5kIGRlbWFuZGluZyBzZWNvbmQgeWVhciBFTEEgcHJhY3RpY2FsLiBcclxuVGhlcmUgd2VyZSB0aW1lcyB3ZSB3aXNoZWQgd2UgaGFkIGEgcHJvcGVyIGd1aWRlIG9uIFxyXG5ob3cgdG8gZ28gYWJvdXQgdGhlIHZhcmlvdXMgRUxBIGFjdGl2aXRpZXMsIFxyXG5lc3BlY2lhbGx5IGluIHVuZGVyc3RhbmRpbmcgdGhlIGV4cGVyaW1lbnQgdG8gYmUgcGVyZm9ybWVkIFxyXG5hbmQgcHJlcGFyaW5nIHRoZSByZXBvcnRzIHRoZXJlYWZ0ZXIuIFRydXRoIGJlIHRvbGQsIGl0IHdhc24ndCBlYXN5IGRlbHZpbmcgaW50byB0aGUgd2ViLCBcclxuc2VhcmNoaW5nIGZvciBnb29kIHJlc291cmNlcyBlc3BlY2lhbGx5IG9uIHRoZW9yaWVzIGFuZCBleHBlcmltZW50IHByb2NlZHVyZXMuIFxyXG5UaGlzIGlzIHdoeSB3ZSd2ZSBhcnJhbmdlZCBhbGwgdGhlIHJlc291cmNlcyB5b3Ugd291bGQgbmVlZCB0byBlbGFib3JhdGVseSBcclxucGVyZm9ybSBhbGwgdGhlIEVMQSBhY3Rpdml0aWVzLCBpbiBvbmUgcGxhY2UuXHJcbldlIGJlbGlldmUgdGhhdCBieSBkb2luZyBzbywgeW91IGNhbiBleHBlcmllbmNlIG1pbmltYWwgdG8gbm8gXHJcbmRpZmZpY3VsdHkgaW4gZ29pbmcgYWJvdXQgeW91ciBFTEEgYWN0aXZpdGllcywgYW5kIG9mIGNvdXJzZSwgXHJcbmV2ZW50dWFsbHkgYWNlIHRoZSBjb3Vyc2Ugd2l0aCBnb29kIGdyYWRlcy5gO1xyXG5cclxuY29uc3Qgc2VjdGlvbk1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuc2VjdGlvbk1pc3Npb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tbWlzc2lvblwiKTtcclxuc2VjdGlvbk1pc3Npb24uY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci13ZWxjb21lXCIpO1xyXG5tYWluLmFwcGVuZENoaWxkKHNlY3Rpb25NaXNzaW9uKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lck1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250YWluZXJNaXNzaW9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItbWlzc2lvblwiKTtcclxuc2VjdGlvbk1pc3Npb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyTWlzc2lvbik7XHJcblxyXG5jb25zdCBkaXZUZXh0TWlzc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdlRleHRNaXNzaW9uLmNsYXNzTGlzdC5hZGQoXCJkaXYtdGV4dC1taXNzaW9uXCIpO1xyXG5jb250YWluZXJNaXNzaW9uLmFwcGVuZENoaWxkKGRpdlRleHRNaXNzaW9uKTtcclxuY3JlYXRlSGVhZGVyU2Vjb25kYXJ5KGRpdlRleHRNaXNzaW9uLCBtaXNzaW9uSGVhZGVyKTtcclxuY3JlYXRlQ29udGVudChkaXZUZXh0TWlzc2lvbiwgbWlzc2lvblRleHQpO1xyXG5cclxuY29uc3QgZGl2SW1nTWlzc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRpdkltZ01pc3Npb24uY2xhc3NMaXN0LmFkZChcImRpdi1pbWctbWlzc2lvblwiKTtcclxuY29udGFpbmVyTWlzc2lvbi5hcHBlbmRDaGlsZChkaXZJbWdNaXNzaW9uKTtcclxuXHJcbmNvbnN0IGltZ01pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5kaXZJbWdNaXNzaW9uLmFwcGVuZENoaWxkKGltZ01pc3Npb24pO1xyXG5pbWdNaXNzaW9uLnNyYyA9IG1pc3Npb25JbWc7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBXaHkgYWxsb3cgdXMgaGVscCB5b3Ugc2VjdGlvbiBzZWN0aW9uXHJcblxyXG5jb25zdCBoZWxwSGVhZGVyID0gYFdoeSBhbGxvdyB1cyBoZWxwIHlvdT9gO1xyXG5cclxuY29uc3QgaGVscFRleHQgPSBgXHJcbkNhbiB5b3UgcmVjYWxsIHdoYXQgd2UgdG9sZCB5b3UgdG8gcG9uZGVyIG9uIHdoZW4gd2Ugd2VsY29tZWQgeW91PyBcclxuSWYgeW91IHJlZmxlY3RlZCBvbiB0aGUgbWF4aW0gd2l0aCB0aGUgc2FtZSB3YXZlbGVuZ3RoIGFzIHVzLCBcclxueW91IHdpbGwgZmluZCB0aGF0IFNpciBIZW5yeSBSb3ljZSB3YW50ZWQgcGVyZmVjdGlvbiBpbiBhbGwgaGUgZGlkLiBcclxuVGhpcyBkcml2ZSBhcyB3ZSBrbm93IGl0LCB5aWVsZGVkIGZydWl0cyBhcyB3ZSBhcmUgc3VyZSB5b3UgaGF2ZTsgXHJcbm9uZSB3YXkgb3IgYW5vdGhlciwgaGVhcmQgYWJvdXQgdGhlIGNvdmV0ZWQgUm9sbHMtUm95Y2UgYXV0b21vYmlsZS4gXHJcbldlIGFsc28gd2FudCB0aGF0IGZvciB5b3UhIC0gT2YgY291cnNlLCBJJ20gdGFsa2luZyBhYm91dCBwZXJmZWN0aW9uLCBcclxubm90IHRoZSBSb2xscy1Sb3ljZSA6KSAtIEFueXdheXMsIGhhdmluZyBwYXNzZWQgdGhyb3VnaCB0aGUgc3lzdGVtIG91cnNlbHZlcywgXHJcbldlIGJlbGlldmUgeW91IHdhbnQgdG8gcHJvcGVybHkgdW5kZXJzdGFuZCB5b3VyIGRpZmZlcmVudCBleHBlcmltZW50cywgXHJcbnRoYXQgeW91IGFsc28gd2FudCB0byBhY2UgYWxsIEVMQSBjb3Vyc2VzIC0gVGhhdCBteSBmcmllbmQsIGlzIHN0cml2aW5nIGZvciBwZXJmZWN0aW9uLCBcclxuYW5kIGxpa2UgU2lyIFJveWNlLCB3ZSBzaGFsbCB0YWtlIHRoZSBiZXN0IHRoYXQgZXhpc3RzIGFuZCBtYWtlIGl0IGJldHRlciFcclxuYDtcclxuXHJcbmNvbnN0IHNlY3Rpb25IZWxwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbnNlY3Rpb25IZWxwLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWhlbHBcIik7XHJcbnNlY3Rpb25IZWxwLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItd2VsY29tZVwiKTtcclxubWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVscCk7XHJcblxyXG5jb25zdCBjb250YWluZXJIZWxwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuc2VjdGlvbkhlbHAuYXBwZW5kQ2hpbGQoY29udGFpbmVySGVscCk7XHJcblxyXG5jcmVhdGVIZWFkZXJTZWNvbmRhcnkoY29udGFpbmVySGVscCwgaGVscEhlYWRlcik7XHJcbmNyZWF0ZUNvbnRlbnQoY29udGFpbmVySGVscCwgaGVscFRleHQpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFdoYXQgd2UgaG9wZSB0byBhY2hpZXZlIHNlY3Rpb25cclxuXHJcbmNvbnN0IGFjaGlldmVIZWFkZXIgPSBgV2hhdCB3ZSBob3BlIHRvIGFjaGlldmVgO1xyXG5cclxuY29uc3QgYWNoaWV2ZVRleHQgPSBgIFxyXG5BcyBhIFZhbGV0IHRlbmRzIHRvIGhpcyBNYXN0ZXIgZXZlbiBpbiB0aGUgc21hbGxlc3Qgb2YgdGFza3MsIGFuZCBhIE1haWQ7IFxyXG5oZXIgTWlzdHJlc3MsIG9yIGFzIGEgbm9ibGUgc3RlZWQgam91cm5leXMgd2l0aCBpdHMgYnJhdmUga25pZ2h0IHRocm91Z2ggYmF0dGxlcyB1bmVuZGluZywgXHJcbmVsYUJvcmF0ZSBpcyBoZXJlIHRvIGJlIHlvdXIgZ3VpZGUsIGhlbHBpbmcgeW91IGFzIHlvdSBnbyB0aHJvdWdoIEVMQS5cclxuSW4gYWxsIGhvbmVzdHksIHdoYXQgd2UgaG9wZSB0byBhY2hpZXZlIGlzIHByb2JhYmx5IHdoYXQgeW91IHdhbnQgdG8gYWNoaWV2ZSBhcyB5b3UgZ28gXHJcbnRocm91Z2ggeW91ciB2YXJpb3VzIEVMQSBleHBlcmltZW50cy4gXHJcbkFuIOKAnEHigJ0gaW4gYWxsIHlvdXIgRUxBIHJlc3VsdHM/IEEgc2VhbWxlc3NseSBnb29kIEVMQSBleHBlcmllbmNlPyBcclxuQSBnb29kIGlkZWEgYW5kIHVuZGVyc3RhbmRpbmcgb2Ygd2hhdGV2ZXIgZXhwZXJpbWVudCB5b3UgbWF5IHBlcmZvcm0/IFxyXG5BIHdlbGwgd3JpdHRlbiBhbmQgZWxhYm9yYXRlZCByZXBvcnQ/IFNvbWV0aGluZyB0aGF0IGZhY2lsaXRhdGVzIHlvdXIgaW5xdWlzaXRpdmVuZXNzIFxyXG5hbmQgcG9pbnQgeW91IGluIHRoZSByaWdodCBkaXJlY3Rpb24gdG8gZ2F0aGVyIHRoZSBrbm93bGVkZ2UgeW91IHNlZWs/IFlvdSBjb3VsZCBuYW1lIGEgZG96ZW4sIHJlYWxseS4gXHJcbldoYXRldmVyIGdvb2QgdGhpbmcgeW91IHdpc2ggdG8gYWNoaWV2ZSBhcyB5b3UgZ28gYWJvdXQgeW91ciBFTEEgYWN0aXZpdGllcywgaXMgd2hhdCB3ZSB3YW50IGZvciB5b3UuXHJcbmA7XHJcblxyXG5jb25zdCBzZWN0aW9uQWNoaWV2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG5zZWN0aW9uQWNoaWV2ZS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1hY2hpZXZlXCIpO1xyXG5zZWN0aW9uQWNoaWV2ZS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLXdlbGNvbWVcIik7XHJcbm1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbkFjaGlldmUpO1xyXG5cclxuY29uc3QgY29udGFpbmVyQWNoaWV2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhaW5lckFjaGlldmUuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1hY2hpZXZlXCIpO1xyXG5zZWN0aW9uQWNoaWV2ZS5hcHBlbmRDaGlsZChjb250YWluZXJBY2hpZXZlKTtcclxuXHJcbmNvbnN0IGRpdkltZ0FjaGlldmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZJbWdBY2hpZXZlLmNsYXNzTGlzdC5hZGQoXCJkaXYtaW1nLWFjaGlldmVcIik7XHJcbmNvbnRhaW5lckFjaGlldmUuYXBwZW5kQ2hpbGQoZGl2SW1nQWNoaWV2ZSk7XHJcblxyXG5jb25zdCBpbWdBY2hpZXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuZGl2SW1nQWNoaWV2ZS5hcHBlbmRDaGlsZChpbWdBY2hpZXZlKTtcclxuaW1nQWNoaWV2ZS5zcmMgPSBhY2hpZXZlSW1nO1xyXG5cclxuY29uc3QgZGl2VGV4dEFjaGlldmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZUZXh0QWNoaWV2ZS5jbGFzc0xpc3QuYWRkKFwiZGl2LXRleHQtYWNoaWV2ZVwiKTtcclxuY29udGFpbmVyQWNoaWV2ZS5hcHBlbmRDaGlsZChkaXZUZXh0QWNoaWV2ZSk7XHJcbmNyZWF0ZUhlYWRlclNlY29uZGFyeShkaXZUZXh0QWNoaWV2ZSwgYWNoaWV2ZUhlYWRlcik7XHJcbmNyZWF0ZUNvbnRlbnQoZGl2VGV4dEFjaGlldmUsIGFjaGlldmVUZXh0KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gTmF2aWdhdGluZyB0aGUgcGxhdGZvcm0gc2VjdGlvblxyXG5cclxuY29uc3QgbmF2aWdhdGVIZWFkZXIgPSBgTmF2aWdhdGluZyBlbGFCb3JhdGVgO1xyXG5cclxuY29uc3QgbmF2aWdhdGVUZXh0TWFpbiA9IGBcclxuTm93IHRoYXQgd2UgaGF2ZSBwZXJmb3JtZWQgdGhlIGNvbnZlbnRpb25hbCBuaWNldGllcyBieSB3ZWxjb21pbmcgeW91LCBcclxubWFraW5nIGNsZWFyIG91ciBpbnRlbnRpb25zIGFuZCBzdGF0aW5nIHdoYXQgd2UgaG9wZSB0byBhY2hpZXZlLCBcclxud2Ugd2FudCB0byBhaWQgeW91ciBleHBlcmllbmNlIHdoZW4gdXNpbmcgdGhpcyBwbGF0Zm9ybSwgXHJcbmJ5IHNob3dpbmcgeW91IGhvdyB0byBuYXZpZ2F0ZSB0aGUgdmFyaW91cyBzZWN0aW9ucy5cclxuVGhpcyBwbGF0Zm9ybSBpcyBwcmltYXJpbHkgZGl2aWRlZCBpbnRvIGZvdXIgc2VjdGlvbnMgLSBNZWNoYW5pY2FsLCBcclxuUHJvZHVjdGlvbiwgRWxlY3RyaWNhbCwgYW5kIENvbXB1dGVyIEVMQSBzZWN0aW9uLlxyXG5BcyB5b3UgbWF5IGFscmVhZHkga25vdywgdGhlIE1lY2hhbmljYWwsIFByb2R1Y3Rpb24gYW5kIFxyXG5FbGVjdHJpY2FsIEVMQSBTZWN0aW9ucyBhcmUgZm9yIHRob3NlIGluIHRoZWlyIHNlY29uZCB5ZWFyLCBcclxud2hpbGUgdGhlIENvbXB1dGVyIEVMQSBzZWN0aW9uIGlzIGZvciBDb21wdXRlciBlbmdpbmVlcmluZyBzdHVkZW50cyBpbiB0aGVpciB0aGlyZCB5ZWFyLlxyXG5gO1xyXG5cclxuY29uc3QgdGV4dEFyciA9IFtcclxuICBbXHJcbiAgICBcIk1lY2hhbmljYWwgRUxBIFNlY3Rpb25cIixcclxuICAgIFwiTWVjaGFuaWNhbCBFTEEgZm9jdXNlcyBvbiBhcHBseWluZyB0aGVvcmV0aWNhbCBjb25jZXB0cyB0byByZWFsLXdvcmxkIGFwcGxpY2F0aW9ucy4gU3R1ZGVudHMgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcnkgYW5kIGFwcGxpY2F0aW9uIGJ5IHRlc3RpbmcgbWVjaGFuaWNhbCBzeXN0ZW1zIHRocm91Z2ggZXhwZXJpbWVudHMgaW52b2x2aW5nIEFwcGxpZWQgTWVjaGFuaWNzIChBTSkgYW5kIFN0cmVuZ3RoIG9mIE1hdGVyaWFscyAoU00pLlwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJQcm9kdWN0aW9uIEVMQSBTZWN0aW9uXCIsXHJcbiAgICBcIlByb2R1Y3Rpb24gRUxBIGRlbHZlcyBpbnRvIHRoZSBwcmFjdGljYWxpdGllcyBvZiBtYW51ZmFjdHVyaW5nLiBTdHVkZW50cyBleHBsb3JlIGVmZmljaWVudCBwcm9kdWN0aW9uIHRlY2huaXF1ZXMgdGhyb3VnaCBleHBlcmltZW50cyBpbiBhcmVhcyBsaWtlIG1hY2hpbmluZywgd2VsZGluZywgY2FzdGluZywgZm9ybWluZywgYW5kIGJlbmNoLWZpdHRpbmcsIGRldmVsb3BpbmcgYSBzdHJvbmcgZm91bmRhdGlvbiBmb3IgZnV0dXJlIGluZHVzdHJpYWwgc3VjY2Vzcy5cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiRWxlY3RyaWNhbCBFTEEgU2VjdGlvblwiLFxyXG4gICAgXCJFbGVjdHJpY2FsIEVMQSBicmluZ3MgZWxlY3RyaWNhbCBwcmluY2lwbGVzIHRvIGxpZmUuIFN0dWRlbnRzIGdhaW4gcHJhY3RpY2FsIGV4cGVyaWVuY2Ugd2l0aCBjaXJjdWl0cywgZWxlY3Ryb25pY3MsIHBvd2VyIHN5c3RlbXMsIGFuZCBjb250cm9sIHN5c3RlbXMgdGhyb3VnaCBleHBlcmltZW50cyBpbnZvbHZpbmcgcmVhbC13b3JsZCBlcXVpcG1lbnQgbGlrZSBUcmFuc2Zvcm1lcnMsIG9zY2lsbG9zY29wZXMsIGFuZCBvdGhlciBlbGVjdHJpY2FsIG1hY2hpbmVzLlwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJDb21wdXRlciBFTEEgU2VjdGlvblwiLFxyXG4gICAgXCJDb21wdXRlciBFTEEgb2ZmZXJzIGhhbmRzLW9uIGV4cGVyaWVuY2Ugd2l0aCBoYXJkd2FyZSwgc29mdHdhcmUgYW5kIGJhc2ljIGVuZ2luZWVyaW5nIGNvbmNlcHRzLCBieSBzb2xpZGlmeWluZyB0aGVvcnkgdGhyb3VnaCBidWlsZGluZyBjaXJjdWl0cywgcHJvZ3JhbW1pbmcgbWljcm9jb250cm9sbGVycywgYW5kIGV4cGxvcmluZyBjb21wdXRlciBuZXR3b3Jrcy5cIixcclxuICBdLFxyXG5dO1xyXG5cclxuY29uc3Qgc2VjdGlvbk5hdmlnYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbnNlY3Rpb25OYXZpZ2F0ZS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1uYXZpZ2F0ZVwiKTtcclxuc2VjdGlvbk5hdmlnYXRlLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItd2VsY29tZVwiKTtcclxubWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uTmF2aWdhdGUpO1xyXG5cclxuY29uc3QgY29udGFpbmVyTmF2aWdhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250YWluZXJOYXZpZ2F0ZS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLW5hdmlnYXRlXCIpO1xyXG5zZWN0aW9uTmF2aWdhdGUuYXBwZW5kQ2hpbGQoY29udGFpbmVyTmF2aWdhdGUpO1xyXG5cclxuY29uc3QgZGl2SGVhZGVyTmF2aWdhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5kaXZIZWFkZXJOYXZpZ2F0ZS5jbGFzc0xpc3QuYWRkKFwiZGl2LWhlYWRlci1uYXZpZ2F0ZVwiKTtcclxuY29udGFpbmVyTmF2aWdhdGUuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyTmF2aWdhdGUpO1xyXG5cclxuY3JlYXRlSGVhZGVyU2Vjb25kYXJ5KGRpdkhlYWRlck5hdmlnYXRlLCBuYXZpZ2F0ZUhlYWRlcik7XHJcbmNyZWF0ZUNvbnRlbnQoY29udGFpbmVyTmF2aWdhdGUsIG5hdmlnYXRlVGV4dE1haW4pO1xyXG5cclxuY3JlYXRlTGlzdFRleHQoY29udGFpbmVyTmF2aWdhdGUsIHRleHRBcnIpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQ1RBIHNlY3Rpb25cclxuXHJcbmNvbnN0IGN0YUhlYWRlciA9IGBMZXQncyBnZXQgU3RhcnRlZCFgO1xyXG5cclxuY29uc3QgY3RhVGV4dCA9IGBcclxuQWxyaWdodCEgVGhhdCdzIGVub3VnaCB0YWxrLCBkb24ndCB5b3UgdGhpbms/IEhvcGVmdWxseSB5b3UncmVcclxucmFyaW5nIHRvIGdvIHNlZSB3aGF0IHdlJ3ZlIGdvdCBpbiBzdG9yZSBmb3IgeW91LiBXaXRob3V0IGZ1cnRoZXJcclxuYWRvLCBsZXQncyBnZXQgeW91IHN0YXJ0ZWQgb24geW91ciBKb3VybmV5LmA7XHJcblxyXG5jb25zdCBzZWN0aW9uQ1RBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbnNlY3Rpb25DVEEuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tY3RhXCIpO1xyXG5zZWN0aW9uQ1RBLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItd2VsY29tZVwiKTtcclxubWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uQ1RBKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lckNUQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhaW5lckNUQS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWN0YVwiKTtcclxuc2VjdGlvbkNUQS5hcHBlbmRDaGlsZChjb250YWluZXJDVEEpO1xyXG5cclxuY29uc3QgY29udGFpbmVyQ3RhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29udGFpbmVyQ3RhSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItY3RhLWhlYWRlclwiKTtcclxuY29udGFpbmVyQ1RBLmFwcGVuZENoaWxkKGNvbnRhaW5lckN0YUhlYWRlcik7XHJcblxyXG5jb25zdCBjb250YWluZXJDdGFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29udGFpbmVyQ3RhVGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWN0YS10ZXh0XCIpO1xyXG5jb250YWluZXJDVEEuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ3RhVGV4dCk7XHJcblxyXG5jcmVhdGVIZWFkZXJTZWNvbmRhcnkoY29udGFpbmVyQ3RhSGVhZGVyLCBjdGFIZWFkZXIpO1xyXG5jcmVhdGVDb250ZW50KGNvbnRhaW5lckN0YVRleHQsIGN0YVRleHQpO1xyXG5cclxuY29uc3QgY29udGFpbmVyQ292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250YWluZXJDb3Zlci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWNvdmVyXCIpO1xyXG5jb250YWluZXJDVEEuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ292ZXIpO1xyXG5cclxuY29uc3QgY29udGFpbmVyQ3RhQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29udGFpbmVyQ3RhQnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItY3RhLWJ0blwiKTtcclxuY29udGFpbmVyQ292ZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ3RhQnRuKTtcclxuXHJcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxubGluay5ocmVmID0gXCIuLi9yZXBvcnQvcmVwb3J0Lmh0bWxcIjtcclxubGluay5jbGFzc0xpc3QuYWRkKFwiYnRuLXZpZXctcmVwb3J0c1wiKTtcclxubGluay50ZXh0Q29udGVudCA9IFwiVklFVyBSRVBPUlRTXCI7XHJcbmNvbnRhaW5lckN0YUJ0bi5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbi8vZGlzcGxheSBmb290ZXJcclxucmVuZGVyRm9vdGVyKGJvZHksIFtobWUsIHJwdCwgYWJ0XSk7XHJcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVIZWFkZXJQcmltYXJ5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHRleHQpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhlYWRlclwiKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVIZWFkZXJTZWNvbmRhcnkgPSBmdW5jdGlvbiAoZWxlbWVudCwgdGV4dCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDb250ZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRlbnQpIHtcclxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcblxyXG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgcmV0dXJuIHBhcmFncmFwaDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5lQnJlYWsgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gIGNvbnN0IGVudGVyTmV4dExpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChlbnRlck5leHRMaW5lKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVMaXN0VGV4dCA9IGZ1bmN0aW9uIChlbGVtZW50LCBhcnJheSkge1xyXG4gIGNvbnN0IHVub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh1bm9yZGVyZWRMaXN0KTtcclxuXHJcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoYXJyKSB7XHJcbiAgICBjb25zdCBmaXJzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBmaXJzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImZpcnN0LWxpc3QtaXRlbVwiKTtcclxuICAgIGZpcnN0SXRlbS50ZXh0Q29udGVudCA9IGFyclswXTtcclxuICAgIHVub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQoZmlyc3RJdGVtKTtcclxuICAgIGNvbnN0IHNlY29uZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBzZWNvbmRJdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtbGlzdC1pdGVtXCIpO1xyXG4gICAgZmlyc3RJdGVtLmFwcGVuZENoaWxkKHNlY29uZEl0ZW0pO1xyXG4gICAgc2Vjb25kSXRlbS50ZXh0Q29udGVudCA9IGFyclsxXTtcclxuICAgIHJldHVybiBzZWNvbmRJdGVtO1xyXG4gIH0pO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=