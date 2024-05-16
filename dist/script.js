"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["script"],{

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
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/modal.js */ "./src/SCRIPTS/modules/modal.js");
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





//to implement the modal, copy to all your pages


(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_9__.createModal)(body);
function checkLocalStorage(){
    if(!localStorage.getItem('Subscribed')){(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_9__.OpenModal)();} else{(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_9__.CloseModal)();}
}
window.onload = checkLocalStorage;

/***/ }),

/***/ "./src/RESOURCES/images/about_us_man.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/about_us_man.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/asset/images/5f6e43892875c978630f.png";

/***/ }),

/***/ "./src/RESOURCES/images/computer-dept.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/computer-dept.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/asset/images/4c0593225e4235ce4f99.png";

/***/ }),

/***/ "./src/RESOURCES/images/electrical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/electrical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/asset/images/64aeffb2733ab0bdedda.png";

/***/ }),

/***/ "./src/RESOURCES/images/mechanical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/mechanical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/asset/images/5f89313ddb5c3d488187.png";

/***/ }),

/***/ "./src/RESOURCES/images/production-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/production-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/asset/images/2faf76535355f39d1270.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_CSS_style_css-src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js-src_SCRIPTS_mod-79364f"], () => (__webpack_exec__("./src/SCRIPTS/script.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDOEY7QUFDN0M7QUFDSDtBQUM5Qzs7QUFFMEI7O0FBRTFCO0FBQzBEO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsZ0VBQVk7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3RUFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtEQUFVLENBQUMsZ0VBQUs7QUFDaEM7QUFDQSxnQkFBZ0IsK0RBQVUsQ0FBQyxrRUFBSztBQUNoQztBQUNBLGdCQUFnQiwrREFBVSxDQUFDLGtFQUFLO0FBQ2hDO0FBQ0EsZ0JBQWdCLCtEQUFVLENBQUMsa0VBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtFQUFhO0FBQzVCO0FBQ0E7QUFDQSxlQUFlLGtFQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0VBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQVE7O0FBRVI7QUFDQSw2REFBWTs7Ozs7O0FBTVo7QUFDd0U7O0FBRXhFLDhEQUFXO0FBQ1g7QUFDQSw0Q0FBNEMsNERBQVMsS0FBSyxLQUFLLDZEQUFVO0FBQ3pFO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgZnVuY3Rpb25zIGZyb20gbW9kdWxlc1xuaW1wb3J0IHtnZW5lcmF0ZUhlcm9TZWN0aW9uLCBjYXJvdXNlbCwgY3JlYXRlRGVwdCwgY3JlYXRlU2VydmljZX0gZnJvbSAnLi9tb2R1bGVzL2xhbmRpbmcuanMnO1xuaW1wb3J0IHtyZW5kZXJIZWFkZXJ9IGZyb20gJy4vbW9kdWxlcy9oZWFkZXIuanMnO1xuaW1wb3J0IHtyZW5kZXJGb290ZXJ9IGZyb20gJy4vbW9kdWxlcy9mb290ZXInO1xuLy9pbXBvcnQgY3NzXG5cbmltcG9ydCAnLi4vQ1NTL3N0eWxlLmNzcyc7XG5cbi8vaW1wb3J0IGltYWdlc1xuaW1wb3J0IGRlcHQxIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvY29tcHV0ZXItZGVwdC5wbmcnO1xuaW1wb3J0IGRlcHQyIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZWxlY3RyaWNhbC1kZXB0LnBuZyc7XG5pbXBvcnQgZGVwdDMgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9tZWNoYW5pY2FsLWRlcHQucG5nJztcbmltcG9ydCBkZXB0NCBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL3Byb2R1Y3Rpb24tZGVwdC5wbmcnO1xuaW1wb3J0IGFib3V0UGljIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvYWJvdXRfdXNfbWFuLnBuZyc7XG4vL2NyZWF0ZSBhIHJlZmVyZW5jZSB0byBib2R5IHRhZ1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbi8vY2FsbCBoZWFkZXIgZnVuY3Rpb25cbnJlbmRlckhlYWRlcihib2R5KTtcblxuLy9jcmVhdGUgbWFpbiBzZWN0aW9uXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4vL2NyZWF0ZSBoZXJvIHNlY3Rpb25cbmNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuLy9BZGQgaGVyb1NlY3Rpb24gY29udGVudFxuZ2VuZXJhdGVIZXJvU2VjdGlvbihoZXJvU2VjdGlvbik7XG5oZXJvU2VjdGlvbi5pZCA9ICdoZXJvJztcbi8vYXBwZW5kIGhlcm9TZWN0aW9uIGNvbnRlbnRcbm1haW4uYXBwZW5kQ2hpbGQoaGVyb1NlY3Rpb24pO1xuXG4vL2NyZWF0ZSBkZXBhcnRtZW50IHNlY3Rpb25cbmNvbnN0IGRlcHRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuZGVwdFNlY3Rpb24uaWQgPSAnZGVwdCc7XG4vL2RlcGFydG1lbnQgc2VjdGlvbiBoZWFkaW5nXG5jb25zdCBkZXB0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmRlcHRIZWFkZXIudGV4dENvbnRlbnQgPSAnRGVwYXJ0bWVudHMgV2UgQ292ZXInO1xuLy9kZXBhcnRtZW50IGdyb3VwaW5nXG5jb25zdCBkZXB0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRlcHRHcm91cC5pZCA9ICdncm91cCc7XG4vL2NvbXB1dGVyIGRlcGFydG1lbnQgZGl2XG5jb25zdCBjcGVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MSwgJ0NPTVBVVEVSIEVOR0lORUVSSU5HJywgJ0J1aWxkIGJyZWFkYm9hcmQgYW5kIHRoZSBsaWtlcycsIFszMDAsIDQwMF0pO1xuLy9lbGVjdHJpY2FsIGRlcGFydG1lbnQgZGl2XG5jb25zdCBlZWVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MiwgJ0VMRUNUUklDQUwgRU5HSU5FRVJJTkcnLCAnQnVpbGQgdHJhbnNmb3JtZXIgYW5kIHRoZSBsaWtlcycsIFsyMDBdKTtcbi8vbWVjaGFuaWNhbCBkZXBhcnRtZW50IGRpdlxuY29uc3QgbWVlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDMsICdNRUNIQU5JQ0FMIEVOR0lORUVSSU5HJywgJ1N0dWZmcyB3ZSBkb25cXCd0IHVuZGVyc3RhbmQgYW5kIHRoZSBsaWtlcycsIFsyMDBdKTtcbi8vcHJvZHVjdGlvbiBkZXBhcnRtZW50IGRpdlxuY29uc3QgcHJlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDQsICdQUk9EVUNUSU9OIEVOR0lORUVSSU5HJywgJ0RyYXcgdGhpcyBhbmQgZHJhdyB0aGF0IGFuZCB0aGUgbGlrZXMnLCBbMjAwXSk7XG4vL2FwcGVuZCBkZXBhcnRtZW50IGRpdlxuZGVwdEdyb3VwLmFwcGVuZENoaWxkKGNwZURlcHQpO1xuZGVwdEdyb3VwLmFwcGVuZENoaWxkKGVlZURlcHQpO1xuZGVwdEdyb3VwLmFwcGVuZENoaWxkKG1lZURlcHQpO1xuZGVwdEdyb3VwLmFwcGVuZENoaWxkKHByZURlcHQpO1xuLy9hcHBlbmQgdG8gZGVwYXJ0bWVudCBjbGFzc1xuZGVwdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVwdEhlYWRlcik7XG5kZXB0U2VjdGlvbi5hcHBlbmRDaGlsZChkZXB0R3JvdXApO1xuLy9hcHBlbmQgZGVwYXJ0bWVudCBTZWN0aW9uIHRvIE1haW5cbm1haW4uYXBwZW5kQ2hpbGQoZGVwdFNlY3Rpb24pO1xuXG4vL2NyZWF0ZSBzZXJ2aWNlIHNlY3Rpb25cbmNvbnN0IHNlcnZlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbnNlcnZlU2VjdGlvbi5pZCA9ICdzZXJ2aWNlJztcbi8vc2VydmljZSBoZWFkZXJcbmNvbnN0IHNlcnZlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5zZXJ2ZUhlYWQudGV4dENvbnRlbnQgPSBcIlNlcnZpY2VzIFdlIE9mZmVyXCI7XG4vL3RoZSBzZXJ2aWNlcyBjb250YWluZXJcbmNvbnN0IHNlcnZlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZXJ2ZUJveC5pZCA9ICdvZmZlcnMnO1xuLy9jcmVhdGUgc2VydmljZSBvbmVcbmNvbnN0IHNlcnZlMSA9IGNyZWF0ZVNlcnZpY2UoJ0V4YW1wbGVzICYgVGVtcGxhdGVzJywgJ3NlZSB3ZWxsIHdyaXR0ZW4gbWF0ZXJpYWxzIGJsYSBibGEgYmxhIGJsYScsICdMZWFybiBtb3JlJyk7XG5zZXJ2ZTEuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcbi8vY3JlYXRlIHNlcnZpY2UgdHdvXG5jb25zdCBzZXJ2ZTIgPSBjcmVhdGVTZXJ2aWNlKCdFeGFtcGxlcyAmIFRlbXBsYXRlcycsICdzZWUgd2VsbCB3cml0dGVuIG1hdGVyaWFscyBibGEgYmxhIGJsYSBibGEnLCAnTGVhcm4gbW9yZScpO1xuc2VydmUyLmNsYXNzTGlzdC5hZGQoJ3NlcnZlJyk7XG5zZXJ2ZTIuaWQgPSAnbWlkZGxlJztcbi8vY3JlYXRlIHNlcnZpY2UgdGhyZWVcbmNvbnN0IHNlcnZlMyA9IGNyZWF0ZVNlcnZpY2UoJ0V4YW1wbGVzICYgVGVtcGxhdGVzJywgJ3NlZSB3ZWxsIHdyaXR0ZW4gbWF0ZXJpYWxzIGJsYSBibGEgYmxhIGJsYScsICdMZWFybiBtb3JlJyk7XG5zZXJ2ZTMuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcbi8vQXBwZW5kIHNlcnZpY2VzIHRvICBzZXJ2ZSBib3hcbnNlcnZlQm94LmFwcGVuZENoaWxkKHNlcnZlMSk7XG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTIpO1xuc2VydmVCb3guYXBwZW5kQ2hpbGQoc2VydmUzKTtcbi8vY3JlYXRlIHNlcnZpY2UgY2FsbCB0byBhY3Rpb25cbmNvbnN0IHNlcnZlQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZXJ2ZUFjdGlvbi50ZXh0Q29udGVudCA9ICdHRVQgU1RBUlRFRCc7XG5zZXJ2ZUFjdGlvbi5pZCA9ICdzZXJ2ZUFjdGlvbic7XG4vL0FwcGVuZCBzZXJ2aWNlIGl0ZW1zIHRvIHNlcnZpY2Ugc2VjdGlvblxuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlSGVhZCk7XG5zZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VydmVCb3gpO1xuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlQWN0aW9uKTtcbi8vQXBwZW5kIHNlcnZpY2Ugc2VjdGlvbiB0byBtYWluXG5tYWluLmFwcGVuZENoaWxkKHNlcnZlU2VjdGlvbik7XG5cblxuLy9jcmVhdGUgYWJvdXQgc2VjdGlvblxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuYWJvdXRTZWN0aW9uLmlkID0gJ2Fib3V0U2VjdGlvbic7XG4vL2NyZWF0ZSBhYm91dCBwaWN0dXJlIGRpdlxuY29uc3QgcGljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5waWNEaXYuaWQgPSAnd2h5VXMnO1xuLy9jcmVhdGUgcGljdHVyZSBpbiBhYm91dCBkaXZcbmNvbnN0IGFib3V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5hYm91dEltZy5zcmMgPSBhYm91dFBpYztcbi8vY3JlYXRlIGhlYWRpbmcgZm9yIGFib3V0IHNlY3Rpb25cbmNvbnN0IGFib3V0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5hYm91dEhlYWQudGV4dENvbnRlbnQgPSAnV0hZIFVTPyc7XG4vL0FwcGVuZCB0byBwaWN0dXJlIERpdlxucGljRGl2LmFwcGVuZENoaWxkKGFib3V0SW1nKTtcbnBpY0Rpdi5hcHBlbmRDaGlsZChhYm91dEhlYWQpO1xuLy9jcmVhdGUgQWJvdXQgdGV4dCBkaXZcbmNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hYm91dERpdi5pZCA9ICdhYm91dCc7XG4vL2NyZWF0ZSBhYm91dCB0ZXh0IGJsb2NrcXVvdGVcbmNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmFib3V0VGV4dC50ZXh0Q29udGVudCA9ICdcIldlIHVuZGVyc3RhbmQgdGhlIHN0cnVnZ2xlLlxcbiBKdWdnbGluZyBjb21wbGV4IGVuZ2luZWVyaW5nXFxuIGNvbmNlcHRzLCBjb25kdWN0aW5nIGludHJpY2F0ZVxcbiBleHBlcmltZW50cywgYW5kIHRoZW4gZmFjaW5nXFxuIHRoZSBkYXVudGluZyB0YXNrIG9mIHdyaXRpbmcgYVxcbiBjbGVhciBhbmQgY29uY2lzZSBsYWIgcmVwb3J0XFxuIGNhbiBsZWF2ZSBldmVuIHRoZSBicmlnaHRlc3RcXG4gc3R1ZGVudCBmZWVsaW5nIG92ZXJ3aGVsbWVkLlxcbiBUaGF0XFwncyB3aGVyZSB3ZSBjb21lIGluLlwiJztcbi8vQXBwZW5kIGFib3V0IHRleHQgdG8gaXQgY29udGFpbmVyXG5hYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuLy9BcHBlbmQgYWJvdXQgY29udGVudHMgdG8gdGhlIHNlY3Rpb25cbmFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChwaWNEaXYpO1xuYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0RGl2KTtcbi8vQXBwZW5kIGFib3V0IHNlY3Rpb24gdG8gbWFpblxubWFpbi5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xuXG4vL2NyZWF0ZSBjb250YWN0IHNlY3Rpb25cbmNvbnN0IHJlYWNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbnJlYWNoU2VjdGlvbi5pZCA9ICdjb250YWN0Jztcbi8vY3JlYXRlIGNvbnRhY3QgaGVhZGVyXG5jb25zdCByZWFjaEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5yZWFjaEhlYWRlci50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcbi8vY3JlYXRlIGZvcm0gZWxlbWVudFxuY29uc3QgZm9ybSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG51c2VyTmFtZS50eXBlID0gJ3RleHQnO1xudXNlck5hbWUucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG51c2VyTmFtZS5pZCA9ICd1c2VyTmFtZSc7XG51c2VyTmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xuY29uc3QgdXNlckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnVzZXJFbWFpbC50eXBlID0gJ2VtYWlsJztcbnVzZXJFbWFpbC5wbGFjZWhvbGRlciA9ICdFbWFpbCc7XG51c2VyRW1haWwuaWQgPSAndXNlckVtYWlsJztcbnVzZXJFbWFpbC5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xuY29uc3QgdXNlclBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnVzZXJQaG9uZS5wbGFjZWhvbGRlciA9ICdQaG9uZSBOdW1iZXInO1xudXNlclBob25lLnR5cGUgPSAnbnVtYmVyJztcbnVzZXJQaG9uZS5pZCA9ICd1c2VyUGhvbmUnO1xudXNlclBob25lLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XG5jb25zdCB1c2VyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG51c2VyTWVzc2FnZS5wbGFjZWhvbGRlciA9ICdFbnRlciBNZXNzYWdlJztcbnVzZXJNZXNzYWdlLmlkID0gJ3VzZXJNZXNzYWdlJztcbnVzZXJQaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xuY29uc3QgdXNlclN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG51c2VyU3VibWl0LnR5cGUgPSAnc3VibWl0JztcbnVzZXJTdWJtaXQudGV4dENvbnRlbnQgPSAnU1VCTUlUJztcbnVzZXJTdWJtaXQuaWQgPSAndXNlclN1Ym1pdCc7XG4vL0FwcGVuZCBmb3JtIGNoaWxkIGVsZW1lbnRzXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJOYW1lKTtcbmZvcm0uYXBwZW5kQ2hpbGQodXNlckVtYWlsKTtcbmZvcm0uYXBwZW5kQ2hpbGQodXNlclBob25lKTtcbmZvcm0uYXBwZW5kQ2hpbGQodXNlck1lc3NhZ2UpO1xuZm9ybS5hcHBlbmRDaGlsZCh1c2VyU3VibWl0KTtcbi8vQXBwZW5kIGVsZW1lbnQgdG8gY29udGFjdCBzZWN0aW9uXG5yZWFjaFNlY3Rpb24uYXBwZW5kQ2hpbGQocmVhY2hIZWFkZXIpO1xucmVhY2hTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xuLy9BcHBlbmQgY29udGFjdCBzZWN0aW9uIHRvIG1haW5cbm1haW4uYXBwZW5kQ2hpbGQocmVhY2hTZWN0aW9uKTtcbi8vQXBwZW5kIG1haW4gdG8gYm9keVxuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuLy9jYWxsIHRoZSBjYXJvdXNlbCBmdW5jdGlvblxuY2Fyb3VzZWwoKTtcblxuLy9kaXNwbGF5IGZvb3RlclxucmVuZGVyRm9vdGVyKGJvZHkpO1xuXG5cblxuXG5cbi8vdG8gaW1wbGVtZW50IHRoZSBtb2RhbCwgY29weSB0byBhbGwgeW91ciBwYWdlc1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwsIE9wZW5Nb2RhbCwgQ2xvc2VNb2RhbCB9IGZyb20gJy4vbW9kdWxlcy9tb2RhbC5qcyc7XG5cbmNyZWF0ZU1vZGFsKGJvZHkpO1xuZnVuY3Rpb24gY2hlY2tMb2NhbFN0b3JhZ2UoKXtcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N1YnNjcmliZWQnKSl7T3Blbk1vZGFsKCk7fSBlbHNle0Nsb3NlTW9kYWwoKTt9XG59XG53aW5kb3cub25sb2FkID0gY2hlY2tMb2NhbFN0b3JhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9