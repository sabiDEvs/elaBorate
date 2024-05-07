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

/***/ "./src/SCRIPTS/modules/ai.js":
/*!***********************************!*\
  !*** ./src/SCRIPTS/modules/ai.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChatGpt: () => (/* binding */ createChatGpt),
/* harmony export */   createGemini: () => (/* binding */ createGemini),
/* harmony export */   displayAI: () => (/* binding */ displayAI)
/* harmony export */ });
/* harmony import */ var _RESOURCES_images_google_gemini_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/google-gemini-icon.png */ "./src/RESOURCES/images/google-gemini-icon.png");
/* harmony import */ var _RESOURCES_images_chat_gpt_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/chat-gpt.png */ "./src/RESOURCES/images/chat-gpt.png");
/* harmony import */ var _RESOURCES_images_AI_chatbot_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RESOURCES/images/AI-chatbot-icon.png */ "./src/RESOURCES/images/AI-chatbot-icon.png");



const displayAI = (body) => {
    const box = document.createElement('div');
    const gpt = document.createElement('div');
    gpt.classList.add('aiDiv');
    gpt.classList.add('popUp');
    gpt.addEventListener('click', () => {
        document.querySelector('#chatGPT').style.display = 'block';
        document.querySelector('#geminiAI').style.display = 'none';
    });
    const gptIcon = document.createElement('img');
    gptIcon.src = _RESOURCES_images_chat_gpt_png__WEBPACK_IMPORTED_MODULE_1__;
    gpt.appendChild(gptIcon);
    const ai = document.createElement('div');
    ai.classList.add('aiDiv');
    ai.addEventListener('click', () => {
        gpt.classList.toggle('active');
        gem.classList.toggle('active');
    });
    const aiIcon = document.createElement('img');
    aiIcon.src = _RESOURCES_images_AI_chatbot_icon_png__WEBPACK_IMPORTED_MODULE_2__;
    ai.appendChild(aiIcon);
    const gem = document.createElement('div');
    gem.classList.add('aiDiv');
    gem.classList.add('popUp');
    gem.addEventListener('click', () => {
        document.querySelector('#chatGPT').style.display = 'none';
        document.querySelector('#geminiAI').style.display = 'block';
    });
    const gemIcon = document.createElement('img');
    gemIcon.src = _RESOURCES_images_google_gemini_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    gem.appendChild(gemIcon);
    box.id = 'ai';
    box.appendChild(gpt);
    box.appendChild(ai);
    box.appendChild(gem);
    body.appendChild(box);
};
const createAiBox = (url, title, ide) => {
    const div = document.createElement('div');
    const text = document.createElement('p');
    const close = document.createElement('div');
    const aiDiv = document.createElement('div');
    close.addEventListener('click', () => {
        document.querySelector('#chatGPT').style.display = 'none';
        document.querySelector('#geminiAI').style.display = 'none';
    });
    text.textContent = 'AI pop-up modal';
    text.classList.add('aiText');
    close.textContent = 'x';
    close.classList.add('close');
    const frame = document.createElement('iframe');
    frame.src = url;
    frame.name = title;
    frame.id = ide;
    div.id = title;
    aiDiv.classList.add('frameBox');
    aiDiv.appendChild(frame);
    div.appendChild(text);
    div.appendChild(close);
    div.appendChild(aiDiv);
    return div;
};
const createGemini = (body) => {
    const gemini = createAiBox("https://bot.orimon.ai/?tenantId=5b8a360c-710a-44f2-87bc-5f91fc211911&fullScreenBot=true" , 'geminiAI', 'gemini');
    body.appendChild(gemini);
};
const createChatGpt = (body) => {
    const chatGPT = createAiBox("https://www.chatbase.co/chatbot-iframe/MAsS7vd8yhlz4-rkhASBL", 'chatGPT', 'chatgpt');
    body.appendChild(chatGPT);
};


/***/ }),

/***/ "./src/SCRIPTS/script.js":
/*!*******************************!*\
  !*** ./src/SCRIPTS/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/landing */ "./src/SCRIPTS/modules/landing.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/SCRIPTS/modules/header.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ "./src/SCRIPTS/modules/footer.js");
/* harmony import */ var _modules_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ai */ "./src/SCRIPTS/modules/ai.js");
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _RESOURCES_images_computer_dept_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RESOURCES/images/computer-dept.png */ "./src/RESOURCES/images/computer-dept.png");
/* harmony import */ var _RESOURCES_images_electrical_dept_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../RESOURCES/images/electrical-dept.png */ "./src/RESOURCES/images/electrical-dept.png");
/* harmony import */ var _RESOURCES_images_mechanical_dept_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RESOURCES/images/mechanical-dept.png */ "./src/RESOURCES/images/mechanical-dept.png");
/* harmony import */ var _RESOURCES_images_production_dept_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../RESOURCES/images/production-dept.png */ "./src/RESOURCES/images/production-dept.png");
/* harmony import */ var _RESOURCES_images_about_us_man_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../RESOURCES/images/about_us_man.png */ "./src/RESOURCES/images/about_us_man.png");
//import functions from modules




//import css

//import images





//create a reference to body tag
const body = document.querySelector('body');
//call header function
(0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)(body);

//create main section
const main = document.createElement('main');

//create hero section
const heroSection = document.createElement('section');
//Add heroSection content
(0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.generateHeroSection)(heroSection);
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
const cpeDept = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_computer_dept_png__WEBPACK_IMPORTED_MODULE_5__, 'COMPUTER ENGINEERING', 'Computer ELA offers hands-on experience with hardware, software and basic engineering concepts, by solidifying theory through building circuits, programming microcontrollers, and exploring computer networks', [300, 400]);
//electrical department div
const eeeDept = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_electrical_dept_png__WEBPACK_IMPORTED_MODULE_6__, 'ELECTRICAL ENGINEERING', 'Electrical ELA brings electrical principles to life. Students gain practical experience with circuits, electronics, power systems, and control systems through experiments involving real-world equipment like Transformers, oscilloscopes, and other electrical machines', [200, 300]);
//mechanical department div
const meeDept = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_mechanical_dept_png__WEBPACK_IMPORTED_MODULE_7__, 'MECHANICAL ENGINEERING', 'Mechanical ELA focuses on applying theoretical concepts to real-world applications. Students bridge the gap between theory and application by testing mechanical systems through experiments involving Applied Mechanics (AM) and Strength of Materials (SM)', [200]);
//production department div
const preDept = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_production_dept_png__WEBPACK_IMPORTED_MODULE_8__, 'PRODUCTION ENGINEERING', 'Production ELA delves into the practicalities of manufacturing. Students explore efficient production techniques through experiments in areas like machining, welding, casting, forming, and bench-fitting, developing a strong foundation for future industrial success', [200]);
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
const serve1 = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createService)('Grade-A Reports', 'Stop wasting time on information overload. Elaborate equips you with the essential resources and expert tips to craft concise, impactful reports that showcase your understanding. Plus, with our seamless PDF download feature, you can effortlessly save your reports for future reference or easy sharing with instructors.', 'Learn more');
serve1.classList.add('serve');
//create service two
const serve2 = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createService)('Gain insightful knowledge', 'Don\'t just memorize, truly understand. Elaborate equips you with interactive learning tools and expert insights, transforming passive data into a rich understanding of engineering concepts. This deeper knowledge empowers you to excel in your exams and future endeavors.', 'Learn more');
serve2.classList.add('serve');
serve1.id = 'middle';
//create service three
const serve3 = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createService)('Lab Mastery Made Easy', 'Elaborate sheds light on even the most complex experiments, transforming you from bewildered beginner to confident expert. This newfound understanding empowers you to tackle your ELAs with a winning strategy.', 'Learn more');
serve3.classList.add('serve');
//Append services to  serve box
serveBox.appendChild(serve2);
serveBox.appendChild(serve1);
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
aboutImg.src = _RESOURCES_images_about_us_man_png__WEBPACK_IMPORTED_MODULE_9__;
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
(0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.carousel)();

//display footer
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)(body);

(0,_modules_ai__WEBPACK_IMPORTED_MODULE_3__.displayAI)(body);
(0,_modules_ai__WEBPACK_IMPORTED_MODULE_3__.createGemini)(body);
(0,_modules_ai__WEBPACK_IMPORTED_MODULE_3__.createChatGpt)(body);

/***/ }),

/***/ "./src/RESOURCES/images/AI-chatbot-icon.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/AI-chatbot-icon.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/0bda107bba626fb52b21.png";

/***/ }),

/***/ "./src/RESOURCES/images/about_us_man.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/about_us_man.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "./asset/images/5f6e43892875c978630f.png";

/***/ }),

/***/ "./src/RESOURCES/images/chat-gpt.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/chat-gpt.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "./asset/images/341f0bd1a4f93bae12e2.png";

/***/ }),

/***/ "./src/RESOURCES/images/computer-dept.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/computer-dept.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "./asset/images/4c0593225e4235ce4f99.png";

/***/ }),

/***/ "./src/RESOURCES/images/electrical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/electrical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/64aeffb2733ab0bdedda.png";

/***/ }),

/***/ "./src/RESOURCES/images/google-gemini-icon.png":
/*!*****************************************************!*\
  !*** ./src/RESOURCES/images/google-gemini-icon.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "./asset/images/05509233feb57da9851f.png";

/***/ }),

/***/ "./src/RESOURCES/images/mechanical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/mechanical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/5f89313ddb5c3d488187.png";

/***/ }),

/***/ "./src/RESOURCES/images/production-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/production-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/2faf76535355f39d1270.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/script.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUU7QUFDVDtBQUNLO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsMkRBQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLGtFQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLHFFQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDMkY7QUFDN0M7QUFDQTtBQUNzQjtBQUNwRTtBQUMwQjtBQUMxQjtBQUMwRDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLDZEQUFZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBVSxDQUFDLGdFQUFLO0FBQ2hDO0FBQ0EsZ0JBQWdCLDREQUFVLENBQUMsa0VBQUs7QUFDaEM7QUFDQSxnQkFBZ0IsNERBQVUsQ0FBQyxrRUFBSztBQUNoQztBQUNBLGdCQUFnQiw0REFBVSxDQUFDLGtFQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUFROztBQUVSO0FBQ0EsNkRBQVk7O0FBRVosc0RBQVM7QUFDVCx5REFBWTtBQUNaLDBEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL0NTUy9zdHlsZS5jc3M/MDU4MCIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2FpLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgZ2VtaW5pIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZ29vZ2xlLWdlbWluaS1pY29uLnBuZyc7XG5pbXBvcnQgY2hhdGdwdCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2NoYXQtZ3B0LnBuZyc7XG5pbXBvcnQgYWlQaWMgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9BSS1jaGF0Ym90LWljb24ucG5nJztcbmNvbnN0IGRpc3BsYXlBSSA9IChib2R5KSA9PiB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZ3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3B0LmNsYXNzTGlzdC5hZGQoJ2FpRGl2Jyk7XG4gICAgZ3B0LmNsYXNzTGlzdC5hZGQoJ3BvcFVwJyk7XG4gICAgZ3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdEdQVCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VtaW5pQUknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIGNvbnN0IGdwdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBncHRJY29uLnNyYyA9IGNoYXRncHQ7XG4gICAgZ3B0LmFwcGVuZENoaWxkKGdwdEljb24pO1xuICAgIGNvbnN0IGFpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWkuY2xhc3NMaXN0LmFkZCgnYWlEaXYnKTtcbiAgICBhaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZ3B0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBnZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgY29uc3QgYWlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWlJY29uLnNyYyA9IGFpUGljO1xuICAgIGFpLmFwcGVuZENoaWxkKGFpSWNvbik7XG4gICAgY29uc3QgZ2VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2VtLmNsYXNzTGlzdC5hZGQoJ2FpRGl2Jyk7XG4gICAgZ2VtLmNsYXNzTGlzdC5hZGQoJ3BvcFVwJyk7XG4gICAgZ2VtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdEdQVCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW1pbmlBSScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pO1xuICAgIGNvbnN0IGdlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBnZW1JY29uLnNyYyA9IGdlbWluaTtcbiAgICBnZW0uYXBwZW5kQ2hpbGQoZ2VtSWNvbik7XG4gICAgYm94LmlkID0gJ2FpJztcbiAgICBib3guYXBwZW5kQ2hpbGQoZ3B0KTtcbiAgICBib3guYXBwZW5kQ2hpbGQoYWkpO1xuICAgIGJveC5hcHBlbmRDaGlsZChnZW0pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm94KTtcbn07XG5jb25zdCBjcmVhdGVBaUJveCA9ICh1cmwsIHRpdGxlLCBpZGUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXRHUFQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VtaW5pQUknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSAnQUkgcG9wLXVwIG1vZGFsJztcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2FpVGV4dCcpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBmcmFtZS5zcmMgPSB1cmw7XG4gICAgZnJhbWUubmFtZSA9IHRpdGxlO1xuICAgIGZyYW1lLmlkID0gaWRlO1xuICAgIGRpdi5pZCA9IHRpdGxlO1xuICAgIGFpRGl2LmNsYXNzTGlzdC5hZGQoJ2ZyYW1lQm94Jyk7XG4gICAgYWlEaXYuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChhaURpdik7XG4gICAgcmV0dXJuIGRpdjtcbn07XG5jb25zdCBjcmVhdGVHZW1pbmkgPSAoYm9keSkgPT4ge1xuICAgIGNvbnN0IGdlbWluaSA9IGNyZWF0ZUFpQm94KFwiaHR0cHM6Ly9ib3Qub3JpbW9uLmFpLz90ZW5hbnRJZD01YjhhMzYwYy03MTBhLTQ0ZjItODdiYy01ZjkxZmMyMTE5MTEmZnVsbFNjcmVlbkJvdD10cnVlXCIgLCAnZ2VtaW5pQUknLCAnZ2VtaW5pJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChnZW1pbmkpO1xufTtcbmNvbnN0IGNyZWF0ZUNoYXRHcHQgPSAoYm9keSkgPT4ge1xuICAgIGNvbnN0IGNoYXRHUFQgPSBjcmVhdGVBaUJveChcImh0dHBzOi8vd3d3LmNoYXRiYXNlLmNvL2NoYXRib3QtaWZyYW1lL01Bc1M3dmQ4eWhsejQtcmtoQVNCTFwiLCAnY2hhdEdQVCcsICdjaGF0Z3B0Jyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGF0R1BUKTtcbn07XG5leHBvcnR7Y3JlYXRlR2VtaW5pLCBjcmVhdGVDaGF0R3B0LCBkaXNwbGF5QUl9OyIsIi8vaW1wb3J0IGZ1bmN0aW9ucyBmcm9tIG1vZHVsZXNcbmltcG9ydCB7Z2VuZXJhdGVIZXJvU2VjdGlvbiwgY2Fyb3VzZWwsIGNyZWF0ZURlcHQsIGNyZWF0ZVNlcnZpY2V9IGZyb20gJy4vbW9kdWxlcy9sYW5kaW5nJztcbmltcG9ydCB7cmVuZGVySGVhZGVyfSBmcm9tICcuL21vZHVsZXMvaGVhZGVyJztcbmltcG9ydCB7cmVuZGVyRm9vdGVyfSBmcm9tICcuL21vZHVsZXMvZm9vdGVyJztcbmltcG9ydCB7Y3JlYXRlR2VtaW5pLCBjcmVhdGVDaGF0R3B0LCBkaXNwbGF5QUl9IGZyb20gJy4vbW9kdWxlcy9haSc7XG4vL2ltcG9ydCBjc3NcbmltcG9ydCAnLi4vQ1NTL3N0eWxlLmNzcyc7XG4vL2ltcG9ydCBpbWFnZXNcbmltcG9ydCBkZXB0MSBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2NvbXB1dGVyLWRlcHQucG5nJztcbmltcG9ydCBkZXB0MiBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2VsZWN0cmljYWwtZGVwdC5wbmcnO1xuaW1wb3J0IGRlcHQzIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvbWVjaGFuaWNhbC1kZXB0LnBuZyc7XG5pbXBvcnQgZGVwdDQgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9wcm9kdWN0aW9uLWRlcHQucG5nJztcbmltcG9ydCBhYm91dFBpYyBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2Fib3V0X3VzX21hbi5wbmcnO1xuLy9jcmVhdGUgYSByZWZlcmVuY2UgdG8gYm9keSB0YWdcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4vL2NhbGwgaGVhZGVyIGZ1bmN0aW9uXG5yZW5kZXJIZWFkZXIoYm9keSk7XG5cbi8vY3JlYXRlIG1haW4gc2VjdGlvblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuLy9jcmVhdGUgaGVybyBzZWN0aW9uXG5jb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbi8vQWRkIGhlcm9TZWN0aW9uIGNvbnRlbnRcbmdlbmVyYXRlSGVyb1NlY3Rpb24oaGVyb1NlY3Rpb24pO1xuaGVyb1NlY3Rpb24uaWQgPSAnaGVybyc7XG4vL2FwcGVuZCBoZXJvU2VjdGlvbiBjb250ZW50XG5tYWluLmFwcGVuZENoaWxkKGhlcm9TZWN0aW9uKTtcblxuLy9jcmVhdGUgZGVwYXJ0bWVudCBzZWN0aW9uXG5jb25zdCBkZXB0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmRlcHRTZWN0aW9uLmlkID0gJ2RlcHQnO1xuLy9kZXBhcnRtZW50IHNlY3Rpb24gaGVhZGluZ1xuY29uc3QgZGVwdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5kZXB0SGVhZGVyLnRleHRDb250ZW50ID0gJ0RlcGFydG1lbnRzIFdlIENvdmVyJztcbi8vZGVwYXJ0bWVudCBncm91cGluZ1xuY29uc3QgZGVwdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kZXB0R3JvdXAuaWQgPSAnZ3JvdXAnO1xuLy9jb21wdXRlciBkZXBhcnRtZW50IGRpdlxuY29uc3QgY3BlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDEsICdDT01QVVRFUiBFTkdJTkVFUklORycsICdDb21wdXRlciBFTEEgb2ZmZXJzIGhhbmRzLW9uIGV4cGVyaWVuY2Ugd2l0aCBoYXJkd2FyZSwgc29mdHdhcmUgYW5kIGJhc2ljIGVuZ2luZWVyaW5nIGNvbmNlcHRzLCBieSBzb2xpZGlmeWluZyB0aGVvcnkgdGhyb3VnaCBidWlsZGluZyBjaXJjdWl0cywgcHJvZ3JhbW1pbmcgbWljcm9jb250cm9sbGVycywgYW5kIGV4cGxvcmluZyBjb21wdXRlciBuZXR3b3JrcycsIFszMDAsIDQwMF0pO1xuLy9lbGVjdHJpY2FsIGRlcGFydG1lbnQgZGl2XG5jb25zdCBlZWVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MiwgJ0VMRUNUUklDQUwgRU5HSU5FRVJJTkcnLCAnRWxlY3RyaWNhbCBFTEEgYnJpbmdzIGVsZWN0cmljYWwgcHJpbmNpcGxlcyB0byBsaWZlLiBTdHVkZW50cyBnYWluIHByYWN0aWNhbCBleHBlcmllbmNlIHdpdGggY2lyY3VpdHMsIGVsZWN0cm9uaWNzLCBwb3dlciBzeXN0ZW1zLCBhbmQgY29udHJvbCBzeXN0ZW1zIHRocm91Z2ggZXhwZXJpbWVudHMgaW52b2x2aW5nIHJlYWwtd29ybGQgZXF1aXBtZW50IGxpa2UgVHJhbnNmb3JtZXJzLCBvc2NpbGxvc2NvcGVzLCBhbmQgb3RoZXIgZWxlY3RyaWNhbCBtYWNoaW5lcycsIFsyMDAsIDMwMF0pO1xuLy9tZWNoYW5pY2FsIGRlcGFydG1lbnQgZGl2XG5jb25zdCBtZWVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MywgJ01FQ0hBTklDQUwgRU5HSU5FRVJJTkcnLCAnTWVjaGFuaWNhbCBFTEEgZm9jdXNlcyBvbiBhcHBseWluZyB0aGVvcmV0aWNhbCBjb25jZXB0cyB0byByZWFsLXdvcmxkIGFwcGxpY2F0aW9ucy4gU3R1ZGVudHMgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcnkgYW5kIGFwcGxpY2F0aW9uIGJ5IHRlc3RpbmcgbWVjaGFuaWNhbCBzeXN0ZW1zIHRocm91Z2ggZXhwZXJpbWVudHMgaW52b2x2aW5nIEFwcGxpZWQgTWVjaGFuaWNzIChBTSkgYW5kIFN0cmVuZ3RoIG9mIE1hdGVyaWFscyAoU00pJywgWzIwMF0pO1xuLy9wcm9kdWN0aW9uIGRlcGFydG1lbnQgZGl2XG5jb25zdCBwcmVEZXB0ID0gY3JlYXRlRGVwdChkZXB0NCwgJ1BST0RVQ1RJT04gRU5HSU5FRVJJTkcnLCAnUHJvZHVjdGlvbiBFTEEgZGVsdmVzIGludG8gdGhlIHByYWN0aWNhbGl0aWVzIG9mIG1hbnVmYWN0dXJpbmcuIFN0dWRlbnRzIGV4cGxvcmUgZWZmaWNpZW50IHByb2R1Y3Rpb24gdGVjaG5pcXVlcyB0aHJvdWdoIGV4cGVyaW1lbnRzIGluIGFyZWFzIGxpa2UgbWFjaGluaW5nLCB3ZWxkaW5nLCBjYXN0aW5nLCBmb3JtaW5nLCBhbmQgYmVuY2gtZml0dGluZywgZGV2ZWxvcGluZyBhIHN0cm9uZyBmb3VuZGF0aW9uIGZvciBmdXR1cmUgaW5kdXN0cmlhbCBzdWNjZXNzJywgWzIwMF0pO1xuLy9hcHBlbmQgZGVwYXJ0bWVudCBkaXZcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChjcGVEZXB0KTtcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChlZWVEZXB0KTtcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChtZWVEZXB0KTtcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChwcmVEZXB0KTtcbi8vYXBwZW5kIHRvIGRlcGFydG1lbnQgY2xhc3NcbmRlcHRTZWN0aW9uLmFwcGVuZENoaWxkKGRlcHRIZWFkZXIpO1xuZGVwdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVwdEdyb3VwKTtcbi8vYXBwZW5kIGRlcGFydG1lbnQgU2VjdGlvbiB0byBNYWluXG5tYWluLmFwcGVuZENoaWxkKGRlcHRTZWN0aW9uKTtcblxuLy9jcmVhdGUgc2VydmljZSBzZWN0aW9uXG5jb25zdCBzZXJ2ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5zZXJ2ZVNlY3Rpb24uaWQgPSAnc2VydmljZSc7XG4vL3NlcnZpY2UgaGVhZGVyXG5jb25zdCBzZXJ2ZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuc2VydmVIZWFkLnRleHRDb250ZW50ID0gXCJTZXJ2aWNlcyBXZSBPZmZlclwiO1xuLy90aGUgc2VydmljZXMgY29udGFpbmVyXG5jb25zdCBzZXJ2ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VydmVCb3guaWQgPSAnb2ZmZXJzJztcbi8vY3JlYXRlIHNlcnZpY2Ugb25lXG5jb25zdCBzZXJ2ZTEgPSBjcmVhdGVTZXJ2aWNlKCdHcmFkZS1BIFJlcG9ydHMnLCAnU3RvcCB3YXN0aW5nIHRpbWUgb24gaW5mb3JtYXRpb24gb3ZlcmxvYWQuIEVsYWJvcmF0ZSBlcXVpcHMgeW91IHdpdGggdGhlIGVzc2VudGlhbCByZXNvdXJjZXMgYW5kIGV4cGVydCB0aXBzIHRvIGNyYWZ0IGNvbmNpc2UsIGltcGFjdGZ1bCByZXBvcnRzIHRoYXQgc2hvd2Nhc2UgeW91ciB1bmRlcnN0YW5kaW5nLiBQbHVzLCB3aXRoIG91ciBzZWFtbGVzcyBQREYgZG93bmxvYWQgZmVhdHVyZSwgeW91IGNhbiBlZmZvcnRsZXNzbHkgc2F2ZSB5b3VyIHJlcG9ydHMgZm9yIGZ1dHVyZSByZWZlcmVuY2Ugb3IgZWFzeSBzaGFyaW5nIHdpdGggaW5zdHJ1Y3RvcnMuJywgJ0xlYXJuIG1vcmUnKTtcbnNlcnZlMS5jbGFzc0xpc3QuYWRkKCdzZXJ2ZScpO1xuLy9jcmVhdGUgc2VydmljZSB0d29cbmNvbnN0IHNlcnZlMiA9IGNyZWF0ZVNlcnZpY2UoJ0dhaW4gaW5zaWdodGZ1bCBrbm93bGVkZ2UnLCAnRG9uXFwndCBqdXN0IG1lbW9yaXplLCB0cnVseSB1bmRlcnN0YW5kLiBFbGFib3JhdGUgZXF1aXBzIHlvdSB3aXRoIGludGVyYWN0aXZlIGxlYXJuaW5nIHRvb2xzIGFuZCBleHBlcnQgaW5zaWdodHMsIHRyYW5zZm9ybWluZyBwYXNzaXZlIGRhdGEgaW50byBhIHJpY2ggdW5kZXJzdGFuZGluZyBvZiBlbmdpbmVlcmluZyBjb25jZXB0cy4gVGhpcyBkZWVwZXIga25vd2xlZGdlIGVtcG93ZXJzIHlvdSB0byBleGNlbCBpbiB5b3VyIGV4YW1zIGFuZCBmdXR1cmUgZW5kZWF2b3JzLicsICdMZWFybiBtb3JlJyk7XG5zZXJ2ZTIuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcbnNlcnZlMS5pZCA9ICdtaWRkbGUnO1xuLy9jcmVhdGUgc2VydmljZSB0aHJlZVxuY29uc3Qgc2VydmUzID0gY3JlYXRlU2VydmljZSgnTGFiIE1hc3RlcnkgTWFkZSBFYXN5JywgJ0VsYWJvcmF0ZSBzaGVkcyBsaWdodCBvbiBldmVuIHRoZSBtb3N0IGNvbXBsZXggZXhwZXJpbWVudHMsIHRyYW5zZm9ybWluZyB5b3UgZnJvbSBiZXdpbGRlcmVkIGJlZ2lubmVyIHRvIGNvbmZpZGVudCBleHBlcnQuIFRoaXMgbmV3Zm91bmQgdW5kZXJzdGFuZGluZyBlbXBvd2VycyB5b3UgdG8gdGFja2xlIHlvdXIgRUxBcyB3aXRoIGEgd2lubmluZyBzdHJhdGVneS4nLCAnTGVhcm4gbW9yZScpO1xuc2VydmUzLmNsYXNzTGlzdC5hZGQoJ3NlcnZlJyk7XG4vL0FwcGVuZCBzZXJ2aWNlcyB0byAgc2VydmUgYm94XG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTIpO1xuc2VydmVCb3guYXBwZW5kQ2hpbGQoc2VydmUxKTtcbnNlcnZlQm94LmFwcGVuZENoaWxkKHNlcnZlMyk7XG4vL2NyZWF0ZSBzZXJ2aWNlIGNhbGwgdG8gYWN0aW9uXG5jb25zdCBzZXJ2ZUFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VydmVBY3Rpb24udGV4dENvbnRlbnQgPSAnR0VUIFNUQVJURUQnO1xuc2VydmVBY3Rpb24uaWQgPSAnc2VydmVBY3Rpb24nO1xuLy9BcHBlbmQgc2VydmljZSBpdGVtcyB0byBzZXJ2aWNlIHNlY3Rpb25cbnNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZChzZXJ2ZUhlYWQpO1xuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlQm94KTtcbnNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZChzZXJ2ZUFjdGlvbik7XG4vL0FwcGVuZCBzZXJ2aWNlIHNlY3Rpb24gdG8gbWFpblxubWFpbi5hcHBlbmRDaGlsZChzZXJ2ZVNlY3Rpb24pO1xuXG5cbi8vY3JlYXRlIGFib3V0IHNlY3Rpb25cbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmFib3V0U2VjdGlvbi5pZCA9ICdhYm91dFNlY3Rpb24nO1xuLy9jcmVhdGUgYWJvdXQgcGljdHVyZSBkaXZcbmNvbnN0IHBpY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucGljRGl2LmlkID0gJ3doeVVzJztcbi8vY3JlYXRlIHBpY3R1cmUgaW4gYWJvdXQgZGl2XG5jb25zdCBhYm91dEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuYWJvdXRJbWcuc3JjID0gYWJvdXRQaWM7XG4vL2NyZWF0ZSBoZWFkaW5nIGZvciBhYm91dCBzZWN0aW9uXG5jb25zdCBhYm91dEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuYWJvdXRIZWFkLnRleHRDb250ZW50ID0gJ1dIWSBVUz8nO1xuLy9BcHBlbmQgdG8gcGljdHVyZSBEaXZcbnBpY0Rpdi5hcHBlbmRDaGlsZChhYm91dEltZyk7XG5waWNEaXYuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkKTtcbi8vY3JlYXRlIEFib3V0IHRleHQgZGl2XG5jb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWJvdXREaXYuaWQgPSAnYWJvdXQnO1xuLy9jcmVhdGUgYWJvdXQgdGV4dCBibG9ja3F1b3RlXG5jb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5hYm91dFRleHQudGV4dENvbnRlbnQgPSAnXCJXZSB1bmRlcnN0YW5kIHRoZSBzdHJ1Z2dsZS5cXG4gSnVnZ2xpbmcgY29tcGxleCBlbmdpbmVlcmluZ1xcbiBjb25jZXB0cywgY29uZHVjdGluZyBpbnRyaWNhdGVcXG4gZXhwZXJpbWVudHMsIGFuZCB0aGVuIGZhY2luZ1xcbiB0aGUgZGF1bnRpbmcgdGFzayBvZiB3cml0aW5nIGFcXG4gY2xlYXIgYW5kIGNvbmNpc2UgbGFiIHJlcG9ydFxcbiBjYW4gbGVhdmUgZXZlbiB0aGUgYnJpZ2h0ZXN0XFxuIHN0dWRlbnQgZmVlbGluZyBvdmVyd2hlbG1lZC5cXG4gVGhhdFxcJ3Mgd2hlcmUgd2UgY29tZSBpbi5cIic7XG4vL0FwcGVuZCBhYm91dCB0ZXh0IHRvIGl0IGNvbnRhaW5lclxuYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcbi8vQXBwZW5kIGFib3V0IGNvbnRlbnRzIHRvIHRoZSBzZWN0aW9uXG5hYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQocGljRGl2KTtcbmFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dERpdik7XG4vL0FwcGVuZCBhYm91dCBzZWN0aW9uIHRvIG1haW5cbm1haW4uYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcblxuLy9jcmVhdGUgY29udGFjdCBzZWN0aW9uXG5jb25zdCByZWFjaFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5yZWFjaFNlY3Rpb24uaWQgPSAnY29udGFjdCc7XG4vL2NyZWF0ZSBjb250YWN0IGhlYWRlclxuY29uc3QgcmVhY2hIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xucmVhY2hIZWFkZXIudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBVUyc7XG4vL2NyZWF0ZSBmb3JtIGVsZW1lbnRcbmNvbnN0IGZvcm0gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudXNlck5hbWUudHlwZSA9ICd0ZXh0JztcbnVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ05hbWUnO1xudXNlck5hbWUuaWQgPSAndXNlck5hbWUnO1xudXNlck5hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcbmNvbnN0IHVzZXJFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG51c2VyRW1haWwudHlwZSA9ICdlbWFpbCc7XG51c2VyRW1haWwucGxhY2Vob2xkZXIgPSAnRW1haWwnO1xudXNlckVtYWlsLmlkID0gJ3VzZXJFbWFpbCc7XG51c2VyRW1haWwuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcbmNvbnN0IHVzZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG51c2VyUGhvbmUucGxhY2Vob2xkZXIgPSAnUGhvbmUgTnVtYmVyJztcbnVzZXJQaG9uZS50eXBlID0gJ251bWJlcic7XG51c2VyUGhvbmUuaWQgPSAndXNlclBob25lJztcbnVzZXJQaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xuY29uc3QgdXNlck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xudXNlck1lc3NhZ2UucGxhY2Vob2xkZXIgPSAnRW50ZXIgTWVzc2FnZSc7XG51c2VyTWVzc2FnZS5pZCA9ICd1c2VyTWVzc2FnZSc7XG51c2VyUGhvbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcbmNvbnN0IHVzZXJTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudXNlclN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG51c2VyU3VibWl0LnRleHRDb250ZW50ID0gJ1NVQk1JVCc7XG51c2VyU3VibWl0LmlkID0gJ3VzZXJTdWJtaXQnO1xuLy9BcHBlbmQgZm9ybSBjaGlsZCBlbGVtZW50c1xuZm9ybS5hcHBlbmRDaGlsZCh1c2VyTmFtZSk7XG5mb3JtLmFwcGVuZENoaWxkKHVzZXJFbWFpbCk7XG5mb3JtLmFwcGVuZENoaWxkKHVzZXJQaG9uZSk7XG5mb3JtLmFwcGVuZENoaWxkKHVzZXJNZXNzYWdlKTtcbmZvcm0uYXBwZW5kQ2hpbGQodXNlclN1Ym1pdCk7XG4vL0FwcGVuZCBlbGVtZW50IHRvIGNvbnRhY3Qgc2VjdGlvblxucmVhY2hTZWN0aW9uLmFwcGVuZENoaWxkKHJlYWNoSGVhZGVyKTtcbnJlYWNoU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKTtcbi8vQXBwZW5kIGNvbnRhY3Qgc2VjdGlvbiB0byBtYWluXG5tYWluLmFwcGVuZENoaWxkKHJlYWNoU2VjdGlvbik7XG4vL0FwcGVuZCBtYWluIHRvIGJvZHlcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbi8vY2FsbCB0aGUgY2Fyb3VzZWwgZnVuY3Rpb25cbmNhcm91c2VsKCk7XG5cbi8vZGlzcGxheSBmb290ZXJcbnJlbmRlckZvb3Rlcihib2R5KTtcblxuZGlzcGxheUFJKGJvZHkpO1xuY3JlYXRlR2VtaW5pKGJvZHkpO1xuY3JlYXRlQ2hhdEdwdChib2R5KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=