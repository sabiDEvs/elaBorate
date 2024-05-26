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
containerWelcome.classList.add("container");
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
sectionMission.classList.add("container");
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
sectionHelp.classList.add("container");
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
sectionNavigate.classList.add("container");
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
  const header = document.createElement("h1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7QUFDSDs7QUFFUztBQUNBO0FBQ0U7O0FBUTlCOztBQUVIO0FBQ0E7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFQUFtQjs7QUFFbkIsaUVBQWE7QUFDYiw2REFBUztBQUNULGlFQUFhO0FBQ2IsNkRBQVM7QUFDVCxpRUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUVBQXFCO0FBQ3JCLGlFQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFVOztBQUUzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlFQUFxQjtBQUNyQixpRUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQVU7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLHlFQUFxQjtBQUNyQixpRUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXFCO0FBQ3JCLGlFQUFhOztBQUViLGtFQUFjOztBQUVkO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXFCO0FBQ3JCLGlFQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVNMO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9DU1MvYWJvdXQuY3NzPzYwMDkiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL0NTUy9zdHlsZS5jc3M/NzY3YyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9hYm91dC5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2Fib3V0UGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlci5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyRm9vdGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9mb290ZXJcIjtcblxuaW1wb3J0IG1pc3Npb25JbWcgZnJvbSBcIi4uL1JFU09VUkNFUy9pbWFnZXMvbWlzc2lvbi5wbmdcIjtcbmltcG9ydCBhY2hpZXZlSW1nIGZyb20gXCIuLi9SRVNPVVJDRVMvaW1hZ2VzL2FjaGlldmUucG5nXCI7XG5pbXBvcnQgbmF2aWdhdGVJbWcgZnJvbSBcIi4uL1JFU09VUkNFUy9pbWFnZXMvbmF2aWdhdGUucG5nXCI7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZUNvbnRlbnQsXG4gIGNyZWF0ZUhlYWRlclByaW1hcnksXG4gIGNyZWF0ZUhlYWRlclNlY29uZGFyeSxcbiAgY3JlYXRlTGlzdFRleHQsXG4gIGxpbmVCcmVhayxcbn0gZnJvbSBcIi4vbW9kdWxlcy9hYm91dFBhZ2VcIjtcblxuaW1wb3J0IFwiLi4vQ1NTL2Fib3V0LmNzc1wiO1xuaW1wb3J0IFwiLi4vQ1NTL3N0eWxlLmNzc1wiO1xuXG4vLyBTZWxlY3RpbmcgYm9keSBlbGVtZW50XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vc3BlY2lmeSBuYXYgcGF0aFxuY29uc3QgaG1lID0gXCIuLi9pbmRleC5odG1sXCI7XG5jb25zdCBycHQgPSBcIi4uL3JlcG9ydC9yZXBvcnQuaHRtbFwiO1xuY29uc3QgYWJ0ID0gXCIuL2Fib3V0Lmh0bWxcIjtcblxuLy9jYWxsIGhlYWRlciBmdW5jdGlvblxucmVuZGVySGVhZGVyKGJvZHksIFtobWUsIHJwdCwgYWJ0XSk7XG5cbi8vIEFkZGluZyBtYWluIGVsZW1lbnRcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gV2VsY29tZSBzZWN0aW9uXG5jb25zdCB3ZWxjb21lSGVhZGVyID0gYFdlbGNvbWUgdG8gZWxhQm9yYXRlIWA7XG5cbmNvbnN0IHdlbGNvbWVUZXh0MSA9IGBTYWx1dGF0aW9ucywgRGVhciBSZWFkZXIhIFdlJ3JlIGRlbGlnaHRlZFxudGhhdCB5b3UndmUgZGVjaWRlZCB0byB0YWtlIHRoaXMgbW9zdCBzdGF0ZWx5IGRlY2lzaW9uIGluIGltcHJvdmluZyBcbnlvdXIgdW5kZXJzdGFuZGluZyBvZiBFTEEgYW5kIHdyaXRpbmcgcHJvcGVybHkgY29vcmRpbmF0ZWQgcmVwb3J0cy4gXG5JbiB0aGlzIGFydGljbGUsIHdlJ3JlIGdvaW5nIHRvIHRha2UgeW91IG9uIGEgYnJpZWYgam91cm5leSwgXG5lbGFib3JhdGluZyBvbiBzb21lIGtleSB0aGluZ3Ncbmxpa2Ugb3VyIG1pc3Npb24gc3RhdGVtZW50LCBhbmQgaG93IHlvdSBzaGFsbCBuYXZpZ2F0ZSB0aGlzXG5wbGF0Zm9ybS4gQnV0IGZpcnN0LCB3ZSB3YW50IHlvdSB0byBwb25kZXIgb24gc29tZXRoaW5nLi4uYDtcblxuY29uc3Qgd2VsY29tZVRleHQyID0gYFRoZSBjby1mb3VuZGVyIG9mIFJvbGxzLVJveWNlLCBTaXIgSGVucnkgUm95Y2UsIGxlZnQgdGhpcyB3b3JsZCB3aXRoIGhpc1xucG9wdWxhciBtYXhpbSAtIOKAnFN0cml2ZSBmb3IgcGVyZmVjdGlvbiBpbiBldmVyeXRoaW5nIHlvdSBkby4gVGFrZVxudGhlIGJlc3QgdGhhdCBleGlzdHMgYW5kIG1ha2UgaXQgYmV0dGVyLiBXaGVuIGl0IGRvZXMgbm90IGV4aXN0LFxuZGVzaWduIGl04oCdLiBEbyBrZWVwIHRoYXQgcXVvdGUgaW4gbWluZDsgaXQnbGwgY29tZSBpbiBoYW5keSBhcyB5b3VcbmdvIHRocm91Z2ggdGhpcyBhcnRpY2xlLmA7XG5cbmNvbnN0IHdlbGNvbWVUZXh0MyA9IGBZb3UgbWF5IGhhdmUgd29uZGVyZWQsIG9uY2Ugb3IgdHdpY2VcbnByb2JhYmx5LCBob3cgeW91IGNvdWxkIGJldHRlciB1bmRlcnN0YW5kIGFuIGV4cGVyaW1lbnQsIGhvdyB5b3VcbmNvdWxkIHNhdmUgdGltZSBlc3BlY2lhbGx5IGluIHdyaXRpbmcgcmVwb3J0cyB0aGF0IGFyZSBkZWZpbml0aXZlXG5hbmQgYXJlIG5vdCBmaWxsZWQgd2l0aCB1bmltcG9ydGFudCBzdHVmZnMsIG9yIGhvdyB5b3UgY2FuIHdyaXRlIGFcbm1vcmUgcHJlc2VudGFibGUgZXhwZXJpbWVudCByZXBvcnQ7IGhpZ2hsaWdodGluZyB0aGUgaW1wb3J0YW50IHBhcnRzXG5hbmQgY29tcG9zaW5nIGEgcGVyZmVjdGx5IHByZXNlbnRhYmxlIHJlcG9ydCBhbGwgdG9nZXRoZXIuLi5cblByb2JhYmx5LCB5b3UgbWF5IGhhdmUgd29uZGVyZWQgaG93IHlvdSBjYW4gaGF2ZSBlbm91Z2ggcmVzb3VyY2VzXG5yZWFkaWx5IGF2YWlsYWJsZSBmb3IgZXZlcnkgZXhwZXJpbWVudCBpbiBvbmUgcGxhY2UsIHNvIHlvdSBkb24ndFxuaGF2ZSB0byBzdGFydCBicm93c2luZyB0aGUgZm91ciBjb3JuZXJzIG9mIHRoZSB3ZWIuIFdlbGwsIHdvcnJ5IG5vXG5tb3JlLCBhcyB3ZSBob3BlIHRvIGhlbHAgeW91IGVhc2UgeW91ciBidXJkZW4uYDtcblxuLy8gQWRkaW5nIHNlY3Rpb24gZWxlbWVudFxuY29uc3Qgc2VjdGlvbldlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbm1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbldlbGNvbWUpO1xuXG4vLyBBZGRpbmcgYSBkaXYgZWxlbWVudFxuY29uc3QgY29udGFpbmVyV2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXJXZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5jb250YWluZXJXZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lXCIpO1xuc2VjdGlvbldlbGNvbWUuYXBwZW5kQ2hpbGQoY29udGFpbmVyV2VsY29tZSk7XG5cbi8vIENyZWF0aW5nIG1haW4gaGVhZGVyXG5jcmVhdGVIZWFkZXJQcmltYXJ5KGNvbnRhaW5lcldlbGNvbWUsIHdlbGNvbWVIZWFkZXIpO1xuXG5jcmVhdGVDb250ZW50KGNvbnRhaW5lcldlbGNvbWUsIHdlbGNvbWVUZXh0MSk7XG5saW5lQnJlYWsoY29udGFpbmVyV2VsY29tZSk7XG5jcmVhdGVDb250ZW50KGNvbnRhaW5lcldlbGNvbWUsIHdlbGNvbWVUZXh0Mik7XG5saW5lQnJlYWsoY29udGFpbmVyV2VsY29tZSk7XG5jcmVhdGVDb250ZW50KGNvbnRhaW5lcldlbGNvbWUsIHdlbGNvbWVUZXh0Myk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE1pc3Npb24gc2VjdGlvblxuXG5jb25zdCBtaXNzaW9uSGVhZGVyID0gYE91ciBNaXNzaW9uYDtcblxuY29uc3QgbWlzc2lvblRleHQgPSBgIFxuV2UnbGwgc3RhcnQgYnkgb3V0bGluaW5nIHdoeSBlbGFCb3JhdGUgZXhpc3RzIGFuZCB3aGF0IHlvdSBjYW5cbmV4cGVjdCBmcm9tIHRoaXMgbGVhcm5pbmcgcGxhdGZvcm0uIFdpdGggZWxhQm9yYXRlLCB3ZSB3YW50IHRvXG5oZWxwIHlvdW5nIGVuZ2luZWVycyBpbiB0cmFpbmluZywgcHJvcGVybHkgdW5kZXJzdGFuZCBhbGwgdGhhdCBpc1xuZ29pbmcgb24gaW4gdGhlaXIgdmFyaW91cyBFTEEgZXhwZXJpbWVudHMuIEhhdmluZyBnb25lIHRocm91Z2ggdGhlIHN5c3RlbSBvdXJzZWx2ZXMsIFxud2Ugc2F3IGhvdyBkaWZmaWN1bHQgaXQgd2FzIGZvciBhIGZpcnN0IHllYXIgZW5naW5lZXJpbmcgc3R1ZGVudCwgXG5qdXN0IHN0YXJ0aW5nIHRoZSBQcmUtVUJJVFMsIHRvIHNtb290aGx5IHRyYW5zaXRpb24gdG8gdGhlIHJpZ29yb3VzIFxuYW5kIGRlbWFuZGluZyBzZWNvbmQgeWVhciBFTEEgcHJhY3RpY2FsLiBcblRoZXJlIHdlcmUgdGltZXMgd2Ugd2lzaGVkIHdlIGhhZCBhIHByb3BlciBndWlkZSBvbiBcbmhvdyB0byBnbyBhYm91dCB0aGUgdmFyaW91cyBFTEEgYWN0aXZpdGllcywgXG5lc3BlY2lhbGx5IGluIHVuZGVyc3RhbmRpbmcgdGhlIGV4cGVyaW1lbnQgdG8gYmUgcGVyZm9ybWVkIFxuYW5kIHByZXBhcmluZyB0aGUgcmVwb3J0cyB0aGVyZWFmdGVyLiBUcnV0aCBiZSB0b2xkLCBpdCB3YXNuJ3QgZWFzeSBkZWx2aW5nIGludG8gdGhlIHdlYiwgXG5zZWFyY2hpbmcgZm9yIGdvb2QgcmVzb3VyY2VzIGVzcGVjaWFsbHkgb24gdGhlb3JpZXMgYW5kIGV4cGVyaW1lbnQgcHJvY2VkdXJlcy4gXG5UaGlzIGlzIHdoeSB3ZSd2ZSBhcnJhbmdlZCBhbGwgdGhlIHJlc291cmNlcyB5b3Ugd291bGQgbmVlZCB0byBlbGFib3JhdGVseSBcbnBlcmZvcm0gYWxsIHRoZSBFTEEgYWN0aXZpdGllcywgaW4gb25lIHBsYWNlLlxuV2UgYmVsaWV2ZSB0aGF0IGJ5IGRvaW5nIHNvLCB5b3UgY2FuIGV4cGVyaWVuY2UgbWluaW1hbCB0byBubyBcbmRpZmZpY3VsdHkgaW4gZ29pbmcgYWJvdXQgeW91ciBFTEEgYWN0aXZpdGllcywgYW5kIG9mIGNvdXJzZSwgXG5ldmVudHVhbGx5IGFjZSB0aGUgY291cnNlIHdpdGggZ29vZCBncmFkZXMuYDtcblxuY29uc3Qgc2VjdGlvbk1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnNlY3Rpb25NaXNzaW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLW1pc3Npb25cIik7XG5zZWN0aW9uTWlzc2lvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xubWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uTWlzc2lvbik7XG5cbmNvbnN0IGNvbnRhaW5lck1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyTWlzc2lvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLW1pc3Npb25cIik7XG5zZWN0aW9uTWlzc2lvbi5hcHBlbmRDaGlsZChjb250YWluZXJNaXNzaW9uKTtcblxuY29uc3QgZGl2VGV4dE1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGl2VGV4dE1pc3Npb24uY2xhc3NMaXN0LmFkZChcImRpdi10ZXh0LW1pc3Npb25cIik7XG5jb250YWluZXJNaXNzaW9uLmFwcGVuZENoaWxkKGRpdlRleHRNaXNzaW9uKTtcbmNyZWF0ZUhlYWRlclNlY29uZGFyeShkaXZUZXh0TWlzc2lvbiwgbWlzc2lvbkhlYWRlcik7XG5jcmVhdGVDb250ZW50KGRpdlRleHRNaXNzaW9uLCBtaXNzaW9uVGV4dCk7XG5cbmNvbnN0IGRpdkltZ01pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGl2SW1nTWlzc2lvbi5jbGFzc0xpc3QuYWRkKFwiZGl2LWltZy1taXNzaW9uXCIpO1xuY29udGFpbmVyTWlzc2lvbi5hcHBlbmRDaGlsZChkaXZJbWdNaXNzaW9uKTtcblxuY29uc3QgaW1nTWlzc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5kaXZJbWdNaXNzaW9uLmFwcGVuZENoaWxkKGltZ01pc3Npb24pO1xuaW1nTWlzc2lvbi5zcmMgPSBtaXNzaW9uSW1nO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV2h5IGFsbG93IHVzIGhlbHAgeW91IHNlY3Rpb24gc2VjdGlvblxuXG5jb25zdCBoZWxwSGVhZGVyID0gYFdoeSBhbGxvdyB1cyBoZWxwIHlvdT9gO1xuXG5jb25zdCBoZWxwVGV4dCA9IGBcbkNhbiB5b3UgcmVjYWxsIHdoYXQgd2UgdG9sZCB5b3UgdG8gcG9uZGVyIG9uIHdoZW4gd2Ugd2VsY29tZWQgeW91PyBcbklmIHlvdSByZWZsZWN0ZWQgb24gdGhlIG1heGltIHdpdGggdGhlIHNhbWUgd2F2ZWxlbmd0aCBhcyB1cywgXG55b3Ugd2lsbCBmaW5kIHRoYXQgU2lyIEhlbnJ5IFJveWNlIHdhbnRlZCBwZXJmZWN0aW9uIGluIGFsbCBoZSBkaWQuIFxuVGhpcyBkcml2ZSBhcyB3ZSBrbm93IGl0LCB5aWVsZGVkIGZydWl0cyBhcyB3ZSBhcmUgc3VyZSB5b3UgaGF2ZTsgXG5vbmUgd2F5IG9yIGFub3RoZXIsIGhlYXJkIGFib3V0IHRoZSBjb3ZldGVkIFJvbGxzLVJveWNlIGF1dG9tb2JpbGUuIFxuV2UgYWxzbyB3YW50IHRoYXQgZm9yIHlvdSEgLSBPZiBjb3Vyc2UsIEknbSB0YWxraW5nIGFib3V0IHBlcmZlY3Rpb24sIFxubm90IHRoZSBSb2xscy1Sb3ljZSA6KSAtIEFueXdheXMsIGhhdmluZyBwYXNzZWQgdGhyb3VnaCB0aGUgc3lzdGVtIG91cnNlbHZlcywgXG5XZSBiZWxpZXZlIHlvdSB3YW50IHRvIHByb3Blcmx5IHVuZGVyc3RhbmQgeW91ciBkaWZmZXJlbnQgZXhwZXJpbWVudHMsIFxudGhhdCB5b3UgYWxzbyB3YW50IHRvIGFjZSBhbGwgRUxBIGNvdXJzZXMgLSBUaGF0IG15IGZyaWVuZCwgaXMgc3RyaXZpbmcgZm9yIHBlcmZlY3Rpb24sIFxuYW5kIGxpa2UgU2lyIFJveWNlLCB3ZSBzaGFsbCB0YWtlIHRoZSBiZXN0IHRoYXQgZXhpc3RzIGFuZCBtYWtlIGl0IGJldHRlciFcbmA7XG5cbmNvbnN0IHNlY3Rpb25IZWxwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5zZWN0aW9uSGVscC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1oZWxwXCIpO1xuc2VjdGlvbkhlbHAuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbm1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlbHApO1xuXG5jb25zdCBjb250YWluZXJIZWxwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNlY3Rpb25IZWxwLmFwcGVuZENoaWxkKGNvbnRhaW5lckhlbHApO1xuXG5jcmVhdGVIZWFkZXJTZWNvbmRhcnkoY29udGFpbmVySGVscCwgaGVscEhlYWRlcik7XG5jcmVhdGVDb250ZW50KGNvbnRhaW5lckhlbHAsIGhlbHBUZXh0KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXaGF0IHdlIGhvcGUgdG8gYWNoaWV2ZSBzZWN0aW9uXG5cbmNvbnN0IGFjaGlldmVIZWFkZXIgPSBgV2hhdCB3ZSBob3BlIHRvIGFjaGlldmVgO1xuXG5jb25zdCBhY2hpZXZlVGV4dCA9IGAgXG5BcyBhIFZhbGV0IHRlbmRzIHRvIGhpcyBNYXN0ZXIgZXZlbiBpbiB0aGUgc21hbGxlc3Qgb2YgdGFza3MsIGFuZCBhIE1haWQ7IFxuaGVyIE1pc3RyZXNzLCBvciBhcyBhIG5vYmxlIHN0ZWVkIGpvdXJuZXlzIHdpdGggaXRzIGJyYXZlIGtuaWdodCB0aHJvdWdoIGJhdHRsZXMgdW5lbmRpbmcsIFxuZWxhQm9yYXRlIGlzIGhlcmUgdG8gYmUgeW91ciBndWlkZSwgaGVscGluZyB5b3UgYXMgeW91IGdvIHRocm91Z2ggRUxBLlxuSW4gYWxsIGhvbmVzdHksIHdoYXQgd2UgaG9wZSB0byBhY2hpZXZlIGlzIHByb2JhYmx5IHdoYXQgeW91IHdhbnQgdG8gYWNoaWV2ZSBhcyB5b3UgZ28gXG50aHJvdWdoIHlvdXIgdmFyaW91cyBFTEEgZXhwZXJpbWVudHMuIFxuQW4g4oCcQeKAnSBpbiBhbGwgeW91ciBFTEEgcmVzdWx0cz8gQSBzZWFtbGVzc2x5IGdvb2QgRUxBIGV4cGVyaWVuY2U/IFxuQSBnb29kIGlkZWEgYW5kIHVuZGVyc3RhbmRpbmcgb2Ygd2hhdGV2ZXIgZXhwZXJpbWVudCB5b3UgbWF5IHBlcmZvcm0/IFxuQSB3ZWxsIHdyaXR0ZW4gYW5kIGVsYWJvcmF0ZWQgcmVwb3J0PyBTb21ldGhpbmcgdGhhdCBmYWNpbGl0YXRlcyB5b3VyIGlucXVpc2l0aXZlbmVzcyBcbmFuZCBwb2ludCB5b3UgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiB0byBnYXRoZXIgdGhlIGtub3dsZWRnZSB5b3Ugc2Vlaz8gWW91IGNvdWxkIG5hbWUgYSBkb3plbiwgcmVhbGx5LiBcbldoYXRldmVyIGdvb2QgdGhpbmcgeW91IHdpc2ggdG8gYWNoaWV2ZSBhcyB5b3UgZ28gYWJvdXQgeW91ciBFTEEgYWN0aXZpdGllcywgaXMgd2hhdCB3ZSB3YW50IGZvciB5b3UuXG5gO1xuXG5jb25zdCBzZWN0aW9uQWNoaWV2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuc2VjdGlvbkFjaGlldmUuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tYWNoaWV2ZVwiKTtcbnNlY3Rpb25BY2hpZXZlLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5tYWluLmFwcGVuZENoaWxkKHNlY3Rpb25BY2hpZXZlKTtcblxuY29uc3QgY29udGFpbmVyQWNoaWV2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXJBY2hpZXZlLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItYWNoaWV2ZVwiKTtcbnNlY3Rpb25BY2hpZXZlLmFwcGVuZENoaWxkKGNvbnRhaW5lckFjaGlldmUpO1xuXG5jb25zdCBkaXZJbWdBY2hpZXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpdkltZ0FjaGlldmUuY2xhc3NMaXN0LmFkZChcImRpdi1pbWctYWNoaWV2ZVwiKTtcbmNvbnRhaW5lckFjaGlldmUuYXBwZW5kQ2hpbGQoZGl2SW1nQWNoaWV2ZSk7XG5cbmNvbnN0IGltZ0FjaGlldmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZGl2SW1nQWNoaWV2ZS5hcHBlbmRDaGlsZChpbWdBY2hpZXZlKTtcbmltZ0FjaGlldmUuc3JjID0gYWNoaWV2ZUltZztcblxuY29uc3QgZGl2VGV4dEFjaGlldmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGl2VGV4dEFjaGlldmUuY2xhc3NMaXN0LmFkZChcImRpdi10ZXh0LWFjaGlldmVcIik7XG5jb250YWluZXJBY2hpZXZlLmFwcGVuZENoaWxkKGRpdlRleHRBY2hpZXZlKTtcbmNyZWF0ZUhlYWRlclNlY29uZGFyeShkaXZUZXh0QWNoaWV2ZSwgYWNoaWV2ZUhlYWRlcik7XG5jcmVhdGVDb250ZW50KGRpdlRleHRBY2hpZXZlLCBhY2hpZXZlVGV4dCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE5hdmlnYXRpbmcgdGhlIHBsYXRmb3JtIHNlY3Rpb25cblxuY29uc3QgbmF2aWdhdGVIZWFkZXIgPSBgTmF2aWdhdGluZyBlbGFCb3JhdGVgO1xuXG5jb25zdCBuYXZpZ2F0ZVRleHRNYWluID0gYFxuTm93IHRoYXQgd2UgaGF2ZSBwZXJmb3JtZWQgdGhlIGNvbnZlbnRpb25hbCBuaWNldGllcyBieSB3ZWxjb21pbmcgeW91LCBcbm1ha2luZyBjbGVhciBvdXIgaW50ZW50aW9ucyBhbmQgc3RhdGluZyB3aGF0IHdlIGhvcGUgdG8gYWNoaWV2ZSwgXG53ZSB3YW50IHRvIGFpZCB5b3VyIGV4cGVyaWVuY2Ugd2hlbiB1c2luZyB0aGlzIHBsYXRmb3JtLCBcbmJ5IHNob3dpbmcgeW91IGhvdyB0byBuYXZpZ2F0ZSB0aGUgdmFyaW91cyBzZWN0aW9ucy5cblRoaXMgcGxhdGZvcm0gaXMgcHJpbWFyaWx5IGRpdmlkZWQgaW50byBmb3VyIHNlY3Rpb25zIC0gTWVjaGFuaWNhbCwgXG5Qcm9kdWN0aW9uLCBFbGVjdHJpY2FsLCBhbmQgQ29tcHV0ZXIgRUxBIHNlY3Rpb24uXG5BcyB5b3UgbWF5IGFscmVhZHkga25vdywgdGhlIE1lY2hhbmljYWwsIFByb2R1Y3Rpb24gYW5kIFxuRWxlY3RyaWNhbCBFTEEgU2VjdGlvbnMgYXJlIGZvciB0aG9zZSBpbiB0aGVpciBzZWNvbmQgeWVhciwgXG53aGlsZSB0aGUgQ29tcHV0ZXIgRUxBIHNlY3Rpb24gaXMgZm9yIENvbXB1dGVyIGVuZ2luZWVyaW5nIHN0dWRlbnRzIGluIHRoZWlyIHRoaXJkIHllYXIuXG5gO1xuXG5jb25zdCB0ZXh0QXJyID0gW1xuICBbXG4gICAgXCJNZWNoYW5pY2FsIEVMQSBTZWN0aW9uXCIsXG4gICAgXCJNZWNoYW5pY2FsIEVMQSBmb2N1c2VzIG9uIGFwcGx5aW5nIHRoZW9yZXRpY2FsIGNvbmNlcHRzIHRvIHJlYWwtd29ybGQgYXBwbGljYXRpb25zLiBTdHVkZW50cyBicmlkZ2UgdGhlIGdhcCBiZXR3ZWVuIHRoZW9yeSBhbmQgYXBwbGljYXRpb24gYnkgdGVzdGluZyBtZWNoYW5pY2FsIHN5c3RlbXMgdGhyb3VnaCBleHBlcmltZW50cyBpbnZvbHZpbmcgQXBwbGllZCBNZWNoYW5pY3MgKEFNKSBhbmQgU3RyZW5ndGggb2YgTWF0ZXJpYWxzIChTTSkuXCIsXG4gIF0sXG4gIFtcbiAgICBcIlByb2R1Y3Rpb24gRUxBIFNlY3Rpb25cIixcbiAgICBcIlByb2R1Y3Rpb24gRUxBIGRlbHZlcyBpbnRvIHRoZSBwcmFjdGljYWxpdGllcyBvZiBtYW51ZmFjdHVyaW5nLiBTdHVkZW50cyBleHBsb3JlIGVmZmljaWVudCBwcm9kdWN0aW9uIHRlY2huaXF1ZXMgdGhyb3VnaCBleHBlcmltZW50cyBpbiBhcmVhcyBsaWtlIG1hY2hpbmluZywgd2VsZGluZywgY2FzdGluZywgZm9ybWluZywgYW5kIGJlbmNoLWZpdHRpbmcsIGRldmVsb3BpbmcgYSBzdHJvbmcgZm91bmRhdGlvbiBmb3IgZnV0dXJlIGluZHVzdHJpYWwgc3VjY2Vzcy5cIixcbiAgXSxcbiAgW1xuICAgIFwiRWxlY3RyaWNhbCBFTEEgU2VjdGlvblwiLFxuICAgIFwiRWxlY3RyaWNhbCBFTEEgYnJpbmdzIGVsZWN0cmljYWwgcHJpbmNpcGxlcyB0byBsaWZlLiBTdHVkZW50cyBnYWluIHByYWN0aWNhbCBleHBlcmllbmNlIHdpdGggY2lyY3VpdHMsIGVsZWN0cm9uaWNzLCBwb3dlciBzeXN0ZW1zLCBhbmQgY29udHJvbCBzeXN0ZW1zIHRocm91Z2ggZXhwZXJpbWVudHMgaW52b2x2aW5nIHJlYWwtd29ybGQgZXF1aXBtZW50IGxpa2UgVHJhbnNmb3JtZXJzLCBvc2NpbGxvc2NvcGVzLCBhbmQgb3RoZXIgZWxlY3RyaWNhbCBtYWNoaW5lcy5cIixcbiAgXSxcbiAgW1xuICAgIFwiQ29tcHV0ZXIgRUxBIFNlY3Rpb25cIixcbiAgICBcIkNvbXB1dGVyIEVMQSBvZmZlcnMgaGFuZHMtb24gZXhwZXJpZW5jZSB3aXRoIGhhcmR3YXJlLCBzb2Z0d2FyZSBhbmQgYmFzaWMgZW5naW5lZXJpbmcgY29uY2VwdHMsIGJ5IHNvbGlkaWZ5aW5nIHRoZW9yeSB0aHJvdWdoIGJ1aWxkaW5nIGNpcmN1aXRzLCBwcm9ncmFtbWluZyBtaWNyb2NvbnRyb2xsZXJzLCBhbmQgZXhwbG9yaW5nIGNvbXB1dGVyIG5ldHdvcmtzLlwiLFxuICBdLFxuXTtcblxuY29uc3Qgc2VjdGlvbk5hdmlnYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5zZWN0aW9uTmF2aWdhdGUuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tbmF2aWdhdGVcIik7XG5zZWN0aW9uTmF2aWdhdGUuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbm1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbk5hdmlnYXRlKTtcblxuY29uc3QgY29udGFpbmVyTmF2aWdhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyTmF2aWdhdGUuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1uYXZpZ2F0ZVwiKTtcbnNlY3Rpb25OYXZpZ2F0ZS5hcHBlbmRDaGlsZChjb250YWluZXJOYXZpZ2F0ZSk7XG5cbmNvbnN0IGRpdkhlYWRlck5hdmlnYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmRpdkhlYWRlck5hdmlnYXRlLmNsYXNzTGlzdC5hZGQoXCJkaXYtaGVhZGVyLW5hdmlnYXRlXCIpO1xuY29udGFpbmVyTmF2aWdhdGUuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyTmF2aWdhdGUpO1xuXG5jcmVhdGVIZWFkZXJTZWNvbmRhcnkoZGl2SGVhZGVyTmF2aWdhdGUsIG5hdmlnYXRlSGVhZGVyKTtcbmNyZWF0ZUNvbnRlbnQoY29udGFpbmVyTmF2aWdhdGUsIG5hdmlnYXRlVGV4dE1haW4pO1xuXG5jcmVhdGVMaXN0VGV4dChjb250YWluZXJOYXZpZ2F0ZSwgdGV4dEFycik7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDVEEgc2VjdGlvblxuXG5jb25zdCBjdGFIZWFkZXIgPSBgTGV0J3MgZ2V0IFN0YXJ0ZWQhYDtcblxuY29uc3QgY3RhVGV4dCA9IGBcbkFscmlnaHQhIFRoYXQncyBlbm91Z2ggdGFsaywgZG9uJ3QgeW91IHRoaW5rPyBIb3BlZnVsbHkgeW91J3JlXG5yYXJpbmcgdG8gZ28gc2VlIHdoYXQgd2UndmUgZ290IGluIHN0b3JlIGZvciB5b3UuIFdpdGhvdXQgZnVydGhlclxuYWRvLCBsZXQncyBnZXQgeW91IHN0YXJ0ZWQgb24geW91ciBKb3VybmV5LmA7XG5cbmNvbnN0IHNlY3Rpb25DVEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnNlY3Rpb25DVEEuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tY3RhXCIpO1xuc2VjdGlvbkNUQS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xubWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uQ1RBKTtcblxuY29uc3QgY29udGFpbmVyQ1RBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lckNUQS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWN0YVwiKTtcbnNlY3Rpb25DVEEuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ1RBKTtcblxuY29uc3QgY29udGFpbmVyQ3RhSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lckN0YUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWN0YS1oZWFkZXJcIik7XG5jb250YWluZXJDVEEuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ3RhSGVhZGVyKTtcblxuY29uc3QgY29udGFpbmVyQ3RhVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXJDdGFUZXh0LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItY3RhLXRleHRcIik7XG5jb250YWluZXJDVEEuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ3RhVGV4dCk7XG5cbmNyZWF0ZUhlYWRlclNlY29uZGFyeShjb250YWluZXJDdGFIZWFkZXIsIGN0YUhlYWRlcik7XG5jcmVhdGVDb250ZW50KGNvbnRhaW5lckN0YVRleHQsIGN0YVRleHQpO1xuXG5jb25zdCBjb250YWluZXJDb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXJDb3Zlci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWNvdmVyXCIpO1xuY29udGFpbmVyQ1RBLmFwcGVuZENoaWxkKGNvbnRhaW5lckNvdmVyKTtcblxuY29uc3QgY29udGFpbmVyQ3RhQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lckN0YUJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLWN0YS1idG5cIik7XG5jb250YWluZXJDb3Zlci5hcHBlbmRDaGlsZChjb250YWluZXJDdGFCdG4pO1xuXG5jb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5saW5rLmhyZWYgPSBcIi4uL3JlcG9ydC9yZXBvcnQuaHRtbFwiO1xubGluay5jbGFzc0xpc3QuYWRkKFwiYnRuLXZpZXctcmVwb3J0c1wiKTtcbmxpbmsudGV4dENvbnRlbnQgPSBcIlZJRVcgUkVQT1JUU1wiO1xuY29udGFpbmVyQ3RhQnRuLmFwcGVuZENoaWxkKGxpbmspO1xuXG4vL2Rpc3BsYXkgZm9vdGVyXG5yZW5kZXJGb290ZXIoYm9keSwgW2htZSwgcnB0LCBhYnRdKTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVIZWFkZXJQcmltYXJ5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHRleHQpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIZWFkZXJTZWNvbmRhcnkgPSBmdW5jdGlvbiAoZWxlbWVudCwgdGV4dCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbnRlbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgY29udGVudCkge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIHJldHVybiBwYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgY29uc3QgbGluZUJyZWFrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgY29uc3QgZW50ZXJOZXh0TGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChlbnRlck5leHRMaW5lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVMaXN0VGV4dCA9IGZ1bmN0aW9uIChlbGVtZW50LCBhcnJheSkge1xuICBjb25zdCB1bm9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHVub3JkZXJlZExpc3QpO1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGFycikge1xuICAgIGNvbnN0IGZpcnN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBmaXJzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImZpcnN0LWxpc3QtaXRlbVwiKTtcbiAgICBmaXJzdEl0ZW0udGV4dENvbnRlbnQgPSBhcnJbMF07XG4gICAgdW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZChmaXJzdEl0ZW0pO1xuICAgIGNvbnN0IHNlY29uZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgc2Vjb25kSXRlbS5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWxpc3QtaXRlbVwiKTtcbiAgICBmaXJzdEl0ZW0uYXBwZW5kQ2hpbGQoc2Vjb25kSXRlbSk7XG4gICAgc2Vjb25kSXRlbS50ZXh0Q29udGVudCA9IGFyclsxXTtcbiAgICByZXR1cm4gc2Vjb25kSXRlbTtcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9