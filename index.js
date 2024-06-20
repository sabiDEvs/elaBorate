"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["index"],{

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

module.exports = "../../asset/images/0bda107bba626fb52b21.png";

/***/ }),

/***/ "./src/RESOURCES/images/about_us_man.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/about_us_man.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "../../asset/images/5f6e43892875c978630f.png";

/***/ }),

/***/ "./src/RESOURCES/images/chat-gpt.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/chat-gpt.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/341f0bd1a4f93bae12e2.png";

/***/ }),

/***/ "./src/RESOURCES/images/computer-dept.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/computer-dept.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/4c0593225e4235ce4f99.png";

/***/ }),

/***/ "./src/RESOURCES/images/electrical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/electrical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/64aeffb2733ab0bdedda.png";

/***/ }),

/***/ "./src/RESOURCES/images/google-gemini-icon.png":
/*!*****************************************************!*\
  !*** ./src/RESOURCES/images/google-gemini-icon.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/05509233feb57da9851f.png";

/***/ }),

/***/ "./src/RESOURCES/images/mechanical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/mechanical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/5f89313ddb5c3d488187.png";

/***/ }),

/***/ "./src/RESOURCES/images/production-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/production-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "../../asset/images/2faf76535355f39d1270.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/script.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtRTtBQUNUO0FBQ0s7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQiwyREFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsa0VBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IscUVBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUMyRjtBQUM3QztBQUNBO0FBQ3NCO0FBQ3BFO0FBQzBCO0FBQzFCO0FBQzBEO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsNkRBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFVLENBQUMsZ0VBQUs7QUFDaEM7QUFDQSxnQkFBZ0IsNERBQVUsQ0FBQyxrRUFBSztBQUNoQztBQUNBLGdCQUFnQiw0REFBVSxDQUFDLGtFQUFLO0FBQ2hDO0FBQ0EsZ0JBQWdCLDREQUFVLENBQUMsa0VBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBUTtBQUNSO0FBQ0E7QUFDQSw2REFBWTtBQUNaO0FBQ0Esc0RBQVM7QUFDVCx5REFBWTtBQUNaLDBEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL0NTUy9zdHlsZS5jc3M/MDU4MCIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2FpLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgZ2VtaW5pIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZ29vZ2xlLWdlbWluaS1pY29uLnBuZyc7XHJcbmltcG9ydCBjaGF0Z3B0IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY2hhdC1ncHQucG5nJztcclxuaW1wb3J0IGFpUGljIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvQUktY2hhdGJvdC1pY29uLnBuZyc7XHJcbmNvbnN0IGRpc3BsYXlBSSA9IChib2R5KSA9PiB7XHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGdwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3B0LmNsYXNzTGlzdC5hZGQoJ2FpRGl2Jyk7XHJcbiAgICBncHQuY2xhc3NMaXN0LmFkZCgncG9wVXAnKTtcclxuICAgIGdwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdEdQVCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW1pbmlBSScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGdwdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGdwdEljb24uc3JjID0gY2hhdGdwdDtcclxuICAgIGdwdC5hcHBlbmRDaGlsZChncHRJY29uKTtcclxuICAgIGNvbnN0IGFpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhaS5jbGFzc0xpc3QuYWRkKCdhaURpdicpO1xyXG4gICAgYWkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZ3B0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGdlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYWlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBhaUljb24uc3JjID0gYWlQaWM7XHJcbiAgICBhaS5hcHBlbmRDaGlsZChhaUljb24pO1xyXG4gICAgY29uc3QgZ2VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnZW0uY2xhc3NMaXN0LmFkZCgnYWlEaXYnKTtcclxuICAgIGdlbS5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xyXG4gICAgZ2VtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0R1BUJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VtaW5pQUknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZ2VtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ2VtSWNvbi5zcmMgPSBnZW1pbmk7XHJcbiAgICBnZW0uYXBwZW5kQ2hpbGQoZ2VtSWNvbik7XHJcbiAgICBib3guaWQgPSAnYWknO1xyXG4gICAgYm94LmFwcGVuZENoaWxkKGdwdCk7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoYWkpO1xyXG4gICAgYm94LmFwcGVuZENoaWxkKGdlbSk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGJveCk7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUFpQm94ID0gKHVybCwgdGl0bGUsIGlkZSkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFpRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdEdQVCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbWluaUFJJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICdBSSBwb3AtdXAgbW9kYWwnO1xyXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdhaVRleHQnKTtcclxuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ3gnO1xyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcclxuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBmcmFtZS5zcmMgPSB1cmw7XHJcbiAgICBmcmFtZS5uYW1lID0gdGl0bGU7XHJcbiAgICBmcmFtZS5pZCA9IGlkZTtcclxuICAgIGRpdi5pZCA9IHRpdGxlO1xyXG4gICAgYWlEaXYuY2xhc3NMaXN0LmFkZCgnZnJhbWVCb3gnKTtcclxuICAgIGFpRGl2LmFwcGVuZENoaWxkKGZyYW1lKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjbG9zZSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWlEaXYpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufTtcclxuY29uc3QgY3JlYXRlR2VtaW5pID0gKGJvZHkpID0+IHtcclxuICAgIGNvbnN0IGdlbWluaSA9IGNyZWF0ZUFpQm94KFwiaHR0cHM6Ly9ib3Qub3JpbW9uLmFpLz90ZW5hbnRJZD01YjhhMzYwYy03MTBhLTQ0ZjItODdiYy01ZjkxZmMyMTE5MTEmZnVsbFNjcmVlbkJvdD10cnVlXCIgLCAnZ2VtaW5pQUknLCAnZ2VtaW5pJyk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdlbWluaSk7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUNoYXRHcHQgPSAoYm9keSkgPT4ge1xyXG4gICAgY29uc3QgY2hhdEdQVCA9IGNyZWF0ZUFpQm94KFwiaHR0cHM6Ly93d3cuY2hhdGJhc2UuY28vY2hhdGJvdC1pZnJhbWUvTUFzUzd2ZDh5aGx6NC1ya2hBU0JMXCIsICdjaGF0R1BUJywgJ2NoYXRncHQnKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hhdEdQVCk7XHJcbn07XHJcbmV4cG9ydHtjcmVhdGVHZW1pbmksIGNyZWF0ZUNoYXRHcHQsIGRpc3BsYXlBSX07IiwiLy9pbXBvcnQgZnVuY3Rpb25zIGZyb20gbW9kdWxlc1xyXG5pbXBvcnQge2dlbmVyYXRlSGVyb1NlY3Rpb24sIGNhcm91c2VsLCBjcmVhdGVEZXB0LCBjcmVhdGVTZXJ2aWNlfSBmcm9tICcuL21vZHVsZXMvbGFuZGluZyc7XHJcbmltcG9ydCB7cmVuZGVySGVhZGVyfSBmcm9tICcuL21vZHVsZXMvaGVhZGVyJztcclxuaW1wb3J0IHtyZW5kZXJGb290ZXJ9IGZyb20gJy4vbW9kdWxlcy9mb290ZXInO1xyXG5pbXBvcnQge2NyZWF0ZUdlbWluaSwgY3JlYXRlQ2hhdEdwdCwgZGlzcGxheUFJfSBmcm9tICcuL21vZHVsZXMvYWknO1xyXG4vL2ltcG9ydCBjc3NcclxuaW1wb3J0ICcuLi9DU1Mvc3R5bGUuY3NzJztcclxuLy9pbXBvcnQgaW1hZ2VzXHJcbmltcG9ydCBkZXB0MSBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2NvbXB1dGVyLWRlcHQucG5nJztcclxuaW1wb3J0IGRlcHQyIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZWxlY3RyaWNhbC1kZXB0LnBuZyc7XHJcbmltcG9ydCBkZXB0MyBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL21lY2hhbmljYWwtZGVwdC5wbmcnO1xyXG5pbXBvcnQgZGVwdDQgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9wcm9kdWN0aW9uLWRlcHQucG5nJztcclxuaW1wb3J0IGFib3V0UGljIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvYWJvdXRfdXNfbWFuLnBuZyc7XHJcbi8vY3JlYXRlIGEgcmVmZXJlbmNlIHRvIGJvZHkgdGFnXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbi8vY2FsbCBoZWFkZXIgZnVuY3Rpb25cclxucmVuZGVySGVhZGVyKGJvZHkpO1xyXG5cclxuLy9jcmVhdGUgbWFpbiBzZWN0aW9uXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblxyXG4vL2NyZWF0ZSBoZXJvIHNlY3Rpb25cclxuY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbi8vQWRkIGhlcm9TZWN0aW9uIGNvbnRlbnRcclxuZ2VuZXJhdGVIZXJvU2VjdGlvbihoZXJvU2VjdGlvbik7XHJcbmhlcm9TZWN0aW9uLmlkID0gJ2hlcm8nO1xyXG4vL2FwcGVuZCBoZXJvU2VjdGlvbiBjb250ZW50XHJcbm1haW4uYXBwZW5kQ2hpbGQoaGVyb1NlY3Rpb24pO1xyXG5cclxuLy9jcmVhdGUgZGVwYXJ0bWVudCBzZWN0aW9uXHJcbmNvbnN0IGRlcHRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5kZXB0U2VjdGlvbi5pZCA9ICdkZXB0JztcclxuLy9kZXBhcnRtZW50IHNlY3Rpb24gaGVhZGluZ1xyXG5jb25zdCBkZXB0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuZGVwdEhlYWRlci50ZXh0Q29udGVudCA9ICdEZXBhcnRtZW50cyBXZSBDb3Zlcic7XHJcbi8vZGVwYXJ0bWVudCBncm91cGluZ1xyXG5jb25zdCBkZXB0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGVwdEdyb3VwLmlkID0gJ2dyb3VwJztcclxuLy9jb21wdXRlciBkZXBhcnRtZW50IGRpdlxyXG5jb25zdCBjcGVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MSwgJ0NPTVBVVEVSIEVOR0lORUVSSU5HJywgJ0NvbXB1dGVyIEVMQSBvZmZlcnMgaGFuZHMtb24gZXhwZXJpZW5jZSB3aXRoIGhhcmR3YXJlLCBzb2Z0d2FyZSBhbmQgYmFzaWMgZW5naW5lZXJpbmcgY29uY2VwdHMsIGJ5IHNvbGlkaWZ5aW5nIHRoZW9yeSB0aHJvdWdoIGJ1aWxkaW5nIGNpcmN1aXRzLCBwcm9ncmFtbWluZyBtaWNyb2NvbnRyb2xsZXJzLCBhbmQgZXhwbG9yaW5nIGNvbXB1dGVyIG5ldHdvcmtzJywgWzMwMCwgNDAwXSk7XHJcbi8vZWxlY3RyaWNhbCBkZXBhcnRtZW50IGRpdlxyXG5jb25zdCBlZWVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MiwgJ0VMRUNUUklDQUwgRU5HSU5FRVJJTkcnLCAnRWxlY3RyaWNhbCBFTEEgYnJpbmdzIGVsZWN0cmljYWwgcHJpbmNpcGxlcyB0byBsaWZlLiBTdHVkZW50cyBnYWluIHByYWN0aWNhbCBleHBlcmllbmNlIHdpdGggY2lyY3VpdHMsIGVsZWN0cm9uaWNzLCBwb3dlciBzeXN0ZW1zLCBhbmQgY29udHJvbCBzeXN0ZW1zIHRocm91Z2ggZXhwZXJpbWVudHMgaW52b2x2aW5nIHJlYWwtd29ybGQgZXF1aXBtZW50IGxpa2UgVHJhbnNmb3JtZXJzLCBvc2NpbGxvc2NvcGVzLCBhbmQgb3RoZXIgZWxlY3RyaWNhbCBtYWNoaW5lcycsIFsyMDAsIDMwMF0pO1xyXG4vL21lY2hhbmljYWwgZGVwYXJ0bWVudCBkaXZcclxuY29uc3QgbWVlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDMsICdNRUNIQU5JQ0FMIEVOR0lORUVSSU5HJywgJ01lY2hhbmljYWwgRUxBIGZvY3VzZXMgb24gYXBwbHlpbmcgdGhlb3JldGljYWwgY29uY2VwdHMgdG8gcmVhbC13b3JsZCBhcHBsaWNhdGlvbnMuIFN0dWRlbnRzIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gdGhlb3J5IGFuZCBhcHBsaWNhdGlvbiBieSB0ZXN0aW5nIG1lY2hhbmljYWwgc3lzdGVtcyB0aHJvdWdoIGV4cGVyaW1lbnRzIGludm9sdmluZyBBcHBsaWVkIE1lY2hhbmljcyAoQU0pIGFuZCBTdHJlbmd0aCBvZiBNYXRlcmlhbHMgKFNNKScsIFsyMDBdKTtcclxuLy9wcm9kdWN0aW9uIGRlcGFydG1lbnQgZGl2XHJcbmNvbnN0IHByZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQ0LCAnUFJPRFVDVElPTiBFTkdJTkVFUklORycsICdQcm9kdWN0aW9uIEVMQSBkZWx2ZXMgaW50byB0aGUgcHJhY3RpY2FsaXRpZXMgb2YgbWFudWZhY3R1cmluZy4gU3R1ZGVudHMgZXhwbG9yZSBlZmZpY2llbnQgcHJvZHVjdGlvbiB0ZWNobmlxdWVzIHRocm91Z2ggZXhwZXJpbWVudHMgaW4gYXJlYXMgbGlrZSBtYWNoaW5pbmcsIHdlbGRpbmcsIGNhc3RpbmcsIGZvcm1pbmcsIGFuZCBiZW5jaC1maXR0aW5nLCBkZXZlbG9waW5nIGEgc3Ryb25nIGZvdW5kYXRpb24gZm9yIGZ1dHVyZSBpbmR1c3RyaWFsIHN1Y2Nlc3MnLCBbMjAwXSk7XHJcbi8vYXBwZW5kIGRlcGFydG1lbnQgZGl2XHJcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChjcGVEZXB0KTtcclxuZGVwdEdyb3VwLmFwcGVuZENoaWxkKGVlZURlcHQpO1xyXG5kZXB0R3JvdXAuYXBwZW5kQ2hpbGQobWVlRGVwdCk7XHJcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChwcmVEZXB0KTtcclxuLy9hcHBlbmQgdG8gZGVwYXJ0bWVudCBjbGFzc1xyXG5kZXB0U2VjdGlvbi5hcHBlbmRDaGlsZChkZXB0SGVhZGVyKTtcclxuZGVwdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVwdEdyb3VwKTtcclxuLy9hcHBlbmQgZGVwYXJ0bWVudCBTZWN0aW9uIHRvIE1haW5cclxubWFpbi5hcHBlbmRDaGlsZChkZXB0U2VjdGlvbik7XHJcblxyXG4vL2NyZWF0ZSBzZXJ2aWNlIHNlY3Rpb25cclxuY29uc3Qgc2VydmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5zZXJ2ZVNlY3Rpb24uaWQgPSAnc2VydmljZSc7XHJcbi8vc2VydmljZSBoZWFkZXJcclxuY29uc3Qgc2VydmVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuc2VydmVIZWFkLnRleHRDb250ZW50ID0gXCJTZXJ2aWNlcyBXZSBPZmZlclwiO1xyXG4vL3RoZSBzZXJ2aWNlcyBjb250YWluZXJcclxuY29uc3Qgc2VydmVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc2VydmVCb3guaWQgPSAnb2ZmZXJzJztcclxuLy9jcmVhdGUgc2VydmljZSBvbmVcclxuY29uc3Qgc2VydmUxID0gY3JlYXRlU2VydmljZSgnR3JhZGUtQSBSZXBvcnRzJywgJ1N0b3Agd2FzdGluZyB0aW1lIG9uIGluZm9ybWF0aW9uIG92ZXJsb2FkLiBFbGFib3JhdGUgZXF1aXBzIHlvdSB3aXRoIHRoZSBlc3NlbnRpYWwgcmVzb3VyY2VzIGFuZCBleHBlcnQgdGlwcyB0byBjcmFmdCBjb25jaXNlLCBpbXBhY3RmdWwgcmVwb3J0cyB0aGF0IHNob3djYXNlIHlvdXIgdW5kZXJzdGFuZGluZy4gUGx1cywgd2l0aCBvdXIgc2VhbWxlc3MgUERGIGRvd25sb2FkIGZlYXR1cmUsIHlvdSBjYW4gZWZmb3J0bGVzc2x5IHNhdmUgeW91ciByZXBvcnRzIGZvciBmdXR1cmUgcmVmZXJlbmNlIG9yIGVhc3kgc2hhcmluZyB3aXRoIGluc3RydWN0b3JzLicsICdMZWFybiBtb3JlJyk7XHJcbnNlcnZlMS5jbGFzc0xpc3QuYWRkKCdzZXJ2ZScpO1xyXG4vL2NyZWF0ZSBzZXJ2aWNlIHR3b1xyXG5jb25zdCBzZXJ2ZTIgPSBjcmVhdGVTZXJ2aWNlKCdHYWluIGluc2lnaHRmdWwga25vd2xlZGdlJywgJ0RvblxcJ3QganVzdCBtZW1vcml6ZSwgdHJ1bHkgdW5kZXJzdGFuZC4gRWxhYm9yYXRlIGVxdWlwcyB5b3Ugd2l0aCBpbnRlcmFjdGl2ZSBsZWFybmluZyB0b29scyBhbmQgZXhwZXJ0IGluc2lnaHRzLCB0cmFuc2Zvcm1pbmcgcGFzc2l2ZSBkYXRhIGludG8gYSByaWNoIHVuZGVyc3RhbmRpbmcgb2YgZW5naW5lZXJpbmcgY29uY2VwdHMuIFRoaXMgZGVlcGVyIGtub3dsZWRnZSBlbXBvd2VycyB5b3UgdG8gZXhjZWwgaW4geW91ciBleGFtcyBhbmQgZnV0dXJlIGVuZGVhdm9ycy4nLCAnTGVhcm4gbW9yZScpO1xyXG5zZXJ2ZTIuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcclxuc2VydmUxLmlkID0gJ21pZGRsZSc7XHJcbi8vY3JlYXRlIHNlcnZpY2UgdGhyZWVcclxuY29uc3Qgc2VydmUzID0gY3JlYXRlU2VydmljZSgnTGFiIE1hc3RlcnkgTWFkZSBFYXN5JywgJ0VsYWJvcmF0ZSBzaGVkcyBsaWdodCBvbiBldmVuIHRoZSBtb3N0IGNvbXBsZXggZXhwZXJpbWVudHMsIHRyYW5zZm9ybWluZyB5b3UgZnJvbSBiZXdpbGRlcmVkIGJlZ2lubmVyIHRvIGNvbmZpZGVudCBleHBlcnQuIFRoaXMgbmV3Zm91bmQgdW5kZXJzdGFuZGluZyBlbXBvd2VycyB5b3UgdG8gdGFja2xlIHlvdXIgRUxBcyB3aXRoIGEgd2lubmluZyBzdHJhdGVneS4nLCAnTGVhcm4gbW9yZScpO1xyXG5zZXJ2ZTMuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcclxuLy9BcHBlbmQgc2VydmljZXMgdG8gIHNlcnZlIGJveFxyXG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTIpO1xyXG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTEpO1xyXG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTMpO1xyXG4vL2NyZWF0ZSBzZXJ2aWNlIGNhbGwgdG8gYWN0aW9uXHJcbmNvbnN0IHNlcnZlQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNlcnZlQWN0aW9uLnRleHRDb250ZW50ID0gJ0dFVCBTVEFSVEVEJztcclxuc2VydmVBY3Rpb24uaWQgPSAnc2VydmVBY3Rpb24nO1xyXG4vL0FwcGVuZCBzZXJ2aWNlIGl0ZW1zIHRvIHNlcnZpY2Ugc2VjdGlvblxyXG5zZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VydmVIZWFkKTtcclxuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlQm94KTtcclxuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlQWN0aW9uKTtcclxuLy9BcHBlbmQgc2VydmljZSBzZWN0aW9uIHRvIG1haW5cclxubWFpbi5hcHBlbmRDaGlsZChzZXJ2ZVNlY3Rpb24pO1xyXG5cclxuXHJcbi8vY3JlYXRlIGFib3V0IHNlY3Rpb25cclxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5hYm91dFNlY3Rpb24uaWQgPSAnYWJvdXRTZWN0aW9uJztcclxuLy9jcmVhdGUgYWJvdXQgcGljdHVyZSBkaXZcclxuY29uc3QgcGljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnBpY0Rpdi5pZCA9ICd3aHlVcyc7XHJcbi8vY3JlYXRlIHBpY3R1cmUgaW4gYWJvdXQgZGl2XHJcbmNvbnN0IGFib3V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmFib3V0SW1nLnNyYyA9IGFib3V0UGljO1xyXG4vL2NyZWF0ZSBoZWFkaW5nIGZvciBhYm91dCBzZWN0aW9uXHJcbmNvbnN0IGFib3V0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbmFib3V0SGVhZC50ZXh0Q29udGVudCA9ICdXSFkgVVM/JztcclxuLy9BcHBlbmQgdG8gcGljdHVyZSBEaXZcclxucGljRGl2LmFwcGVuZENoaWxkKGFib3V0SW1nKTtcclxucGljRGl2LmFwcGVuZENoaWxkKGFib3V0SGVhZCk7XHJcbi8vY3JlYXRlIEFib3V0IHRleHQgZGl2XHJcbmNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmFib3V0RGl2LmlkID0gJ2Fib3V0JztcclxuLy9jcmVhdGUgYWJvdXQgdGV4dCBibG9ja3F1b3RlXHJcbmNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuYWJvdXRUZXh0LnRleHRDb250ZW50ID0gJ1wiV2UgdW5kZXJzdGFuZCB0aGUgc3RydWdnbGUuXFxuIEp1Z2dsaW5nIGNvbXBsZXggZW5naW5lZXJpbmdcXG4gY29uY2VwdHMsIGNvbmR1Y3RpbmcgaW50cmljYXRlXFxuIGV4cGVyaW1lbnRzLCBhbmQgdGhlbiBmYWNpbmdcXG4gdGhlIGRhdW50aW5nIHRhc2sgb2Ygd3JpdGluZyBhXFxuIGNsZWFyIGFuZCBjb25jaXNlIGxhYiByZXBvcnRcXG4gY2FuIGxlYXZlIGV2ZW4gdGhlIGJyaWdodGVzdFxcbiBzdHVkZW50IGZlZWxpbmcgb3ZlcndoZWxtZWQuXFxuIFRoYXRcXCdzIHdoZXJlIHdlIGNvbWUgaW4uXCInO1xyXG4vL0FwcGVuZCBhYm91dCB0ZXh0IHRvIGl0IGNvbnRhaW5lclxyXG5hYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xyXG4vL0FwcGVuZCBhYm91dCBjb250ZW50cyB0byB0aGUgc2VjdGlvblxyXG5hYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQocGljRGl2KTtcclxuYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0RGl2KTtcclxuLy9BcHBlbmQgYWJvdXQgc2VjdGlvbiB0byBtYWluXHJcbm1haW4uYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcclxuXHJcbi8vY3JlYXRlIGNvbnRhY3Qgc2VjdGlvblxyXG5jb25zdCByZWFjaFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbnJlYWNoU2VjdGlvbi5pZCA9ICdjb250YWN0JztcclxuLy9jcmVhdGUgY29udGFjdCBoZWFkZXJcclxuY29uc3QgcmVhY2hIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5yZWFjaEhlYWRlci50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcclxuLy9jcmVhdGUgZm9ybSBlbGVtZW50XHJcbmNvbnN0IGZvcm0gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnVzZXJOYW1lLnR5cGUgPSAndGV4dCc7XHJcbnVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ05hbWUnO1xyXG51c2VyTmFtZS5pZCA9ICd1c2VyTmFtZSc7XHJcbnVzZXJOYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XHJcbmNvbnN0IHVzZXJFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnVzZXJFbWFpbC50eXBlID0gJ2VtYWlsJztcclxudXNlckVtYWlsLnBsYWNlaG9sZGVyID0gJ0VtYWlsJztcclxudXNlckVtYWlsLmlkID0gJ3VzZXJFbWFpbCc7XHJcbnVzZXJFbWFpbC5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xyXG5jb25zdCB1c2VyUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG51c2VyUGhvbmUucGxhY2Vob2xkZXIgPSAnUGhvbmUgTnVtYmVyJztcclxudXNlclBob25lLnR5cGUgPSAnbnVtYmVyJztcclxudXNlclBob25lLmlkID0gJ3VzZXJQaG9uZSc7XHJcbnVzZXJQaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xyXG5jb25zdCB1c2VyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbnVzZXJNZXNzYWdlLnBsYWNlaG9sZGVyID0gJ0VudGVyIE1lc3NhZ2UnO1xyXG51c2VyTWVzc2FnZS5pZCA9ICd1c2VyTWVzc2FnZSc7XHJcbnVzZXJQaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xyXG5jb25zdCB1c2VyU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudXNlclN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XHJcbnVzZXJTdWJtaXQudGV4dENvbnRlbnQgPSAnU1VCTUlUJztcclxudXNlclN1Ym1pdC5pZCA9ICd1c2VyU3VibWl0JztcclxuLy9BcHBlbmQgZm9ybSBjaGlsZCBlbGVtZW50c1xyXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJOYW1lKTtcclxuZm9ybS5hcHBlbmRDaGlsZCh1c2VyRW1haWwpO1xyXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJQaG9uZSk7XHJcbmZvcm0uYXBwZW5kQ2hpbGQodXNlck1lc3NhZ2UpO1xyXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJTdWJtaXQpO1xyXG4vL0FwcGVuZCBlbGVtZW50IHRvIGNvbnRhY3Qgc2VjdGlvblxyXG5yZWFjaFNlY3Rpb24uYXBwZW5kQ2hpbGQocmVhY2hIZWFkZXIpO1xyXG5yZWFjaFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbi8vQXBwZW5kIGNvbnRhY3Qgc2VjdGlvbiB0byBtYWluXHJcbm1haW4uYXBwZW5kQ2hpbGQocmVhY2hTZWN0aW9uKTtcclxuLy9BcHBlbmQgbWFpbiB0byBib2R5XHJcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4vL2NhbGwgdGhlIGNhcm91c2VsIGZ1bmN0aW9uXHJcbmNhcm91c2VsKCk7XHJcblxyXG4vL2Rpc3BsYXkgZm9vdGVyXHJcbnJlbmRlckZvb3Rlcihib2R5KTtcclxuXHJcbmRpc3BsYXlBSShib2R5KTtcclxuY3JlYXRlR2VtaW5pKGJvZHkpO1xyXG5jcmVhdGVDaGF0R3B0KGJvZHkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==