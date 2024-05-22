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

module.exports = "../asset/images/42b2d9844f6b2f4f1d16.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/cpe-engr-group.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/cpe-engr-group.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "../asset/images/a70d6a4b8b304ef985e6.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/eee-engr-girls.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/eee-engr-girls.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "../asset/images/911581982d5099bbd728.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/eee-male-engr.jpg":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/eee-male-engr.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "../asset/images/a2e6def33c12927585f1.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/elaBoratelogo.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/elaBoratelogo.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "../asset/images/89c558426b41fccd73cd.png";

/***/ }),

/***/ "./src/RESOURCES/images/elaborate-footer-logo.png":
/*!********************************************************!*\
  !*** ./src/RESOURCES/images/elaborate-footer-logo.png ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "../asset/images/89c7f3e4da4391052d31.png";

/***/ }),

/***/ "./src/RESOURCES/images/female-engr.jpg":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/female-engr.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "../asset/images/9dfe16325ed6898b3799.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/mte-male-engr.jpg":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/mte-male-engr.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "../asset/images/d0370f308500f6ec534a.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/search-icon.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/search-icon.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "../asset/images/ecb34bb8fa4ecc3a4316.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1NDUklQVFNfbW9kdWxlc19mb290ZXJfanMtc3JjX1NDUklQVFNfbW9kdWxlc19oZWFkZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ2M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFXLENBQUMsd0VBQUs7QUFDckM7QUFDQSxrQkFBa0IseURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQix5QkFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1FO0FBQ1A7QUFDQTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBVyxDQUFDLGdFQUFJO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLHlEQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBVTtBQUNWO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUMwRDtBQUNHO0FBQ0Q7QUFDQztBQUNEO0FBQ0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlDQUF5Qyw4REFBSSxzRUFBc0U7QUFDeEgsS0FBSywrQ0FBK0MsaUVBQUksd0VBQXdFO0FBQ2hJLEtBQUsseURBQXlELGdFQUFJLG9FQUFvRTtBQUN0SSxLQUFLLHlEQUF5RCxpRUFBSSxpRkFBaUY7QUFDbkosS0FBSywrREFBK0QsZ0VBQUksdUVBQXVFO0FBQy9JLEtBQUssZ0VBQWdFLGlFQUFJLHFFQUFxRTtBQUM5STtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9sYW5kaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlTmF2QmFyLCBjcmVhdGVCcmFuZH0gZnJvbSAnLi9sYW5kaW5nLmpzJztcclxuaW1wb3J0IGxvZ28xIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWxhYm9yYXRlLWZvb3Rlci1sb2dvLnBuZyc7XHJcbmNvbnN0IHJlbmRlckZvb3RlciA9IChib2R5LCBhcnJheSkgPT4ge1xyXG4vL2NyZWF0ZSBmb290ZXJcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbi8vY3JlYXRlIGxlZnQgZm9vdGVyIHNlY3Rpb25cclxuY29uc3QgbGVmdEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuLy9jcmVhdGUgZm9vdGVyIGJyYW5kXHJcbmNvbnN0IGZvb3RlckJyYW5kID0gY3JlYXRlQnJhbmQobG9nbzEsICcnKTtcclxuLy9jcmVhdGUgZm9vdGVyIG5hdmlnYXRpb24gbGlua3NcclxuY29uc3QgZm9vdGVyTmF2ID0gY3JlYXRlTmF2QmFyKGFycmF5KTtcclxuZm9vdGVyTmF2LmlkID0gJ2Zvb3Rlck5hdic7XHJcbi8vYXBwZW5kIGNoaWxkcmVuIHRvIGxlZnRGb290ZXJcclxubGVmdEZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJCcmFuZCk7XHJcbmxlZnRGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmF2KTtcclxubGVmdEZvb3Rlci5pZCA9ICdsZWZ0Rm9vdCc7XHJcbi8vQXBwZW5kIGxlZnQgZm9vdGVyIHNlY3Rpb24gdG8gdGhlIGZvb3RlclxyXG5mb290ZXIuYXBwZW5kQ2hpbGQobGVmdEZvb3Rlcik7XHJcbi8vY3JlYXRlIHJpZ2h0IGZvb3RlciBzZWN0aW9uXHJcbmNvbnN0IHJpZ2h0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5yaWdodEZvb3Rlci5pZCA9ICdyaWdodEZvb3QnO1xyXG4vL2NyZWF0ZSAgc3Vic2NyaWJlIHRleHRcclxuY29uc3Qgc3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuc3ViVGV4dC50ZXh0Q29udGVudCA9IFwiR2V0IG91ciBsYXRlc3QgaW5ub3ZhdGl2ZSBuZXdzXCI7XHJcbi8vY3JlYXRlIHN1YnNjcmliZSBkaXZcclxuY29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnN1YkRpdi5pZCA9ICdzdWJzY3JpYmUnO1xyXG4vL2NyZWF0ZSBmb290ZXIgc3Vic2NyaWJlIGlucHV0XHJcbmNvbnN0IHN1YklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc3ViSW5wdXQudHlwZSA9ICdlbWFpbCc7XHJcbnN1YklucHV0LnBsYWNlaG9sZGVyID0gJ0VtYWlsIEFkZHJlc3MnO1xyXG5zdWJJbnB1dC5pZCA9ICdzdWJFbWFpbCc7XHJcbi8vY3JlYXRlIGZvb3RlciBzdWJzY3JpYmUgYnV0dG9uXHJcbmNvbnN0IHN1YkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zdWJCdXR0b24udGV4dENvbnRlbnQgPSAnU3Vic2NyaWJlJztcclxuc3ViQnV0dG9uLmlkID0gJ3N1YkJ1dHRvbic7XHJcbi8vQXBwZW5kIHN1YiBpbnB1dCBhbmQgYnV0dG9uIHRvIGl0IERpdlxyXG5zdWJEaXYuYXBwZW5kQ2hpbGQoc3ViSW5wdXQpO1xyXG5zdWJEaXYuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uKTtcclxuLy9jcmVhdGUgY29weXJpZ2h0IHRleHRcclxuY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvcHlyaWdodC5pbm5lckhUTUwgPSBgJiMxNjk7IENvcHlyaWdodCA8c3Bhbj4ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3NwYW4+YDtcclxuLy9jcmVhdGUgcmVzZXJ2ZWQgcmlnaHQgdGV4dFxyXG5jb25zdCByZXNlcnZlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxucmVzZXJ2ZWQuaW5uZXJIVE1MID0gJ0FsbCByaWdodHMgcmVzZXJ2ZWQuIEEgPHNwYW4+c2FiaTwvc3Bhbj5EZXZzIGluaXRpYXRpdmUnO1xyXG4vL0FwcGVuZCBjaGlsZHJlbiB0byByaWdodCBmb290ZXIgZWxlbWVudFxyXG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChzdWJUZXh0KTtcclxucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcclxucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcclxucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQocmVzZXJ2ZWQpO1xyXG4vL0FwcGVuZCByaWdodCBmb290ZXIgdG8gZm9vdGVyXHJcbmZvb3Rlci5hcHBlbmRDaGlsZChyaWdodEZvb3Rlcik7XHJcbmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuZXhwb3J0IHtyZW5kZXJGb290ZXJ9OyIsImltcG9ydCB7Y3JlYXRlTmF2QmFyLCBjcmVhdGVCcmFuZCwgY3JlYXRlTWVudX0gZnJvbSAnLi9sYW5kaW5nLmpzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lbGFCb3JhdGVsb2dvLnBuZyc7XHJcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmcnO1xyXG5jb25zdCByZW5kZXJIZWFkZXIgPSAoYm9keSwgYXJyYXkpID0+IHtcclxuLy9jcmVhdGUgaGVhZGVyIGVsZW1lbnRcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbi8vY3JlYXRlIGljb24gZGl2XHJcbmNvbnN0IGljb25EaXYgPSBjcmVhdGVCcmFuZChsb2dvKTtcclxuaWNvbkRpdi5pZCA9ICdpY29uRGl2JztcclxuLy9jcmVhdGUgbmF2QmFyXHJcbmNvbnN0IG5hdkJveCA9IGNyZWF0ZU5hdkJhcihhcnJheSk7XHJcbm5hdkJveC5jbGFzc0xpc3QuYWRkKCduYXYnKTsgXHJcbi8vY3JlYXRlIHNlYXJjaCBCb3ggZGl2XHJcbmNvbnN0IHNlYXJjaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zZWFyY2hEaXYuaWQgPSAnc2VhcmNoQm94JztcclxuLy9jcmVhdGUgc2VhcmNoIEljb25cclxuY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5zZWFyY2hJY29uLnNyYyA9ICBzZWFyY2g7XHJcbi8vY3JlYXRlIHNlYXJjaCBpbnB1dCBmaWVsZFxyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnNlYXJjaElucHV0LnR5cGUgPSBcInRleHRcIjtcclxuc2VhcmNoSW5wdXQuaWQgPSBcInNlYXJjaElucHV0XCI7XHJcbi8vQWRkIHNlYXJjaEJveCBpdGVtcyB0byBwYXJlbnRcclxuc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcclxuc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xyXG4vL0FkZCBoZWFkZXIgaXRlbXMgdG8gaGVhZGVyXHJcbmhlYWRlci5hcHBlbmRDaGlsZChpY29uRGl2KTtcclxuaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJveCk7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hEaXYpO1xyXG4vL2NyZWF0ZSBtZW51XHJcbmNyZWF0ZU1lbnUoaGVhZGVyKTtcclxuLy9BZGQgaGVhZGVyIHRvIGJvZHkgdGFnXHJcbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufVxyXG5leHBvcnQge3JlbmRlckhlYWRlcn07IiwiLy9pbXBvcnQgaW1hZ2VzXHJcbmltcG9ydCBpbWcxIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZmVtYWxlLWVuZ3IuanBnJztcclxuaW1wb3J0IGltZzIgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lZWUtZW5nci1naXJscy5qcGcnO1xyXG5pbXBvcnQgaW1nMyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VlZS1tYWxlLWVuZ3IuanBnJztcclxuaW1wb3J0IGltZzQgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9jcGUtZW5nci1ncm91cC5qcGcnO1xyXG5pbXBvcnQgaW1nNSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL210ZS1tYWxlLWVuZ3IuanBnJztcclxuaW1wb3J0IGltZzYgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9jcGUtZW5nci1naXJscy5qcGcnO1xyXG5cclxuXHJcbi8vQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgbmF2IGxpbmtzIGFuZCByZXR1cm5zIHRoZSBkaXZcclxuY29uc3QgY3JlYXRlTmF2TGluayA9IChyZWYsIHRleHQpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGlua1RleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgbGluay5hcHBlbmRDaGlsZChsaW5rVGV4dCk7XHJcbiAgICBsaW5rLmhyZWYgPSByZWY7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59O1xyXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBtZW51XHJcbmNvbnN0IGNyZWF0ZU1lbnUgPSAoaGVhZGVyKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICBsZXQgYmFycyA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKyl7XHJcbiAgICAgICAgYmFyc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJhcnNbaV0uY2xhc3NMaXN0LmFkZCgnYmFycycpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChiYXJzW2ldKTtcclxuICAgIH1cclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuY2xhc3NOYW1lID09PSAnbmF2IGFjdGl2ZScpe1xyXG4gICAgICAgICAgICBhbGVydCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvJykuc3R5bGUubWFyZ2luVG9wID0gJzIwdmgnOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlcm8nKS5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2KTtcclxufVxyXG5jb25zdCBjcmVhdGVCcmFuZCA9IChsb2dvLCBuYW1lID0gJ2VsYUJvcmF0ZScpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy9jcmVhdGUgbG9nbyBpY29uXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpY29uLnNyYyA9IGxvZ287XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAvL2NyZWF0ZSBicmFuZCBuYW1lXHJcbiAgICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBicmFuZC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnJhbmQpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoYXJyYXkpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgLy9jcmVhdGUgaW5kaXZpZHVhbCBuYXZMaW5rcyB3aXRoIGltcG9ydGVkIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBob21lTmF2ID0gY3JlYXRlTmF2TGluayhhcnJheVswXSwgXCJIb21lXCIpXHJcbiAgICBjb25zdCBhYm91dE5hdiA9IGNyZWF0ZU5hdkxpbmsoYXJyYXlbMl0sIFwiQWJvdXRcIik7XHJcbiAgICBjb25zdCByZXBvcnROYXYgPSBjcmVhdGVOYXZMaW5rKGFycmF5WzFdLCBcIlJlcG9ydHNcIik7XHJcbiAgICBjb25zdCBjb250YWN0TmF2ID0gY3JlYXRlTmF2TGluayhcIm1haWx0bzppbmZvLnNhYmlkZXZzQGdtYWlsLmNvbVwiLCBcIkNvbnRhY3QgVXNcIik7XHJcbiAgICAvL0FwcGVuZCBuYXZMaW5rcyB0byBuYXZCYXJcclxuICAgIGRpdi5hcHBlbmRDaGlsZChob21lTmF2KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChhYm91dE5hdik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocmVwb3J0TmF2KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWN0TmF2KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuY29uc3QgZ2VuZXJhdGVIZXJvU2VjdGlvbiA9IChzZWN0aW9uKSA9PiAge1xyXG4gICAgY29uc3QgaGVyb0NvbnRlbnQgPSBbXHJcbiAgICB7dGV4dDogJ0VMQSBtYWRlJywgd29yZDogJ0Vhc3khISEnLGltYWdlOiBpbWcxLGNsYXNzOiAnZ3JvdXAnLGlubmVyOiAnIzE0MjEzZCcsb3V0ZXI6ICcjZmNhMzExJyxjYWxsOiAnR0VUIFNUQVJURUQnfSxcclxuICAgIHt0ZXh0OiAnTGFiIERheXM/Jywgd29yZDogJ0EgQnJlZXplISEhJywgaW1hZ2U6IGltZzIsIGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMwMDAwMDAnLCBvdXRlcjogJyNmY2EzMTEnLCBjYWxsOiAnQ0hPT1NFIFVTJ30sXHJcbiAgICB7dGV4dDogJ0VuZ2luZWVyaW5nIExhYnMsJywgd29yZDogJ1NpbXBsaWZpZWQhISEnLCBpbWFnZTogaW1nMyxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMDAwMDAwJywgb3V0ZXI6ICcjMTQyMTNkJywgY2FsbDogJ1RBUCBJTid9LFxyXG4gICAge3RleHQ6ICdEb25cXCd0IFdpbmcgSXQsJywgd29yZDogJ0VsYWJvcmF0ZSBJdCEhIScsIGltYWdlOiBpbWc0LGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogICcjMDAwMDAwJywgb3V0ZXI6ICcjZTVlNWU1JywgY2FsbDogJ1VOTEVBU0ggIFBPVEVOVElBTCd9LFxyXG4gICAge3RleHQ6ICdVbmxvY2sgTGFiIFNlY3JldHMgd2l0aCwnLCB3b3JkOiAnRWxhYm9yYXRlISEhJywgaW1hZ2U6IGltZzUsY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzE0MjEzZCcsIG91dGVyOiAnI2U1ZTVlNScsIGNhbGw6ICdTVEFSVCBOT1cnfSxcclxuICAgIHt0ZXh0OiAnR3JhZGVzIFNvYXJpbmcsIEVsYWJvcmF0ZScsIHdvcmQ6ICdUaGFuayBZb3UhISEnLCBpbWFnZTogaW1nNixjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMTQyMTNkJywgb3V0ZXI6ICcjMDAwMDAwJywgY2FsbDogJ0RJVkUgSU4nfSxcclxuXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoZXJvQ29udGVudC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHRleHRDb250YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGV4dENvbnRhaW4uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRleHREaXYuY2xhc3NMaXN0LmFkZCgndGV4dERpdicpO1xyXG4gICAgICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZCgnaGVyb1RleHQnKTtcclxuICAgICAgICBjb25zdCBoZXJvU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlcm9TcGFuLmNsYXNzTGlzdC5hZGQoJ3NwYW4nKTtcclxuICAgICAgICBjb25zdCBoZXJvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaGVyb0ltZy5jbGFzc0xpc3QuYWRkKGAke2hlcm9Db250ZW50W2ldLmNsYXNzfWApO1xyXG4gICAgICAgIGNvbnN0IGlubmVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5uZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCgnaW5uZXJDaXJjbGUnKTtcclxuICAgICAgICBjb25zdCBvdXRlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG91dGVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ291dGVyQ2lyY2xlJyk7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhbGxBY3Rpb24nKTtcclxuICAgICAgICBoZXJvVGV4dC50ZXh0Q29udGVudCA9IGhlcm9Db250ZW50W2ldLnRleHQ7XHJcbiAgICAgICAgaGVyb1NwYW4udGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS53b3JkO1xyXG4gICAgICAgIGhlcm9JbWcuc3JjID0gaGVyb0NvbnRlbnRbaV0uaW1hZ2U7XHJcbiAgICAgICAgaW5uZXJDaXJjbGUuc3R5bGUuYmFja2dyb3VuZCA9IGhlcm9Db250ZW50W2ldLmlubmVyO1xyXG4gICAgICAgIG91dGVyQ2lyY2xlLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5vdXRlcjtcclxuICAgICAgICBhY3Rpb24udGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS5jYWxsO1xyXG4gICAgICAgIGFjdGlvbi5zdHlsZS5iYWNrZ3JvdW5kID0gaGVyb0NvbnRlbnRbaV0uaW5uZXI7XHJcbiAgICAgICAgYWN0aW9uLnN0eWxlLmJveFNoYWRvdyA9IGA1cHggNXB4IDEuNXB4IDFweCAke2hlcm9Db250ZW50W2ldLm91dGVyfWA7XHJcbiAgICAgICAgdGV4dERpdi5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XHJcbiAgICAgICAgdGV4dERpdi5hcHBlbmRDaGlsZChoZXJvU3Bhbik7XHJcbiAgICAgICAgdGV4dENvbnRhaW4uYXBwZW5kQ2hpbGQodGV4dERpdik7XHJcbiAgICAgICAgdGV4dENvbnRhaW4uYXBwZW5kQ2hpbGQoYWN0aW9uKTtcclxuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKHRleHRDb250YWluKTtcclxuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9JbWcpO1xyXG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaW5uZXJDaXJjbGUpO1xyXG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQob3V0ZXJDaXJjbGUpO1xyXG4gICAgICAgIGhlcm9EaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGVyb1NsaWRlJyk7XHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcclxuICAgIH1cclxufVxyXG5jb25zdCBjYXJvdXNlbCA9ICgpID0+IHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBjb25zdCBzaG93U2xpZGVzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlcm9TbGlkZScpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzbGlkZS5sZW5ndGg7ICBpKyspe1xyXG4gICAgICAgICAgICBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgaWYoY291bnQgPiBzbGlkZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICBjb3VudCA9IDFcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVbY291bnQgLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNTAwMCk7XHJcbiAgICB9XHJcbiAgICBzaG93U2xpZGVzKCk7XHJcbn1cclxuY29uc3QgY3JlYXRlRGVwdCA9IChpbWcsIHRpdGxlLCBkZXNjLCBsZXZlbCkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVwdEJveCcpO1xyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltYWdlLnNyYyA9IGltZztcclxuICAgIGNvbnN0IGRlcHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXB0VGV4dC5jbGFzc0xpc3QuYWRkKCdkZXB0VGV4dCcpO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcclxuICAgIGNvbnN0IGxldmVscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV2ZWxzLnRleHRDb250ZW50ID0gJ0xldmVsKHMpIGNvdmVyZWQ6ICcgKyBsZXZlbC50b1N0cmluZygpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICAgIGRlcHRUZXh0LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgZGVwdFRleHQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgZGVwdFRleHQuYXBwZW5kQ2hpbGQobGV2ZWxzKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkZXB0VGV4dCk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59O1xyXG5jb25zdCBjcmVhdGVTZXJ2aWNlID0gKGhlYWRpbmcsIGJvZHksIGFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIGhlYWQudGV4dENvbnRlbnQgPSBoZWFkaW5nO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIHRleHQudGV4dENvbnRlbnQgPSBib2R5O1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VydmVCdXR0b24nKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFjdGlvbjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5leHBvcnQge2NyZWF0ZU5hdkxpbmssIGdlbmVyYXRlSGVyb1NlY3Rpb24sIGNhcm91c2VsLCBjcmVhdGVEZXB0LCBjcmVhdGVTZXJ2aWNlLCBjcmVhdGVCcmFuZCwgY3JlYXRlTmF2QmFyLCBjcmVhdGVNZW51fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=