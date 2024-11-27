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


const renderFooter = (body, array) => {
//create footer
const footer = document.createElement('footer');
//create left footer section
const leftFooter = document.createElement('section');
//create footer brand
const footerBrand = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createBrand)(_RESOURCES_images_elaborate_footer_logo_png__WEBPACK_IMPORTED_MODULE_1__, '');
//create footer navigation links
const footerNav = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)(array);
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



const renderHeader = (body, array) => {
//create header element
const header = document.createElement('header');
//create icon div
const iconDiv = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createBrand)(_RESOURCES_images_elaBoratelogo_png__WEBPACK_IMPORTED_MODULE_1__);
iconDiv.id = 'iconDiv';
//create navBar
const navBox = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)(array);
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
/* harmony import */ var _RESOURCES_images_female_engr_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/female-engr.jpg */ "./src/RESOURCES/images/female-engr.jpg");
/* harmony import */ var _RESOURCES_images_eee_engr_girls_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/eee-engr-girls.jpg */ "./src/RESOURCES/images/eee-engr-girls.jpg");
/* harmony import */ var _RESOURCES_images_eee_male_engr_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RESOURCES/images/eee-male-engr.jpg */ "./src/RESOURCES/images/eee-male-engr.jpg");
/* harmony import */ var _RESOURCES_images_cpe_engr_group_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../RESOURCES/images/cpe-engr-group.jpg */ "./src/RESOURCES/images/cpe-engr-group.jpg");
/* harmony import */ var _RESOURCES_images_mte_male_engr_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../RESOURCES/images/mte-male-engr.jpg */ "./src/RESOURCES/images/mte-male-engr.jpg");
/* harmony import */ var _RESOURCES_images_cpe_engr_girls_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../RESOURCES/images/cpe-engr-girls.jpg */ "./src/RESOURCES/images/cpe-engr-girls.jpg");
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
    
        if(document.querySelector('.nav').className === 'nav active'){
            document.querySelector('header').style.marginBottom = '20vh'; 
        }
        else{
            document.querySelector('header').style.marginBottom = '0';
        }
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
const createNavBar = (array) => {
    const div = document.createElement('nav');
    //create individual navLinks with imported function
    const homeNav = createNavLink(array[0], "Home")
    const aboutNav = createNavLink(array[2], "About");
    const reportNav = createNavLink(array[1], "Reports");
    const contactNav = createNavLink("mailto:info.sabidevs@gmail.com", "Contact Us");
    //Append navLinks to navBar
    div.appendChild(homeNav);
    div.appendChild(aboutNav);
    div.appendChild(reportNav);
    div.appendChild(contactNav);
    return div;
}
const generateHeroSection = (section) =>  {
    const heroContent = [
    {text: 'ELA made', word: 'Easy!!!',image: _RESOURCES_images_female_engr_jpg__WEBPACK_IMPORTED_MODULE_0__,class: 'group',inner: '#14213d',outer: '#fca311',call: 'GET STARTED'},
    {text: 'Lab Days?', word: 'A Breeze!!!', image: _RESOURCES_images_eee_engr_girls_jpg__WEBPACK_IMPORTED_MODULE_1__, class: 'group', inner: '#000000', outer: '#fca311', call: 'CHOOSE US'},
    {text: 'Engineering Labs,', word: 'Simplified!!!', image: _RESOURCES_images_eee_male_engr_jpg__WEBPACK_IMPORTED_MODULE_2__,class: 'group', inner: '#000000', outer: '#14213d', call: 'TAP IN'},
    {text: 'Don\'t Wing It,', word: 'Elaborate It!!!', image: _RESOURCES_images_cpe_engr_group_jpg__WEBPACK_IMPORTED_MODULE_3__,class: 'group', inner:  '#000000', outer: '#e5e5e5', call: 'UNLEASH  POTENTIAL'},
    {text: 'Unlock Lab Secrets with,', word: 'Elaborate!!!', image: _RESOURCES_images_mte_male_engr_jpg__WEBPACK_IMPORTED_MODULE_4__,class: 'group', inner: '#14213d', outer: '#e5e5e5', call: 'START NOW'},
    {text: 'Grades Soaring, Elaborate', word: 'Thank You!!!', image: _RESOURCES_images_cpe_engr_girls_jpg__WEBPACK_IMPORTED_MODULE_5__,class: 'group', inner: '#14213d', outer: '#000000', call: 'DIVE IN'},
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

/***/ "./src/RESOURCES/images/cpe-engr-girls.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/cpe-engr-girls.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/42b2d9844f6b2f4f1d16.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/cpe-engr-group.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/cpe-engr-group.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/a70d6a4b8b304ef985e6.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/eee-engr-girls.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/eee-engr-girls.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/911581982d5099bbd728.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/eee-male-engr.jpg":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/eee-male-engr.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/a2e6def33c12927585f1.jpg";

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

/***/ "./src/RESOURCES/images/female-engr.jpg":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/female-engr.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "../../asset/images/9dfe16325ed6898b3799.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/mte-male-engr.jpg":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/mte-male-engr.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/d0370f308500f6ec534a.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/search-icon.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/search-icon.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "../../asset/images/ecb34bb8fa4ecc3a4316.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1NDUklQVFNfbW9kdWxlc19mb290ZXJfanMtc3JjX1NDUklQVFNfbW9kdWxlc19oZWFkZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ2M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFXLENBQUMsd0VBQUs7QUFDckM7QUFDQSxrQkFBa0IseURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQix5QkFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1FO0FBQ1A7QUFDQTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBVyxDQUFDLGdFQUFJO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLHlEQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBVTtBQUNWO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUMwRDtBQUNHO0FBQ0Q7QUFDQztBQUNEO0FBQ0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx5Q0FBeUMsOERBQUksc0VBQXNFO0FBQ3hILEtBQUssK0NBQStDLGlFQUFJLHdFQUF3RTtBQUNoSSxLQUFLLHlEQUF5RCxnRUFBSSxvRUFBb0U7QUFDdEksS0FBSyx5REFBeUQsaUVBQUksaUZBQWlGO0FBQ25KLEtBQUssK0RBQStELGdFQUFJLHVFQUF1RTtBQUMvSSxLQUFLLGdFQUFnRSxpRUFBSSxxRUFBcUU7QUFDOUk7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvZm9vdGVyLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvbGFuZGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZU5hdkJhciwgY3JlYXRlQnJhbmR9IGZyb20gJy4vbGFuZGluZy5qcyc7XHJcbmltcG9ydCBsb2dvMSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VsYWJvcmF0ZS1mb290ZXItbG9nby5wbmcnO1xyXG5jb25zdCByZW5kZXJGb290ZXIgPSAoYm9keSwgYXJyYXkpID0+IHtcclxuLy9jcmVhdGUgZm9vdGVyXHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4vL2NyZWF0ZSBsZWZ0IGZvb3RlciBzZWN0aW9uXHJcbmNvbnN0IGxlZnRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbi8vY3JlYXRlIGZvb3RlciBicmFuZFxyXG5jb25zdCBmb290ZXJCcmFuZCA9IGNyZWF0ZUJyYW5kKGxvZ28xLCAnJyk7XHJcbi8vY3JlYXRlIGZvb3RlciBuYXZpZ2F0aW9uIGxpbmtzXHJcbmNvbnN0IGZvb3Rlck5hdiA9IGNyZWF0ZU5hdkJhcihhcnJheSk7XHJcbmZvb3Rlck5hdi5pZCA9ICdmb290ZXJOYXYnO1xyXG4vL2FwcGVuZCBjaGlsZHJlbiB0byBsZWZ0Rm9vdGVyXHJcbmxlZnRGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQnJhbmQpO1xyXG5sZWZ0Rm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck5hdik7XHJcbmxlZnRGb290ZXIuaWQgPSAnbGVmdEZvb3QnO1xyXG4vL0FwcGVuZCBsZWZ0IGZvb3RlciBzZWN0aW9uIHRvIHRoZSBmb290ZXJcclxuZm9vdGVyLmFwcGVuZENoaWxkKGxlZnRGb290ZXIpO1xyXG4vL2NyZWF0ZSByaWdodCBmb290ZXIgc2VjdGlvblxyXG5jb25zdCByaWdodEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxucmlnaHRGb290ZXIuaWQgPSAncmlnaHRGb290JztcclxuLy9jcmVhdGUgIHN1YnNjcmliZSB0ZXh0XHJcbmNvbnN0IHN1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnN1YlRleHQudGV4dENvbnRlbnQgPSBcIkdldCBvdXIgbGF0ZXN0IGlubm92YXRpdmUgbmV3c1wiO1xyXG4vL2NyZWF0ZSBzdWJzY3JpYmUgZGl2XHJcbmNvbnN0IHN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zdWJEaXYuaWQgPSAnc3Vic2NyaWJlJztcclxuLy9jcmVhdGUgZm9vdGVyIHN1YnNjcmliZSBpbnB1dFxyXG5jb25zdCBzdWJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnN1YklucHV0LnR5cGUgPSAnZW1haWwnO1xyXG5zdWJJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCBBZGRyZXNzJztcclxuc3ViSW5wdXQuaWQgPSAnc3ViRW1haWwnO1xyXG4vL2NyZWF0ZSBmb290ZXIgc3Vic2NyaWJlIGJ1dHRvblxyXG5jb25zdCBzdWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc3ViQnV0dG9uLnRleHRDb250ZW50ID0gJ1N1YnNjcmliZSc7XHJcbnN1YkJ1dHRvbi5pZCA9ICdzdWJCdXR0b24nO1xyXG4vL0FwcGVuZCBzdWIgaW5wdXQgYW5kIGJ1dHRvbiB0byBpdCBEaXZcclxuc3ViRGl2LmFwcGVuZENoaWxkKHN1YklucHV0KTtcclxuc3ViRGl2LmFwcGVuZENoaWxkKHN1YkJ1dHRvbik7XHJcbi8vY3JlYXRlIGNvcHlyaWdodCB0ZXh0XHJcbmNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb3B5cmlnaHQuaW5uZXJIVE1MID0gYCYjMTY5OyBDb3B5cmlnaHQgPHNwYW4+JHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9zcGFuPmA7XHJcbi8vY3JlYXRlIHJlc2VydmVkIHJpZ2h0IHRleHRcclxuY29uc3QgcmVzZXJ2ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnJlc2VydmVkLmlubmVySFRNTCA9ICdBbGwgcmlnaHRzIHJlc2VydmVkLiBBIDxzcGFuPnNhYmk8L3NwYW4+RGV2cyBpbml0aWF0aXZlJztcclxuLy9BcHBlbmQgY2hpbGRyZW4gdG8gcmlnaHQgZm9vdGVyIGVsZW1lbnRcclxucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQoc3ViVGV4dCk7XHJcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHN1YkRpdik7XHJcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XHJcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHJlc2VydmVkKTtcclxuLy9BcHBlbmQgcmlnaHQgZm9vdGVyIHRvIGZvb3RlclxyXG5mb290ZXIuYXBwZW5kQ2hpbGQocmlnaHRGb290ZXIpO1xyXG5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcbmV4cG9ydCB7cmVuZGVyRm9vdGVyfTsiLCJpbXBvcnQge2NyZWF0ZU5hdkJhciwgY3JlYXRlQnJhbmQsIGNyZWF0ZU1lbnV9IGZyb20gJy4vbGFuZGluZy5qcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWxhQm9yYXRlbG9nby5wbmcnO1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvc2VhcmNoLWljb24ucG5nJztcclxuY29uc3QgcmVuZGVySGVhZGVyID0gKGJvZHksIGFycmF5KSA9PiB7XHJcbi8vY3JlYXRlIGhlYWRlciBlbGVtZW50XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4vL2NyZWF0ZSBpY29uIGRpdlxyXG5jb25zdCBpY29uRGl2ID0gY3JlYXRlQnJhbmQobG9nbyk7XHJcbmljb25EaXYuaWQgPSAnaWNvbkRpdic7XHJcbi8vY3JlYXRlIG5hdkJhclxyXG5jb25zdCBuYXZCb3ggPSBjcmVhdGVOYXZCYXIoYXJyYXkpO1xyXG5uYXZCb3guY2xhc3NMaXN0LmFkZCgnbmF2Jyk7IFxyXG4vL2NyZWF0ZSBzZWFyY2ggQm94IGRpdlxyXG5jb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc2VhcmNoRGl2LmlkID0gJ3NlYXJjaEJveCc7XHJcbi8vY3JlYXRlIHNlYXJjaCBJY29uXHJcbmNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuc2VhcmNoSWNvbi5zcmMgPSAgc2VhcmNoO1xyXG4vL2NyZWF0ZSBzZWFyY2ggaW5wdXQgZmllbGRcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5zZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbnNlYXJjaElucHV0LmlkID0gXCJzZWFyY2hJbnB1dFwiO1xyXG4vL0FkZCBzZWFyY2hCb3ggaXRlbXMgdG8gcGFyZW50XHJcbnNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XHJcbnNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcclxuLy9BZGQgaGVhZGVyIGl0ZW1zIHRvIGhlYWRlclxyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChuYXZCb3gpO1xyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRGl2KTtcclxuLy9jcmVhdGUgbWVudVxyXG5jcmVhdGVNZW51KGhlYWRlcik7XHJcbi8vQWRkIGhlYWRlciB0byBib2R5IHRhZ1xyXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn1cclxuZXhwb3J0IHtyZW5kZXJIZWFkZXJ9OyIsIi8vaW1wb3J0IGltYWdlc1xyXG5pbXBvcnQgaW1nMSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2ZlbWFsZS1lbmdyLmpwZyc7XHJcbmltcG9ydCBpbWcyIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWVlLWVuZ3ItZ2lybHMuanBnJztcclxuaW1wb3J0IGltZzMgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lZWUtbWFsZS1lbmdyLmpwZyc7XHJcbmltcG9ydCBpbWc0IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY3BlLWVuZ3ItZ3JvdXAuanBnJztcclxuaW1wb3J0IGltZzUgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9tdGUtbWFsZS1lbmdyLmpwZyc7XHJcbmltcG9ydCBpbWc2IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY3BlLWVuZ3ItZ2lybHMuanBnJztcclxuXHJcblxyXG4vL0EgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIG5hdiBsaW5rcyBhbmQgcmV0dXJucyB0aGUgZGl2XHJcbmNvbnN0IGNyZWF0ZU5hdkxpbmsgPSAocmVmLCB0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb25zdCBsaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxpbmtUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xyXG4gICAgbGluay5ocmVmID0gcmVmO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufTtcclxuLy9mdW5jdGlvbiB0byBjcmVhdGUgbWVudVxyXG5jb25zdCBjcmVhdGVNZW51ID0gKGhlYWRlcikgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gICAgbGV0IGJhcnMgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspe1xyXG4gICAgICAgIGJhcnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiYXJzW2ldLmNsYXNzTGlzdC5hZGQoJ2JhcnMnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYmFyc1tpXSk7XHJcbiAgICB9XHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLmNsYXNzTmFtZSA9PT0gJ25hdiBhY3RpdmUnKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUubWFyZ2luQm90dG9tID0gJzIwdmgnOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc3R5bGUubWFyZ2luQm90dG9tID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XHJcbn1cclxuY29uc3QgY3JlYXRlQnJhbmQgPSAobG9nbywgbmFtZSA9ICdlbGFCb3JhdGUnKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vY3JlYXRlIGxvZ28gaWNvblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaWNvbi5zcmMgPSBsb2dvO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgLy9jcmVhdGUgYnJhbmQgbmFtZVxyXG4gICAgY29uc3QgYnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgYnJhbmQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGJyYW5kKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuY29uc3QgY3JlYXRlTmF2QmFyID0gKGFycmF5KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIC8vY3JlYXRlIGluZGl2aWR1YWwgbmF2TGlua3Mgd2l0aCBpbXBvcnRlZCBmdW5jdGlvblxyXG4gICAgY29uc3QgaG9tZU5hdiA9IGNyZWF0ZU5hdkxpbmsoYXJyYXlbMF0sIFwiSG9tZVwiKVxyXG4gICAgY29uc3QgYWJvdXROYXYgPSBjcmVhdGVOYXZMaW5rKGFycmF5WzJdLCBcIkFib3V0XCIpO1xyXG4gICAgY29uc3QgcmVwb3J0TmF2ID0gY3JlYXRlTmF2TGluayhhcnJheVsxXSwgXCJSZXBvcnRzXCIpO1xyXG4gICAgY29uc3QgY29udGFjdE5hdiA9IGNyZWF0ZU5hdkxpbmsoXCJtYWlsdG86aW5mby5zYWJpZGV2c0BnbWFpbC5jb21cIiwgXCJDb250YWN0IFVzXCIpO1xyXG4gICAgLy9BcHBlbmQgbmF2TGlua3MgdG8gbmF2QmFyXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaG9tZU5hdik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWJvdXROYXYpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHJlcG9ydE5hdik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmNvbnN0IGdlbmVyYXRlSGVyb1NlY3Rpb24gPSAoc2VjdGlvbikgPT4gIHtcclxuICAgIGNvbnN0IGhlcm9Db250ZW50ID0gW1xyXG4gICAge3RleHQ6ICdFTEEgbWFkZScsIHdvcmQ6ICdFYXN5ISEhJyxpbWFnZTogaW1nMSxjbGFzczogJ2dyb3VwJyxpbm5lcjogJyMxNDIxM2QnLG91dGVyOiAnI2ZjYTMxMScsY2FsbDogJ0dFVCBTVEFSVEVEJ30sXHJcbiAgICB7dGV4dDogJ0xhYiBEYXlzPycsIHdvcmQ6ICdBIEJyZWV6ZSEhIScsIGltYWdlOiBpbWcyLCBjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMDAwMDAwJywgb3V0ZXI6ICcjZmNhMzExJywgY2FsbDogJ0NIT09TRSBVUyd9LFxyXG4gICAge3RleHQ6ICdFbmdpbmVlcmluZyBMYWJzLCcsIHdvcmQ6ICdTaW1wbGlmaWVkISEhJywgaW1hZ2U6IGltZzMsY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzAwMDAwMCcsIG91dGVyOiAnIzE0MjEzZCcsIGNhbGw6ICdUQVAgSU4nfSxcclxuICAgIHt0ZXh0OiAnRG9uXFwndCBXaW5nIEl0LCcsIHdvcmQ6ICdFbGFib3JhdGUgSXQhISEnLCBpbWFnZTogaW1nNCxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICAnIzAwMDAwMCcsIG91dGVyOiAnI2U1ZTVlNScsIGNhbGw6ICdVTkxFQVNIICBQT1RFTlRJQUwnfSxcclxuICAgIHt0ZXh0OiAnVW5sb2NrIExhYiBTZWNyZXRzIHdpdGgsJywgd29yZDogJ0VsYWJvcmF0ZSEhIScsIGltYWdlOiBpbWc1LGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMxNDIxM2QnLCBvdXRlcjogJyNlNWU1ZTUnLCBjYWxsOiAnU1RBUlQgTk9XJ30sXHJcbiAgICB7dGV4dDogJ0dyYWRlcyBTb2FyaW5nLCBFbGFib3JhdGUnLCB3b3JkOiAnVGhhbmsgWW91ISEhJywgaW1hZ2U6IGltZzYsY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzE0MjEzZCcsIG91dGVyOiAnIzAwMDAwMCcsIGNhbGw6ICdESVZFIElOJ30sXHJcbl07XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGVyb0NvbnRlbnQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRleHRDb250YWluLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHREaXYnKTtcclxuICAgICAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2hlcm9UZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgaGVyb1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZXJvU3Bhbi5jbGFzc0xpc3QuYWRkKCdzcGFuJyk7XHJcbiAgICAgICAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZChgJHtoZXJvQ29udGVudFtpXS5jbGFzc31gKTtcclxuICAgICAgICBjb25zdCBpbm5lckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlubmVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2lubmVyQ2lyY2xlJyk7XHJcbiAgICAgICAgY29uc3Qgb3V0ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBvdXRlckNpcmNsZS5jbGFzc0xpc3QuYWRkKCdvdXRlckNpcmNsZScpO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFjdGlvbi5jbGFzc0xpc3QuYWRkKCdjYWxsQWN0aW9uJyk7XHJcbiAgICAgICAgaGVyb1RleHQudGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS50ZXh0O1xyXG4gICAgICAgIGhlcm9TcGFuLnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0ud29yZDtcclxuICAgICAgICBoZXJvSW1nLnNyYyA9IGhlcm9Db250ZW50W2ldLmltYWdlO1xyXG4gICAgICAgIGlubmVyQ2lyY2xlLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5pbm5lcjtcclxuICAgICAgICBvdXRlckNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kID0gaGVyb0NvbnRlbnRbaV0ub3V0ZXI7XHJcbiAgICAgICAgYWN0aW9uLnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0uY2FsbDtcclxuICAgICAgICBhY3Rpb24uc3R5bGUuYmFja2dyb3VuZCA9IGhlcm9Db250ZW50W2ldLmlubmVyO1xyXG4gICAgICAgIGFjdGlvbi5zdHlsZS5ib3hTaGFkb3cgPSBgNXB4IDVweCAxLjVweCAxcHggJHtoZXJvQ29udGVudFtpXS5vdXRlcn1gO1xyXG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xyXG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1NwYW4pO1xyXG4gICAgICAgIHRleHRDb250YWluLmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG4gICAgICAgIHRleHRDb250YWluLmFwcGVuZENoaWxkKGFjdGlvbik7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbik7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvSW1nKTtcclxuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcclxuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKG91dGVyQ2lyY2xlKTtcclxuICAgICAgICBoZXJvRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hlcm9TbGlkZScpO1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgY2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY29uc3Qgc2hvd1NsaWRlcyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZXJvU2xpZGUnKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2xpZGUubGVuZ3RoOyAgaSsrKXtcclxuICAgICAgICAgICAgc2xpZGVbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIGlmKGNvdW50ID4gc2xpZGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgY291bnQgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlW2NvdW50IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApO1xyXG4gICAgfVxyXG4gICAgc2hvd1NsaWRlcygpO1xyXG59XHJcbmNvbnN0IGNyZWF0ZURlcHQgPSAoaW1nLCB0aXRsZSwgZGVzYywgbGV2ZWwpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlcHRCb3gnKTtcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWc7XHJcbiAgICBjb25zdCBkZXB0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVwdFRleHQuY2xhc3NMaXN0LmFkZCgnZGVwdFRleHQnKTtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2M7XHJcbiAgICBjb25zdCBsZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldmVscy50ZXh0Q29udGVudCA9ICdMZXZlbChzKSBjb3ZlcmVkOiAnICsgbGV2ZWwudG9TdHJpbmcoKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGRlcHRUZXh0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGRlcHRUZXh0LmFwcGVuZENoaWxkKGxldmVscyk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVwdFRleHQpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufTtcclxuY29uc3QgY3JlYXRlU2VydmljZSA9IChoZWFkaW5nLCBib2R5LCBhY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICBoZWFkLnRleHRDb250ZW50ID0gaGVhZGluZztcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gYm9keTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlcnZlQnV0dG9uJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBhY3Rpb247XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuZXhwb3J0IHtjcmVhdGVOYXZMaW5rLCBnZW5lcmF0ZUhlcm9TZWN0aW9uLCBjYXJvdXNlbCwgY3JlYXRlRGVwdCwgY3JlYXRlU2VydmljZSwgY3JlYXRlQnJhbmQsIGNyZWF0ZU5hdkJhciwgY3JlYXRlTWVudX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9