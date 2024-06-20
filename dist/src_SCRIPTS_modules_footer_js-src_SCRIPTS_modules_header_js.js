"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"],{

/***/ "./src/SCRIPTS/modules/footer.js":
/*!***************************************!*\
  !*** ./src/SCRIPTS/modules/footer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFooter: () => (/* binding */ renderFooter)
/* harmony export */ });
/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.js */ "./src/SCRIPTS/modules/landing.js");
/* harmony import */ var _RESOURCES_images_elaborate_footer_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/elaborate-footer-logo.png */ "./src/RESOURCES/images/elaborate-footer-logo.png");


const renderFooter = (body) => {
//create footer
const footer = document.createElement('footer');
//create left footer section
const leftFooter = document.createElement('section');
//create footer brand
const footerBrand = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createBrand)(_RESOURCES_images_elaborate_footer_logo_png__WEBPACK_IMPORTED_MODULE_1__, '');
//create footer navigation links
const footerNav = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();
footerNav.id = 'footerNav';
//append children to leftFooter
leftFooter.appendChild(footerBrand);
leftFooter.appendChild(footerNav);
leftFooter.id = 'leftFoot';
//Append left footer section to the footer
footer.appendChild(leftFooter);
//create right footer section
const rightFooter = document.createElement('section');
rightFooter.id = 'rightFoot';
//create  subscribe text
const subText = document.createElement('p');
subText.textContent = "Get our latest innovative news";
//create subscribe div
const subDiv = document.createElement('div');
subDiv.id = 'subscribe';
//create footer subscribe input
const subInput = document.createElement('input');
subInput.type = 'email';
subInput.placeholder = 'Email Address';
subInput.id = 'subEmail';
//create footer subscribe button
const subButton = document.createElement('div');
subButton.textContent = 'Subscribe';
subButton.id = 'subButton';
//Append sub input and button to it Div
subDiv.appendChild(subInput);
subDiv.appendChild(subButton);
//create copyright text
const copyright = document.createElement('div');
copyright.innerHTML = `&#169; Copyright <span>${new Date().getFullYear()}</span>`;
//create reserved right text
const reserved = document.createElement('p');
reserved.innerHTML = 'All rights reserved. A <span>sabi</span>Devs initiative';
//Append children to right footer element
rightFooter.appendChild(subText);
rightFooter.appendChild(subDiv);
rightFooter.appendChild(copyright);
rightFooter.appendChild(reserved);
//Append right footer to footer
footer.appendChild(rightFooter);
body.appendChild(footer);
};


/***/ }),

/***/ "./src/SCRIPTS/modules/header.js":
/*!***************************************!*\
  !*** ./src/SCRIPTS/modules/header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHeader: () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.js */ "./src/SCRIPTS/modules/landing.js");
/* harmony import */ var _RESOURCES_images_elaBoratelogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/elaBoratelogo.png */ "./src/RESOURCES/images/elaBoratelogo.png");
/* harmony import */ var _RESOURCES_images_search_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RESOURCES/images/search-icon.png */ "./src/RESOURCES/images/search-icon.png");



const renderHeader = (body) => {
//create header element
const header = document.createElement('header');
//create icon div
const iconDiv = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createBrand)(_RESOURCES_images_elaBoratelogo_png__WEBPACK_IMPORTED_MODULE_1__);
iconDiv.id = 'iconDiv';
//create navBar
const navBox = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();
navBox.classList.add('nav'); 
//create search Box div
const searchDiv = document.createElement('div');
searchDiv.id = 'searchBox';
//create search Icon
const searchIcon = document.createElement('img');
searchIcon.src =  _RESOURCES_images_search_icon_png__WEBPACK_IMPORTED_MODULE_2__;
//create search input field
const searchInput = document.createElement('input');
searchInput.type = "text";
searchInput.id = "searchInput";
//Add searchBox items to parent
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchIcon);
//Add header items to header
header.appendChild(iconDiv);
header.appendChild(navBox);
header.appendChild(searchDiv);
//create menu
(0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createMenu)(header);
//Add header to body tag
body.appendChild(header);
}


/***/ }),

/***/ "./src/SCRIPTS/modules/landing.js":
/*!****************************************!*\
  !*** ./src/SCRIPTS/modules/landing.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carousel: () => (/* binding */ carousel),
/* harmony export */   createBrand: () => (/* binding */ createBrand),
/* harmony export */   createDept: () => (/* binding */ createDept),
/* harmony export */   createMenu: () => (/* binding */ createMenu),
/* harmony export */   createNavBar: () => (/* binding */ createNavBar),
/* harmony export */   createNavLink: () => (/* binding */ createNavLink),
/* harmony export */   createService: () => (/* binding */ createService),
/* harmony export */   generateHeroSection: () => (/* binding */ generateHeroSection)
/* harmony export */ });
/* harmony import */ var _RESOURCES_images_cpe200_students_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/cpe200-students.png */ "./src/RESOURCES/images/cpe200-students.png");
/* harmony import */ var _RESOURCES_images_persis_engr_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/persis-engr.png */ "./src/RESOURCES/images/persis-engr.png");
/* harmony import */ var _RESOURCES_images_engr_student_200L_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RESOURCES/images/engr-student-200L.png */ "./src/RESOURCES/images/engr-student-200L.png");
/* harmony import */ var _RESOURCES_images_dontekk_engr_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../RESOURCES/images/dontekk-engr.png */ "./src/RESOURCES/images/dontekk-engr.png");
/* harmony import */ var _RESOURCES_images_cpe180_females_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../RESOURCES/images/cpe180-females.png */ "./src/RESOURCES/images/cpe180-females.png");
/* harmony import */ var _RESOURCES_images_eee210_girls_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../RESOURCES/images/eee210-girls.png */ "./src/RESOURCES/images/eee210-girls.png");
//import images






//A function that creates nav links and returns the div
const createNavLink = (ref, text) => {
    const div = document.createElement('div');
    const link = document.createElement('a');
    const linkText = document.createElement('p');
    linkText.textContent = text;
    link.appendChild(linkText);
    link.href = ref;
    div.appendChild(link);
    return div;
};
//function to create menu
const createMenu = (header) => {
    const div = document.createElement('div');
    div.classList.add('menu');
    let bars = [];
    for(let i = 0; i < 3; i++){
        bars[i] = document.createElement('div');
        bars[i].classList.add('bars');
        div.appendChild(bars[i]);
    }
    div.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('active');
    });
    header.appendChild(div);
}
const createBrand = (logo, name = 'elaBorate') => {
    const div = document.createElement('div');
    //create logo icon
    const icon = document.createElement('img');
    icon.src = logo;
    div.appendChild(icon);
    //create brand name
    const brand = document.createElement('h1');
    brand.textContent = name;
    div.appendChild(brand);
    return div;
}
const createNavBar = () => {
    const div = document.createElement('nav');
    //create individual navLinks with imported function
    const aboutNav = createNavLink("#", "About");
    const reportNav = createNavLink("#", "Reports");
    const contactNav = createNavLink("#", "Contact Us");
    //Append navLinks to navBar
    div.appendChild(aboutNav);
    div.appendChild(reportNav);
    div.appendChild(contactNav);
    return div;
}
const generateHeroSection = (section) =>  {
    const heroContent = [
    {text: 'ELA made', word: 'Easy!!!',image: _RESOURCES_images_cpe200_students_png__WEBPACK_IMPORTED_MODULE_0__,class: 'group',inner: '#14213d',outer: '#fca311',call: 'GET STARTED'},
    {text: 'Lab Days?', word: 'A Breeze!!!', image: _RESOURCES_images_persis_engr_png__WEBPACK_IMPORTED_MODULE_1__, class: 'single', inner: '#000000', outer: '#fca311', call: 'CHOOSE US'},
    {text: 'Engineering Labs,', word: 'Simplified!!!', image: _RESOURCES_images_engr_student_200L_png__WEBPACK_IMPORTED_MODULE_2__,class: 'group', inner: '#000000', outer: '#14213d', call: 'TAP IN'},
    {text: 'Don\'t Wing It,', word: 'Elaborate It!!!', image: _RESOURCES_images_dontekk_engr_png__WEBPACK_IMPORTED_MODULE_3__,class: 'single', inner:  '#000000', outer: '#e5e5e5', call: 'UNLEASH  POTENTIAL'},
    {text: 'Unlock Lab Secrets with,', word: 'Elaborate!!!', image: _RESOURCES_images_cpe180_females_png__WEBPACK_IMPORTED_MODULE_4__,class: 'group', inner: '#14213d', outer: '#e5e5e5', call: 'START NOW'},
    {text: 'Grades Soaring, Elaborate', word: 'Thank You!!!', image: _RESOURCES_images_eee210_girls_png__WEBPACK_IMPORTED_MODULE_5__,class: 'single', inner: '#14213d', outer: '#000000', call: 'DIVE IN'},
];
    for(let i = 0; i < heroContent.length; i++){
        const heroDiv = document.createElement('div');
        const textContain = document.createElement('div');
        textContain.classList.add('container');
        const textDiv = document.createElement('div');
        textDiv.classList.add('textDiv');
        const heroText = document.createElement('div');
        heroText.classList.add('heroText');
        const heroSpan = document.createElement('div');
        heroSpan.classList.add('span');
        const heroImg = document.createElement('img');
        heroImg.classList.add(`${heroContent[i].class}`);
        const innerCircle = document.createElement('div');
        innerCircle.classList.add('innerCircle');
        const outerCircle = document.createElement('div');
        outerCircle.classList.add('outerCircle');
        const action = document.createElement('div');
        action.classList.add('callAction');
        heroText.textContent = heroContent[i].text;
        heroSpan.textContent = heroContent[i].word;
        heroImg.src = heroContent[i].image;
        innerCircle.style.background = heroContent[i].inner;
        outerCircle.style.background = heroContent[i].outer;
        action.textContent = heroContent[i].call;
        action.style.background = heroContent[i].inner;
        action.style.boxShadow = `5px 5px 1.5px 1px ${heroContent[i].outer}`;
        textDiv.appendChild(heroText);
        textDiv.appendChild(heroSpan);
        textContain.appendChild(textDiv);
        textContain.appendChild(action);
        heroDiv.appendChild(textContain);
        heroDiv.appendChild(heroImg);
        heroDiv.appendChild(innerCircle);
        heroDiv.appendChild(outerCircle);
        heroDiv.classList.toggle('heroSlide');
        section.appendChild(heroDiv);
    }
}
const carousel = () => {
    let count = 0;
    const showSlides = () => {
        let slide = document.getElementsByClassName('heroSlide');
        for(let i = 0; i < slide.length;  i++){
            slide[i].style.display = "none";
        }
        count++;
        if(count > slide.length){
            count = 1
        }
        slide[count - 1].style.display = 'grid';
        setTimeout(showSlides, 5000);
    }
    showSlides();
}
const createDept = (img, title, desc, level) => {
    const div = document.createElement('div');
    div.classList.add('deptBox');
    const image = document.createElement('img');
    image.src = img;
    const deptText = document.createElement('div');
    deptText.classList.add('deptText');
    const heading = document.createElement('h5');
    heading.textContent = title;
    const description = document.createElement('article');
    description.textContent = desc;
    const levels = document.createElement('div');
    levels.textContent = 'Level(s) covered: ' + level.toString();
    div.appendChild(image);
    deptText.appendChild(heading);
    deptText.appendChild(description);
    deptText.appendChild(levels);
    div.appendChild(deptText);
    return div;
};
const createService = (heading, body, action) => {
    const div = document.createElement('div');
    const head = document.createElement('h5');
    head.textContent = heading;
    const text = document.createElement('article');
    text.textContent = body;
    const button = document.createElement('div');
    button.classList.add('serveButton');
    button.textContent = action;
    div.appendChild(head);
    div.appendChild(text);
    div.appendChild(button);
    return div;
}


/***/ }),

/***/ "./src/RESOURCES/images/cpe180-females.png":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/cpe180-females.png ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/df13175fe258bff6b0a4.png";

/***/ }),

/***/ "./src/RESOURCES/images/cpe200-students.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/cpe200-students.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/2d44d89b66d005841d48.png";

/***/ }),

/***/ "./src/RESOURCES/images/dontekk-engr.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/dontekk-engr.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "../../asset/images/1d2ff3ef095565745892.png";

/***/ }),

/***/ "./src/RESOURCES/images/eee210-girls.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/eee210-girls.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "../../asset/images/e1399a8b062d382eade6.png";

/***/ }),

/***/ "./src/RESOURCES/images/elaBoratelogo.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/elaBoratelogo.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/89c558426b41fccd73cd.png";

/***/ }),

/***/ "./src/RESOURCES/images/elaborate-footer-logo.png":
/*!********************************************************!*\
  !*** ./src/RESOURCES/images/elaborate-footer-logo.png ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/89c7f3e4da4391052d31.png";

/***/ }),

/***/ "./src/RESOURCES/images/engr-student-200L.png":
/*!****************************************************!*\
  !*** ./src/RESOURCES/images/engr-student-200L.png ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/a7e5b3d68f8dcf41856b.png";

/***/ }),

/***/ "./src/RESOURCES/images/persis-engr.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/persis-engr.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "../../asset/images/a8a01d448238b0fd69d3.png";

/***/ }),

/***/ "./src/RESOURCES/images/search-icon.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/search-icon.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "../../asset/images/ecb34bb8fa4ecc3a4316.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1NDUklQVFNfbW9kdWxlc19mb290ZXJfanMtc3JjX1NDUklQVFNfbW9kdWxlc19oZWFkZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ2M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFXLENBQUMsd0VBQUs7QUFDckM7QUFDQSxrQkFBa0IseURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQix5QkFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1FO0FBQ1A7QUFDQTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBVyxDQUFDLGdFQUFJO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLHlEQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBVTtBQUNWO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUM4RDtBQUNKO0FBQ007QUFDTDtBQUNFO0FBQ0Y7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlDQUF5QyxrRUFBSSxzRUFBc0U7QUFDeEgsS0FBSywrQ0FBK0MsOERBQUkseUVBQXlFO0FBQ2pJLEtBQUsseURBQXlELG9FQUFJLG9FQUFvRTtBQUN0SSxLQUFLLHlEQUF5RCwrREFBSSxrRkFBa0Y7QUFDcEosS0FBSywrREFBK0QsaUVBQUksdUVBQXVFO0FBQy9JLEtBQUssZ0VBQWdFLCtEQUFJLHNFQUFzRTtBQUMvSTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9sYW5kaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlTmF2QmFyLCBjcmVhdGVCcmFuZH0gZnJvbSAnLi9sYW5kaW5nLmpzJztcclxuaW1wb3J0IGxvZ28xIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWxhYm9yYXRlLWZvb3Rlci1sb2dvLnBuZyc7XHJcbmNvbnN0IHJlbmRlckZvb3RlciA9IChib2R5KSA9PiB7XHJcbi8vY3JlYXRlIGZvb3RlclxyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuLy9jcmVhdGUgbGVmdCBmb290ZXIgc2VjdGlvblxyXG5jb25zdCBsZWZ0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4vL2NyZWF0ZSBmb290ZXIgYnJhbmRcclxuY29uc3QgZm9vdGVyQnJhbmQgPSBjcmVhdGVCcmFuZChsb2dvMSwgJycpO1xyXG4vL2NyZWF0ZSBmb290ZXIgbmF2aWdhdGlvbiBsaW5rc1xyXG5jb25zdCBmb290ZXJOYXYgPSBjcmVhdGVOYXZCYXIoKTtcclxuZm9vdGVyTmF2LmlkID0gJ2Zvb3Rlck5hdic7XHJcbi8vYXBwZW5kIGNoaWxkcmVuIHRvIGxlZnRGb290ZXJcclxubGVmdEZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJCcmFuZCk7XHJcbmxlZnRGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmF2KTtcclxubGVmdEZvb3Rlci5pZCA9ICdsZWZ0Rm9vdCc7XHJcbi8vQXBwZW5kIGxlZnQgZm9vdGVyIHNlY3Rpb24gdG8gdGhlIGZvb3RlclxyXG5mb290ZXIuYXBwZW5kQ2hpbGQobGVmdEZvb3Rlcik7XHJcbi8vY3JlYXRlIHJpZ2h0IGZvb3RlciBzZWN0aW9uXHJcbmNvbnN0IHJpZ2h0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5yaWdodEZvb3Rlci5pZCA9ICdyaWdodEZvb3QnO1xyXG4vL2NyZWF0ZSAgc3Vic2NyaWJlIHRleHRcclxuY29uc3Qgc3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuc3ViVGV4dC50ZXh0Q29udGVudCA9IFwiR2V0IG91ciBsYXRlc3QgaW5ub3ZhdGl2ZSBuZXdzXCI7XHJcbi8vY3JlYXRlIHN1YnNjcmliZSBkaXZcclxuY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnN1YkRpdi5pZCA9ICdzdWJzY3JpYmUnO1xyXG4vL2NyZWF0ZSBmb290ZXIgc3Vic2NyaWJlIGlucHV0XHJcbmNvbnN0IHN1YklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc3ViSW5wdXQudHlwZSA9ICdlbWFpbCc7XHJcbnN1YklucHV0LnBsYWNlaG9sZGVyID0gJ0VtYWlsIEFkZHJlc3MnO1xyXG5zdWJJbnB1dC5pZCA9ICdzdWJFbWFpbCc7XHJcbi8vY3JlYXRlIGZvb3RlciBzdWJzY3JpYmUgYnV0dG9uXHJcbmNvbnN0IHN1YkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zdWJCdXR0b24udGV4dENvbnRlbnQgPSAnU3Vic2NyaWJlJztcclxuc3ViQnV0dG9uLmlkID0gJ3N1YkJ1dHRvbic7XHJcbi8vQXBwZW5kIHN1YiBpbnB1dCBhbmQgYnV0dG9uIHRvIGl0IERpdlxyXG5zdWJEaXYuYXBwZW5kQ2hpbGQoc3ViSW5wdXQpO1xyXG5zdWJEaXYuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uKTtcclxuLy9jcmVhdGUgY29weXJpZ2h0IHRleHRcclxuY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvcHlyaWdodC5pbm5lckhUTUwgPSBgJiMxNjk7IENvcHlyaWdodCA8c3Bhbj4ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3NwYW4+YDtcclxuLy9jcmVhdGUgcmVzZXJ2ZWQgcmlnaHQgdGV4dFxyXG5jb25zdCByZXNlcnZlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxucmVzZXJ2ZWQuaW5uZXJIVE1MID0gJ0FsbCByaWdodHMgcmVzZXJ2ZWQuIEEgPHNwYW4+c2FiaTwvc3Bhbj5EZXZzIGluaXRpYXRpdmUnO1xyXG4vL0FwcGVuZCBjaGlsZHJlbiB0byByaWdodCBmb290ZXIgZWxlbWVudFxyXG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChzdWJUZXh0KTtcclxucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcclxucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcclxucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQocmVzZXJ2ZWQpO1xyXG4vL0FwcGVuZCByaWdodCBmb290ZXIgdG8gZm9vdGVyXHJcbmZvb3Rlci5hcHBlbmRDaGlsZChyaWdodEZvb3Rlcik7XHJcbmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuZXhwb3J0IHtyZW5kZXJGb290ZXJ9OyIsImltcG9ydCB7Y3JlYXRlTmF2QmFyLCBjcmVhdGVCcmFuZCwgY3JlYXRlTWVudX0gZnJvbSAnLi9sYW5kaW5nLmpzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lbGFCb3JhdGVsb2dvLnBuZyc7XHJcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmcnO1xyXG5jb25zdCByZW5kZXJIZWFkZXIgPSAoYm9keSkgPT4ge1xyXG4vL2NyZWF0ZSBoZWFkZXIgZWxlbWVudFxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuLy9jcmVhdGUgaWNvbiBkaXZcclxuY29uc3QgaWNvbkRpdiA9IGNyZWF0ZUJyYW5kKGxvZ28pO1xyXG5pY29uRGl2LmlkID0gJ2ljb25EaXYnO1xyXG4vL2NyZWF0ZSBuYXZCYXJcclxuY29uc3QgbmF2Qm94ID0gY3JlYXRlTmF2QmFyKCk7XHJcbm5hdkJveC5jbGFzc0xpc3QuYWRkKCduYXYnKTsgXHJcbi8vY3JlYXRlIHNlYXJjaCBCb3ggZGl2XHJcbmNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zZWFyY2hEaXYuaWQgPSAnc2VhcmNoQm94JztcclxuLy9jcmVhdGUgc2VhcmNoIEljb25cclxuY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5zZWFyY2hJY29uLnNyYyA9ICBzZWFyY2g7XHJcbi8vY3JlYXRlIHNlYXJjaCBpbnB1dCBmaWVsZFxyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnNlYXJjaElucHV0LnR5cGUgPSBcInRleHRcIjtcclxuc2VhcmNoSW5wdXQuaWQgPSBcInNlYXJjaElucHV0XCI7XHJcbi8vQWRkIHNlYXJjaEJveCBpdGVtcyB0byBwYXJlbnRcclxuc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcclxuc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xyXG4vL0FkZCBoZWFkZXIgaXRlbXMgdG8gaGVhZGVyXHJcbmhlYWRlci5hcHBlbmRDaGlsZChpY29uRGl2KTtcclxuaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJveCk7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hEaXYpO1xyXG4vL2NyZWF0ZSBtZW51XHJcbmNyZWF0ZU1lbnUoaGVhZGVyKTtcclxuLy9BZGQgaGVhZGVyIHRvIGJvZHkgdGFnXHJcbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufVxyXG5leHBvcnQge3JlbmRlckhlYWRlcn07IiwiLy9pbXBvcnQgaW1hZ2VzXHJcbmltcG9ydCBpbWcxIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY3BlMjAwLXN0dWRlbnRzLnBuZyc7XHJcbmltcG9ydCBpbWcyIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvcGVyc2lzLWVuZ3IucG5nJztcclxuaW1wb3J0IGltZzMgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lbmdyLXN0dWRlbnQtMjAwTC5wbmcnO1xyXG5pbXBvcnQgaW1nNCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2RvbnRla2stZW5nci5wbmcnO1xyXG5pbXBvcnQgaW1nNSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2NwZTE4MC1mZW1hbGVzLnBuZyc7XHJcbmltcG9ydCBpbWc2IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWVlMjEwLWdpcmxzLnBuZyc7XHJcbi8vQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgbmF2IGxpbmtzIGFuZCByZXR1cm5zIHRoZSBkaXZcclxuY29uc3QgY3JlYXRlTmF2TGluayA9IChyZWYsIHRleHQpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGlua1RleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgbGluay5hcHBlbmRDaGlsZChsaW5rVGV4dCk7XHJcbiAgICBsaW5rLmhyZWYgPSByZWY7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59O1xyXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBtZW51XHJcbmNvbnN0IGNyZWF0ZU1lbnUgPSAoaGVhZGVyKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICBsZXQgYmFycyA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKyl7XHJcbiAgICAgICAgYmFyc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJhcnNbaV0uY2xhc3NMaXN0LmFkZCgnYmFycycpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChiYXJzW2ldKTtcclxuICAgIH1cclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkaXYpO1xyXG59XHJcbmNvbnN0IGNyZWF0ZUJyYW5kID0gKGxvZ28sIG5hbWUgPSAnZWxhQm9yYXRlJykgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvL2NyZWF0ZSBsb2dvIGljb25cclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGljb24uc3JjID0gbG9nbztcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIC8vY3JlYXRlIGJyYW5kIG5hbWVcclxuICAgIGNvbnN0IGJyYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGJyYW5kLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChicmFuZCk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgLy9jcmVhdGUgaW5kaXZpZHVhbCBuYXZMaW5rcyB3aXRoIGltcG9ydGVkIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBhYm91dE5hdiA9IGNyZWF0ZU5hdkxpbmsoXCIjXCIsIFwiQWJvdXRcIik7XHJcbiAgICBjb25zdCByZXBvcnROYXYgPSBjcmVhdGVOYXZMaW5rKFwiI1wiLCBcIlJlcG9ydHNcIik7XHJcbiAgICBjb25zdCBjb250YWN0TmF2ID0gY3JlYXRlTmF2TGluayhcIiNcIiwgXCJDb250YWN0IFVzXCIpO1xyXG4gICAgLy9BcHBlbmQgbmF2TGlua3MgdG8gbmF2QmFyXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWJvdXROYXYpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHJlcG9ydE5hdik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmNvbnN0IGdlbmVyYXRlSGVyb1NlY3Rpb24gPSAoc2VjdGlvbikgPT4gIHtcclxuICAgIGNvbnN0IGhlcm9Db250ZW50ID0gW1xyXG4gICAge3RleHQ6ICdFTEEgbWFkZScsIHdvcmQ6ICdFYXN5ISEhJyxpbWFnZTogaW1nMSxjbGFzczogJ2dyb3VwJyxpbm5lcjogJyMxNDIxM2QnLG91dGVyOiAnI2ZjYTMxMScsY2FsbDogJ0dFVCBTVEFSVEVEJ30sXHJcbiAgICB7dGV4dDogJ0xhYiBEYXlzPycsIHdvcmQ6ICdBIEJyZWV6ZSEhIScsIGltYWdlOiBpbWcyLCBjbGFzczogJ3NpbmdsZScsIGlubmVyOiAnIzAwMDAwMCcsIG91dGVyOiAnI2ZjYTMxMScsIGNhbGw6ICdDSE9PU0UgVVMnfSxcclxuICAgIHt0ZXh0OiAnRW5naW5lZXJpbmcgTGFicywnLCB3b3JkOiAnU2ltcGxpZmllZCEhIScsIGltYWdlOiBpbWczLGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMwMDAwMDAnLCBvdXRlcjogJyMxNDIxM2QnLCBjYWxsOiAnVEFQIElOJ30sXHJcbiAgICB7dGV4dDogJ0RvblxcJ3QgV2luZyBJdCwnLCB3b3JkOiAnRWxhYm9yYXRlIEl0ISEhJywgaW1hZ2U6IGltZzQsY2xhc3M6ICdzaW5nbGUnLCBpbm5lcjogICcjMDAwMDAwJywgb3V0ZXI6ICcjZTVlNWU1JywgY2FsbDogJ1VOTEVBU0ggIFBPVEVOVElBTCd9LFxyXG4gICAge3RleHQ6ICdVbmxvY2sgTGFiIFNlY3JldHMgd2l0aCwnLCB3b3JkOiAnRWxhYm9yYXRlISEhJywgaW1hZ2U6IGltZzUsY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzE0MjEzZCcsIG91dGVyOiAnI2U1ZTVlNScsIGNhbGw6ICdTVEFSVCBOT1cnfSxcclxuICAgIHt0ZXh0OiAnR3JhZGVzIFNvYXJpbmcsIEVsYWJvcmF0ZScsIHdvcmQ6ICdUaGFuayBZb3UhISEnLCBpbWFnZTogaW1nNixjbGFzczogJ3NpbmdsZScsIGlubmVyOiAnIzE0MjEzZCcsIG91dGVyOiAnIzAwMDAwMCcsIGNhbGw6ICdESVZFIElOJ30sXHJcbl07XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGVyb0NvbnRlbnQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRleHRDb250YWluLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHREaXYnKTtcclxuICAgICAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2hlcm9UZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgaGVyb1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZXJvU3Bhbi5jbGFzc0xpc3QuYWRkKCdzcGFuJyk7XHJcbiAgICAgICAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZChgJHtoZXJvQ29udGVudFtpXS5jbGFzc31gKTtcclxuICAgICAgICBjb25zdCBpbm5lckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlubmVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2lubmVyQ2lyY2xlJyk7XHJcbiAgICAgICAgY29uc3Qgb3V0ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBvdXRlckNpcmNsZS5jbGFzc0xpc3QuYWRkKCdvdXRlckNpcmNsZScpO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFjdGlvbi5jbGFzc0xpc3QuYWRkKCdjYWxsQWN0aW9uJyk7XHJcbiAgICAgICAgaGVyb1RleHQudGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS50ZXh0O1xyXG4gICAgICAgIGhlcm9TcGFuLnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0ud29yZDtcclxuICAgICAgICBoZXJvSW1nLnNyYyA9IGhlcm9Db250ZW50W2ldLmltYWdlO1xyXG4gICAgICAgIGlubmVyQ2lyY2xlLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5pbm5lcjtcclxuICAgICAgICBvdXRlckNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kID0gaGVyb0NvbnRlbnRbaV0ub3V0ZXI7XHJcbiAgICAgICAgYWN0aW9uLnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0uY2FsbDtcclxuICAgICAgICBhY3Rpb24uc3R5bGUuYmFja2dyb3VuZCA9IGhlcm9Db250ZW50W2ldLmlubmVyO1xyXG4gICAgICAgIGFjdGlvbi5zdHlsZS5ib3hTaGFkb3cgPSBgNXB4IDVweCAxLjVweCAxcHggJHtoZXJvQ29udGVudFtpXS5vdXRlcn1gO1xyXG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xyXG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1NwYW4pO1xyXG4gICAgICAgIHRleHRDb250YWluLmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG4gICAgICAgIHRleHRDb250YWluLmFwcGVuZENoaWxkKGFjdGlvbik7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbik7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvSW1nKTtcclxuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcclxuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKG91dGVyQ2lyY2xlKTtcclxuICAgICAgICBoZXJvRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hlcm9TbGlkZScpO1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgY2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY29uc3Qgc2hvd1NsaWRlcyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZXJvU2xpZGUnKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2xpZGUubGVuZ3RoOyAgaSsrKXtcclxuICAgICAgICAgICAgc2xpZGVbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIGlmKGNvdW50ID4gc2xpZGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgY291bnQgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlW2NvdW50IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApO1xyXG4gICAgfVxyXG4gICAgc2hvd1NsaWRlcygpO1xyXG59XHJcbmNvbnN0IGNyZWF0ZURlcHQgPSAoaW1nLCB0aXRsZSwgZGVzYywgbGV2ZWwpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlcHRCb3gnKTtcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWc7XHJcbiAgICBjb25zdCBkZXB0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVwdFRleHQuY2xhc3NMaXN0LmFkZCgnZGVwdFRleHQnKTtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2M7XHJcbiAgICBjb25zdCBsZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldmVscy50ZXh0Q29udGVudCA9ICdMZXZlbChzKSBjb3ZlcmVkOiAnICsgbGV2ZWwudG9TdHJpbmcoKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGRlcHRUZXh0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGRlcHRUZXh0LmFwcGVuZENoaWxkKGxldmVscyk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVwdFRleHQpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufTtcclxuY29uc3QgY3JlYXRlU2VydmljZSA9IChoZWFkaW5nLCBib2R5LCBhY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICBoZWFkLnRleHRDb250ZW50ID0gaGVhZGluZztcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gYm9keTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlcnZlQnV0dG9uJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBhY3Rpb247XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuZXhwb3J0IHtjcmVhdGVOYXZMaW5rLCBnZW5lcmF0ZUhlcm9TZWN0aW9uLCBjYXJvdXNlbCwgY3JlYXRlRGVwdCwgY3JlYXRlU2VydmljZSwgY3JlYXRlQnJhbmQsIGNyZWF0ZU5hdkJhciwgY3JlYXRlTWVudX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9