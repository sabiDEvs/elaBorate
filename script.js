"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["script"],{

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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
    {text: 'ELA made', word: 'Easy!!!',image: _RESOURCES_images_cpe200_students_png__WEBPACK_IMPORTED_MODULE_0__,class: 'single',inner: '#14213d',outer: '#fca311',call: 'GET STARTED'},
    {text: 'Lab Days?', word: 'A Breeze!', image: _RESOURCES_images_persis_engr_png__WEBPACK_IMPORTED_MODULE_1__, class: 'single', inner: '#000000', outer: '#fca311', call: 'CHOOSE US'},
    {text: 'Engineering Labs,', word: 'Simplified!!', image: _RESOURCES_images_engr_student_200L_png__WEBPACK_IMPORTED_MODULE_2__,class: 'group', inner: '#000000', outer: '#14213d', call: 'TAP IN'},
    {text: 'Don\'t Wing It,', word: 'Elaborate It!', image: _RESOURCES_images_dontekk_engr_png__WEBPACK_IMPORTED_MODULE_3__,class: 'single', inner:  '#000000', outer: '#e5e5e5', call: 'UNLEASH  POTENTIAL'},
    {text: 'Unlock Lab Secrets with,', word: 'Elaborate!!!', image: _RESOURCES_images_cpe180_females_png__WEBPACK_IMPORTED_MODULE_4__,class: 'group', inner: '#14213d', outer: '#e5e5e5', call: 'START NOW'},
    {text: 'Grades Soaring, Elaborate', word: 'Thank You!!', image: _RESOURCES_images_eee210_girls_png__WEBPACK_IMPORTED_MODULE_5__,class: 'single', inner: '#14213d', outer: '#000000', call: 'DIVE IN'},
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

/***/ "./src/SCRIPTS/script.js":
/*!*******************************!*\
  !*** ./src/SCRIPTS/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/landing.js */ "./src/SCRIPTS/modules/landing.js");
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ "./src/SCRIPTS/modules/header.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ "./src/SCRIPTS/modules/footer.js");
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _RESOURCES_images_computer_dept_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../RESOURCES/images/computer-dept.png */ "./src/RESOURCES/images/computer-dept.png");
/* harmony import */ var _RESOURCES_images_electrical_dept_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RESOURCES/images/electrical-dept.png */ "./src/RESOURCES/images/electrical-dept.png");
/* harmony import */ var _RESOURCES_images_mechanical_dept_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../RESOURCES/images/mechanical-dept.png */ "./src/RESOURCES/images/mechanical-dept.png");
/* harmony import */ var _RESOURCES_images_production_dept_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RESOURCES/images/production-dept.png */ "./src/RESOURCES/images/production-dept.png");
/* harmony import */ var _RESOURCES_images_about_us_man_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../RESOURCES/images/about_us_man.png */ "./src/RESOURCES/images/about_us_man.png");
//import functions from modules



//import css

//import images





//create a reference to body tag
const body = document.querySelector('body');
//call header function
(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__.renderHeader)(body);

//create main section
const main = document.createElement('main');

//create hero section
const heroSection = document.createElement('section');
//Add heroSection content
(0,_modules_landing_js__WEBPACK_IMPORTED_MODULE_0__.generateHeroSection)(heroSection);
heroSection.id = 'hero';
//append heroSection content
main.appendChild(heroSection);

//create department section
const deptSection = document.createElement('section');
deptSection.id = 'dept';
//department section heading
const deptHeader = document.createElement('h3');
deptHeader.textContent = 'Departments We Cover';
//department grouping
const deptGroup = document.createElement('div');
deptGroup.id = 'group';
//computer department div
const cpeDept = (0,_modules_landing_js__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_computer_dept_png__WEBPACK_IMPORTED_MODULE_4__, 'COMPUTER ENGINEERING', 'Build breadboard and the likes', [300, 400]);
//electrical department div
const eeeDept = (0,_modules_landing_js__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_electrical_dept_png__WEBPACK_IMPORTED_MODULE_5__, 'ELECTRICAL ENGINEERING', 'Build transformer and the likes', [200]);
//mechanical department div
const meeDept = (0,_modules_landing_js__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_mechanical_dept_png__WEBPACK_IMPORTED_MODULE_6__, 'MECHANICAL ENGINEERING', 'Stuffs we don\'t understand and the likes', [200]);
//production department div
const preDept = (0,_modules_landing_js__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_production_dept_png__WEBPACK_IMPORTED_MODULE_7__, 'PRODUCTION ENGINEERING', 'Draw this and draw that and the likes', [200]);
//append department div
deptGroup.appendChild(cpeDept);
deptGroup.appendChild(eeeDept);
deptGroup.appendChild(meeDept);
deptGroup.appendChild(preDept);
//append to department class
deptSection.appendChild(deptHeader);
deptSection.appendChild(deptGroup);
//append department Section to Main
main.appendChild(deptSection);

//create service section
const serveSection = document.createElement('section');
serveSection.id = 'service';
//service header
const serveHead = document.createElement('h3');
serveHead.textContent = "Services We Offer";
//the services container
const serveBox = document.createElement('div');
serveBox.id = 'offers';
//create service one
const serve1 = (0,_modules_landing_js__WEBPACK_IMPORTED_MODULE_0__.createService)('Examples & Templates', 'see well written materials bla bla bla bla', 'Learn more');
serve1.classList.add('serve');
//create service two
const serve2 = (0,_modules_landing_js__WEBPACK_IMPORTED_MODULE_0__.createService)('Examples & Templates', 'see well written materials bla bla bla bla', 'Learn more');
serve2.classList.add('serve');
serve2.id = 'middle';
//create service three
const serve3 = (0,_modules_landing_js__WEBPACK_IMPORTED_MODULE_0__.createService)('Examples & Templates', 'see well written materials bla bla bla bla', 'Learn more');
serve3.classList.add('serve');
//Append services to  serve box
serveBox.appendChild(serve1);
serveBox.appendChild(serve2);
serveBox.appendChild(serve3);
//create service call to action
const serveAction = document.createElement('div');
serveAction.textContent = 'GET STARTED';
serveAction.id = 'serveAction';
//Append service items to service section
serveSection.appendChild(serveHead);
serveSection.appendChild(serveBox);
serveSection.appendChild(serveAction);
//Append service section to main
main.appendChild(serveSection);


//create about section
const aboutSection = document.createElement('section');
aboutSection.id = 'aboutSection';
//create about picture div
const picDiv = document.createElement('div');
picDiv.id = 'whyUs';
//create picture in about div
const aboutImg = document.createElement('img');
aboutImg.src = _RESOURCES_images_about_us_man_png__WEBPACK_IMPORTED_MODULE_8__;
//create heading for about section
const aboutHead = document.createElement('h2');
aboutHead.textContent = 'WHY US?';
//Append to picture Div
picDiv.appendChild(aboutImg);
picDiv.appendChild(aboutHead);
//create About text div
const aboutDiv = document.createElement('div');
aboutDiv.id = 'about';
//create about text blockquote
const aboutText = document.createElement('p');
aboutText.textContent = '"We understand the struggle.\n Juggling complex engineering\n concepts, conducting intricate\n experiments, and then facing\n the daunting task of writing a\n clear and concise lab report\n can leave even the brightest\n student feeling overwhelmed.\n That\'s where we come in."';
//Append about text to it container
aboutDiv.appendChild(aboutText);
//Append about contents to the section
aboutSection.appendChild(picDiv);
aboutSection.appendChild(aboutDiv);
//Append about section to main
main.appendChild(aboutSection);

//create contact section
const reachSection = document.createElement('section');
reachSection.id = 'contact';
//create contact header
const reachHeader = document.createElement('h2');
reachHeader.textContent = 'CONTACT US';
//create form element
const form =  document.createElement('form');
const userName = document.createElement('input');
userName.type = 'text';
userName.placeholder = 'Name';
userName.id = 'userName';
userName.classList.toggle('input');
const userEmail = document.createElement('input');
userEmail.type = 'email';
userEmail.placeholder = 'Email';
userEmail.id = 'userEmail';
userEmail.classList.toggle('input');
const userPhone = document.createElement('input');
userPhone.placeholder = 'Phone Number';
userPhone.type = 'number';
userPhone.id = 'userPhone';
userPhone.classList.toggle('input');
const userMessage = document.createElement('textarea');
userMessage.placeholder = 'Enter Message';
userMessage.id = 'userMessage';
userPhone.classList.toggle('input');
const userSubmit = document.createElement('input');
userSubmit.type = 'submit';
userSubmit.textContent = 'SUBMIT';
userSubmit.id = 'userSubmit';
//Append form child elements
form.appendChild(userName);
form.appendChild(userEmail);
form.appendChild(userPhone);
form.appendChild(userMessage);
form.appendChild(userSubmit);
//Append element to contact section
reachSection.appendChild(reachHeader);
reachSection.appendChild(form);
//Append contact section to main
main.appendChild(reachSection);
//Append main to body
body.appendChild(main);

//call the carousel function
(0,_modules_landing_js__WEBPACK_IMPORTED_MODULE_0__.carousel)();

//display footer
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)(body);

/***/ }),

/***/ "./src/RESOURCES/images/about_us_man.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/about_us_man.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "./asset/images/5f6e43892875c978630f.png";

/***/ }),

/***/ "./src/RESOURCES/images/computer-dept.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/computer-dept.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "./asset/images/4c0593225e4235ce4f99.png";

/***/ }),

/***/ "./src/RESOURCES/images/cpe180-females.png":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/cpe180-females.png ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "./asset/images/df13175fe258bff6b0a4.png";

/***/ }),

/***/ "./src/RESOURCES/images/cpe200-students.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/cpe200-students.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/2d44d89b66d005841d48.png";

/***/ }),

/***/ "./src/RESOURCES/images/dontekk-engr.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/dontekk-engr.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "./asset/images/1d2ff3ef095565745892.png";

/***/ }),

/***/ "./src/RESOURCES/images/eee210-girls.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/eee210-girls.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "./asset/images/e1399a8b062d382eade6.png";

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

/***/ "./src/RESOURCES/images/electrical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/electrical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/64aeffb2733ab0bdedda.png";

/***/ }),

/***/ "./src/RESOURCES/images/engr-student-200L.png":
/*!****************************************************!*\
  !*** ./src/RESOURCES/images/engr-student-200L.png ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "./asset/images/a7e5b3d68f8dcf41856b.png";

/***/ }),

/***/ "./src/RESOURCES/images/mechanical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/mechanical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/5f89313ddb5c3d488187.png";

/***/ }),

/***/ "./src/RESOURCES/images/persis-engr.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/persis-engr.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "./asset/images/a8a01d448238b0fd69d3.png";

/***/ }),

/***/ "./src/RESOURCES/images/production-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/production-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/2faf76535355f39d1270.png";

/***/ }),

/***/ "./src/RESOURCES/images/search-icon.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/search-icon.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "./asset/images/ecb34bb8fa4ecc3a4316.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/SCRIPTS/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsK0RBQVUsQ0FBQyxnRUFBSztBQUNoQztBQUNBLGdCQUFnQiwrREFBVSxDQUFDLGtFQUFLO0FBQ2hDO0FBQ0EsZ0JBQWdCLCtEQUFVLENBQUMsa0VBQUs7QUFDaEM7QUFDQSxnQkFBZ0IsK0RBQVUsQ0FBQyxrRUFBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0VBQWE7QUFDNUI7QUFDQTtBQUNBLGVBQWUsa0VBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrRUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBUTs7QUFFUjtBQUNBLDZEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL0NTUy9zdHlsZS5jc3M/MDU4MCIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7Y3JlYXRlTmF2QmFyLCBjcmVhdGVCcmFuZH0gZnJvbSAnLi9sYW5kaW5nLmpzJztcbmltcG9ydCBsb2dvMSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VsYWJvcmF0ZS1mb290ZXItbG9nby5wbmcnO1xuY29uc3QgcmVuZGVyRm9vdGVyID0gKGJvZHkpID0+IHtcbi8vY3JlYXRlIGZvb3RlclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4vL2NyZWF0ZSBsZWZ0IGZvb3RlciBzZWN0aW9uXG5jb25zdCBsZWZ0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuLy9jcmVhdGUgZm9vdGVyIGJyYW5kXG5jb25zdCBmb290ZXJCcmFuZCA9IGNyZWF0ZUJyYW5kKGxvZ28xLCAnJyk7XG4vL2NyZWF0ZSBmb290ZXIgbmF2aWdhdGlvbiBsaW5rc1xuY29uc3QgZm9vdGVyTmF2ID0gY3JlYXRlTmF2QmFyKCk7XG5mb290ZXJOYXYuaWQgPSAnZm9vdGVyTmF2Jztcbi8vYXBwZW5kIGNoaWxkcmVuIHRvIGxlZnRGb290ZXJcbmxlZnRGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQnJhbmQpO1xubGVmdEZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJOYXYpO1xuLy9BcHBlbmQgbGVmdCBmb290ZXIgc2VjdGlvbiB0byB0aGUgZm9vdGVyXG5mb290ZXIuYXBwZW5kQ2hpbGQobGVmdEZvb3Rlcik7XG4vL2NyZWF0ZSByaWdodCBmb290ZXIgc2VjdGlvblxuY29uc3QgcmlnaHRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5yaWdodEZvb3Rlci5pZCA9ICdyaWdodEZvb3QnO1xuLy9jcmVhdGUgIHN1YnNjcmliZSB0ZXh0XG5jb25zdCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuc3ViVGV4dC50ZXh0Q29udGVudCA9IFwiR2V0IG91ciBsYXRlc3QgaW5ub3ZhdGl2ZSBuZXdzXCI7XG4vL2NyZWF0ZSBzdWJzY3JpYmUgZGl2XG5jb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1YkRpdi5pZCA9ICdzdWJzY3JpYmUnO1xuLy9jcmVhdGUgZm9vdGVyIHN1YnNjcmliZSBpbnB1dFxuY29uc3Qgc3ViSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuc3ViSW5wdXQudHlwZSA9ICdlbWFpbCc7XG5zdWJJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCBBZGRyZXNzJztcbnN1YklucHV0LmlkID0gJ3N1YkVtYWlsJztcbi8vY3JlYXRlIGZvb3RlciBzdWJzY3JpYmUgYnV0dG9uXG5jb25zdCBzdWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1YkJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJzY3JpYmUnO1xuc3ViQnV0dG9uLmlkID0gJ3N1YkJ1dHRvbic7XG4vL0FwcGVuZCBzdWIgaW5wdXQgYW5kIGJ1dHRvbiB0byBpdCBEaXZcbnN1YkRpdi5hcHBlbmRDaGlsZChzdWJJbnB1dCk7XG5zdWJEaXYuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uKTtcbi8vY3JlYXRlIGNvcHlyaWdodCB0ZXh0XG5jb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvcHlyaWdodC5pbm5lckhUTUwgPSBgJiMxNjk7IENvcHlyaWdodCA8c3Bhbj4ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3NwYW4+YDtcbi8vY3JlYXRlIHJlc2VydmVkIHJpZ2h0IHRleHRcbmNvbnN0IHJlc2VydmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucmVzZXJ2ZWQuaW5uZXJIVE1MID0gJ0FsbCByaWdodHMgcmVzZXJ2ZWQuIEEgPHNwYW4+c2FiaTwvc3Bhbj5EZXZzIGluaXRpYXRpdmUnO1xuLy9BcHBlbmQgY2hpbGRyZW4gdG8gcmlnaHQgZm9vdGVyIGVsZW1lbnRcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHN1YlRleHQpO1xucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChyZXNlcnZlZCk7XG4vL0FwcGVuZCByaWdodCBmb290ZXIgdG8gZm9vdGVyXG5mb290ZXIuYXBwZW5kQ2hpbGQocmlnaHRGb290ZXIpO1xuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcbmV4cG9ydCB7cmVuZGVyRm9vdGVyfTsiLCJpbXBvcnQge2NyZWF0ZU5hdkJhciwgY3JlYXRlQnJhbmR9IGZyb20gJy4vbGFuZGluZy5qcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VsYUJvcmF0ZWxvZ28ucG5nJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmcnO1xuY29uc3QgcmVuZGVySGVhZGVyID0gKGJvZHkpID0+IHtcbi8vY3JlYXRlIGhlYWRlciBlbGVtZW50XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbi8vY3JlYXRlIGljb24gZGl2XG5jb25zdCBpY29uRGl2ID0gY3JlYXRlQnJhbmQobG9nbyk7XG5pY29uRGl2LmlkID0gJ2ljb25EaXYnO1xuLy9jcmVhdGUgbmF2QmFyXG5jb25zdCBuYXZCb3ggPSBjcmVhdGVOYXZCYXIoKTtcbm5hdkJveC5jbGFzc0xpc3QuYWRkKCduYXYnKTsgXG4vL2NyZWF0ZSBzZWFyY2ggQm94IGRpdlxuY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWFyY2hEaXYuaWQgPSAnc2VhcmNoQm94Jztcbi8vY3JlYXRlIHNlYXJjaCBJY29uXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5zZWFyY2hJY29uLnNyYyA9ICBzZWFyY2g7XG4vL2NyZWF0ZSBzZWFyY2ggaW5wdXQgZmllbGRcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnNlYXJjaElucHV0LnR5cGUgPSBcInRleHRcIjtcbnNlYXJjaElucHV0LmlkID0gXCJzZWFyY2hJbnB1dFwiO1xuLy9BZGQgc2VhcmNoQm94IGl0ZW1zIHRvIHBhcmVudFxuc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbnNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbi8vQWRkIGhlYWRlciBpdGVtcyB0byBoZWFkZXJcbmhlYWRlci5hcHBlbmRDaGlsZChpY29uRGl2KTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXZCb3gpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaERpdik7XG4vL0FkZCBoZWFkZXIgdG8gYm9keSB0YWdcbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cbmV4cG9ydCB7cmVuZGVySGVhZGVyfTsiLCIvL2ltcG9ydCBpbWFnZXNcbmltcG9ydCBpbWcxIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY3BlMjAwLXN0dWRlbnRzLnBuZyc7XG5pbXBvcnQgaW1nMiBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL3BlcnNpcy1lbmdyLnBuZyc7XG5pbXBvcnQgaW1nMyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VuZ3Itc3R1ZGVudC0yMDBMLnBuZyc7XG5pbXBvcnQgaW1nNCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2RvbnRla2stZW5nci5wbmcnO1xuaW1wb3J0IGltZzUgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9jcGUxODAtZmVtYWxlcy5wbmcnO1xuaW1wb3J0IGltZzYgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lZWUyMTAtZ2lybHMucG5nJztcbi8vQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgbmF2IGxpbmtzIGFuZCByZXR1cm5zIHRoZSBkaXZcbmNvbnN0IGNyZWF0ZU5hdkxpbmsgPSAocmVmLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBsaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaW5rVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbGluay5hcHBlbmRDaGlsZChsaW5rVGV4dCk7XG4gICAgbGluay5ocmVmID0gcmVmO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICByZXR1cm4gZGl2O1xufTtcbmNvbnN0IGNyZWF0ZUJyYW5kID0gKGxvZ28sIG5hbWUgPSAnZWxhQm9yYXRlJykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vY3JlYXRlIGxvZ28gaWNvblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uLnNyYyA9IGxvZ287XG4gICAgZGl2LmFwcGVuZENoaWxkKGljb24pO1xuICAgIC8vY3JlYXRlIGJyYW5kIG5hbWVcbiAgICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYnJhbmQudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGRpdi5hcHBlbmRDaGlsZChicmFuZCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAvL2NyZWF0ZSBpbmRpdmlkdWFsIG5hdkxpbmtzIHdpdGggaW1wb3J0ZWQgZnVuY3Rpb25cbiAgICBjb25zdCBhYm91dE5hdiA9IGNyZWF0ZU5hdkxpbmsoXCIjXCIsIFwiQWJvdXRcIik7XG4gICAgY29uc3QgcmVwb3J0TmF2ID0gY3JlYXRlTmF2TGluayhcIiNcIiwgXCJSZXBvcnRzXCIpO1xuICAgIGNvbnN0IGNvbnRhY3ROYXYgPSBjcmVhdGVOYXZMaW5rKFwiI1wiLCBcIkNvbnRhY3QgVXNcIik7XG4gICAgLy9BcHBlbmQgbmF2TGlua3MgdG8gbmF2QmFyXG4gICAgZGl2LmFwcGVuZENoaWxkKGFib3V0TmF2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocmVwb3J0TmF2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmNvbnN0IGdlbmVyYXRlSGVyb1NlY3Rpb24gPSAoc2VjdGlvbikgPT4gIHtcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IFtcbiAgICB7dGV4dDogJ0VMQSBtYWRlJywgd29yZDogJ0Vhc3khISEnLGltYWdlOiBpbWcxLGNsYXNzOiAnc2luZ2xlJyxpbm5lcjogJyMxNDIxM2QnLG91dGVyOiAnI2ZjYTMxMScsY2FsbDogJ0dFVCBTVEFSVEVEJ30sXG4gICAge3RleHQ6ICdMYWIgRGF5cz8nLCB3b3JkOiAnQSBCcmVlemUhJywgaW1hZ2U6IGltZzIsIGNsYXNzOiAnc2luZ2xlJywgaW5uZXI6ICcjMDAwMDAwJywgb3V0ZXI6ICcjZmNhMzExJywgY2FsbDogJ0NIT09TRSBVUyd9LFxuICAgIHt0ZXh0OiAnRW5naW5lZXJpbmcgTGFicywnLCB3b3JkOiAnU2ltcGxpZmllZCEhJywgaW1hZ2U6IGltZzMsY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzAwMDAwMCcsIG91dGVyOiAnIzE0MjEzZCcsIGNhbGw6ICdUQVAgSU4nfSxcbiAgICB7dGV4dDogJ0RvblxcJ3QgV2luZyBJdCwnLCB3b3JkOiAnRWxhYm9yYXRlIEl0IScsIGltYWdlOiBpbWc0LGNsYXNzOiAnc2luZ2xlJywgaW5uZXI6ICAnIzAwMDAwMCcsIG91dGVyOiAnI2U1ZTVlNScsIGNhbGw6ICdVTkxFQVNIICBQT1RFTlRJQUwnfSxcbiAgICB7dGV4dDogJ1VubG9jayBMYWIgU2VjcmV0cyB3aXRoLCcsIHdvcmQ6ICdFbGFib3JhdGUhISEnLCBpbWFnZTogaW1nNSxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMTQyMTNkJywgb3V0ZXI6ICcjZTVlNWU1JywgY2FsbDogJ1NUQVJUIE5PVyd9LFxuICAgIHt0ZXh0OiAnR3JhZGVzIFNvYXJpbmcsIEVsYWJvcmF0ZScsIHdvcmQ6ICdUaGFuayBZb3UhIScsIGltYWdlOiBpbWc2LGNsYXNzOiAnc2luZ2xlJywgaW5uZXI6ICcjMTQyMTNkJywgb3V0ZXI6ICcjMDAwMDAwJywgY2FsbDogJ0RJVkUgSU4nfSxcbl07XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGhlcm9Db250ZW50Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0Q29udGFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHREaXYnKTtcbiAgICAgICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZCgnaGVyb1RleHQnKTtcbiAgICAgICAgY29uc3QgaGVyb1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb1NwYW4uY2xhc3NMaXN0LmFkZCgnc3BhbicpO1xuICAgICAgICBjb25zdCBoZXJvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZChgJHtoZXJvQ29udGVudFtpXS5jbGFzc31gKTtcbiAgICAgICAgY29uc3QgaW5uZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5uZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCgnaW5uZXJDaXJjbGUnKTtcbiAgICAgICAgY29uc3Qgb3V0ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCgnb3V0ZXJDaXJjbGUnKTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFjdGlvbi5jbGFzc0xpc3QuYWRkKCdjYWxsQWN0aW9uJyk7XG4gICAgICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0udGV4dDtcbiAgICAgICAgaGVyb1NwYW4udGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS53b3JkO1xuICAgICAgICBoZXJvSW1nLnNyYyA9IGhlcm9Db250ZW50W2ldLmltYWdlO1xuICAgICAgICBpbm5lckNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kID0gaGVyb0NvbnRlbnRbaV0uaW5uZXI7XG4gICAgICAgIG91dGVyQ2lyY2xlLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5vdXRlcjtcbiAgICAgICAgYWN0aW9uLnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0uY2FsbDtcbiAgICAgICAgYWN0aW9uLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5pbm5lcjtcbiAgICAgICAgYWN0aW9uLnN0eWxlLmJveFNoYWRvdyA9IGA1cHggNXB4IDEuNXB4IDFweCAke2hlcm9Db250ZW50W2ldLm91dGVyfWA7XG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGhlcm9TcGFuKTtcbiAgICAgICAgdGV4dENvbnRhaW4uYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gICAgICAgIHRleHRDb250YWluLmFwcGVuZENoaWxkKGFjdGlvbik7XG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW4pO1xuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9JbWcpO1xuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChvdXRlckNpcmNsZSk7XG4gICAgICAgIGhlcm9EaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGVyb1NsaWRlJyk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XG4gICAgfVxufVxuY29uc3QgY2Fyb3VzZWwgPSAoKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCBzaG93U2xpZGVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZXJvU2xpZGUnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNsaWRlLmxlbmd0aDsgIGkrKyl7XG4gICAgICAgICAgICBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYoY291bnQgPiBzbGlkZS5sZW5ndGgpe1xuICAgICAgICAgICAgY291bnQgPSAxXG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVbY291bnQgLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApO1xuICAgIH1cbiAgICBzaG93U2xpZGVzKCk7XG59XG5jb25zdCBjcmVhdGVEZXB0ID0gKGltZywgdGl0bGUsIGRlc2MsIGxldmVsKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlcHRCb3gnKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IGltZztcbiAgICBjb25zdCBkZXB0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlcHRUZXh0LmNsYXNzTGlzdC5hZGQoJ2RlcHRUZXh0Jyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcbiAgICBjb25zdCBsZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXZlbHMudGV4dENvbnRlbnQgPSAnTGV2ZWwocykgY292ZXJlZDogJyArIGxldmVsLnRvU3RyaW5nKCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVwdFRleHQuYXBwZW5kQ2hpbGQobGV2ZWxzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVwdFRleHQpO1xuICAgIHJldHVybiBkaXY7XG59O1xuY29uc3QgY3JlYXRlU2VydmljZSA9IChoZWFkaW5nLCBib2R5LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBoZWFkLnRleHRDb250ZW50ID0gaGVhZGluZztcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBib2R5O1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZXJ2ZUJ1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFjdGlvbjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHJldHVybiBkaXY7XG59XG5leHBvcnQge2NyZWF0ZU5hdkxpbmssIGdlbmVyYXRlSGVyb1NlY3Rpb24sIGNhcm91c2VsLCBjcmVhdGVEZXB0LCBjcmVhdGVTZXJ2aWNlLCBjcmVhdGVCcmFuZCwgY3JlYXRlTmF2QmFyfTsiLCIvL2ltcG9ydCBmdW5jdGlvbnMgZnJvbSBtb2R1bGVzXG5pbXBvcnQge2dlbmVyYXRlSGVyb1NlY3Rpb24sIGNhcm91c2VsLCBjcmVhdGVEZXB0LCBjcmVhdGVTZXJ2aWNlfSBmcm9tICcuL21vZHVsZXMvbGFuZGluZy5qcyc7XG5pbXBvcnQge3JlbmRlckhlYWRlcn0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci5qcyc7XG5pbXBvcnQge3JlbmRlckZvb3Rlcn0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlcic7XG4vL2ltcG9ydCBjc3NcbmltcG9ydCAnLi4vQ1NTL3N0eWxlLmNzcyc7XG4vL2ltcG9ydCBpbWFnZXNcbmltcG9ydCBkZXB0MSBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2NvbXB1dGVyLWRlcHQucG5nJztcbmltcG9ydCBkZXB0MiBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2VsZWN0cmljYWwtZGVwdC5wbmcnO1xuaW1wb3J0IGRlcHQzIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvbWVjaGFuaWNhbC1kZXB0LnBuZyc7XG5pbXBvcnQgZGVwdDQgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9wcm9kdWN0aW9uLWRlcHQucG5nJztcbmltcG9ydCBhYm91dFBpYyBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2Fib3V0X3VzX21hbi5wbmcnO1xuLy9jcmVhdGUgYSByZWZlcmVuY2UgdG8gYm9keSB0YWdcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4vL2NhbGwgaGVhZGVyIGZ1bmN0aW9uXG5yZW5kZXJIZWFkZXIoYm9keSk7XG5cbi8vY3JlYXRlIG1haW4gc2VjdGlvblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuLy9jcmVhdGUgaGVybyBzZWN0aW9uXG5jb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbi8vQWRkIGhlcm9TZWN0aW9uIGNvbnRlbnRcbmdlbmVyYXRlSGVyb1NlY3Rpb24oaGVyb1NlY3Rpb24pO1xuaGVyb1NlY3Rpb24uaWQgPSAnaGVybyc7XG4vL2FwcGVuZCBoZXJvU2VjdGlvbiBjb250ZW50XG5tYWluLmFwcGVuZENoaWxkKGhlcm9TZWN0aW9uKTtcblxuLy9jcmVhdGUgZGVwYXJ0bWVudCBzZWN0aW9uXG5jb25zdCBkZXB0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmRlcHRTZWN0aW9uLmlkID0gJ2RlcHQnO1xuLy9kZXBhcnRtZW50IHNlY3Rpb24gaGVhZGluZ1xuY29uc3QgZGVwdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5kZXB0SGVhZGVyLnRleHRDb250ZW50ID0gJ0RlcGFydG1lbnRzIFdlIENvdmVyJztcbi8vZGVwYXJ0bWVudCBncm91cGluZ1xuY29uc3QgZGVwdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kZXB0R3JvdXAuaWQgPSAnZ3JvdXAnO1xuLy9jb21wdXRlciBkZXBhcnRtZW50IGRpdlxuY29uc3QgY3BlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDEsICdDT01QVVRFUiBFTkdJTkVFUklORycsICdCdWlsZCBicmVhZGJvYXJkIGFuZCB0aGUgbGlrZXMnLCBbMzAwLCA0MDBdKTtcbi8vZWxlY3RyaWNhbCBkZXBhcnRtZW50IGRpdlxuY29uc3QgZWVlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDIsICdFTEVDVFJJQ0FMIEVOR0lORUVSSU5HJywgJ0J1aWxkIHRyYW5zZm9ybWVyIGFuZCB0aGUgbGlrZXMnLCBbMjAwXSk7XG4vL21lY2hhbmljYWwgZGVwYXJ0bWVudCBkaXZcbmNvbnN0IG1lZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQzLCAnTUVDSEFOSUNBTCBFTkdJTkVFUklORycsICdTdHVmZnMgd2UgZG9uXFwndCB1bmRlcnN0YW5kIGFuZCB0aGUgbGlrZXMnLCBbMjAwXSk7XG4vL3Byb2R1Y3Rpb24gZGVwYXJ0bWVudCBkaXZcbmNvbnN0IHByZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQ0LCAnUFJPRFVDVElPTiBFTkdJTkVFUklORycsICdEcmF3IHRoaXMgYW5kIGRyYXcgdGhhdCBhbmQgdGhlIGxpa2VzJywgWzIwMF0pO1xuLy9hcHBlbmQgZGVwYXJ0bWVudCBkaXZcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChjcGVEZXB0KTtcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChlZWVEZXB0KTtcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChtZWVEZXB0KTtcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChwcmVEZXB0KTtcbi8vYXBwZW5kIHRvIGRlcGFydG1lbnQgY2xhc3NcbmRlcHRTZWN0aW9uLmFwcGVuZENoaWxkKGRlcHRIZWFkZXIpO1xuZGVwdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVwdEdyb3VwKTtcbi8vYXBwZW5kIGRlcGFydG1lbnQgU2VjdGlvbiB0byBNYWluXG5tYWluLmFwcGVuZENoaWxkKGRlcHRTZWN0aW9uKTtcblxuLy9jcmVhdGUgc2VydmljZSBzZWN0aW9uXG5jb25zdCBzZXJ2ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5zZXJ2ZVNlY3Rpb24uaWQgPSAnc2VydmljZSc7XG4vL3NlcnZpY2UgaGVhZGVyXG5jb25zdCBzZXJ2ZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuc2VydmVIZWFkLnRleHRDb250ZW50ID0gXCJTZXJ2aWNlcyBXZSBPZmZlclwiO1xuLy90aGUgc2VydmljZXMgY29udGFpbmVyXG5jb25zdCBzZXJ2ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VydmVCb3guaWQgPSAnb2ZmZXJzJztcbi8vY3JlYXRlIHNlcnZpY2Ugb25lXG5jb25zdCBzZXJ2ZTEgPSBjcmVhdGVTZXJ2aWNlKCdFeGFtcGxlcyAmIFRlbXBsYXRlcycsICdzZWUgd2VsbCB3cml0dGVuIG1hdGVyaWFscyBibGEgYmxhIGJsYSBibGEnLCAnTGVhcm4gbW9yZScpO1xuc2VydmUxLmNsYXNzTGlzdC5hZGQoJ3NlcnZlJyk7XG4vL2NyZWF0ZSBzZXJ2aWNlIHR3b1xuY29uc3Qgc2VydmUyID0gY3JlYXRlU2VydmljZSgnRXhhbXBsZXMgJiBUZW1wbGF0ZXMnLCAnc2VlIHdlbGwgd3JpdHRlbiBtYXRlcmlhbHMgYmxhIGJsYSBibGEgYmxhJywgJ0xlYXJuIG1vcmUnKTtcbnNlcnZlMi5jbGFzc0xpc3QuYWRkKCdzZXJ2ZScpO1xuc2VydmUyLmlkID0gJ21pZGRsZSc7XG4vL2NyZWF0ZSBzZXJ2aWNlIHRocmVlXG5jb25zdCBzZXJ2ZTMgPSBjcmVhdGVTZXJ2aWNlKCdFeGFtcGxlcyAmIFRlbXBsYXRlcycsICdzZWUgd2VsbCB3cml0dGVuIG1hdGVyaWFscyBibGEgYmxhIGJsYSBibGEnLCAnTGVhcm4gbW9yZScpO1xuc2VydmUzLmNsYXNzTGlzdC5hZGQoJ3NlcnZlJyk7XG4vL0FwcGVuZCBzZXJ2aWNlcyB0byAgc2VydmUgYm94XG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTEpO1xuc2VydmVCb3guYXBwZW5kQ2hpbGQoc2VydmUyKTtcbnNlcnZlQm94LmFwcGVuZENoaWxkKHNlcnZlMyk7XG4vL2NyZWF0ZSBzZXJ2aWNlIGNhbGwgdG8gYWN0aW9uXG5jb25zdCBzZXJ2ZUFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VydmVBY3Rpb24udGV4dENvbnRlbnQgPSAnR0VUIFNUQVJURUQnO1xuc2VydmVBY3Rpb24uaWQgPSAnc2VydmVBY3Rpb24nO1xuLy9BcHBlbmQgc2VydmljZSBpdGVtcyB0byBzZXJ2aWNlIHNlY3Rpb25cbnNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZChzZXJ2ZUhlYWQpO1xuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlQm94KTtcbnNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZChzZXJ2ZUFjdGlvbik7XG4vL0FwcGVuZCBzZXJ2aWNlIHNlY3Rpb24gdG8gbWFpblxubWFpbi5hcHBlbmRDaGlsZChzZXJ2ZVNlY3Rpb24pO1xuXG5cbi8vY3JlYXRlIGFib3V0IHNlY3Rpb25cbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmFib3V0U2VjdGlvbi5pZCA9ICdhYm91dFNlY3Rpb24nO1xuLy9jcmVhdGUgYWJvdXQgcGljdHVyZSBkaXZcbmNvbnN0IHBpY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucGljRGl2LmlkID0gJ3doeVVzJztcbi8vY3JlYXRlIHBpY3R1cmUgaW4gYWJvdXQgZGl2XG5jb25zdCBhYm91dEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuYWJvdXRJbWcuc3JjID0gYWJvdXRQaWM7XG4vL2NyZWF0ZSBoZWFkaW5nIGZvciBhYm91dCBzZWN0aW9uXG5jb25zdCBhYm91dEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuYWJvdXRIZWFkLnRleHRDb250ZW50ID0gJ1dIWSBVUz8nO1xuLy9BcHBlbmQgdG8gcGljdHVyZSBEaXZcbnBpY0Rpdi5hcHBlbmRDaGlsZChhYm91dEltZyk7XG5waWNEaXYuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkKTtcbi8vY3JlYXRlIEFib3V0IHRleHQgZGl2XG5jb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWJvdXREaXYuaWQgPSAnYWJvdXQnO1xuLy9jcmVhdGUgYWJvdXQgdGV4dCBibG9ja3F1b3RlXG5jb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5hYm91dFRleHQudGV4dENvbnRlbnQgPSAnXCJXZSB1bmRlcnN0YW5kIHRoZSBzdHJ1Z2dsZS5cXG4gSnVnZ2xpbmcgY29tcGxleCBlbmdpbmVlcmluZ1xcbiBjb25jZXB0cywgY29uZHVjdGluZyBpbnRyaWNhdGVcXG4gZXhwZXJpbWVudHMsIGFuZCB0aGVuIGZhY2luZ1xcbiB0aGUgZGF1bnRpbmcgdGFzayBvZiB3cml0aW5nIGFcXG4gY2xlYXIgYW5kIGNvbmNpc2UgbGFiIHJlcG9ydFxcbiBjYW4gbGVhdmUgZXZlbiB0aGUgYnJpZ2h0ZXN0XFxuIHN0dWRlbnQgZmVlbGluZyBvdmVyd2hlbG1lZC5cXG4gVGhhdFxcJ3Mgd2hlcmUgd2UgY29tZSBpbi5cIic7XG4vL0FwcGVuZCBhYm91dCB0ZXh0IHRvIGl0IGNvbnRhaW5lclxuYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcbi8vQXBwZW5kIGFib3V0IGNvbnRlbnRzIHRvIHRoZSBzZWN0aW9uXG5hYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQocGljRGl2KTtcbmFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dERpdik7XG4vL0FwcGVuZCBhYm91dCBzZWN0aW9uIHRvIG1haW5cbm1haW4uYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcblxuLy9jcmVhdGUgY29udGFjdCBzZWN0aW9uXG5jb25zdCByZWFjaFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5yZWFjaFNlY3Rpb24uaWQgPSAnY29udGFjdCc7XG4vL2NyZWF0ZSBjb250YWN0IGhlYWRlclxuY29uc3QgcmVhY2hIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xucmVhY2hIZWFkZXIudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBVUyc7XG4vL2NyZWF0ZSBmb3JtIGVsZW1lbnRcbmNvbnN0IGZvcm0gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudXNlck5hbWUudHlwZSA9ICd0ZXh0JztcbnVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ05hbWUnO1xudXNlck5hbWUuaWQgPSAndXNlck5hbWUnO1xudXNlck5hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcbmNvbnN0IHVzZXJFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG51c2VyRW1haWwudHlwZSA9ICdlbWFpbCc7XG51c2VyRW1haWwucGxhY2Vob2xkZXIgPSAnRW1haWwnO1xudXNlckVtYWlsLmlkID0gJ3VzZXJFbWFpbCc7XG51c2VyRW1haWwuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcbmNvbnN0IHVzZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG51c2VyUGhvbmUucGxhY2Vob2xkZXIgPSAnUGhvbmUgTnVtYmVyJztcbnVzZXJQaG9uZS50eXBlID0gJ251bWJlcic7XG51c2VyUGhvbmUuaWQgPSAndXNlclBob25lJztcbnVzZXJQaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xuY29uc3QgdXNlck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xudXNlck1lc3NhZ2UucGxhY2Vob2xkZXIgPSAnRW50ZXIgTWVzc2FnZSc7XG51c2VyTWVzc2FnZS5pZCA9ICd1c2VyTWVzc2FnZSc7XG51c2VyUGhvbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcbmNvbnN0IHVzZXJTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudXNlclN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG51c2VyU3VibWl0LnRleHRDb250ZW50ID0gJ1NVQk1JVCc7XG51c2VyU3VibWl0LmlkID0gJ3VzZXJTdWJtaXQnO1xuLy9BcHBlbmQgZm9ybSBjaGlsZCBlbGVtZW50c1xuZm9ybS5hcHBlbmRDaGlsZCh1c2VyTmFtZSk7XG5mb3JtLmFwcGVuZENoaWxkKHVzZXJFbWFpbCk7XG5mb3JtLmFwcGVuZENoaWxkKHVzZXJQaG9uZSk7XG5mb3JtLmFwcGVuZENoaWxkKHVzZXJNZXNzYWdlKTtcbmZvcm0uYXBwZW5kQ2hpbGQodXNlclN1Ym1pdCk7XG4vL0FwcGVuZCBlbGVtZW50IHRvIGNvbnRhY3Qgc2VjdGlvblxucmVhY2hTZWN0aW9uLmFwcGVuZENoaWxkKHJlYWNoSGVhZGVyKTtcbnJlYWNoU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKTtcbi8vQXBwZW5kIGNvbnRhY3Qgc2VjdGlvbiB0byBtYWluXG5tYWluLmFwcGVuZENoaWxkKHJlYWNoU2VjdGlvbik7XG4vL0FwcGVuZCBtYWluIHRvIGJvZHlcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbi8vY2FsbCB0aGUgY2Fyb3VzZWwgZnVuY3Rpb25cbmNhcm91c2VsKCk7XG5cbi8vZGlzcGxheSBmb290ZXJcbnJlbmRlckZvb3Rlcihib2R5KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=