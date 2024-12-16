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

