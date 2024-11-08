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
            alert('active');
            document.querySelector('#hero').style.marginTop = '20vh'; 
        }
        else{
            document.querySelector('#hero').style.marginTop = '0';
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
const createNavBar = () => {
    const div = document.createElement('nav');
    //create individual navLinks with imported function
    const homeNav = createNavLink("#", "Home")
    const aboutNav = createNavLink("#", "About");
    const reportNav = createNavLink("#", "Reports");
    const contactNav = createNavLink("#", "Contact Us");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1NDUklQVFNfbW9kdWxlc19mb290ZXJfanMtc3JjX1NDUklQVFNfbW9kdWxlc19oZWFkZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ2M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFXLENBQUMsd0VBQUs7QUFDckM7QUFDQSxrQkFBa0IseURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQix5QkFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1FO0FBQ1A7QUFDQTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBVyxDQUFDLGdFQUFJO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLHlEQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBVTtBQUNWO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUMwRDtBQUNHO0FBQ0Q7QUFDQztBQUNEO0FBQ0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUNBQXlDLDhEQUFJLHNFQUFzRTtBQUN4SCxLQUFLLCtDQUErQyxpRUFBSSx3RUFBd0U7QUFDaEksS0FBSyx5REFBeUQsZ0VBQUksb0VBQW9FO0FBQ3RJLEtBQUsseURBQXlELGlFQUFJLGlGQUFpRjtBQUNuSixLQUFLLCtEQUErRCxnRUFBSSx1RUFBdUU7QUFDL0ksS0FBSyxnRUFBZ0UsaUVBQUkscUVBQXFFO0FBQzlJO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2xhbmRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVOYXZCYXIsIGNyZWF0ZUJyYW5kfSBmcm9tICcuL2xhbmRpbmcuanMnO1xyXG5pbXBvcnQgbG9nbzEgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lbGFib3JhdGUtZm9vdGVyLWxvZ28ucG5nJztcclxuY29uc3QgcmVuZGVyRm9vdGVyID0gKGJvZHkpID0+IHtcclxuLy9jcmVhdGUgZm9vdGVyXHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4vL2NyZWF0ZSBsZWZ0IGZvb3RlciBzZWN0aW9uXHJcbmNvbnN0IGxlZnRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbi8vY3JlYXRlIGZvb3RlciBicmFuZFxyXG5jb25zdCBmb290ZXJCcmFuZCA9IGNyZWF0ZUJyYW5kKGxvZ28xLCAnJyk7XHJcbi8vY3JlYXRlIGZvb3RlciBuYXZpZ2F0aW9uIGxpbmtzXHJcbmNvbnN0IGZvb3Rlck5hdiA9IGNyZWF0ZU5hdkJhcigpO1xyXG5mb290ZXJOYXYuaWQgPSAnZm9vdGVyTmF2JztcclxuLy9hcHBlbmQgY2hpbGRyZW4gdG8gbGVmdEZvb3RlclxyXG5sZWZ0Rm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckJyYW5kKTtcclxubGVmdEZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJOYXYpO1xyXG5sZWZ0Rm9vdGVyLmlkID0gJ2xlZnRGb290JztcclxuLy9BcHBlbmQgbGVmdCBmb290ZXIgc2VjdGlvbiB0byB0aGUgZm9vdGVyXHJcbmZvb3Rlci5hcHBlbmRDaGlsZChsZWZ0Rm9vdGVyKTtcclxuLy9jcmVhdGUgcmlnaHQgZm9vdGVyIHNlY3Rpb25cclxuY29uc3QgcmlnaHRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbnJpZ2h0Rm9vdGVyLmlkID0gJ3JpZ2h0Rm9vdCc7XHJcbi8vY3JlYXRlICBzdWJzY3JpYmUgdGV4dFxyXG5jb25zdCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5zdWJUZXh0LnRleHRDb250ZW50ID0gXCJHZXQgb3VyIGxhdGVzdCBpbm5vdmF0aXZlIG5ld3NcIjtcclxuLy9jcmVhdGUgc3Vic2NyaWJlIGRpdlxyXG5jb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc3ViRGl2LmlkID0gJ3N1YnNjcmliZSc7XHJcbi8vY3JlYXRlIGZvb3RlciBzdWJzY3JpYmUgaW5wdXRcclxuY29uc3Qgc3ViSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5zdWJJbnB1dC50eXBlID0gJ2VtYWlsJztcclxuc3ViSW5wdXQucGxhY2Vob2xkZXIgPSAnRW1haWwgQWRkcmVzcyc7XHJcbnN1YklucHV0LmlkID0gJ3N1YkVtYWlsJztcclxuLy9jcmVhdGUgZm9vdGVyIHN1YnNjcmliZSBidXR0b25cclxuY29uc3Qgc3ViQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnN1YkJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJzY3JpYmUnO1xyXG5zdWJCdXR0b24uaWQgPSAnc3ViQnV0dG9uJztcclxuLy9BcHBlbmQgc3ViIGlucHV0IGFuZCBidXR0b24gdG8gaXQgRGl2XHJcbnN1YkRpdi5hcHBlbmRDaGlsZChzdWJJbnB1dCk7XHJcbnN1YkRpdi5hcHBlbmRDaGlsZChzdWJCdXR0b24pO1xyXG4vL2NyZWF0ZSBjb3B5cmlnaHQgdGV4dFxyXG5jb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29weXJpZ2h0LmlubmVySFRNTCA9IGAmIzE2OTsgQ29weXJpZ2h0IDxzcGFuPiR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvc3Bhbj5gO1xyXG4vL2NyZWF0ZSByZXNlcnZlZCByaWdodCB0ZXh0XHJcbmNvbnN0IHJlc2VydmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5yZXNlcnZlZC5pbm5lckhUTUwgPSAnQWxsIHJpZ2h0cyByZXNlcnZlZC4gQSA8c3Bhbj5zYWJpPC9zcGFuPkRldnMgaW5pdGlhdGl2ZSc7XHJcbi8vQXBwZW5kIGNoaWxkcmVuIHRvIHJpZ2h0IGZvb3RlciBlbGVtZW50XHJcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHN1YlRleHQpO1xyXG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChzdWJEaXYpO1xyXG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xyXG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChyZXNlcnZlZCk7XHJcbi8vQXBwZW5kIHJpZ2h0IGZvb3RlciB0byBmb290ZXJcclxuZm9vdGVyLmFwcGVuZENoaWxkKHJpZ2h0Rm9vdGVyKTtcclxuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5leHBvcnQge3JlbmRlckZvb3Rlcn07IiwiaW1wb3J0IHtjcmVhdGVOYXZCYXIsIGNyZWF0ZUJyYW5kLCBjcmVhdGVNZW51fSBmcm9tICcuL2xhbmRpbmcuanMnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VsYUJvcmF0ZWxvZ28ucG5nJztcclxuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZyc7XHJcbmNvbnN0IHJlbmRlckhlYWRlciA9IChib2R5KSA9PiB7XHJcbi8vY3JlYXRlIGhlYWRlciBlbGVtZW50XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4vL2NyZWF0ZSBpY29uIGRpdlxyXG5jb25zdCBpY29uRGl2ID0gY3JlYXRlQnJhbmQobG9nbyk7XHJcbmljb25EaXYuaWQgPSAnaWNvbkRpdic7XHJcbi8vY3JlYXRlIG5hdkJhclxyXG5jb25zdCBuYXZCb3ggPSBjcmVhdGVOYXZCYXIoKTtcclxubmF2Qm94LmNsYXNzTGlzdC5hZGQoJ25hdicpOyBcclxuLy9jcmVhdGUgc2VhcmNoIEJveCBkaXZcclxuY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNlYXJjaERpdi5pZCA9ICdzZWFyY2hCb3gnO1xyXG4vL2NyZWF0ZSBzZWFyY2ggSWNvblxyXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbnNlYXJjaEljb24uc3JjID0gIHNlYXJjaDtcclxuLy9jcmVhdGUgc2VhcmNoIGlucHV0IGZpZWxkXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc2VhcmNoSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG5zZWFyY2hJbnB1dC5pZCA9IFwic2VhcmNoSW5wdXRcIjtcclxuLy9BZGQgc2VhcmNoQm94IGl0ZW1zIHRvIHBhcmVudFxyXG5zZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG5zZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XHJcbi8vQWRkIGhlYWRlciBpdGVtcyB0byBoZWFkZXJcclxuaGVhZGVyLmFwcGVuZENoaWxkKGljb25EaXYpO1xyXG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2Qm94KTtcclxuaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaERpdik7XHJcbi8vY3JlYXRlIG1lbnVcclxuY3JlYXRlTWVudShoZWFkZXIpO1xyXG4vL0FkZCBoZWFkZXIgdG8gYm9keSB0YWdcclxuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59XHJcbmV4cG9ydCB7cmVuZGVySGVhZGVyfTsiLCIvL2ltcG9ydCBpbWFnZXNcclxuaW1wb3J0IGltZzEgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9mZW1hbGUtZW5nci5qcGcnO1xyXG5pbXBvcnQgaW1nMiBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VlZS1lbmdyLWdpcmxzLmpwZyc7XHJcbmltcG9ydCBpbWczIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWVlLW1hbGUtZW5nci5qcGcnO1xyXG5pbXBvcnQgaW1nNCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2NwZS1lbmdyLWdyb3VwLmpwZyc7XHJcbmltcG9ydCBpbWc1IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvbXRlLW1hbGUtZW5nci5qcGcnO1xyXG5pbXBvcnQgaW1nNiBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2NwZS1lbmdyLWdpcmxzLmpwZyc7XHJcbi8vQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgbmF2IGxpbmtzIGFuZCByZXR1cm5zIHRoZSBkaXZcclxuY29uc3QgY3JlYXRlTmF2TGluayA9IChyZWYsIHRleHQpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGlua1RleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgbGluay5hcHBlbmRDaGlsZChsaW5rVGV4dCk7XHJcbiAgICBsaW5rLmhyZWYgPSByZWY7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59O1xyXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBtZW51XHJcbmNvbnN0IGNyZWF0ZU1lbnUgPSAoaGVhZGVyKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICBsZXQgYmFycyA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKyl7XHJcbiAgICAgICAgYmFyc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJhcnNbaV0uY2xhc3NMaXN0LmFkZCgnYmFycycpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChiYXJzW2ldKTtcclxuICAgIH1cclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuY2xhc3NOYW1lID09PSAnbmF2IGFjdGl2ZScpe1xyXG4gICAgICAgICAgICBhbGVydCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvJykuc3R5bGUubWFyZ2luVG9wID0gJzIwdmgnOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8nKS5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxufVxyXG5jb25zdCBjcmVhdGVCcmFuZCA9IChsb2dvLCBuYW1lID0gJ2VsYUJvcmF0ZScpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy9jcmVhdGUgbG9nbyBpY29uXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpY29uLnNyYyA9IGxvZ287XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAvL2NyZWF0ZSBicmFuZCBuYW1lXHJcbiAgICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBicmFuZC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnJhbmQpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIC8vY3JlYXRlIGluZGl2aWR1YWwgbmF2TGlua3Mgd2l0aCBpbXBvcnRlZCBmdW5jdGlvblxyXG4gICAgY29uc3QgaG9tZU5hdiA9IGNyZWF0ZU5hdkxpbmsoXCIjXCIsIFwiSG9tZVwiKVxyXG4gICAgY29uc3QgYWJvdXROYXYgPSBjcmVhdGVOYXZMaW5rKFwiI1wiLCBcIkFib3V0XCIpO1xyXG4gICAgY29uc3QgcmVwb3J0TmF2ID0gY3JlYXRlTmF2TGluayhcIiNcIiwgXCJSZXBvcnRzXCIpO1xyXG4gICAgY29uc3QgY29udGFjdE5hdiA9IGNyZWF0ZU5hdkxpbmsoXCIjXCIsIFwiQ29udGFjdCBVc1wiKTtcclxuICAgIC8vQXBwZW5kIG5hdkxpbmtzIHRvIG5hdkJhclxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGhvbWVOYXYpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGFib3V0TmF2KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChyZXBvcnROYXYpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhY3ROYXYpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5jb25zdCBnZW5lcmF0ZUhlcm9TZWN0aW9uID0gKHNlY3Rpb24pID0+ICB7XHJcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IFtcclxuICAgIHt0ZXh0OiAnRUxBIG1hZGUnLCB3b3JkOiAnRWFzeSEhIScsaW1hZ2U6IGltZzEsY2xhc3M6ICdncm91cCcsaW5uZXI6ICcjMTQyMTNkJyxvdXRlcjogJyNmY2EzMTEnLGNhbGw6ICdHRVQgU1RBUlRFRCd9LFxyXG4gICAge3RleHQ6ICdMYWIgRGF5cz8nLCB3b3JkOiAnQSBCcmVlemUhISEnLCBpbWFnZTogaW1nMiwgY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzAwMDAwMCcsIG91dGVyOiAnI2ZjYTMxMScsIGNhbGw6ICdDSE9PU0UgVVMnfSxcclxuICAgIHt0ZXh0OiAnRW5naW5lZXJpbmcgTGFicywnLCB3b3JkOiAnU2ltcGxpZmllZCEhIScsIGltYWdlOiBpbWczLGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMwMDAwMDAnLCBvdXRlcjogJyMxNDIxM2QnLCBjYWxsOiAnVEFQIElOJ30sXHJcbiAgICB7dGV4dDogJ0RvblxcJ3QgV2luZyBJdCwnLCB3b3JkOiAnRWxhYm9yYXRlIEl0ISEhJywgaW1hZ2U6IGltZzQsY2xhc3M6ICdncm91cCcsIGlubmVyOiAgJyMwMDAwMDAnLCBvdXRlcjogJyNlNWU1ZTUnLCBjYWxsOiAnVU5MRUFTSCAgUE9URU5USUFMJ30sXHJcbiAgICB7dGV4dDogJ1VubG9jayBMYWIgU2VjcmV0cyB3aXRoLCcsIHdvcmQ6ICdFbGFib3JhdGUhISEnLCBpbWFnZTogaW1nNSxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMTQyMTNkJywgb3V0ZXI6ICcjZTVlNWU1JywgY2FsbDogJ1NUQVJUIE5PVyd9LFxyXG4gICAge3RleHQ6ICdHcmFkZXMgU29hcmluZywgRWxhYm9yYXRlJywgd29yZDogJ1RoYW5rIFlvdSEhIScsIGltYWdlOiBpbWc2LGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMxNDIxM2QnLCBvdXRlcjogJyMwMDAwMDAnLCBjYWxsOiAnRElWRSBJTid9LFxyXG5dO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGhlcm9Db250ZW50Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXh0Q29udGFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgICAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0RGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvVGV4dCcpO1xyXG4gICAgICAgIGNvbnN0IGhlcm9TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVyb1NwYW4uY2xhc3NMaXN0LmFkZCgnc3BhbicpO1xyXG4gICAgICAgIGNvbnN0IGhlcm9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBoZXJvSW1nLmNsYXNzTGlzdC5hZGQoYCR7aGVyb0NvbnRlbnRbaV0uY2xhc3N9YCk7XHJcbiAgICAgICAgY29uc3QgaW5uZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbm5lckNpcmNsZS5jbGFzc0xpc3QuYWRkKCdpbm5lckNpcmNsZScpO1xyXG4gICAgICAgIGNvbnN0IG91dGVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCgnb3V0ZXJDaXJjbGUnKTtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhY3Rpb24uY2xhc3NMaXN0LmFkZCgnY2FsbEFjdGlvbicpO1xyXG4gICAgICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0udGV4dDtcclxuICAgICAgICBoZXJvU3Bhbi50ZXh0Q29udGVudCA9IGhlcm9Db250ZW50W2ldLndvcmQ7XHJcbiAgICAgICAgaGVyb0ltZy5zcmMgPSBoZXJvQ29udGVudFtpXS5pbWFnZTtcclxuICAgICAgICBpbm5lckNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kID0gaGVyb0NvbnRlbnRbaV0uaW5uZXI7XHJcbiAgICAgICAgb3V0ZXJDaXJjbGUuc3R5bGUuYmFja2dyb3VuZCA9IGhlcm9Db250ZW50W2ldLm91dGVyO1xyXG4gICAgICAgIGFjdGlvbi50ZXh0Q29udGVudCA9IGhlcm9Db250ZW50W2ldLmNhbGw7XHJcbiAgICAgICAgYWN0aW9uLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5pbm5lcjtcclxuICAgICAgICBhY3Rpb24uc3R5bGUuYm94U2hhZG93ID0gYDVweCA1cHggMS41cHggMXB4ICR7aGVyb0NvbnRlbnRbaV0ub3V0ZXJ9YDtcclxuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcclxuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGhlcm9TcGFuKTtcclxuICAgICAgICB0ZXh0Q29udGFpbi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuICAgICAgICB0ZXh0Q29udGFpbi5hcHBlbmRDaGlsZChhY3Rpb24pO1xyXG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW4pO1xyXG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaGVyb0ltZyk7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChpbm5lckNpcmNsZSk7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChvdXRlckNpcmNsZSk7XHJcbiAgICAgICAgaGVyb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdoZXJvU2xpZGUnKTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlcm9EaXYpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGNhcm91c2VsID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGNvbnN0IHNob3dTbGlkZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVyb1NsaWRlJyk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNsaWRlLmxlbmd0aDsgIGkrKyl7XHJcbiAgICAgICAgICAgIHNsaWRlW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgICBpZihjb3VudCA+IHNsaWRlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZVtjb3VudCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgc2V0VGltZW91dChzaG93U2xpZGVzLCA1MDAwKTtcclxuICAgIH1cclxuICAgIHNob3dTbGlkZXMoKTtcclxufVxyXG5jb25zdCBjcmVhdGVEZXB0ID0gKGltZywgdGl0bGUsIGRlc2MsIGxldmVsKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkZXB0Qm94Jyk7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1nO1xyXG4gICAgY29uc3QgZGVwdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlcHRUZXh0LmNsYXNzTGlzdC5hZGQoJ2RlcHRUZXh0Jyk7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xyXG4gICAgY29uc3QgbGV2ZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXZlbHMudGV4dENvbnRlbnQgPSAnTGV2ZWwocykgY292ZXJlZDogJyArIGxldmVsLnRvU3RyaW5nKCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgZGVwdFRleHQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChsZXZlbHMpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRlcHRUZXh0KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZVNlcnZpY2UgPSAoaGVhZGluZywgYm9keSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgaGVhZC50ZXh0Q29udGVudCA9IGhlYWRpbmc7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGJvZHk7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZXJ2ZUJ1dHRvbicpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYWN0aW9uO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmV4cG9ydCB7Y3JlYXRlTmF2TGluaywgZ2VuZXJhdGVIZXJvU2VjdGlvbiwgY2Fyb3VzZWwsIGNyZWF0ZURlcHQsIGNyZWF0ZVNlcnZpY2UsIGNyZWF0ZUJyYW5kLCBjcmVhdGVOYXZCYXIsIGNyZWF0ZU1lbnV9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==