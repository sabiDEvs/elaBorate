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

module.exports = "./asset/images/42b2d9844f6b2f4f1d16.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/cpe-engr-group.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/cpe-engr-group.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "./asset/images/a70d6a4b8b304ef985e6.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/eee-engr-girls.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/eee-engr-girls.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "./asset/images/911581982d5099bbd728.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/eee-male-engr.jpg":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/eee-male-engr.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "./asset/images/a2e6def33c12927585f1.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/elaBoratelogo.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/elaBoratelogo.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "./asset/images/89c558426b41fccd73cd.png";

/***/ }),

/***/ "./src/RESOURCES/images/elaborate-footer-logo.png":
/*!********************************************************!*\
  !*** ./src/RESOURCES/images/elaborate-footer-logo.png ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "./asset/images/89c7f3e4da4391052d31.png";

/***/ }),

/***/ "./src/RESOURCES/images/female-engr.jpg":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/female-engr.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "./asset/images/9dfe16325ed6898b3799.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/mte-male-engr.jpg":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/mte-male-engr.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "./asset/images/d0370f308500f6ec534a.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/search-icon.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/search-icon.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "./asset/images/ecb34bb8fa4ecc3a4316.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1NDUklQVFNfbW9kdWxlc19mb290ZXJfanMtc3JjX1NDUklQVFNfbW9kdWxlc19oZWFkZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ2M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFXLENBQUMsd0VBQUs7QUFDckM7QUFDQSxrQkFBa0IseURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQix5QkFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1FO0FBQ1A7QUFDQTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBVyxDQUFDLGdFQUFJO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLHlEQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBVTtBQUNWO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUMwRDtBQUNHO0FBQ0Q7QUFDQztBQUNEO0FBQ0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUNBQXlDLDhEQUFJLHNFQUFzRTtBQUN4SCxLQUFLLCtDQUErQyxpRUFBSSx3RUFBd0U7QUFDaEksS0FBSyx5REFBeUQsZ0VBQUksb0VBQW9FO0FBQ3RJLEtBQUsseURBQXlELGlFQUFJLGlGQUFpRjtBQUNuSixLQUFLLCtEQUErRCxnRUFBSSx1RUFBdUU7QUFDL0ksS0FBSyxnRUFBZ0UsaUVBQUkscUVBQXFFO0FBQzlJO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2xhbmRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVOYXZCYXIsIGNyZWF0ZUJyYW5kfSBmcm9tICcuL2xhbmRpbmcuanMnO1xuaW1wb3J0IGxvZ28xIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWxhYm9yYXRlLWZvb3Rlci1sb2dvLnBuZyc7XG5jb25zdCByZW5kZXJGb290ZXIgPSAoYm9keSkgPT4ge1xuLy9jcmVhdGUgZm9vdGVyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbi8vY3JlYXRlIGxlZnQgZm9vdGVyIHNlY3Rpb25cbmNvbnN0IGxlZnRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4vL2NyZWF0ZSBmb290ZXIgYnJhbmRcbmNvbnN0IGZvb3RlckJyYW5kID0gY3JlYXRlQnJhbmQobG9nbzEsICcnKTtcbi8vY3JlYXRlIGZvb3RlciBuYXZpZ2F0aW9uIGxpbmtzXG5jb25zdCBmb290ZXJOYXYgPSBjcmVhdGVOYXZCYXIoKTtcbmZvb3Rlck5hdi5pZCA9ICdmb290ZXJOYXYnO1xuLy9hcHBlbmQgY2hpbGRyZW4gdG8gbGVmdEZvb3RlclxubGVmdEZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJCcmFuZCk7XG5sZWZ0Rm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck5hdik7XG5sZWZ0Rm9vdGVyLmlkID0gJ2xlZnRGb290Jztcbi8vQXBwZW5kIGxlZnQgZm9vdGVyIHNlY3Rpb24gdG8gdGhlIGZvb3RlclxuZm9vdGVyLmFwcGVuZENoaWxkKGxlZnRGb290ZXIpO1xuLy9jcmVhdGUgcmlnaHQgZm9vdGVyIHNlY3Rpb25cbmNvbnN0IHJpZ2h0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xucmlnaHRGb290ZXIuaWQgPSAncmlnaHRGb290Jztcbi8vY3JlYXRlICBzdWJzY3JpYmUgdGV4dFxuY29uc3Qgc3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnN1YlRleHQudGV4dENvbnRlbnQgPSBcIkdldCBvdXIgbGF0ZXN0IGlubm92YXRpdmUgbmV3c1wiO1xuLy9jcmVhdGUgc3Vic2NyaWJlIGRpdlxuY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdWJEaXYuaWQgPSAnc3Vic2NyaWJlJztcbi8vY3JlYXRlIGZvb3RlciBzdWJzY3JpYmUgaW5wdXRcbmNvbnN0IHN1YklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnN1YklucHV0LnR5cGUgPSAnZW1haWwnO1xuc3ViSW5wdXQucGxhY2Vob2xkZXIgPSAnRW1haWwgQWRkcmVzcyc7XG5zdWJJbnB1dC5pZCA9ICdzdWJFbWFpbCc7XG4vL2NyZWF0ZSBmb290ZXIgc3Vic2NyaWJlIGJ1dHRvblxuY29uc3Qgc3ViQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zdWJCdXR0b24udGV4dENvbnRlbnQgPSAnU3Vic2NyaWJlJztcbnN1YkJ1dHRvbi5pZCA9ICdzdWJCdXR0b24nO1xuLy9BcHBlbmQgc3ViIGlucHV0IGFuZCBidXR0b24gdG8gaXQgRGl2XG5zdWJEaXYuYXBwZW5kQ2hpbGQoc3ViSW5wdXQpO1xuc3ViRGl2LmFwcGVuZENoaWxkKHN1YkJ1dHRvbik7XG4vL2NyZWF0ZSBjb3B5cmlnaHQgdGV4dFxuY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb3B5cmlnaHQuaW5uZXJIVE1MID0gYCYjMTY5OyBDb3B5cmlnaHQgPHNwYW4+JHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9zcGFuPmA7XG4vL2NyZWF0ZSByZXNlcnZlZCByaWdodCB0ZXh0XG5jb25zdCByZXNlcnZlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnJlc2VydmVkLmlubmVySFRNTCA9ICdBbGwgcmlnaHRzIHJlc2VydmVkLiBBIDxzcGFuPnNhYmk8L3NwYW4+RGV2cyBpbml0aWF0aXZlJztcbi8vQXBwZW5kIGNoaWxkcmVuIHRvIHJpZ2h0IGZvb3RlciBlbGVtZW50XG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChzdWJUZXh0KTtcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHN1YkRpdik7XG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQocmVzZXJ2ZWQpO1xuLy9BcHBlbmQgcmlnaHQgZm9vdGVyIHRvIGZvb3RlclxuZm9vdGVyLmFwcGVuZENoaWxkKHJpZ2h0Rm9vdGVyKTtcbmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5leHBvcnQge3JlbmRlckZvb3Rlcn07IiwiaW1wb3J0IHtjcmVhdGVOYXZCYXIsIGNyZWF0ZUJyYW5kLCBjcmVhdGVNZW51fSBmcm9tICcuL2xhbmRpbmcuanMnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lbGFCb3JhdGVsb2dvLnBuZyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvc2VhcmNoLWljb24ucG5nJztcbmNvbnN0IHJlbmRlckhlYWRlciA9IChib2R5KSA9PiB7XG4vL2NyZWF0ZSBoZWFkZXIgZWxlbWVudFxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4vL2NyZWF0ZSBpY29uIGRpdlxuY29uc3QgaWNvbkRpdiA9IGNyZWF0ZUJyYW5kKGxvZ28pO1xuaWNvbkRpdi5pZCA9ICdpY29uRGl2Jztcbi8vY3JlYXRlIG5hdkJhclxuY29uc3QgbmF2Qm94ID0gY3JlYXRlTmF2QmFyKCk7XG5uYXZCb3guY2xhc3NMaXN0LmFkZCgnbmF2Jyk7IFxuLy9jcmVhdGUgc2VhcmNoIEJveCBkaXZcbmNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VhcmNoRGl2LmlkID0gJ3NlYXJjaEJveCc7XG4vL2NyZWF0ZSBzZWFyY2ggSWNvblxuY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuc2VhcmNoSWNvbi5zcmMgPSAgc2VhcmNoO1xuLy9jcmVhdGUgc2VhcmNoIGlucHV0IGZpZWxkXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5zZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5zZWFyY2hJbnB1dC5pZCA9IFwic2VhcmNoSW5wdXRcIjtcbi8vQWRkIHNlYXJjaEJveCBpdGVtcyB0byBwYXJlbnRcbnNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG5zZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG4vL0FkZCBoZWFkZXIgaXRlbXMgdG8gaGVhZGVyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2Qm94KTtcbmhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hEaXYpO1xuLy9jcmVhdGUgbWVudVxuY3JlYXRlTWVudShoZWFkZXIpO1xuLy9BZGQgaGVhZGVyIHRvIGJvZHkgdGFnXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5leHBvcnQge3JlbmRlckhlYWRlcn07IiwiLy9pbXBvcnQgaW1hZ2VzXG5pbXBvcnQgaW1nMSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2ZlbWFsZS1lbmdyLmpwZyc7XG5pbXBvcnQgaW1nMiBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VlZS1lbmdyLWdpcmxzLmpwZyc7XG5pbXBvcnQgaW1nMyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VlZS1tYWxlLWVuZ3IuanBnJztcbmltcG9ydCBpbWc0IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY3BlLWVuZ3ItZ3JvdXAuanBnJztcbmltcG9ydCBpbWc1IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvbXRlLW1hbGUtZW5nci5qcGcnO1xuaW1wb3J0IGltZzYgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9jcGUtZW5nci1naXJscy5qcGcnO1xuLy9BIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBuYXYgbGlua3MgYW5kIHJldHVybnMgdGhlIGRpdlxuY29uc3QgY3JlYXRlTmF2TGluayA9IChyZWYsIHRleHQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxpbmtUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBsaW5rLmFwcGVuZENoaWxkKGxpbmtUZXh0KTtcbiAgICBsaW5rLmhyZWYgPSByZWY7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBkaXY7XG59O1xuLy9mdW5jdGlvbiB0byBjcmVhdGUgbWVudVxuY29uc3QgY3JlYXRlTWVudSA9IChoZWFkZXIpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGxldCBiYXJzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKyl7XG4gICAgICAgIGJhcnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFyc1tpXS5jbGFzc0xpc3QuYWRkKCdiYXJzJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChiYXJzW2ldKTtcbiAgICB9XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5jbGFzc05hbWUgPT09ICduYXYgYWN0aXZlJyl7XG4gICAgICAgICAgICBhbGVydCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybycpLnN0eWxlLm1hcmdpblRvcCA9ICcyMHZoJzsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvJykuc3R5bGUubWFyZ2luVG9wID0gJzAnO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XG59XG5jb25zdCBjcmVhdGVCcmFuZCA9IChsb2dvLCBuYW1lID0gJ2VsYUJvcmF0ZScpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvL2NyZWF0ZSBsb2dvIGljb25cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbi5zcmMgPSBsb2dvO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAvL2NyZWF0ZSBicmFuZCBuYW1lXG4gICAgY29uc3QgYnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGJyYW5kLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnJhbmQpO1xuICAgIHJldHVybiBkaXY7XG59XG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgLy9jcmVhdGUgaW5kaXZpZHVhbCBuYXZMaW5rcyB3aXRoIGltcG9ydGVkIGZ1bmN0aW9uXG4gICAgY29uc3QgaG9tZU5hdiA9IGNyZWF0ZU5hdkxpbmsoXCIjXCIsIFwiSG9tZVwiKVxuICAgIGNvbnN0IGFib3V0TmF2ID0gY3JlYXRlTmF2TGluayhcIiNcIiwgXCJBYm91dFwiKTtcbiAgICBjb25zdCByZXBvcnROYXYgPSBjcmVhdGVOYXZMaW5rKFwiI1wiLCBcIlJlcG9ydHNcIik7XG4gICAgY29uc3QgY29udGFjdE5hdiA9IGNyZWF0ZU5hdkxpbmsoXCIjXCIsIFwiQ29udGFjdCBVc1wiKTtcbiAgICAvL0FwcGVuZCBuYXZMaW5rcyB0byBuYXZCYXJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaG9tZU5hdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFib3V0TmF2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocmVwb3J0TmF2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmNvbnN0IGdlbmVyYXRlSGVyb1NlY3Rpb24gPSAoc2VjdGlvbikgPT4gIHtcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IFtcbiAgICB7dGV4dDogJ0VMQSBtYWRlJywgd29yZDogJ0Vhc3khISEnLGltYWdlOiBpbWcxLGNsYXNzOiAnZ3JvdXAnLGlubmVyOiAnIzE0MjEzZCcsb3V0ZXI6ICcjZmNhMzExJyxjYWxsOiAnR0VUIFNUQVJURUQnfSxcbiAgICB7dGV4dDogJ0xhYiBEYXlzPycsIHdvcmQ6ICdBIEJyZWV6ZSEhIScsIGltYWdlOiBpbWcyLCBjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMDAwMDAwJywgb3V0ZXI6ICcjZmNhMzExJywgY2FsbDogJ0NIT09TRSBVUyd9LFxuICAgIHt0ZXh0OiAnRW5naW5lZXJpbmcgTGFicywnLCB3b3JkOiAnU2ltcGxpZmllZCEhIScsIGltYWdlOiBpbWczLGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMwMDAwMDAnLCBvdXRlcjogJyMxNDIxM2QnLCBjYWxsOiAnVEFQIElOJ30sXG4gICAge3RleHQ6ICdEb25cXCd0IFdpbmcgSXQsJywgd29yZDogJ0VsYWJvcmF0ZSBJdCEhIScsIGltYWdlOiBpbWc0LGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogICcjMDAwMDAwJywgb3V0ZXI6ICcjZTVlNWU1JywgY2FsbDogJ1VOTEVBU0ggIFBPVEVOVElBTCd9LFxuICAgIHt0ZXh0OiAnVW5sb2NrIExhYiBTZWNyZXRzIHdpdGgsJywgd29yZDogJ0VsYWJvcmF0ZSEhIScsIGltYWdlOiBpbWc1LGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMxNDIxM2QnLCBvdXRlcjogJyNlNWU1ZTUnLCBjYWxsOiAnU1RBUlQgTk9XJ30sXG4gICAge3RleHQ6ICdHcmFkZXMgU29hcmluZywgRWxhYm9yYXRlJywgd29yZDogJ1RoYW5rIFlvdSEhIScsIGltYWdlOiBpbWc2LGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMxNDIxM2QnLCBvdXRlcjogJyMwMDAwMDAnLCBjYWxsOiAnRElWRSBJTid9LFxuXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGVyb0NvbnRlbnQubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRleHRDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHRDb250YWluLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZCgndGV4dERpdicpO1xuICAgICAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvVGV4dCcpO1xuICAgICAgICBjb25zdCBoZXJvU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZXJvU3Bhbi5jbGFzc0xpc3QuYWRkKCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IGhlcm9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaGVyb0ltZy5jbGFzc0xpc3QuYWRkKGAke2hlcm9Db250ZW50W2ldLmNsYXNzfWApO1xuICAgICAgICBjb25zdCBpbm5lckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lckNpcmNsZS5jbGFzc0xpc3QuYWRkKCdpbm5lckNpcmNsZScpO1xuICAgICAgICBjb25zdCBvdXRlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdXRlckNpcmNsZS5jbGFzc0xpc3QuYWRkKCdvdXRlckNpcmNsZScpO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhbGxBY3Rpb24nKTtcbiAgICAgICAgaGVyb1RleHQudGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS50ZXh0O1xuICAgICAgICBoZXJvU3Bhbi50ZXh0Q29udGVudCA9IGhlcm9Db250ZW50W2ldLndvcmQ7XG4gICAgICAgIGhlcm9JbWcuc3JjID0gaGVyb0NvbnRlbnRbaV0uaW1hZ2U7XG4gICAgICAgIGlubmVyQ2lyY2xlLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5pbm5lcjtcbiAgICAgICAgb3V0ZXJDaXJjbGUuc3R5bGUuYmFja2dyb3VuZCA9IGhlcm9Db250ZW50W2ldLm91dGVyO1xuICAgICAgICBhY3Rpb24udGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS5jYWxsO1xuICAgICAgICBhY3Rpb24uc3R5bGUuYmFja2dyb3VuZCA9IGhlcm9Db250ZW50W2ldLmlubmVyO1xuICAgICAgICBhY3Rpb24uc3R5bGUuYm94U2hhZG93ID0gYDVweCA1cHggMS41cHggMXB4ICR7aGVyb0NvbnRlbnRbaV0ub3V0ZXJ9YDtcbiAgICAgICAgdGV4dERpdi5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1NwYW4pO1xuICAgICAgICB0ZXh0Q29udGFpbi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbiAgICAgICAgdGV4dENvbnRhaW4uYXBwZW5kQ2hpbGQoYWN0aW9uKTtcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbik7XG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaGVyb0ltZyk7XG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaW5uZXJDaXJjbGUpO1xuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKG91dGVyQ2lyY2xlKTtcbiAgICAgICAgaGVyb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdoZXJvU2xpZGUnKTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbiAgICB9XG59XG5jb25zdCBjYXJvdXNlbCA9ICgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IHNob3dTbGlkZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlcm9TbGlkZScpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2xpZGUubGVuZ3RoOyAgaSsrKXtcbiAgICAgICAgICAgIHNsaWRlW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZihjb3VudCA+IHNsaWRlLmxlbmd0aCl7XG4gICAgICAgICAgICBjb3VudCA9IDFcbiAgICAgICAgfVxuICAgICAgICBzbGlkZVtjb3VudCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7XG4gICAgfVxuICAgIHNob3dTbGlkZXMoKTtcbn1cbmNvbnN0IGNyZWF0ZURlcHQgPSAoaW1nLCB0aXRsZSwgZGVzYywgbGV2ZWwpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVwdEJveCcpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gaW1nO1xuICAgIGNvbnN0IGRlcHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVwdFRleHQuY2xhc3NMaXN0LmFkZCgnZGVwdFRleHQnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xuICAgIGNvbnN0IGxldmVscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldmVscy50ZXh0Q29udGVudCA9ICdMZXZlbChzKSBjb3ZlcmVkOiAnICsgbGV2ZWwudG9TdHJpbmcoKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGRlcHRUZXh0LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGRlcHRUZXh0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChsZXZlbHMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZXB0VGV4dCk7XG4gICAgcmV0dXJuIGRpdjtcbn07XG5jb25zdCBjcmVhdGVTZXJ2aWNlID0gKGhlYWRpbmcsIGJvZHksIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGhlYWQudGV4dENvbnRlbnQgPSBoZWFkaW5nO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGJvZHk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlcnZlQnV0dG9uJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYWN0aW9uO1xuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmV4cG9ydCB7Y3JlYXRlTmF2TGluaywgZ2VuZXJhdGVIZXJvU2VjdGlvbiwgY2Fyb3VzZWwsIGNyZWF0ZURlcHQsIGNyZWF0ZVNlcnZpY2UsIGNyZWF0ZUJyYW5kLCBjcmVhdGVOYXZCYXIsIGNyZWF0ZU1lbnV9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==